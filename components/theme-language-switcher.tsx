"use client"

import { useState } from "react"
import { useLocale, useI18n } from "@/i18n/client"
import { locales, type Locale } from "@/i18n/config"
import { ChevronDown, Globe } from "lucide-react"

const languageNames: Record<Locale, string> = {
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'en': 'English',
  'ja': '日本語',
  'ko': '한국어',
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
