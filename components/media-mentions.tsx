"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { useTranslations, useLocale } from "@/i18n/client"

const mediaMentions = [
  {
    categoryKey: "ecosystem",
    name: "AVE",
    labelKey: "ave_announcement",
    summaryKey: "ave_announcement",
    logo: "/media-logos/ave.png",
    url: "https://x.com/AveaiGlobal/status/2007729324074643696",
  },
  {
    categoryKey: "ecosystem",
    name: "AVE",
    labelKey: "ave_hackathon",
    summaryKey: "ave_hackathon",
    logo: "/media-logos/ave.png",
    url: "https://x.com/aveai_info/status/2045865899316609122?s=46",
  },
  {
    categoryKey: "ecosystem",
    name: "HashKey",
    labelKey: "hashkey_hackathon",
    summaryKey: "hashkey_hackathon",
    logo: "/media-logos/hashkey.png",
    url: "https://x.com/hskchain/status/2047529535550460253?s=46",
  },
  {
    categoryKey: "dex",
    name: "BNB Swap",
    labelKey: "bnbswap_post",
    summaryKey: "bnbswap_post",
    logo: "/media-logos/bnb-swap.png",
    url: "https://x.com/BNBSwap/status/1983119267479568599",
  },
  {
    categoryKey: "media",
    name: "BSC Daily",
    labelKey: "bscdaily_post",
    summaryKey: "bscdaily_post",
    logo: "/media-logos/bsc-daily.png",
    url: "https://x.com/bsc_daily/status/1982834486757970387",
  },
  {
    categoryKey: "chain",
    name: "Conflux",
    labelKey: "conflux_post",
    summaryKey: "conflux_post",
    logo: "/media-logos/conflux.png",
    url: "https://x.com/conflux_network/status/2031408301137682645?s=46",
  },
  {
    categoryKey: "media",
    name: "BlockBeats",
    labelKey: "blockbeats_post",
    summaryKey: "blockbeats_post",
    logo: "/media-logos/blockbeats.png",
    url: "https://m.theblockbeats.top/flash/345283",
  },
  {
    categoryKey: "media",
    name: "BlockBeats",
    labelKey: "blockbeats_post2",
    summaryKey: "blockbeats_post2",
    logo: "/media-logos/blockbeats.png",
    url: "https://m.theblockbeats.top/flash/346265",
  },
  {
    categoryKey: "media",
    name: "ChainCatcher",
    labelKey: "chaincatcher_post",
    summaryKey: "chaincatcher_post",
    logo: "/media-logos/chaincatcher.png",
    url: "https://h.chaincatcher.com/article/2261865",
  },
  {
    categoryKey: "exchange",
    name: "Binance Square",
    labelKey: "binance_post",
    summaryKey: "binance_post",
    logo: "/media-logos/binance.png",
    url: "https://www.binance.com/zh-CN/square/post/03-27-2026-gana-conflux-bitunion-web3-305977037417490",
  },
  {
    categoryKey: "exchange",
    name: "Binance Square",
    labelKey: "binance_post2",
    summaryKey: "binance_post2",
    logo: "/media-logos/binance.png",
    url: "https://www.binance.com/en-BH/square/post/05-11-2026-gana-conflux-payfi-321882608711473",
  },
  {
    categoryKey: "exchange",
    name: "Bitget",
    labelKey: "bitget_post",
    summaryKey: "bitget_post",
    logo: "/media-logos/bitget.png",
    url: "https://www.bitget.com/zh-TC/news/detail/12560605309241",
  },
  {
    categoryKey: "exchange",
    name: "Bitget",
    labelKey: "bitget_post2",
    summaryKey: "bitget_post2",
    logo: "/media-logos/bitget.png",
    url: "https://www.bitget.com/zh-TC/news/detail/12560605406191",
  },
  {
    categoryKey: "data",
    name: "CryptoRank",
    labelKey: "cryptorank_post",
    summaryKey: "cryptorank_post",
    logo: "/media-logos/cryptorank.png",
    url: "https://cryptorank.io/news/feed/7f3aa-2263881",
  },
  {
    categoryKey: "exchange",
    name: "KuCoin",
    labelKey: "kucoin_post",
    summaryKey: "kucoin_post",
    logo: "/media-logos/kucoin.png",
    url: "https://www.kucoin.com/zh-hant/news/flash/gana-launches-conflux-payfi-fiat-withdrawal-feature",
  },
  {
    categoryKey: "exchange",
    name: "Phemex",
    labelKey: "phemex_post",
    summaryKey: "phemex_post",
    logo: "/media-logos/phemex.png",
    url: "https://phemex.com/news/article/gana-introduces-fiat-withdrawal-on-conflux-payfi-80525",
  },
  {
    categoryKey: "exchange",
    name: "Gate.com",
    labelKey: "gate_post",
    summaryKey: "gate_post",
    logo: "/media-logos/gate.png",
    url: "https://www.gate.com/zh/news/detail/gana-launches-conflux-payfi-withdrawal-feature-supporting-usd-cny-krw-jpy-21002703",
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
  },
}

