export const GANA_LP_TOKEN_ADDRESS = "0x72212f35ac448fe7763aa1bfdb360193fa098e52"

const erc20BalanceOfSelector = "0x70a08231"
const erc20DecimalsSelector = "0x313ce567"
const rpcTimeoutMs = 4500

const bscRpcEndpoints = [
  "https://rpc-bsc.48.club",
  "https://bsc-dataseed.binance.org",
  "https://bsc-dataseed1.binance.org",
  "https://bsc-rpc.publicnode.com",
  "https://bsc-dataseed2.binance.org",
  "https://bsc-dataseed3.binance.org",
  "https://bsc-dataseed1.defibit.io",
  "https://bsc-mainnet.public.blastapi.io",
  "https://1rpc.io/bnb",
]

export type TokenBalance = {
  symbol: string
  address: string
  raw: bigint
  decimals: number
  formatted: string
  meetsRequirement: boolean
}

function encodeBalanceOfCall(walletAddress: string) {
  return `${erc20BalanceOfSelector}${walletAddress.slice(2).padStart(64, "0")}`
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number, endpoint: string) {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`RPC timeout: ${endpoint}`)), timeoutMs)

    promise.then(
      (value) => {
        clearTimeout(timer)
        resolve(value)
      },
      (error) => {
        clearTimeout(timer)
        reject(error)
      },
    )
  })
}

async function callRpcEndpoint(endpoint: string, method: string, params: unknown[]): Promise<string> {
  const response = await withTimeout(
    fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: Date.now(),
        method,
        params,
      }),
    }),
    rpcTimeoutMs,
    endpoint,
  )

  if (!response.ok) {
    throw new Error(`RPC ${response.status}: ${endpoint}`)
  }

  const data = (await response.json()) as { result?: unknown; error?: { message?: string } }
  if (data.error) {
    throw new Error(data.error.message || `RPC error: ${endpoint}`)
  }
  if (typeof data.result !== "string") {
    throw new Error(`RPC result missing: ${endpoint}`)
  }

  return data.result
}

export async function callBscRpc(method: string, params: unknown[]): Promise<string> {
  const fastEndpoints = bscRpcEndpoints.slice(0, 4)
  const fallbackEndpoints = bscRpcEndpoints.slice(4)

  try {
    return await Promise.any(fastEndpoints.map((endpoint) => callRpcEndpoint(endpoint, method, params)))
  } catch {
    const results = await Promise.allSettled(
      fallbackEndpoints.map((endpoint) => callRpcEndpoint(endpoint, method, params)),
    )
    const fulfilled = results.find(
      (result): result is PromiseFulfilledResult<string> => result.status === "fulfilled",
    )

    if (fulfilled) return fulfilled.value
  }

  throw new Error("BSC RPC request failed across all configured endpoints")
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

export async function readGanaLpBalance(walletAddress: string): Promise<TokenBalance> {
  const [balanceHex, decimals] = await Promise.all([
    callBscRpc("eth_call", [{ to: GANA_LP_TOKEN_ADDRESS, data: encodeBalanceOfCall(walletAddress) }, "latest"]),
    readErc20Decimals(GANA_LP_TOKEN_ADDRESS),
  ])
  const raw = BigInt(balanceHex)
  const minimumRaw = 10n ** BigInt(decimals)

  return {
    symbol: "GANA LP",
    address: GANA_LP_TOKEN_ADDRESS,
    raw,
    decimals,
    formatted: formatUnits(raw, decimals),
    meetsRequirement: raw >= minimumRaw,
  }
}
