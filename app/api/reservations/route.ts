import { NextResponse } from "next/server"
import { verifyMessage } from "ethers"
import {
  listReservationRecords,
  reservationRecordsToCsv,
  saveReservationRecord,
} from "@/lib/reservations-store"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const evmAddressPattern = /^0x[a-fA-F0-9]{40}$/
const ganaLpTokenAddress = "0x72212f35ac448fe7763aa1bfdb360193fa098e52"
const erc20BalanceOfSelector = "0x70a08231"
const erc20DecimalsSelector = "0x313ce567"
const bscRpcEndpoints = [
  "https://bsc-dataseed.binance.org",
  "https://bsc-dataseed1.defibit.io",
  "https://bsc.publicnode.com",
]

function encodeBalanceOfCall(walletAddress: string) {
  return `${erc20BalanceOfSelector}${walletAddress.slice(2).padStart(64, "0")}`
}

async function callBscRpc(method: string, params: unknown[]): Promise<string> {
  let lastError: unknown

  for (const endpoint of bscRpcEndpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: Date.now(),
          method,
          params,
        }),
      })

      if (!response.ok) {
        throw new Error(`RPC ${response.status}`)
      }

      const data = (await response.json()) as { result?: unknown; error?: { message?: string } }
      if (data.error) {
        throw new Error(data.error.message || "RPC error")
      }
      if (typeof data.result !== "string") {
        throw new Error("RPC result missing")
      }

      return data.result
    } catch (error) {
      lastError = error
    }
  }

  throw lastError instanceof Error ? lastError : new Error("BSC RPC request failed")
}

async function readErc20Decimals(tokenAddress: string) {
  try {
    const hex = await callBscRpc("eth_call", [{ to: tokenAddress, data: erc20DecimalsSelector }, "latest"])
    return Number(BigInt(hex))
  } catch {
    return 18
  }
}

function formatUnits(raw: bigint, decimals: number) {
  if (decimals <= 0) return raw.toString()

  const base = 10n ** BigInt(decimals)
  const whole = raw / base
  const fraction = raw % base

  if (fraction === 0n) return whole.toString()

  const fractionText = fraction.toString().padStart(decimals, "0").slice(0, 4).replace(/0+$/, "")
  return fractionText ? `${whole}.${fractionText}` : whole.toString()
}

async function readGanaLpBalance(walletAddress: string) {
  const [balanceHex, decimals] = await Promise.all([
    callBscRpc("eth_call", [{ to: ganaLpTokenAddress, data: encodeBalanceOfCall(walletAddress) }, "latest"]),
    readErc20Decimals(ganaLpTokenAddress),
  ])
  const raw = BigInt(balanceHex)
  const minimumRaw = 10n ** BigInt(decimals)

  return {
    raw,
    decimals,
    formatted: formatUnits(raw, decimals),
    meetsRequirement: raw >= minimumRaw,
  }
}

function isAuthorized(request: Request) {
  const adminToken = process.env.GANA_RESERVATIONS_ADMIN_TOKEN
  if (!adminToken) return true

  const url = new URL(request.url)
  const requestToken = url.searchParams.get("token") || request.headers.get("x-admin-token")
  return requestToken === adminToken
}

function storageErrorResponse() {
  return NextResponse.json(
    {
      error: "Reservation storage is not configured. Please add BLOB_READ_WRITE_TOKEN in Vercel.",
    },
    { status: 503 },
  )
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>
    const email = typeof body.email === "string" ? body.email.trim() : ""
    const walletAddress = typeof body.walletAddress === "string" ? body.walletAddress.trim() : ""
    const lpTokenAddress = typeof body.lpTokenAddress === "string" ? body.lpTokenAddress.trim() : ""
    const signature = typeof body.signature === "string" ? body.signature.trim() : ""
    const signatureMessage = typeof body.signatureMessage === "string" ? body.signatureMessage.trim() : ""

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 })
    }

    if (!evmAddressPattern.test(walletAddress)) {
      return NextResponse.json({ error: "A valid EVM wallet address is required." }, { status: 400 })
    }

    if (lpTokenAddress.toLowerCase() !== ganaLpTokenAddress) {
      return NextResponse.json({ error: "Invalid GANA LP token address." }, { status: 400 })
    }

    if (!signature || !signatureMessage) {
      return NextResponse.json({ error: "Wallet signature is required." }, { status: 400 })
    }

    if (
      !signatureMessage.includes(`Wallet: ${walletAddress}`) ||
      !signatureMessage.includes("Verify GANA LP token balance")
    ) {
      return NextResponse.json({ error: "Invalid wallet signature message." }, { status: 400 })
    }

    let recoveredAddress = ""
    try {
      recoveredAddress = verifyMessage(signatureMessage, signature)
    } catch {
      return NextResponse.json({ error: "Invalid wallet signature." }, { status: 400 })
    }

    if (recoveredAddress.toLowerCase() !== walletAddress.toLowerCase()) {
      return NextResponse.json({ error: "Wallet signature does not match the submitted address." }, { status: 400 })
    }

    const lpBalance = await readGanaLpBalance(walletAddress)
    if (!lpBalance.meetsRequirement) {
      return NextResponse.json({ error: "GANA LP balance does not meet the requirement." }, { status: 403 })
    }

    const record = await saveReservationRecord({
      email,
      walletAddress,
      lpBalance: lpBalance.formatted,
      lpBalanceRaw: lpBalance.raw.toString(),
      lpTokenAddress: ganaLpTokenAddress,
      signature,
      signatureMessage,
      userAgent: request.headers.get("user-agent") || undefined,
    })

    return NextResponse.json({ record })
  } catch (error) {
    if (error instanceof Error && error.message.includes("BLOB_READ_WRITE_TOKEN")) {
      return storageErrorResponse()
    }

    return NextResponse.json({ error: "Reservation record could not be saved." }, { status: 500 })
  }
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  }

  try {
    const url = new URL(request.url)
    const records = await listReservationRecords()

    if (url.searchParams.get("format") === "csv") {
      return new Response(reservationRecordsToCsv(records), {
        headers: {
          "content-disposition": "attachment; filename=gana-reservations.csv",
          "content-type": "text/csv; charset=utf-8",
        },
      })
    }

    return NextResponse.json({ records })
  } catch (error) {
    if (error instanceof Error && error.message.includes("BLOB_READ_WRITE_TOKEN")) {
      return storageErrorResponse()
    }

    return NextResponse.json({ error: "Reservation records could not be loaded." }, { status: 500 })
  }
}
