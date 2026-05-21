"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { NextIntlClientProvider } from "next-intl"
import { type ReactNode } from "react"

interface ProvidersProps {
  children: ReactNode
  locale: string
  messages: Record<string, unknown>
}

export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </NextThemesProvider>
  )
}
