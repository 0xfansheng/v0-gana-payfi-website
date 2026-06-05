import { list, put } from "@vercel/blob"

const viewPrefix = "gana-announcement-views"

export type AnnouncementViewRecord = {
  slug: string
  createdAt: string
  userAgent?: string
  referrer?: string
}

export function hasAnnouncementViewStorage() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN)
}

function assertAnnouncementViewStorage() {
  if (!hasAnnouncementViewStorage()) {
    throw new Error("BLOB_READ_WRITE_TOKEN is not configured")
  }
}

function viewRecordPrefix(slug: string) {
  return `${viewPrefix}/${slug}/`
}

function createViewRecordPath(slug: string, createdAt: string) {
  const timestamp = createdAt.replace(/[:.]/g, "-")
  return `${viewRecordPrefix(slug)}${timestamp}-${crypto.randomUUID()}.json`
}

function trimHeader(value: string | null, maxLength: number) {
  if (!value) {
    return undefined
  }

  return value.slice(0, maxLength)
}

export async function recordAnnouncementView(slug: string, request: Request) {
  assertAnnouncementViewStorage()

  const createdAt = new Date().toISOString()
  const record: AnnouncementViewRecord = {
    slug,
    createdAt,
    userAgent: trimHeader(request.headers.get("user-agent"), 240),
    referrer: trimHeader(request.headers.get("referer"), 500),
  }

  await put(createViewRecordPath(slug, createdAt), JSON.stringify(record), {
    access: "private",
    addRandomSuffix: false,
    contentType: "application/json",
  })
}

export async function countAnnouncementViews(slug: string) {
  assertAnnouncementViewStorage()

  let count = 0
  let cursor: string | undefined

  do {
    const result = await list({
      prefix: viewRecordPrefix(slug),
      limit: 1000,
      cursor,
    })

    count += result.blobs.length
    cursor = result.cursor
  } while (cursor)

  return count
}

export async function countAnnouncementViewsBySlug(slugs: string[]) {
  const uniqueSlugs = Array.from(new Set(slugs))
  const entries = await Promise.all(
    uniqueSlugs.map(async (slug) => [slug, await countAnnouncementViews(slug)] as const),
  )

  return Object.fromEntries(entries)
}
