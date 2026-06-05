"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

const COUNTS_STORAGE_KEY = "gana:announcement-view-counts"
const VIEWED_SESSION_PREFIX = "gana:announcement-viewed:"
const COUNT_CHANGED_EVENT = "gana:announcement-view-count-changed"

type StoredCounts = Record<string, number>

type AnnouncementViewCountProps = {
  slug: string
  track?: boolean
  className?: string
  iconClassName?: string
}

function readCounts(): StoredCounts {
  try {
    const rawCounts = window.localStorage.getItem(COUNTS_STORAGE_KEY)
    if (!rawCounts) {
      return {}
    }

    const parsedCounts = JSON.parse(rawCounts)
    if (!parsedCounts || typeof parsedCounts !== "object" || Array.isArray(parsedCounts)) {
      return {}
    }

    return Object.fromEntries(
      Object.entries(parsedCounts)
        .filter(([, value]) => typeof value === "number" && Number.isFinite(value) && value >= 0)
        .map(([key, value]) => [key, Math.floor(value as number)]),
    )
  } catch {
    return {}
  }
}

function writeCounts(counts: StoredCounts) {
  window.localStorage.setItem(COUNTS_STORAGE_KEY, JSON.stringify(counts))
}

function formatViewCount(count: number) {
  if (count >= 10000) {
    const value = count / 10000
    return `${Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1)}万`
  }

  return count.toLocaleString("zh-CN")
}

export function AnnouncementViewCount({
  slug,
  track = false,
  className = "inline-flex items-center gap-1.5 text-xs text-foreground/45",
  iconClassName = "h-3.5 w-3.5",
}: AnnouncementViewCountProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const counts = readCounts()
    let nextCount = counts[slug] ?? 0

    if (track) {
      const viewedSessionKey = `${VIEWED_SESSION_PREFIX}${slug}`
      const hasTrackedInSession = window.sessionStorage.getItem(viewedSessionKey) === "1"

      if (!hasTrackedInSession) {
        nextCount += 1
        counts[slug] = nextCount
        writeCounts(counts)
        window.sessionStorage.setItem(viewedSessionKey, "1")
        window.dispatchEvent(
          new CustomEvent(COUNT_CHANGED_EVENT, {
            detail: {
              slug,
              count: nextCount,
            },
          }),
        )
      }
    }

    setCount(nextCount)

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== COUNTS_STORAGE_KEY) {
        return
      }

      setCount(readCounts()[slug] ?? 0)
    }

    const handleCountChanged = (event: Event) => {
      const detail = (event as CustomEvent<{ slug?: string; count?: number }>).detail
      if (detail?.slug === slug && typeof detail.count === "number") {
        setCount(detail.count)
      }
    }

    window.addEventListener("storage", handleStorage)
    window.addEventListener(COUNT_CHANGED_EVENT, handleCountChanged)

    return () => {
      window.removeEventListener("storage", handleStorage)
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
