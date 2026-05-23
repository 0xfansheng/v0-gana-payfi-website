import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CalendarDays, Megaphone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  announcementCategories,
  announcementCategoryOrder,
  getAnnouncementsByCategory,
} from "@/lib/announcements"

export const metadata: Metadata = {
  title: "官方公告 · GANA",
  description: "GANA官方公告中心，发布维护更新、GANA最新活动与GANA最新动态。",
}

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="relative overflow-hidden px-4 pb-16 pt-28">
        <div className="absolute inset-0 grid-bg star-bg opacity-40" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/#announcements"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground/58 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            返回官网
          </Link>

          <div className="mb-12 max-w-3xl">
            <p className="mb-2 text-sm font-medium text-primary">GANA Announcement Center</p>
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">官方公告</h1>
            <p className="mt-5 text-lg leading-relaxed text-foreground/66">
              这里统一归档维护更新、GANA最新活动与GANA最新动态。点击公告卡片可进入二级详情页查看完整内容。
            </p>
          </div>

          <div className="grid gap-8">
            {announcementCategoryOrder.map((category) => {
              const meta = announcementCategories[category]
              const categoryAnnouncements = getAnnouncementsByCategory(category)

              return (
                <section key={category} className="rounded-3xl border border-primary/18 bg-white/58 p-5 shadow-[0_20px_70px_rgba(88,28,135,0.10)] backdrop-blur-xl dark:bg-background-soft/55 md:p-6">
                  <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                        <Megaphone className="h-5 w-5" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{meta.label}</h2>
                      <p className="mt-2 text-sm text-foreground/58">{meta.description}</p>
                    </div>
                    <span className="w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {categoryAnnouncements.length} 条公告
                    </span>
                  </div>

                  {categoryAnnouncements.length > 0 ? (
                    <div className="grid gap-4 lg:grid-cols-2">
                      {categoryAnnouncements.map((announcement) => (
                        <Link
                          key={announcement.slug}
                          href={`/announcements/${announcement.slug}`}
                          className="group glass-card glass-card-hover flex min-h-[220px] flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="mb-4 flex items-center gap-2 text-xs text-foreground/45">
                            <CalendarDays className="h-3.5 w-3.5" />
                            {announcement.date}
                          </div>
                          <h3 className="text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                            {announcement.title}
                          </h3>
                          <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/62">
                            {announcement.excerpt}
                          </p>
                          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary group-hover:text-primary">
                            打开公告详情
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-primary/20 bg-primary/5 px-5 py-8 text-sm text-foreground/55">
                      暂无公告。后续可在公告数据文件中新增该分类内容。
                    </div>
                  )}
                </section>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
