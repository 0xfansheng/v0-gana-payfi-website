"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "@/i18n/client"

const footerSocialLinks = [
  { label: "X", href: "https://x.com/GANA_PayFi" },
  { label: "Telegram", href: "https://t.me/ganapayment" },
  { label: "Instagram", href: "https://www.instagram.com/ganapayment/" },
  { label: "Insight", href: "https://x.com/GANA_Insight" },
]

export function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')

  return (
    <footer className="py-12 px-4 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="GANA Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-lg text-foreground">
              GANA<span className="text-primary"> · </span>PayFi
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.goldgana.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground text-sm transition-colors"
            >
              DAPP
            </a>
            <a
              href="#resources"
              className="text-foreground/60 hover:text-foreground text-sm transition-colors"
            >
              {tNav('resources')}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {footerSocialLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Risk Disclaimer */}
        <div className="border-t border-border/50 pt-8">
          <p className="text-foreground/40 text-xs leading-relaxed text-center max-w-4xl mx-auto">
            {t('disclaimer')}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-foreground/30 text-xs">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
