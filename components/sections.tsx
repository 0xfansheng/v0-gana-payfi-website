"use client"

import { useRef, useState } from "react"
import {
  ArrowRight,
  Bell,
  BookOpen,
  CheckCircle2,
  CreditCard,
  Download,
  ExternalLink,
  FileCheck,
  FileText,
  Globe,
  Instagram,
  KeyRound,
  Loader2,
  Mail,
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
import { useConnectWithOtp, useDynamicContext } from "@dynamic-labs/sdk-react-core"
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

const videoResources = [
  {
    title: "GANA Video 01",
    poster: "/gana-assets/website-video/gallery/gana-video-01.jpg",
    src: "/gana-assets/website-video/gallery/gana-video-01.mp4",
  },
  {
    title: "GANA Video 02",
    poster: "/gana-assets/website-video/gallery/gana-video-02.jpg",
    src: "/gana-assets/website-video/gallery/gana-video-02.mp4",
  },
  {
    title: "GANA Video 03",
    poster: "/gana-assets/website-video/gallery/gana-video-03.jpg",
    src: "/gana-assets/website-video/gallery/gana-video-03.mp4",
  },
  {
    title: "GANA Video 04",
    poster: "/gana-assets/website-video/gallery/gana-video-04.jpg",
    src: "/gana-assets/website-video/gallery/gana-video-04.mp4",
  },
  {
    title: "GANA Video 05",
    poster: "/gana-assets/website-video/gallery/gana-video-05.jpg",
    src: "/gana-assets/website-video/gallery/gana-video-05.mp4",
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

type EmailVerificationStatus = "idle" | "sending" | "codeSent" | "verifying" | "verified" | "error"
type WalletEligibilityStatus = "idle" | "connecting" | "signing" | "checking" | "eligible" | "ineligible" | "error"

type TokenBalance = {
  symbol: string
  address: string
  raw: bigint
  decimals: number
  formatted: string
  meetsRequirement: boolean
}

type TokenGateResult = {
  address: string
  signature: string
  signatureMessage: string
  balances: TokenBalance[]
}

type Eip1193Provider = {
  isMetaMask?: boolean
  isOkxWallet?: boolean
  isRabby?: boolean
  isTrustWallet?: boolean
  providers?: Eip1193Provider[]
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
}

declare global {
  interface Window {
    ethereum?: Eip1193Provider
  }
}

const bscRpcEndpoints = [
  "https://bsc-dataseed.binance.org",
  "https://bsc-dataseed1.defibit.io",
  "https://bsc.publicnode.com",
]

const tokenGateContracts = [
  {
    symbol: "GANA LP",
    address: "0x72212F35aC448FE7763aA1BFdb360193Fa098E52",
  },
]

const erc20BalanceOfSelector = "0x70a08231"
const erc20DecimalsSelector = "0x313ce567"

const imBetaReservationOpen = true

function isEvmAddress(address?: string): address is string {
  return Boolean(address && /^0x[a-fA-F0-9]{40}$/.test(address))
}

function truncateAddress(address?: string) {
  if (!address) return ""
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

function getInjectedEvmProvider() {
  if (typeof window === "undefined") return null

  const provider = window.ethereum
  if (!provider) return null

  return (
    provider.providers?.find(
      (item) => item.isMetaMask || item.isOkxWallet || item.isRabby || item.isTrustWallet,
    ) || provider
  )
}

function encodeBalanceOfCall(walletAddress: string) {
  return `${erc20BalanceOfSelector}${walletAddress.slice(2).padStart(64, "0")}`
}

async function callBscRpc(method: string, params: unknown[]): Promise<string> {
  let lastError: unknown

  for (const endpoint of bscRpcEndpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: Date.now(),
          method,
          params,
        }),
      })

      if (!response.ok) {
        throw new Error(`RPC ${response.status}`)
      }

      const data = (await response.json()) as { result?: unknown; error?: { message?: string } }
      if (data.error) {
        throw new Error(data.error.message || "RPC error")
      }
      if (typeof data.result !== "string") {
        throw new Error("RPC result missing")
      }

      return data.result
    } catch (error) {
      lastError = error
    }
  }

  throw lastError instanceof Error ? lastError : new Error("BSC RPC request failed")
}