const summaryTranslations: Record<string, Record<string, string>> = {
  "zh-CN": {
    ave_announcement: "AVE 官方发布 GANA 生态动态，提升项目在链上交易用户中的曝光。",
    ave_hackathon: "GANA 在 AVE 黑客松中获得冠军，展示 PayFi 方案的产品竞争力。",
    hashkey_hackathon: "GANA 在 HashKey 生态黑客松中获得亚军，体现公链生态认可。",
    bnbswap_post: "BNB Swap 发布 GANA 相关内容，覆盖 DEX 与 BNB Chain 用户。",
    bscdaily_post: "BSC Daily 报道 GANA 动态，扩大 BNB Chain 社区传播。",
    conflux_post: "Conflux 官方发布 GANA PayFi 动态，强调双方在支付生态上的协同。",
    blockbeats_post: "BlockBeats 简讯报道 GANA 上线 Conflux PayFi 货币提现功能。",
    blockbeats_post2: "BlockBeats 报道 AVE 与 GANA Payment 达成全球增长协同。",
    chaincatcher_post: "ChainCatcher 报道 GANA Payment 代币接入支付生态，聚焦 Web3 支付场景。",
    binance_post: "Binance Square 介绍 GANA、Conflux 与 BitUnion 的 Web3 支付生态进展。",
    binance_post2: "Binance Square 聚焦 GANA Conflux PayFi 与货币提现能力上线。",
    bitget_post: "Bitget 报道 GANA 支付生态进展，补充交易所资讯渠道覆盖。",
    bitget_post2: "Bitget 跟进 GANA 生态动态，强化多平台市场曝光。",
    cryptorank_post: "CryptoRank 收录 GANA 上线 Conflux PayFi 货币提现功能的市场快讯。",
    kucoin_post: "KuCoin 快讯报道 GANA 推出 Conflux PayFi 法币提现功能。",
    phemex_post: "Phemex 报道 GANA 在 Conflux PayFi 上推出法币提现能力。",
    gate_post: "Gate.com 报道 GANA PayFi 提现功能，覆盖 USD、CNY、KRW、JPY 等场景。",
  },
  "zh-TW": {
    ave_announcement: "AVE 官方發布 GANA 生態動態，提升項目在鏈上交易用戶中的曝光。",
    ave_hackathon: "GANA 在 AVE 黑客松中獲得冠軍，展示 PayFi 方案的產品競爭力。",
    hashkey_hackathon: "GANA 在 HashKey 生態黑客松中獲得亞軍，體現公鏈生態認可。",
    bnbswap_post: "BNB Swap 發布 GANA 相關內容，覆蓋 DEX 與 BNB Chain 用戶。",
    bscdaily_post: "BSC Daily 報道 GANA 動態，擴大 BNB Chain 社群傳播。",
    conflux_post: "Conflux 官方發布 GANA PayFi 動態，強調雙方在支付生態上的協同。",
    blockbeats_post: "BlockBeats 簡訊報道 GANA 上線 Conflux PayFi 貨幣提現功能。",
    blockbeats_post2: "BlockBeats 報道 AVE 與 GANA Payment 達成全球增長協同。",
    chaincatcher_post: "ChainCatcher 報道 GANA Payment 代幣接入支付生態，聚焦 Web3 支付場景。",
    binance_post: "Binance Square 介紹 GANA、Conflux 與 BitUnion 的 Web3 支付生態進展。",
    binance_post2: "Binance Square 聚焦 GANA Conflux PayFi 與貨幣提現能力上線。",
    bitget_post: "Bitget 報道 GANA 支付生態進展，補充交易所資訊渠道覆蓋。",
    bitget_post2: "Bitget 跟進 GANA 生態動態，強化多平台市場曝光。",
    cryptorank_post: "CryptoRank 收錄 GANA 上線 Conflux PayFi 貨幣提現功能的市場快訊。",
    kucoin_post: "KuCoin 快訊報道 GANA 推出 Conflux PayFi 法幣提現功能。",
    phemex_post: "Phemex 報道 GANA 在 Conflux PayFi 上推出法幣提現能力。",
    gate_post: "Gate.com 報道 GANA PayFi 提現功能，覆蓋 USD、CNY、KRW、JPY 等場景。",
  },
  en: {
    ave_announcement: "AVE shared GANA ecosystem updates, expanding visibility among on-chain trading users.",
    ave_hackathon: "GANA won the AVE hackathon, highlighting the product strength of its PayFi approach.",
    hashkey_hackathon: "GANA earned runner-up recognition in the HashKey ecosystem hackathon.",
    bnbswap_post: "BNB Swap published GANA-related coverage for DEX and BNB Chain users.",
    bscdaily_post: "BSC Daily covered GANA updates, extending reach across the BNB Chain community.",
    conflux_post: "Conflux shared GANA PayFi news, highlighting payment ecosystem collaboration.",
    blockbeats_post: "BlockBeats covered GANA launching Conflux PayFi currency withdrawal features.",
    blockbeats_post2: "BlockBeats reported AVE and GANA Payment forming a global growth collaboration.",
    chaincatcher_post: "ChainCatcher covered GANA Payment token integration into the payment ecosystem.",
    binance_post: "Binance Square introduced Web3 payment progress across GANA, Conflux and BitUnion.",
    binance_post2: "Binance Square focused on GANA Conflux PayFi and currency withdrawal capability.",
    bitget_post: "Bitget covered GANA payment ecosystem progress through an exchange news channel.",
    bitget_post2: "Bitget followed GANA ecosystem updates, strengthening multi-platform market exposure.",
    cryptorank_post: "CryptoRank listed GANA's Conflux PayFi currency withdrawal news in its market feed.",
    kucoin_post: "KuCoin reported GANA launching fiat withdrawal functionality on Conflux PayFi.",
    phemex_post: "Phemex covered GANA introducing fiat withdrawal capability on Conflux PayFi.",
    gate_post: "Gate.com covered GANA PayFi withdrawal support for USD, CNY, KRW, JPY and more.",
  },
  ja: {
    ave_announcement: "AVE が GANA のエコシステム動向を発信し、オンチェーン取引ユーザーへの露出を拡大。",
    ave_hackathon: "GANA は AVE ハッカソンで優勝し、PayFi 方案の競争力を示しました。",
    hashkey_hackathon: "GANA は HashKey エコシステムのハッカソンで準優勝し、公链生态での評価を獲得。",
    bnbswap_post: "BNB Swap が GANA 関連情報を発信し、DEX と BNB Chain ユーザーへリーチ。",
    bscdaily_post: "BSC Daily が GANA の動向を報道し、BNB Chain コミュニティでの拡散を後押し。",
    conflux_post: "Conflux 公式が GANA PayFi の動向を発信し、決済エコシステムでの協業を強調。",
    blockbeats_post: "BlockBeats が GANA の Conflux PayFi 通貨出金機能上线を報道。",
    blockbeats_post2: "BlockBeats が AVE と GANA Payment のグローバル成長協同を報道。",
    chaincatcher_post: "ChainCatcher が GANA Payment トークンの支付生态接入を報道。",
    binance_post: "Binance Square が GANA、Conflux、BitUnion の Web3 決済進展を紹介。",
    binance_post2: "Binance Square が GANA Conflux PayFi と通貨出金機能に注目。",
    bitget_post: "Bitget が GANA の決済エコシステム進展を取引所ニュースとして掲載。",
    bitget_post2: "Bitget が GANA 生態の更新をフォローし、多平台での露出を補強。",
    cryptorank_post: "CryptoRank が GANA の Conflux PayFi 通貨出金ニュースをマーケットフィードに収録。",
    kucoin_post: "KuCoin が GANA の Conflux PayFi 法定通貨出金機能を報道。",
    phemex_post: "Phemex が GANA の Conflux PayFi 法定通貨出金機能を紹介。",
    gate_post: "Gate.com が GANA PayFi の USD、CNY、KRW、JPY などの出金対応を報道。",
  },
  ko: {
    ave_announcement: "AVE가 GANA 생태계 소식을 공유해 온체인 거래 이용자 대상 노출을 확대했습니다.",
    ave_hackathon: "GANA는 AVE 해커톤에서 우승하며 PayFi 솔루션의 제품 경쟁력을 보여줬습니다.",
    hashkey_hackathon: "GANA는 HashKey 생태계 해커톤에서 준우승하며 퍼블릭체인 생태계의 인정을 받았습니다.",
    bnbswap_post: "BNB Swap이 GANA 관련 콘텐츠를 게시해 DEX와 BNB Chain 이용자에게 도달했습니다.",
    bscdaily_post: "BSC Daily가 GANA 동향을 다루며 BNB Chain 커뮤니티 확산을 강화했습니다.",
    conflux_post: "Conflux 공식 채널이 GANA PayFi 소식을 공유하며 결제 생태계 협력을 강조했습니다.",
    blockbeats_post: "BlockBeats가 GANA의 Conflux PayFi 통화 출금 기능 출시를 보도했습니다.",
    blockbeats_post2: "BlockBeats가 AVE와 GANA Payment의 글로벌 성장 협력을 보도했습니다.",
    chaincatcher_post: "ChainCatcher가 GANA Payment 토큰의 결제 생태계 접속을 보도했습니다.",
    binance_post: "Binance Square가 GANA, Conflux, BitUnion의 Web3 결제 생태계 진전을 소개했습니다.",
    binance_post2: "Binance Square가 GANA Conflux PayFi와 통화 출금 기능에 주목했습니다.",
    bitget_post: "Bitget이 GANA 결제 생태계 진전을 거래소 뉴스 채널로 다뤘습니다.",
    bitget_post2: "Bitget이 GANA 생태계 업데이트를 후속 보도해 다중 플랫폼 노출을 강화했습니다.",
    cryptorank_post: "CryptoRank가 GANA의 Conflux PayFi 통화 출금 소식을 시장 피드에 수록했습니다.",
    kucoin_post: "KuCoin이 GANA의 Conflux PayFi 법정화폐 출금 기능 출시를 보도했습니다.",
    phemex_post: "Phemex가 GANA의 Conflux PayFi 법정화폐 출금 기능을 소개했습니다.",
    gate_post: "Gate.com이 USD, CNY, KRW, JPY 등 GANA PayFi 출금 지원을 보도했습니다.",
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
  const locale = useLocale()

  const getLabel = (labelKey: string) => {
    return labelTranslations[locale]?.[labelKey] || labelTranslations['en'][labelKey] || labelKey
  }

  const getSummary = (summaryKey: string) => {
    return summaryTranslations[locale]?.[summaryKey] || summaryTranslations['en'][summaryKey] || summaryKey
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
              className="group glass-card glass-card-hover flex min-h-[238px] flex-col rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-white/90 p-2 shadow-sm">
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-foreground/55">
                      {getLabel(item.labelKey)}
                    </p>
                  </div>
                </div>
                <span className={`shrink-0 px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(item.categoryKey)}`}>
                  {getCategory(item.categoryKey)}
                </span>
              </div>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-foreground/68">
                {getSummary(item.summaryKey)}
              </p>

              <div className="mt-auto flex items-center gap-2 text-sm font-medium text-secondary group-hover:text-primary transition-colors">
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
