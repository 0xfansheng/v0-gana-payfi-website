import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP, Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { getLocale, getMessages, getTranslations } from 'next-intl/server'
import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-jp",
  weight: ["400", "500", "600", "700"]
})

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-kr",
  weight: ["400", "500", "600", "700"]
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('meta')
  
  return {
    title: t('title'),
    description: t('description'),
    generator: 'v0.app',
    icons: {
      icon: [
        {
          url: '/icon-light-32x32.png',
          media: '(prefers-color-scheme: light)',
        },
        {
          url: '/icon-dark-32x32.png',
          media: '(prefers-color-scheme: dark)',
        },
        {
          url: '/icon.svg',
          type: 'image/svg+xml',
        },
      ],
      apple: '/apple-icon.png',
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()
  
  // Determine lang attribute
  const langMap: Record<string, string> = {
    'zh-CN': 'zh-Hans',
    'zh-TW': 'zh-Hant',
    'en': 'en',
    'ja': 'ja',
    'ko': 'ko'
  }
  
  return (
    <html 
      lang={langMap[locale] || 'zh-Hans'} 
      className={`${inter.variable} ${notoSansJP.variable} ${notoSansKR.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
