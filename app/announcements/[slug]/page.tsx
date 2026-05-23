import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarDays } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnnouncementContent } from "@/components/announcement-content"
import {
  announcementCategories,
  announcements,
  getAnnouncementBySlug,
} from "@/lib/announcements"

type AnnouncementDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return announcements.map((announcement) => ({
    slug: announcement.slug,
  }))
}

export async function generateMetadata({ params }: AnnouncementDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const announcement = getAnnouncementBySlug(slug)

  if (!announcement) {
    return {
      title: "公告不存在 · GANA",
    }
  }

  return {
    title: `${announcement.title} · GANA公告`,
    description: announcement.excerpt,
  }
}

export default async function AnnouncementDetailPage({ params }: AnnouncementDetailPageProps) {
  const { slug } = await params
  const announcement = getAnnouncementBySlug(slug)

  if (!announcement) {
    notFound()
  }

  const category = announcementCategories[announcement.category]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <article className="relative overflow-hidden px-4 pb-16 pt-28">
        <div className="absolute inset-0 grid-bg star-bg opacity-40" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            href="/announcements"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground/58 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            返回公告列表
          </Link>

          <div className="glass-card rounded-3xl p-5 md:p-8">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {category.label}
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-foreground/50">
                <CalendarDays className="h-4 w-4" />
                {announcement.date}
              </span>
            </div>

            <header className="mb-8 border-b border-primary/15 pb-8">
              <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
                {announcement.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-foreground/62 md:text-lg">
                {announcement.excerpt}
              </p>
            </header>

            <AnnouncementContent content={announcement.content} />
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
