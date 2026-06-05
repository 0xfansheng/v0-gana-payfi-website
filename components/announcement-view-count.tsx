"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

const VIEWED_SESSION_PREFIX = "gana:announcement-server-viewed:"
const COUNT_CHANGED_EVENT = "gana:announcement-view-count-changed"

const countCache = new Map<string, number>()
const pendingCountRequests = new Map<string, Promise<number>>()

type AnnouncementViewCountProps = {
  slug: string
  track?: boolean
  className?: string
  iconClassName?: string
}

function formatViewCount(count: number) {
  if (count >= 10000) {
    const value = count / 10000
    return `${Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1)}万`
  }

  return count.toLocaleString("zh-CN")
}

function readCountFromResponse(data: unknown, slug: string) {
  if (!data || typeof data !== "object") {
    return 0
  }

  const count = (data as { count?: unknown }).count
  if (typeof count === "number" && Number.isFinite(count) && count >= 0) {
    return Math.floor(count)
  }

  const counts = (data as { counts?: unknown }).counts
  if (!counts || typeof counts !== "object") {
    return 0
  }

  const slugCount = (counts as Record<string, unknown>)[slug]
  return typeof slugCount === "number" && Number.isFinite(slugCount) && slugCount >= 0
    ? Math.floor(slugCount)
    : 0
}

async function fetchCount(slug: string) {
  const cachedCount = countCache.get(slug)
  if (typeof cachedCount === "number") {
    return cachedCount
  }

  const pendingRequest = pendingCountRequests.get(slug)
  if (pendingRequest) {
    return pendingRequest
  }

  const request = fetch(`/api/announcements/views?slug=${encodeURIComponent(slug)}`, {
    cache: "no-store",
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Announcement view count could not be loaded.")
      }

      const nextCount = readCountFromResponse(await response.json(), slug)
      countCache.set(slug, nextCount)
      return nextCount
    })
    .finally(() => {
      pendingCountRequests.delete(slug)
    })

  pendingCountRequests.set(slug, request)
  return request
}

async function recordView(slug: string) {
  const response = await fetch("/api/announcements/views", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ slug }),
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error("Announcement view count could not be recorded.")
  }

  const nextCount = readCountFromResponse(await response.json(), slug)
  countCache.set(slug, nextCount)
  return nextCount
}

function emitCountChanged(slug: string, count: number) {
  window.dispatchEvent(
    new CustomEvent(COUNT_CHANGED_EVENT, {
      detail: {
        slug,
        count,
      },
    }),
  )
}

export function AnnouncementViewCount({
  slug,
  track = false,
  className = "inline-flex items-center gap-1.5 text-xs text-foreground/45",
  iconClassName = "h-3.5 w-3.5",
}: AnnouncementViewCountProps) {
  const [count, setCount] = useState(() => countCache.get(slug) ?? 0)

  useEffect(() => {
    let isMounted = true

    async function syncCount() {
      const viewedSessionKey = `${VIEWED_SESSION_PREFIX}${slug}`
      const hasTrackedInSession = window.sessionStorage.getItem(viewedSessionKey) === "1"
      const isTrackingPending = window.sessionStorage.getItem(viewedSessionKey) === "pending"

      try {
        const nextCount =
          track && !hasTrackedInSession && !isTrackingPending
            ? await (async () => {
                window.sessionStorage.setItem(viewedSessionKey, "pending")
                const recordedCount = await recordView(slug)
                window.sessionStorage.setItem(viewedSessionKey, "1")
                emitCountChanged(slug, recordedCount)
                return recordedCount
              })()
            : await fetchCount(slug)

        if (isMounted) {
          setCount(nextCount)
        }
      } catch {
        window.sessionStorage.removeItem(viewedSessionKey)

        if (isMounted) {
          setCount(countCache.get(slug) ?? 0)
        }
      }
    }

    const handleCountChanged = (event: Event) => {
      const detail = (event as CustomEvent<{ slug?: string; count?: number }>).detail
      if (detail?.slug === slug && typeof detail.count === "number") {
        setCount(detail.count)
      }
    }

    void syncCount()
    window.addEventListener(COUNT_CHANGED_EVENT, handleCountChanged)

    return () => {
      isMounted = false
      window.removeEventListener(COUNT_CHANGED_EVENT, handleCountChanged)
    }
  }, [slug, track])

  return (
    <span className={className} aria-label={`浏览量 ${count}`}>
      <Eye className={iconClassName} />
      {formatViewCount(count)} 浏览
    </span>
  )
}
