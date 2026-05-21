"use client"

import { ExternalLink } from "lucide-react"

const mediaMentions = [
  {
    category: "生态 / 工具",
    name: "AVE",
    label: "AVE 官宣",
    url: "https://x.com/AveaiGlobal/status/2007729324074643696",
  },
  {
    category: "生态 / 活动",
    name: "AVE",
    label: "AVE 黑客松冠军",
    url: "https://x.com/aveai_info/status/2045865899316609122?s=46",
  },
  {
    category: "生态 / 活动",
    name: "HashKey",
    label: "HashKey 黑客松亚军",
    url: "https://x.com/hskchain/status/2047529535550460253?s=46",
  },
  {
    category: "DEX / 生态",
    name: "BNB Swap",
    label: "BNB Swap 官方发文",
    url: "https://x.com/BNBSwap/status/1983119267479568599",
  },
  {
    category: "媒体 / 社区",
    name: "BSC Daily",
    label: "BSC Daily 官方发文",
    url: "https://x.com/bsc_daily/status/1982834486757970387",
  },
  {
    category: "公链生态",
    name: "Conflux",
    label: "Conflux 官宣发文",
    url: "https://x.com/conflux_network/status/2031408301137682645?s=46",
  },
  {
    category: "媒体",
    name: "BlockBeats",
    label: "BlockBeats 媒体发文",
    url: "https://m.theblockbeats.top/flash/345283",
  },
  {
    category: "媒体",
    name: "BlockBeats",
    label: "BlockBeats 媒体发文",
    url: "https://m.theblockbeats.top/flash/346265",
  },
  {
    category: "媒体",
    name: "ChainCatcher",
    label: "ChainCatcher 官方发文",
    url: "https://h.chaincatcher.com/article/2261865",
  },
  {
    category: "交易所 / 内容平台",
    name: "Binance Square",
    label: "Binance Square 官方发文",
    url: "https://www.binance.com/zh-CN/square/post/03-27-2026-gana-conflux-bitunion-web3-305977037417490",
  },
  {
    category: "交易所 / 内容平台",
    name: "Binance Square",
    label: "Binance Square 官方发文",
    url: "https://www.binance.com/en-BH/square/post/05-11-2026-gana-conflux-payfi-321882608711473",
  },
  {
    category: "交易所",
    name: "Bitget",
    label: "Bitget 官方发文",
    url: "https://www.bitget.com/zh-TC/news/detail/12560605309241",
  },
  {
    category: "交易所",
    name: "Bitget",
    label: "Bitget 官方发文",
    url: "https://www.bitget.com/zh-TC/news/detail/12560605406191",
  },
  {
    category: "数据平台",
    name: "CryptoRank",
    label: "CryptoRank 官方发文",
    url: "https://cryptorank.io/news/feed/7f3aa-2263881",
  },
  {
    category: "交易所",
    name: "KuCoin",
    label: "KuCoin 官方发文",
    url: "https://www.kucoin.com/zh-hant/news/flash/gana-launches-conflux-payfi-fiat-withdrawal-feature",
  },
  {
    category: "交易所",
    name: "Phemex",
    label: "Phemex 官方发文",
    url: "https://phemex.com/news/article/gana-introduces-fiat-withdrawal-on-conflux-payfi-80525",
  },
  {
    category: "交易所",
    name: "Gate.com",
    label: "Gate.com 官方发文",
    url: "https://www.gate.com/zh/news/detail/gana-launches-conflux-payfi-withdrawal-feature-supporting-usd-cny-krw-jpy-21002703",
  },
  {
    category: "交易所 / 行情",
    name: "OKX",
    label: "OKX 官方发文",
    url: "https://tr.okx.com/convert/cfx-to-ghs",
  },
]

function getCategoryColor(category: string) {
  if (category.includes("交易所")) return "bg-[#00E1FF]/10 text-[#00E1FF] border-[#00E1FF]/30"
  if (category.includes("媒体")) return "bg-[#FF2D92]/10 text-[#FF2D92] border-[#FF2D92]/30"
  if (category.includes("生态") || category.includes("公链")) return "bg-[#8B1FFF]/10 text-[#8B1FFF] border-[#8B1FFF]/30"
  if (category.includes("DEX")) return "bg-[#A168ED]/10 text-[#A168ED] border-[#A168ED]/30"
  if (category.includes("数据")) return "bg-[#00E1FF]/10 text-[#00E1FF] border-[#00E1FF]/30"
  return "bg-[#8B1FFF]/10 text-[#8B1FFF] border-[#8B1FFF]/30"
}

export function MediaMentions() {
  return (
    <section id="media" className="py-24 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg star-bg opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F5F5F7]">
            媒体宣发与生态背书
          </h2>
          <p className="text-[#F5F5F7]/60 max-w-2xl mx-auto text-lg">
            GANA 持续获得钱包、交易所、公链、数据平台与 Web3 媒体的关注。以下资料可作为官网早期的媒体链接与生态动态入口。
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
              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border mb-3 ${getCategoryColor(item.category)}`}>
                {item.category}
              </span>
              
              {/* Name */}
              <h3 className="text-lg font-semibold text-[#F5F5F7] mb-2 group-hover:text-[#8B1FFF] transition-colors">
                {item.name}
              </h3>
              
              {/* Label */}
              <p className="text-[#F5F5F7]/60 text-sm mb-4">
                {item.label}
              </p>
              
              {/* CTA */}
              <div className="flex items-center gap-2 text-sm font-medium text-[#00E1FF] group-hover:text-[#FF2D92] transition-colors">
                查看原文
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
