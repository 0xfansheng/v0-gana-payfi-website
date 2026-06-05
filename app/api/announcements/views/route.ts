import { NextResponse } from "next/server"
import { announcements } from "@/lib/announcements"
import {
  countAnnouncementViews,
  countAnnouncementViewsBySlug,
  recordAnnouncementView,
} from "@/lib/announcement-view-store"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const announcementSlugs = new Set(announcements.map((announcement) => announcement.slug))

function noStoreResponse(body: unknown, init?: ResponseInit) {
  const response = NextResponse.json(body, init)
  response.headers.set("cache-control", "no-store")
  return response
}

function storageErrorResponse() {
  return noStoreResponse(
    {
      error: "Announcement view storage is not configured. Please add BLOB_READ_WRITE_TOKEN in Vercel.",
    },
    { status: 503 },
  )
}

function parseSlugsFromRequest(request: Request) {
  const url = new URL(request.url)
  const slug = url.searchParams.get("slug")
  const slugs = url.searchParams.get("slugs")

  if (slug) {
    return [slug]
  }

  if (slugs) {
    return slugs
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
  }

  return []
}

function validateSlugs(slugs: string[]) {
  return slugs.every((slug) => announcementSlugs.has(slug))
}

export async function GET(request: Request) {
  const slugs = parseSlugsFromRequest(request)

  if (slugs.length === 0 || !validateSlugs(slugs)) {
    return noStoreResponse({ error: "A valid announcement slug is required." }, { status: 400 })
  }

  try {
    if (slugs.length === 1) {
      const count = await countAnnouncementViews(slugs[0])
      return noStoreResponse({
        slug: slugs[0],
        count,
        counts: {
          [slugs[0]]: count,
        },
      })
    }

    const counts = await countAnnouncementViewsBySlug(slugs)
    return noStoreResponse({ counts })
  } catch (error) {
    if (error instanceof Error && error.message.includes("BLOB_READ_WRITE_TOKEN")) {
      return storageErrorResponse()
    }

    return noStoreResponse({ error: "Announcement view count could not be loaded." }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>
    const slug = typeof body.slug === "string" ? body.slug.trim() : ""

    if (!slug || !announcementSlugs.has(slug)) {
      return noStoreResponse({ error: "A valid announcement slug is required." }, { status: 400 })
    }

    await recordAnnouncementView(slug, request)
    const count = await countAnnouncementViews(slug)

    return noStoreResponse({
      slug,
      count,
      counts: {
        [slug]: count,
      },
    })
  } catch (error) {
    if (error instanceof Error && error.message.includes("BLOB_READ_WRITE_TOKEN")) {
      return storageErrorResponse()
    }

    return noStoreResponse({ error: "Announcement view count could not be recorded." }, { status: 500 })
  }
}
