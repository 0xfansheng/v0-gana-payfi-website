"use client"

import { ArrowRight, Zap, Shield, Users, Wallet, CreditCard, FileCheck, Scale, Clock, Globe } from "lucide-react"
import { useTranslations } from "next-intl"

export function HeroSection() {
  const t = useTranslations('hero')
  const tProduct = useTranslations('product')

  const metrics = [
    { value: "0.1%-0.5%", label: tProduct('tags.0') },
    { value: "24/7", label: "LP Pool" },
    { value: "30%-50%", label: "LP Revenue" },
    { value: "USDG", label: "Stablecoin" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 grid-bg star-bg" />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-[96px]" />
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
