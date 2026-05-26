import { NextResponse } from "next/server"
import { GANA_LP_TOKEN_ADDRESS, readGanaLpBalance } from "@/lib/bsc-token-gate"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const evmAddressPattern = /^0x[a-fA-F0-9]{40}$/

function serializeBalance(balance: Awaited<ReturnType<typeof readGanaLpBalance>>) {
  return {
    ...balance,
    raw: balance.raw.toString(),
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>
    const walletAddress = typeof body.walletAddress === "string" ? body.walletAddress.trim() : ""
    const tokenAddress = typeof body.tokenAddress === "string" ? body.tokenAddress.trim() : GANA_LP_TOKEN_ADDRESS

    if (!evmAddressPattern.test(walletAddress)) {
      return NextResponse.json({ error: "A valid EVM wallet address is required." }, { status: 400 })
    }

    if (tokenAddress.toLowerCase() !== GANA_LP_TOKEN_ADDRESS) {
      return NextResponse.json({ error: "Invalid GANA LP token address." }, { status: 400 })
    }

    const balance = await readGanaLpBalance(walletAddress)
    return NextResponse.json({ balance: serializeBalance(balance) })
  } catch {
    return NextResponse.json({ error: "GANA LP balance could not be loaded." }, { status: 503 })
  }
}
