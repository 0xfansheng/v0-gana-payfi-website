import { NextResponse } from "next/server"
import { verifyMessage } from "ethers"
import {
  listReservationRecords,
  reservationRecordsToCsv,
  saveReservationRecord,
} from "@/lib/reservations-store"
import { GANA_LP_TOKEN_ADDRESS, readGanaLpBalance } from "@/lib/bsc-token-gate"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const evmAddressPattern = /^0x[a-fA-F0-9]{40}$/

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

    if (lpTokenAddress.toLowerCase() !== GANA_LP_TOKEN_ADDRESS) {
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
      lpTokenAddress: GANA_LP_TOKEN_ADDRESS,
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
