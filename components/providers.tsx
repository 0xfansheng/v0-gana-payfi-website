"use client"

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { I18nProvider } from "@/i18n/client"
import { type ReactNode } from "react"

interface ProvidersProps {
  children: ReactNode
}

const dynamicEnvironmentId =
  process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || "b98cacb1-0ba5-4c5f-b5da-a330fadb7a74"

export function Providers({ children }: ProvidersProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProvider>
        <DynamicContextProvider
          settings={{
            environmentId: dynamicEnvironmentId,
          }}
        >
          {children}
        </DynamicContextProvider>
      </I18nProvider>
    </NextThemesProvider>
  )
}
