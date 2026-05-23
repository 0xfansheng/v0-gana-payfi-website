import Link from "next/link"
import { ArrowRight, CalendarDays, Megaphone } from "lucide-react"
import {
  announcementCategories,
  announcementCategoryOrder,
  getAnnouncementsByCategory,
  getLatestAnnouncements,
} from "@/lib/announcements"

export function AnnouncementsSection() {
  const latestAnnouncements = getLatestAnnouncements(3)

  return (
    <section id="announcements" className="py-20 px-4 relative bg-background">
      <div className="absolute inset-0 grid-bg star-bg opacity-40" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium text-primary">Official Announcements</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">官方公告</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/65">
              统一发布维护更新、GANA最新活动与GANA最新动态，重要信息将通过公告详情页完整呈现。
            </p>
          </div>
          <Link
            href="/announcements"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            查看全部公告
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          {announcementCategoryOrder.map((category) => {
            const meta = announcementCategories[category]
            const count = getAnnouncementsByCategory(category).length

            return (
              <div key={category} className="glass-card rounded-2xl p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Megaphone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{meta.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/58">{meta.description}</p>
                <p className="mt-4 text-xs font-medium text-primary">{count} 条公告</p>
              </div>
            )
          })}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {latestAnnouncements.map((announcement) => (
            <Link
              key={announcement.slug}
              href={`/announcements/${announcement.slug}`}
              className="group glass-card glass-card-hover flex min-h-[230px] flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {announcementCategories[announcement.category].label}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-foreground/45">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {announcement.date}
                </span>
              </div>
              <h3 className="text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                {announcement.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/62">{announcement.excerpt}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary group-hover:text-primary">
                查看公告详情
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
