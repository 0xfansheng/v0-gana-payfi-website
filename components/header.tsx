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
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-foreground/70 hover:text-foreground text-sm font-medium transition-colors"
            >
              {item.label}
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
                className="text-foreground/70 hover:text-foreground text-sm font-medium py-2"
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
