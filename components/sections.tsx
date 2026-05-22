"use client"

import { useRef, useState } from "react"
import {
  ArrowRight,
  BookOpen,
  CreditCard,
  Download,
  ExternalLink,
  FileCheck,
  FileText,
  Globe,
  Instagram,
  MessageCircle,
  Scale,
  Send,
  Shield,
  Users,
  Video,
  Volume2,
  VolumeX,
  Wallet,
  Zap,
  Clock,
} from "lucide-react"
import { useTranslations } from "@/i18n/client"

const socialLinks = [
  { name: "X", handle: "@GANA_PayFi", href: "https://x.com/GANA_PayFi", icon: ExternalLink },
  { name: "Telegram", handle: "GANA Payment", href: "https://t.me/ganapayment", icon: Send },
  { name: "Instagram", handle: "@ganapayment", href: "https://www.instagram.com/ganapayment/", icon: Instagram },
  { name: "X Insight", handle: "@GANA_Insight", href: "https://x.com/GANA_Insight", icon: MessageCircle },
]

const documentationLinks = [
  {
    language: "中文資料集",
    href: "https://www.notion.so/GANA-297197584a42809fa598c241be6f9c92?source=copy_link",
  },
  {
    language: "English Documentation Collection",
    href: "https://www.notion.so/GANA-Resource-Collection-29c197584a428084be90f7b5534b7443?source=copy_link",
  },
  {
    language: "한국어 자료 모음",
    href: "https://www.notion.so/GANA-2a3197584a42808a8cadd55cc44a0d98?source=copy_link",
  },
  {
    language: "日本語資料集",
    href: "https://www.notion.so/GANA-2a0197584a428060b8bdebd9855e24de?source=copy_link",
  },
  {
    language: "Tập tài liệu tiếng Việt",
    href: "https://www.notion.so/GANA-T-ng-h-p-t-i-li-u-2a3197584a4280468856c75b456e677c?source=copy_link",
  },
]

const deckResources = [
  {
    title: "GANA 宣傳介紹 PPT",
    pages: 21,
    cover: "/gana-assets/website-ppts/gana-promotion/cover.webp",
    pdf: "/gana-assets/website-ppts/gana-promotion/pdf/gana-promotion.pdf",
  },
  {
    title: "GANA 制度介紹 PPT",
    pages: 18,
    cover: "/gana-assets/website-ppts/gana-system/cover.webp",
    pdf: "/gana-assets/website-ppts/gana-system/pdf/gana-system.pdf",
  },
]

function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [soundEnabled, setSoundEnabled] = useState(false)

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return

    if (soundEnabled) {
      video.muted = true
      setSoundEnabled(false)
      return
    }

    video.muted = false
    video.volume = 0.75
    setSoundEnabled(true)
    void video.play().catch(() => {
      video.muted = true
      setSoundEnabled(false)
    })
  }

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-90"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/gana-assets/website-video/hero-cyberpunk-poster.jpg"
      >
        <source src="/gana-assets/website-video/hero-cyberpunk.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggleSound}
        aria-label={soundEnabled ? "Mute background audio" : "Play background audio"}
        className="absolute bottom-6 right-6 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/35 bg-background/55 text-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
      >
        {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </button>
    </>
  )
}

