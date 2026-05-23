import { get, list, put } from "@vercel/blob"

const reservationPrefix = "gana-reservations"

export type ReservationRecordInput = {
  email: string
  walletAddress: string
  lpBalance: string
  lpBalanceRaw: string
  lpTokenAddress: string
  signature: string
  signatureMessage: string
  userAgent?: string
}

export type ReservationRecord = ReservationRecordInput & {
  id: string
  createdAt: string
}

export function hasReservationStorage() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN)
}

function assertReservationStorage() {
  if (!hasReservationStorage()) {
    throw new Error("BLOB_READ_WRITE_TOKEN is not configured")
  }
}

function normalizeAddress(address: string) {
  return address.toLowerCase()
}

export async function saveReservationRecord(input: ReservationRecordInput) {
  assertReservationStorage()

  const createdAt = new Date().toISOString()
  const normalizedAddress = normalizeAddress(input.walletAddress)
  const id = `${createdAt.replace(/[:.]/g, "-")}-${normalizedAddress}`
  const record: ReservationRecord = {
    ...input,
    walletAddress: normalizedAddress,
    id,
    createdAt,
  }

  await put(`${reservationPrefix}/${id}.json`, JSON.stringify(record, null, 2), {
    access: "private",
    addRandomSuffix: false,
    contentType: "application/json",
  })

  return record
}

export async function listReservationRecords() {
  assertReservationStorage()

  const { blobs } = await list({
    prefix: `${reservationPrefix}/`,
    limit: 1000,
  })

  const records = await Promise.all(
    blobs.map(async (blob) => {
      const result = await get(blob.url, { access: "private", useCache: false })
      if (!result || result.statusCode !== 200 || !result.stream) {
        throw new Error(`Could not read reservation record ${blob.pathname}`)
      }

      return (JSON.parse(await new Response(result.stream).text()) as ReservationRecord)
    }),
  )

  return records.sort((first, second) => second.createdAt.localeCompare(first.createdAt))
}

function csvCell(value: string | undefined) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`
}

export function reservationRecordsToCsv(records: ReservationRecord[]) {
  const header = [
    "createdAt",
    "email",
    "walletAddress",
    "lpBalance",
    "lpBalanceRaw",
    "lpTokenAddress",
    "signature",
    "signatureMessage",
    "userAgent",
  ]

  const rows = records.map((record) =>
    [
      record.createdAt,
      record.email,
      record.walletAddress,
      record.lpBalance,
      record.lpBalanceRaw,
      record.lpTokenAddress,
      record.signature,
      record.signatureMessage,
      record.userAgent,
    ]
      .map(csvCell)
      .join(","),
  )

  return [header.join(","), ...rows].join("\n")
}