async function readErc20Decimals(tokenAddress: string) {
  try {
    const hex = await callBscRpc("eth_call", [{ to: tokenAddress, data: erc20DecimalsSelector }, "latest"])
    return Number(BigInt(hex))
  } catch {
    return 18
  }
}

function formatUnits(raw: bigint, decimals: number) {
  if (decimals <= 0) return raw.toString()

  const base = 10n ** BigInt(decimals)
  const whole = raw / base
  const fraction = raw % base

  if (fraction === 0n) return whole.toString()

  const fractionText = fraction.toString().padStart(decimals, "0").slice(0, 4).replace(/0+$/, "")
  return fractionText ? `${whole}.${fractionText}` : whole.toString()
}

async function readTokenBalance(token: (typeof tokenGateContracts)[number], walletAddress: string): Promise<TokenBalance> {
  const [balanceHex, decimals] = await Promise.all([
    callBscRpc("eth_call", [{ to: token.address, data: encodeBalanceOfCall(walletAddress) }, "latest"]),
    readErc20Decimals(token.address),
  ])
  const raw = BigInt(balanceHex)
  const minimumRaw = 10n ** BigInt(decimals)

  return {
    symbol: token.symbol,
    address: token.address,
    raw,
    decimals,
    formatted: formatUnits(raw, decimals),
    meetsRequirement: raw >= minimumRaw,
  }
}

function getVerifiedEmailFromUser(user: unknown) {
  const userRecord = user as
    | {
        email?: string
        verifiedCredentials?: Array<{ email?: string; format?: string }>
      }
    | undefined

  return (
    userRecord?.email ||
    userRecord?.verifiedCredentials?.find((credential) => credential.format === "email" && credential.email)?.email ||
    ""
  )
}

function buildWalletSignatureMessage(walletAddress: string) {
  return [
    "GANA Community Privilege Reservation",
    `Wallet: ${walletAddress}`,
    "Action: Verify GANA LP token balance for first-wave eligibility.",
    "Chain: BNB Smart Chain",
    `Timestamp: ${new Date().toISOString()}`,
  ].join("\n")
}

