"use client"

import { ExternalLink } from "lucide-react"
import { useTranslations } from "next-intl"

const mediaMentions = [
  {
    categoryKey: "ecosystem",
    name: "AVE",
    labelKey: "ave_announcement",
    url: "https://x.com/AveaiGlobal/status/2007729324074643696",
  },
  {
    categoryKey: "ecosystem",
    name: "AVE",
    labelKey: "ave_hackathon",
    url: "https://x.com/aveai_info/status/2045865899316609122?s=46",
  },
  {
    categoryKey: "ecosystem",
    name: "HashKey",
    labelKey: "hashkey_hackathon",
    url: "https://x.com/hskchain/status/2047529535550460253?s=46",
  },
  {
    categoryKey: "dex",
    name: "BNB Swap",
    labelKey: "bnbswap_post",
    url: "https://x.com/BNBSwap/status/1983119267479568599",
  },
  {
    categoryKey: "media",
    name: "BSC Daily",
    labelKey: "bscdaily_post",
    url: "https://x.com/bsc_daily/status/1982834486757970387",
  },
  {
    categoryKey: "chain",
    name: "Conflux",
    labelKey: "conflux_post",
    url: "https://x.com/conflux_network/status/2031408301137682645?s=46",
  },
  {
    categoryKey: "media",
    name: "BlockBeats",
    labelKey: "blockbeats_post",
    url: "https://m.theblockbeats.top/flash/345283",
  },
  {
    categoryKey: "media",
    name: "BlockBeats",
    labelKey: "blockbeats_post2",
    url: "https://m.theblockbeats.top/flash/346265",
  },
  {
    categoryKey: "media",
    name: "ChainCatcher",
    labelKey: "chaincatcher_post",
    url: "https://h.chaincatcher.com/article/2261865",
  },
  {
    categoryKey: "exchange",
    name: "Binance Square",
    labelKey: "binance_post",
    url: "https://www.binance.com/zh-CN/square/post/03-27-2026-gana-conflux-bitunion-web3-305977037417490",
  },
  {
    categoryKey: "exchange",
    name: "Binance Square",
    labelKey: "binance_post2",
    url: "https://www.binance.com/en-BH/square/post/05-11-2026-gana-conflux-payfi-321882608711473",
  },
  {
    categoryKey: "exchange",
    name: "Bitget",
    labelKey: "bitget_post",
    url: "https://www.bitget.com/zh-TC/news/detail/12560605309241",
  },
  {
    categoryKey: "exchange",
    name: "Bitget",
    labelKey: "bitget_post2",
    url: "https://www.bitget.com/zh-TC/news/detail/12560605406191",
  },
  {
    categoryKey: "data",
    name: "CryptoRank",
    labelKey: "cryptorank_post",
    url: "https://cryptorank.io/news/feed/7f3aa-2263881",
  },
  {
    categoryKey: "exchange",
    name: "KuCoin",
    labelKey: "kucoin_post",
    url: "https://www.kucoin.com/zh-hant/news/flash/gana-launches-conflux-payfi-fiat-withdrawal-feature",
  },
  {
    categoryKey: "exchange",
    name: "Phemex",
    labelKey: "phemex_post",
    url: "https://phemex.com/news/article/gana-introduces-fiat-withdrawal-on-conflux-payfi-80525",
  },
  {
    categoryKey: "exchange",
    name: "Gate.com",
    labelKey: "gate_post",
    url: "https://www.gate.com/zh/news/detail/gana-launches-conflux-payfi-withdrawal-feature-supporting-usd-cny-krw-jpy-21002703",
  },
  {
    categoryKey: "exchange",
    name: "OKX",
    labelKey: "okx_post",
    url: "https://tr.okx.com/convert/cfx-to-ghs",
  },
]