export function HeroSection() {
  const t = useTranslations('hero')
  const tProduct = useTranslations('product')

  const metrics = [
    { value: "0.1%-0.5%", label: tProduct('tags.0') },
    { value: "24/7", label: "LP Pool" },
    { value: "30%-50%", label: "LP Revenue" },
    { value: "USDT", label: "Stablecoin" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <HeroBackgroundVideo />
        <div className="absolute inset-0 bg-background/25" />
        <div className="absolute inset-0 grid-bg star-bg opacity-35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          <span className="text-sm text-foreground/80">{t('badge')}</span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-foreground">{t('title')}</span>
          <br />
          <span className="gradient-text">{t('titleHighlight')}</span>
          <br />
          <span className="text-foreground">{t('titleEnd')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed">
          {t('subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://www.goldgana.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-btn px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2"
          >
            {t('ctaPrimary')}
            <Wallet className="w-5 h-5" />
          </a>
          <a
            href="https://gana-payment.gitbook.io/whitepaper"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-primary/50 text-foreground font-semibold text-lg hover:bg-primary/10 transition-colors flex items-center gap-2"
          >
            {t('ctaSecondary')}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-4 md:p-6 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm text-foreground/60">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProductDefinition() {
  const t = useTranslations('product')

  return (
    <section id="product" className="py-24 px-4 relative bg-section-alt">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">{t('subtitle')}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {t('title')}
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
            {t('description')}
          </p>
          <p className="text-primary/80 max-w-2xl mx-auto mt-4 text-base italic">
            {t('vision')}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {(t.raw('tags') as string[]).map((tag: string, index: number) => (
            <span
              key={index}
              className="px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-foreground text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ResourcesSection() {
  const t = useTranslations('resources')

  return (
    <section id="resources" className="py-24 px-4 relative bg-background">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-primary font-medium mb-2">{t('eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-foreground">
            {t('title')}
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 mb-10">
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary font-medium">{t('announcementKicker')}</p>
                <h3 className="text-2xl font-bold text-foreground">{t('announcementTitle')}</h3>
              </div>
            </div>
            <p className="text-foreground/70 leading-relaxed mb-6">
              {t('announcementCopy')}
            </p>
            <ul className="grid sm:grid-cols-3 gap-3">
              {(t.raw('announcementPoints') as string[]).map((point, index) => (
                <li
                  key={index}
                  className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground/75"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <video
              className="aspect-video w-full bg-black object-cover"
              controls
              preload="metadata"
              poster="/gana-assets/website-video/hero-cyberpunk-poster.jpg"
            >
              <source src="/gana-assets/website-video/hero-cyberpunk.mp4" type="video/mp4" />
            </video>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Video className="w-5 h-5 text-secondary" />
                <h3 className="text-lg font-semibold text-foreground">{t('videoTitle')}</h3>
              </div>
              <p className="text-sm text-foreground/60">{t('videoDescription')}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">{t('docsTitle')}</h3>
            </div>
            <div className="grid gap-3">
              {documentationLinks.map((doc) => (
                <a
                  key={doc.href}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card glass-card-hover rounded-xl p-4 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-semibold text-foreground">{doc.language}</p>
                    <p className="text-sm text-foreground/55">{t('docsDescription')}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-secondary group-hover:text-primary transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">{t('socialTitle')}</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card glass-card-hover rounded-xl p-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-foreground/60">{item.handle}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-5">
            <FileText className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">{t('deckTitle')}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {deckResources.map((deck) => (
              <a
                key={deck.pdf}
                href={deck.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card glass-card-hover rounded-2xl overflow-hidden"
              >
                <img
                  src={deck.cover}
                  alt={deck.title}
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{deck.title}</h4>
                    <p className="text-sm text-foreground/60">
                      {deck.pages} {t('pagesLabel')}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                    {t('downloadPdf')}
                    <Download className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function MechanismSection() {
  const t = useTranslations('mechanism')

  const mechanisms = [
    {
      icon: FileCheck,
      title: t('onChain.title'),
      description: t('onChain.description'),
      colorClass: "bg-primary/20 text-primary",
    },
    {
      icon: Zap,
      title: t('lp.title'),
      description: t('lp.description'),
      colorClass: "bg-secondary/20 text-secondary",
    },
    {
      icon: Shield,
      title: t('compliance.title'),
      description: t('compliance.description'),
      colorClass: "bg-accent/20 text-accent",
    },
  ]

  return (
    <section id="mechanism" className="py-24 px-4 relative bg-background-soft">
      <div className="absolute inset-0 star-bg opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mechanisms.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-8 group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${item.colorClass}`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PainPointsSection() {
  const t = useTranslations('painPoints')

  const painPoints = [
    { icon: Globe },
    { icon: CreditCard },
    { icon: Scale },
    { icon: Shield },
  ]

  return (
    <section className="py-24 px-4 relative bg-background">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {(t.raw('items') as Array<{title: string, description: string}>).map((item, index) => {
            const Icon = painPoints[index]?.icon || Globe
            return (
              <div
                key={index}
                className="glass-card glass-card-hover rounded-2xl p-6 flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ScenariosSection() {
  const t = useTranslations('scenarios')

  const scenarios = [
    {
      key: 'user',
      icon: Users,
      colorClass: "bg-primary/15 text-primary",
      bulletClass: "bg-primary",
    },
    {
      key: 'merchant',
      icon: CreditCard,
      colorClass: "bg-secondary/15 text-secondary",
      bulletClass: "bg-secondary",
    },
    {
      key: 'partner',
      icon: Globe,
      colorClass: "bg-accent/15 text-accent",
      bulletClass: "bg-accent",
    },
  ]

  return (
    <section id="scenarios" className="py-24 px-4 relative bg-section-highlight">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-background">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg border border-primary/10 hover:shadow-xl hover:border-primary/20 transition-all"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${scenario.colorClass}`}>
                <scenario.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {t(`${scenario.key}.title`)}
              </h3>
              <ul className="space-y-3">
                {(t.raw(`${scenario.key}.items`) as string[]).map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-card-foreground/70">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${scenario.bulletClass}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SecuritySection() {
  const t = useTranslations('security')

  return (
    <section className="py-24 px-4 relative bg-background-soft">
      <div className="absolute inset-0 star-bg opacity-50" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Shield className="w-7 h-7 text-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t('title')}
            </h2>
          </div>
          
          <ul className="space-y-4">
            {(t.raw('items') as string[]).map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-4 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function RoadmapSection() {
  const t = useTranslations('roadmap')

  return (
    <section id="roadmap" className="py-24 px-4 relative bg-background">
      <div className="absolute inset-0 grid-bg star-bg opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {(t.raw('phases') as Array<{period: string, items: string[]}>).map((item, index, arr) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-6 relative"
            >
              {/* Connector line for desktop */}
              {index < arr.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-secondary" />
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-lg font-bold gradient-text">{item.period}</span>
              </div>
              <ul className="space-y-2">
                {item.items.map((subItem: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="w-1 h-1 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  const t = useTranslations('cta')

  return (
    <section className="py-24 px-4 relative bg-gradient-to-b from-background to-background-soft">
      <div className="absolute inset-0 star-bg opacity-30" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          {t('title')}
        </h2>
        <p className="text-foreground/70 mb-10 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.goldgana.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-btn px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2"
          >
            {t('primary')}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@goldgana.com"
            className="px-8 py-4 rounded-full border border-primary/50 text-foreground font-semibold text-lg hover:bg-primary/10 transition-colors"
          >
            {t('secondary')}
          </a>
        </div>
      </div>
    </section>
  )
}
