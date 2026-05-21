"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useLocale, useTranslations, useI18n } from "@/i18n/client"
import { locales, type Locale } from "@/i18n/config"
import { Sun, Moon, Monitor, ChevronDown, Globe } from "lucide-react"

const languageNames: Record<Locale, string> = {
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'en': 'English',
  'ja': '日本語',
  'ko': '한국어',
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const t = useTranslations('theme')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-1 rounded-full bg-muted/50">
        <div className="w-8 h-8" />
        <div className="w-8 h-8" />
        <div className="w-8 h-8" />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-muted/50 border border-border/50">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full transition-colors ${
          theme === "light"
            ? "bg-primary text-primary-foreground"
            : "text-foreground/60 hover:text-foreground"
        }`}
        title={t('light')}
        aria-label={t('light')}
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full transition-colors ${
          theme === "dark"
            ? "bg-primary text-primary-foreground"
            : "text-foreground/60 hover:text-foreground"
        }`}
        title={t('dark')}
        aria-label={t('dark')}
      >
        <Moon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-full transition-colors ${
          theme === "system"
            ? "bg-primary text-primary-foreground"
            : "text-foreground/60 hover:text-foreground"
        }`}
        title={t('system')}
        aria-label={t('system')}
      >
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  )
}

export function LanguageSwitcher() {
  const locale = useLocale()
  const { setLocale } = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/50 border border-border/50 text-sm font-medium text-foreground hover:bg-muted transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4" />
        <span>{languageNames[locale]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div 
            className="absolute right-0 mt-2 py-2 w-40 bg-popover border border-border rounded-xl shadow-xl z-50"
            role="listbox"
          >
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => handleLocaleChange(l)}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors ${
                  locale === l ? 'text-primary font-medium' : 'text-foreground'
                }`}
                role="option"
                aria-selected={locale === l}
              >
                {languageNames[l]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