// Label translations (kept separate as they're specific to media items)
const labelTranslations: Record<string, Record<string, string>> = {
  "zh-CN": {
    ave_announcement: "AVE 官宣",
    ave_hackathon: "AVE 黑客松冠军",
    hashkey_hackathon: "HashKey 黑客松亚军",
    bnbswap_post: "BNB Swap 官方发文",
    bscdaily_post: "BSC Daily 官方发文",
    conflux_post: "Conflux 官宣发文",
    blockbeats_post: "BlockBeats 媒体发文",
    blockbeats_post2: "BlockBeats 媒体发文",
    chaincatcher_post: "ChainCatcher 官方发文",
    binance_post: "Binance Square 官方发文",
    binance_post2: "Binance Square 官方发文",
    bitget_post: "Bitget 官方发文",
    bitget_post2: "Bitget 官方发文",
    cryptorank_post: "CryptoRank 官方发文",
    kucoin_post: "KuCoin 官方发文",
    phemex_post: "Phemex 官方发文",
    gate_post: "Gate.com 官方发文",
    okx_post: "OKX 官方发文",
  },
  "zh-TW": {
    ave_announcement: "AVE 官宣",
    ave_hackathon: "AVE 黑客松冠軍",
    hashkey_hackathon: "HashKey 黑客松亞軍",
    bnbswap_post: "BNB Swap 官方發文",
    bscdaily_post: "BSC Daily 官方發文",
    conflux_post: "Conflux 官宣發文",
    blockbeats_post: "BlockBeats 媒體發文",
    blockbeats_post2: "BlockBeats 媒體發文",
    chaincatcher_post: "ChainCatcher 官方發文",
    binance_post: "Binance Square 官方發文",
    binance_post2: "Binance Square 官方發文",
    bitget_post: "Bitget 官方發文",
    bitget_post2: "Bitget 官方發文",
    cryptorank_post: "CryptoRank 官方發文",
    kucoin_post: "KuCoin 官方發文",
    phemex_post: "Phemex 官方發文",
    gate_post: "Gate.com 官方發文",
    okx_post: "OKX 官方發文",
  },
  en: {
    ave_announcement: "AVE Announcement",
    ave_hackathon: "AVE Hackathon Winner",
    hashkey_hackathon: "HashKey Hackathon Runner-up",
    bnbswap_post: "BNB Swap Official Post",
    bscdaily_post: "BSC Daily Official Post",
    conflux_post: "Conflux Official Post",
    blockbeats_post: "BlockBeats Media Post",
    blockbeats_post2: "BlockBeats Media Post",
    chaincatcher_post: "ChainCatcher Official Post",
    binance_post: "Binance Square Official Post",
    binance_post2: "Binance Square Official Post",
    bitget_post: "Bitget Official Post",
    bitget_post2: "Bitget Official Post",
    cryptorank_post: "CryptoRank Official Post",
    kucoin_post: "KuCoin Official Post",
    phemex_post: "Phemex Official Post",
    gate_post: "Gate.com Official Post",
    okx_post: "OKX Official Post",
  },
  ja: {
    ave_announcement: "AVE 公式発表",
    ave_hackathon: "AVE ハッカソン優勝",
    hashkey_hackathon: "HashKey ハッカソン準優勝",
    bnbswap_post: "BNB Swap 公式投稿",
    bscdaily_post: "BSC Daily 公式投稿",
    conflux_post: "Conflux 公式発表",
    blockbeats_post: "BlockBeats メディア投稿",
    blockbeats_post2: "BlockBeats メディア投稿",
    chaincatcher_post: "ChainCatcher 公式投稿",
    binance_post: "Binance Square 公式投稿",
    binance_post2: "Binance Square 公式投稿",
    bitget_post: "Bitget 公式投稿",
    bitget_post2: "Bitget 公式投稿",
    cryptorank_post: "CryptoRank 公式投稿",
    kucoin_post: "KuCoin 公式投稿",
    phemex_post: "Phemex 公式投稿",
    gate_post: "Gate.com 公式投稿",
    okx_post: "OKX 公式投稿",
  },
  ko: {
    ave_announcement: "AVE 공식 발표",
    ave_hackathon: "AVE 해커톤 우승",
    hashkey_hackathon: "HashKey 해커톤 준우승",
    bnbswap_post: "BNB Swap 공식 게시물",
    bscdaily_post: "BSC Daily 공식 게시물",
    conflux_post: "Conflux 공식 발표",
    blockbeats_post: "BlockBeats 미디어 게시물",
    blockbeats_post2: "BlockBeats 미디어 게시물",
    chaincatcher_post: "ChainCatcher 공식 게시물",
    binance_post: "Binance Square 공식 게시물",
    binance_post2: "Binance Square 공식 게시물",
    bitget_post: "Bitget 공식 게시물",
    bitget_post2: "Bitget 공식 게시물",
    cryptorank_post: "CryptoRank 공식 게시물",
    kucoin_post: "KuCoin 공식 게시물",
    phemex_post: "Phemex 공식 게시물",
    gate_post: "Gate.com 공식 게시물",
    okx_post: "OKX 공식 게시물",
  },
}

function getCategoryColor(categoryKey: string) {
  if (categoryKey === "exchange") return "bg-secondary/10 text-secondary border-secondary/30"
  if (categoryKey === "media") return "bg-accent/10 text-accent border-accent/30"
  if (categoryKey === "ecosystem" || categoryKey === "chain") return "bg-primary/10 text-primary border-primary/30"
  if (categoryKey === "dex") return "bg-secondary/10 text-secondary border-secondary/30"
  if (categoryKey === "data") return "bg-primary/10 text-primary border-primary/30"
  return "bg-primary/10 text-primary border-primary/30"
}

export function MediaMentions() {
  const t = useTranslations('media')
  const locale = t('title').includes('媒体') ? 'zh-CN' : 
                 t('title').includes('媒體') ? 'zh-TW' :
                 t('title').includes('メディア') ? 'ja' :
                 t('title').includes('미디어') ? 'ko' : 'en'

  const getLabel = (labelKey: string) => {
    return labelTranslations[locale]?.[labelKey] || labelTranslations['en'][labelKey] || labelKey
  }

  const getCategory = (categoryKey: string) => {
    return t(`categories.${categoryKey}`)
  }

  return (
    <section id="media" className="py-24 px-4 relative bg-section-alt">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg star-bg opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('title')}
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            {t('subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mediaMentions.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card glass-card-hover rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Category Tag */}
              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border mb-3 ${getCategoryColor(item.categoryKey)}`}>
                {getCategory(item.categoryKey)}
              </span>
              
              {/* Name */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              
              {/* Label */}
              <p className="text-foreground/60 text-sm mb-4">
                {getLabel(item.labelKey)}
              </p>
              
              {/* CTA */}
              <div className="flex items-center gap-2 text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                {t('viewMore')}
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
