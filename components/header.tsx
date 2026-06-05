"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useTranslations } from "@/i18n/client"
import { ThemeSwitcher, LanguageSwitcher } from "./theme-language-switcher"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations('nav')

  const navItems = [
    { label: t('product'), href: "/#product" },
    { label: t('imBeta'), href: "/#im-beta" },
    { label: t('announcements'), href: "/announcements" },
    { label: t('resources'), href: "/#resources" },
    { label: t('mechanism'), href: "/#mechanism" },
    { label: t('scenarios'), href: "/#scenarios" },
    { label: t('media'), href: "/#media" },
    { label: t('roadmap'), href: "/#roadmap" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="GANA Logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-bold text-lg text-foreground">
            GANA<span className="text-primary"> · </span>PayFi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden whitespace-nowrap rounded-full border border-primary/18 bg-white/62 px-2.5 py-1.5 text-[13px] font-semibold text-foreground/76 shadow-[inset_0_1px_0_rgba(255,255,255,0.80),0_8px_22px_rgba(15,23,42,0.07)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/12 hover:text-primary hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_12px_28px_rgba(36,99,235,0.16)] dark:bg-white/8 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_22px_rgba(0,0,0,0.22)] xl:px-3"
            >
              <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-80" />
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right side: Theme + Language + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <a
            href="https://www.goldgana.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-btn px-5 py-2 rounded-full text-white text-sm font-medium"
          >
            {t('enterDapp')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-primary/16 bg-white/60 px-4 py-3 text-sm font-semibold text-foreground/76 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_20px_rgba(15,23,42,0.06)] transition-all hover:border-primary/40 hover:bg-primary/12 hover:text-primary dark:bg-white/8"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
            <a
              href="https://www.goldgana.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-btn px-6 py-2.5 rounded-full text-white text-sm font-medium text-center mt-2"
            >
              {t('enterDapp')}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