export function ImBetaSection() {
  const t = useTranslations('imBeta')
  const { connectWithEmail, verifyOneTimePassword } = useConnectWithOtp()
  const { sdkHasLoaded, user } = useDynamicContext()
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [otpRequested, setOtpRequested] = useState(false)
  const [status, setStatus] = useState<EmailVerificationStatus>("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const [walletStatus, setWalletStatus] = useState<WalletEligibilityStatus>("idle")
  const [walletStatusMessage, setWalletStatusMessage] = useState("")
  const [walletAddress, setWalletAddress] = useState("")
  const [tokenGateResult, setTokenGateResult] = useState<TokenGateResult | null>(null)
  const points = t.raw('points') as string[]
  const trimmedEmail = email.trim()
  const hasValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
  const normalizedOtp = otp.replace(/\D/g, "")
  const isBusy = status === "sending" || status === "verifying"
  const verifiedEmailFromSession = getVerifiedEmailFromUser(user)
  const hasVerifiedEmail = status === "verified" || Boolean(verifiedEmailFromSession)
  const walletGateApproved =
    walletStatus === "eligible" &&
    Boolean(walletAddress) &&
    tokenGateResult?.address.toLowerCase() === walletAddress.toLowerCase()
  const hasCompletedReservation = hasVerifiedEmail && walletGateApproved
  const isWalletBusy = walletStatus === "connecting" || walletStatus === "signing" || walletStatus === "checking"

  const handleEmailChange = (value: string) => {
    setEmail(value)
    setOtp("")
    setOtpRequested(false)
    setStatus("idle")
    setStatusMessage("")
  }

  const handleOtpChange = (value: string) => {
    setOtp(value.replace(/\D/g, "").slice(0, 8))
  }

  const saveReservationRecord = async () => {
    const lpBalance = tokenGateResult?.balances[0]

    if (!walletGateApproved || !lpBalance) {
      throw new Error("Wallet gate is not approved")
    }

    const response = await fetch("/api/reservations", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: trimmedEmail,
        walletAddress,
        lpBalance: lpBalance.formatted,
        lpBalanceRaw: lpBalance.raw.toString(),
        lpTokenAddress: lpBalance.address,
        signature: tokenGateResult.signature,
        signatureMessage: tokenGateResult.signatureMessage,
      }),
    })

    if (!response.ok) {
      throw new Error("Reservation record could not be saved")
    }
  }

  const handleSendEmail = async () => {
    if (!walletGateApproved) {
      setStatus("error")
      setStatusMessage(t('walletFirstStatus'))
      return
    }

    if (!hasValidEmail) {
      setStatus("error")
      setStatusMessage(t('missingEmailStatus'))
      return
    }

    setStatus("sending")
    setStatusMessage("")

    try {
      await connectWithEmail(trimmedEmail)
      setOtpRequested(true)
      setStatus("codeSent")
      setStatusMessage(t('codeSentStatus'))
    } catch {
      setStatus("error")
      setStatusMessage(t('errorStatus'))
    }
  }

  const handleVerifyOtp = async () => {
    if (!walletGateApproved) {
      setStatus("error")
      setStatusMessage(t('walletFirstStatus'))
      return
    }

    if (!normalizedOtp) {
      setStatus("error")
      setStatusMessage(t('missingCodeStatus'))
      return
    }

    setStatus("verifying")
    setStatusMessage("")

    try {
      await verifyOneTimePassword(normalizedOtp)
      setStatus("verified")
    } catch {
      setStatus("error")
      setStatusMessage(t('errorStatus'))
      return
    }

    try {
      await saveReservationRecord()
      setStatusMessage(t('registrationSavedStatus'))
    } catch {
      setStatusMessage(t('registrationSaveErrorStatus'))
    }
  }

  const handleWalletAuthorize = async () => {
    const provider = getInjectedEvmProvider()
    if (!provider) {
      setWalletStatus("error")
      setWalletStatusMessage(t('walletUnavailableStatus'))
      return
    }

    setWalletStatus(walletAddress ? "signing" : "connecting")
    setWalletStatusMessage("")

    try {
      const accounts = (await provider.request({ method: "eth_requestAccounts" })) as string[]
      const selectedAddress = accounts[0]

      if (!isEvmAddress(selectedAddress)) {
        setWalletStatus("error")
        setWalletStatusMessage(t('walletInvalidStatus'))
        return
      }

      setWalletAddress(selectedAddress)
      setWalletStatus("signing")
      const signatureMessage = buildWalletSignatureMessage(selectedAddress)

      const signature = (await provider.request({
        method: "personal_sign",
        params: [signatureMessage, selectedAddress],
      })) as string

      if (!signature) throw new Error("Signature missing")

      setWalletStatus("checking")
      const balances = await Promise.all(tokenGateContracts.map((token) => readTokenBalance(token, selectedAddress)))
      const hasRequiredBalances = balances.every((balance) => balance.meetsRequirement)

      setTokenGateResult({
        address: selectedAddress,
        signature,
        signatureMessage,
        balances,
      })
      setWalletStatus(hasRequiredBalances ? "eligible" : "ineligible")
      setWalletStatusMessage(hasRequiredBalances ? t('walletEligibleStatus') : t('walletIneligibleStatus'))
    } catch {
      setWalletStatus("error")
      setWalletStatusMessage(t('walletErrorStatus'))
    }
  }

  return (
    <section id="im-beta" className="im-beta-section-bg py-16 sm:py-20 lg:py-24 px-3 sm:px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg star-bg opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-5 lg:gap-8 items-stretch">
          <div className="im-beta-copy-panel rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-secondary/35 bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary mb-5 sm:mb-6">
              <Bell className="w-4 h-4" />
              {t('eyebrow')}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-5 leading-tight">
              {t('title')}
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-6 sm:mb-8">
              {t('subtitle')}
            </p>

            <div className="grid gap-3">
              {points.map((point, index) => (
                <div
                  key={point}
                  className="im-beta-point flex items-start gap-3 rounded-2xl px-4 py-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary font-semibold">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm md:text-base text-foreground/78 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="im-beta-form-panel rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8">
            <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-7">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-primary mb-1">{t('formKicker')}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">{t('formTitle')}</h3>
              </div>
            </div>

            {imBetaReservationOpen ? (
              <>
                <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
                  <div className="grid gap-4 rounded-2xl border border-primary/20 bg-background/45 p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                          <Wallet className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground">{t('walletLabel')}</p>
                          <p className="truncate text-xs text-foreground/55">
                            {walletAddress ? truncateAddress(walletAddress) : t('walletDisconnectedLabel')}
                          </p>
                        </div>
                      </div>
                      <span className="w-fit rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        BNB Smart Chain
                      </span>
                    </div>

                    <div className="grid gap-3">
                      {tokenGateContracts.map((token) => {
                        const balance = tokenGateResult?.balances.find((item) => item.symbol === token.symbol)
                        return (
                          <div key={token.symbol} className="rounded-2xl border border-primary/15 bg-white/35 p-4 dark:bg-background/35">
                            <div className="mb-2 flex items-center justify-between gap-2">
                              <p className="text-sm font-semibold text-foreground">{token.symbol}</p>
                              <span
                                className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                                  balance?.meetsRequirement
                                    ? "bg-emerald-500/12 text-emerald-600 dark:text-emerald-300"
                                    : "bg-primary/10 text-primary"
                                }`}
                              >
                                {balance?.meetsRequirement ? t('walletQualifiedLabel') : t('walletRequirementLabel')}
                              </span>
                            </div>
                            <p className="text-2xl font-bold text-foreground">
                              {balance ? balance.formatted : "--"}
                            </p>
                            <p className="mt-1 truncate text-[11px] text-foreground/40">{token.address}</p>
                          </div>
                        )
                      })}
                    </div>

                    <button
                      type="button"
                      onClick={handleWalletAuthorize}
                      disabled={!sdkHasLoaded || isWalletBusy}
                      className="min-h-12 rounded-2xl border border-primary/30 bg-primary/10 px-5 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-55"
                    >
                      {walletStatus === "signing" || walletStatus === "checking" ? (
                        <span className="inline-flex items-center justify-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          {walletStatus === "signing" ? t('walletSigningCta') : t('walletCheckingCta')}
                        </span>
                      ) : walletGateApproved ? (
                        t('walletVerifiedCta')
                      ) : walletAddress ? (
                        t('checkWalletCta')
                      ) : (
                        t('connectWalletCta')
                      )}
                    </button>
                    <p className="text-xs leading-relaxed text-foreground/45">{t('walletSignatureNote')}</p>
                  </div>

                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-foreground/80">{t('emailLabel')}</span>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => handleEmailChange(event.target.value)}
                        placeholder={t('emailPlaceholder')}
                        autoComplete="email"
                        disabled={!walletGateApproved || isBusy || hasVerifiedEmail}
                        className="min-h-12 min-w-0 flex-1 rounded-2xl border border-primary/20 bg-background/70 px-4 text-foreground outline-none transition-colors placeholder:text-foreground/35 focus:border-primary/60"
                      />
                      <button
                        type="button"
                        onClick={handleSendEmail}
                        disabled={!sdkHasLoaded || !walletGateApproved || isBusy || hasVerifiedEmail}
                        className="min-h-12 w-full rounded-2xl bg-primary px-5 text-sm font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-55 sm:w-auto"
                      >
                        {status === "sending" ? (
                          <span className="inline-flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            {t('sendingCta')}
                          </span>
                        ) : otpRequested ? (
                          t('resendCodeCta')
                        ) : (
                          t('sendCodeCta')
                        )}
                      </button>
                    </div>
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-foreground/80">{t('codeLabel')}</span>
                    <div className="relative">
                      <KeyRound className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/70" />
                      <input
                        type="text"
                        value={otp}
                        onChange={(event) => handleOtpChange(event.target.value)}
                        disabled={!walletGateApproved || !otpRequested || isBusy || hasVerifiedEmail}
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        placeholder={t('codePlaceholder')}
                        className="min-h-12 w-full rounded-2xl border border-primary/20 bg-background/45 pl-11 pr-4 text-foreground outline-none placeholder:text-foreground/35 disabled:cursor-not-allowed disabled:opacity-75"
                      />
                    </div>
                  </label>

                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    disabled={!sdkHasLoaded || !walletGateApproved || !otpRequested || !normalizedOtp || isBusy || hasVerifiedEmail}
                    className="gradient-btn min-h-12 rounded-2xl px-5 text-base font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-55"
                  >
                    {status === "verifying" ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {t('verifyingCta')}
                      </span>
                    ) : hasVerifiedEmail ? (
                      t('verifiedCta')
                    ) : (
                      t('submitCta')
                    )}
                  </button>

                </form>

                <div className="mt-6 grid gap-3">
                  <div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm text-foreground/68">
                      {statusMessage || (hasVerifiedEmail ? t('verifiedStatus') : t('serviceNote'))}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3">
                    <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm text-foreground/68">
                      {walletStatusMessage || (walletGateApproved ? t('walletEligibleStatus') : t('walletServiceNote'))}
                    </p>
                  </div>
                  {hasCompletedReservation && (
                    <div className="flex items-start gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <p className="text-sm font-medium text-foreground/78">{t('reservationReadyStatus')}</p>
                    </div>
                  )}
                  <p className="text-xs text-foreground/45">{t('privacyNote')}</p>
                </div>
              </>
            ) : (
              <div className="grid min-h-[260px] sm:min-h-[300px] content-center gap-5 sm:gap-6">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Clock className="h-4 w-4" />
                  {t('comingSoonKicker')}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                    {t('comingSoonTitle')}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-foreground/70">
                    {t('comingSoonDescription')}
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-foreground/68">{t('comingSoonNote')}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ResourcesSection() {
  const t = useTranslations('resources')

  return (
    <section id="resources" className="resources-section-bg py-24 px-4 relative overflow-hidden">
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

        <div className="space-y-8 mb-10">
          <div className="resources-feature-card rounded-3xl p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary font-medium">{t('announcementKicker')}</p>
                  <h3 className="text-2xl font-bold text-foreground">{t('announcementTitle')}</h3>
                </div>
              </div>
              <p className="max-w-2xl text-foreground/70 leading-relaxed md:text-right">
                {t('announcementCopy')}
              </p>
            </div>
            <ul className="mt-6 grid sm:grid-cols-3 gap-3">
              {(t.raw('announcementPoints') as string[]).map((point, index) => (
                <li
                  key={index}
                  className="rounded-xl border border-primary/25 bg-primary/10 px-4 py-3 text-sm text-foreground/80"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="resources-video-panel rounded-3xl p-5 md:p-6">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Video className="w-6 h-6 text-secondary" />
                  <h3 className="text-2xl font-bold text-foreground">{t('videoTitle')}</h3>
                </div>
                <p className="max-w-3xl text-sm text-foreground/65">{t('videoDescription')}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {videoResources.map((video) => (
                <article
                  key={video.src}
                  className="resources-video-card rounded-2xl overflow-hidden"
                >
                  <video
                    className="aspect-video w-full bg-black object-cover"
                    controls
                    preload="metadata"
                    poster={video.poster}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="p-4">
                    <h4 className="text-base font-semibold text-foreground">{video.title}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-10">
          <div className="resources-video-panel rounded-3xl p-5 md:p-6">
            <div className="flex items-center gap-3 mb-5">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">{t('docsTitle')}</h3>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
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

          <div className="resources-video-panel rounded-3xl p-5 md:p-6">
            <div className="flex items-center gap-3 mb-5">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">{t('socialTitle')}</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
