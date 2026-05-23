import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Database, Download, ShieldCheck } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { listReservationRecords, type ReservationRecord } from "@/lib/reservations-store"

export const metadata: Metadata = {
  title: "预约记录后台 · GANA",
  description: "GANA社区特权预约记录后台表格。",
}

export const dynamic = "force-dynamic"

type ReservationsAdminPageProps = {
  searchParams?: Promise<{
    token?: string | string[]
  }>
}

function shortAddress(address: string) {
  return `${address.slice(0, 8)}...${address.slice(-6)}`
}

function shortSignature(signature: string) {
  return `${signature.slice(0, 10)}...${signature.slice(-8)}`
}

function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Bangkok",
  }).format(new Date(isoDate))
}

export default async function ReservationsAdminPage({ searchParams }: ReservationsAdminPageProps) {
  const params = await searchParams
  const tokenParam = Array.isArray(params?.token) ? params?.token[0] : params?.token
  const adminToken = process.env.GANA_RESERVATIONS_ADMIN_TOKEN
  const isAllowed = !adminToken || tokenParam === adminToken
  let records: ReservationRecord[] = []
  let errorMessage = ""

  if (isAllowed) {
    try {
      records = await listReservationRecords()
    } catch (error) {
      errorMessage =
        error instanceof Error && error.message.includes("BLOB_READ_WRITE_TOKEN")
          ? "Vercel 还没有配置 BLOB_READ_WRITE_TOKEN，暂时无法读取预约记录。"
          : "预约记录读取失败，请稍后重试。"
    }
  }

  const csvHref = `/api/reservations?format=csv${tokenParam ? `&token=${encodeURIComponent(tokenParam)}` : ""}`

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="relative overflow-hidden px-4 pb-16 pt-28">
        <div className="absolute inset-0 grid-bg star-bg opacity-40" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/#im-beta"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground/58 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            返回官网
          </Link>

          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-2 text-sm font-medium text-primary">GANA Reservation Admin</p>
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">社区特权预约记录</h1>
              <p className="mt-5 text-lg leading-relaxed text-foreground/66">
                这里汇总已经通过 GANA LP 钱包资格验证并完成邮箱验证码的首批用户预约记录。
              </p>
            </div>
            {isAllowed && !errorMessage && (
              <a
                href={csvHref}
                className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <Download className="h-4 w-4" />
                下载 CSV
              </a>
            )}
          </div>

          {!isAllowed ? (
            <div className="rounded-3xl border border-primary/18 bg-white/58 p-6 shadow-[0_20px_70px_rgba(88,28,135,0.10)] backdrop-blur-xl dark:bg-background-soft/55">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">需要后台访问口令</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/62">
                请在页面地址后追加正确的管理 token，例如 /admin/reservations?token=你的口令。
              </p>
            </div>
          ) : (
            <div className="rounded-3xl border border-primary/18 bg-white/58 p-4 shadow-[0_20px_70px_rgba(88,28,135,0.10)] backdrop-blur-xl dark:bg-background-soft/55 md:p-6">
              <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">记录表格</h2>
                    <p className="mt-1 text-sm text-foreground/58">当前共 {records.length} 条记录</p>
                  </div>
                </div>
                {!adminToken && (
                  <span className="w-fit rounded-full border border-amber-400/30 bg-amber-400/12 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-200">
                    建议配置后台口令
                  </span>
                )}
              </div>

              {errorMessage ? (
                <div className="rounded-2xl border border-primary/15 bg-primary/10 px-4 py-5 text-sm text-foreground/68">
                  {errorMessage}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-[980px] w-full border-separate border-spacing-0 text-left text-sm">
                    <thead>
                      <tr className="text-foreground/55">
                        <th className="border-b border-primary/15 px-4 py-3 font-semibold">时间</th>
                        <th className="border-b border-primary/15 px-4 py-3 font-semibold">邮箱</th>
                        <th className="border-b border-primary/15 px-4 py-3 font-semibold">钱包地址</th>
                        <th className="border-b border-primary/15 px-4 py-3 font-semibold">GANA LP 余额</th>
                        <th className="border-b border-primary/15 px-4 py-3 font-semibold">签名摘要</th>
                      </tr>
                    </thead>
                    <tbody>
                      {records.map((record) => (
                        <tr key={record.id} className="align-top text-foreground/76">
                          <td className="border-b border-primary/10 px-4 py-4 whitespace-nowrap">{formatDate(record.createdAt)}</td>
                          <td className="border-b border-primary/10 px-4 py-4">{record.email}</td>
                          <td className="border-b border-primary/10 px-4 py-4 font-mono text-xs">{shortAddress(record.walletAddress)}</td>
                          <td className="border-b border-primary/10 px-4 py-4 font-semibold text-foreground">{record.lpBalance}</td>
                          <td className="border-b border-primary/10 px-4 py-4 font-mono text-xs">{shortSignature(record.signature)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
