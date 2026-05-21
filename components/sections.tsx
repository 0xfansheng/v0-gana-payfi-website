import { ArrowRight, Zap, Shield, Users, Wallet, CreditCard, FileCheck, Scale, Clock, Globe } from "lucide-react"

const metrics = [
  { value: "0.1%-0.5%", label: "目标统一支付费率" },
  { value: "24/7", label: "LP 池实时清算" },
  { value: "30%-50%", label: "手续费回流 LP 规划" },
  { value: "USDG", label: "稳定币支付网络规划" },
]

const tags = [
  "Web3 Wallet Gateway",
  "Virtual Payment Card",
  "Proof-of-Pay",
  "LP-supported Clearing",
  "DAO Governance",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0F0A1A]">
        <div className="absolute inset-0 grid-bg star-bg" />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A855F7]/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C084FC]/15 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#7C3AED]/10 rounded-full blur-[96px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/30 mb-8">
          <span className="w-2 h-2 bg-[#C084FC] rounded-full animate-pulse" />
          <span className="text-sm text-[#F5F5F7]/80">BNB Smart Chain · Live</span>
        </div>

        {/* H1 */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="gradient-text">GANA · PayFi</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#F5F5F7]/70 max-w-3xl mx-auto mb-8 leading-relaxed">
          全球首个产生收益的 Web3.0 支付基础设施。以稳定币为记账单位，以 LP 流动性池支撑清算，连接 Web2 商户、Web3 钱包与链上资产。
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://www.goldgana.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-btn px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2"
          >
            链接钱包
            <Wallet className="w-5 h-5" />
          </a>
          <a
            href="https://gana-payment.gitbook.io/whitepaper"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-[#A855F7]/50 text-[#F5F5F7] font-semibold text-lg hover:bg-[#A855F7]/10 transition-colors flex items-center gap-2"
          >
            阅读白皮书
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
              <div className="text-xs md:text-sm text-[#F5F5F7]/60">
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
  return (
    <section id="product" className="py-24 px-4 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F5F5F7]">
            把支付从成本中心，<br className="md:hidden" />变成参与者共享的价值网络
          </h2>
          <p className="text-[#F5F5F7]/70 max-w-3xl mx-auto text-lg leading-relaxed">
            GANA 不是单一钱包入口，而是跨链支付网关、虚拟卡、链上清算和生态分润的组合。用户、商户、LP 与合作方都能在同一套支付网络中获得角色和权益。
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-5 py-2.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/30 text-[#F5F5F7] text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

const mechanisms = [
  {
    icon: FileCheck,
    title: "链上优先",
    description: "每笔支付生成 Proof-of-Pay，记录金额、时间与地址，面向对账、争议处理和开放数据合作。",
    color: "#A855F7",
  },
  {
    icon: Zap,
    title: "LP 清算支撑",
    description: "LP 流动性池提供 24/7 清算能力，目标是减少跨境支付等待，并将部分手续费回流给 LP。",
    color: "#C084FC",
  },
  {
    icon: Shield,
    title: "隐形合规",
    description: "通过区域白名单、持牌合作伙伴和风险筛查，把复杂合规留在平台层，降低用户和商户接入门槛。",
    color: "#7C3AED",
  },
]

export function MechanismSection() {
  return (
    <section id="mechanism" className="py-24 px-4 relative bg-[#1A1228]">
      <div className="absolute inset-0 star-bg opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F5F5F7]">
            三层 PayFi 基础设施
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mechanisms.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-8 group"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <item.icon className="w-7 h-7" style={{ color: item.color }} />
              </div>
              <h3 className="text-xl font-semibold text-[#F5F5F7] mb-4">
                {item.title}
              </h3>
              <p className="text-[#F5F5F7]/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const painPoints = [
  {
    icon: Globe,
    problem: "跨境高费率与慢结算",
    solution: "稳定币记账减少汇损，LP 池实时清算，目标费率 0.1%-0.5%。",
  },
  {
    icon: CreditCard,
    problem: "Web3 资产孤岛",
    solution: "虚拟支付卡和钱包互通协议，让链上资产进入 Web2 消费与订阅场景。",
  },
  {
    icon: Scale,
    problem: "支付利润被垄断",
    solution: "把手续费分配给 LP、用户积分和生态激励。",
  },
  {
    icon: Shield,
    problem: "合规门槛过高",
    solution: "通过持牌合作与风险策略帮助中小商户接入全球支付。",
  },
]

export function PainPointsSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F5F5F7]">
            痛点与解决方案
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-6 flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#A855F7]/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-[#A855F7]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#C084FC] mb-2">
                  {item.problem}
                </h3>
                <p className="text-[#F5F5F7]/70">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const scenarios = [
  {
    title: "C 端用户",
    icon: Users,
    color: "#A855F7",
    items: [
      "用链上资产支付 Web2 订阅、礼品卡和云服务",
      "跨境自由职业者可使用稳定币即时结算",
      "高频支付用户获得积分、返利或 LP 权益加成",
    ],
  },
  {
    title: "B 端商户",
    icon: CreditCard,
    color: "#C084FC",
    items: [
      "同时接入稳定币与法币通道，减少跨境费用",
      "链上付款凭证提升对账效率，降低争议率",
      "小型跨境商户以更低门槛进入全球市场",
    ],
  },
  {
    title: "生态伙伴",
    icon: Globe,
    color: "#7C3AED",
    items: [
      "钱包接入支付功能，提高用户粘性和交易频次",
      "法币出入金服务商扩大稳定币支付使用量",
      "风控与数据合作方基于支付数据优化模型",
    ],
  },
]

export function ScenariosSection() {
  return (
    <section id="scenarios" className="py-24 px-4 relative bg-[#A78BFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F0A1A]">
            三类参与者
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#A855F7]/10 hover:shadow-xl hover:border-[#A855F7]/20 transition-all"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${scenario.color}15` }}
              >
                <scenario.icon className="w-7 h-7" style={{ color: scenario.color }} />
              </div>
              <h3 className="text-xl font-semibold text-[#0F0A1A] mb-4">
                {scenario.title}
              </h3>
              <ul className="space-y-3">
                {scenario.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#0F0A1A]/70">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: scenario.color }} />
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

const securityItems = [
  "钱包、合约与平台体系的安全审计信息聚合展示",
  "多��审计、漏洞赏金、LP 储备线与高风险支付暂停机制",
  "制裁地址筛查、区域白名单、合规伙伴和基础 KYC 说明",
]

export function SecuritySection() {
  return (
    <section className="py-24 px-4 relative bg-[#1A1228]">
      <div className="absolute inset-0 star-bg opacity-50" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-[#C084FC]/10 flex items-center justify-center">
              <Shield className="w-7 h-7 text-[#C084FC]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F5F7]">
              安全、审计与合规
            </h2>
          </div>
          
          <ul className="space-y-4">
            {securityItems.map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-[#F5F5F7]/80">
                <span className="w-2 h-2 rounded-full bg-[#C084FC] mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const roadmapItems = [
  {
    period: "2025 Q2-Q4",
    items: ["白皮书发布", "核心团队组建", "支付清算合约", "LP 合约", "审计与初始流动性部署"],
  },
  {
    period: "2025",
    items: ["接入主流 Web3 钱包", "拓展 Web2 商户", "虚拟卡上线", "区域持牌伙伴"],
  },
  {
    period: "2026",
    items: ["多链钱包互通", "USDG 规划", "法币出入金", "实体卡", "API 集成"],
  },
  {
    period: "2027+",
    items: ["开放生态 API", "DAO 自治", "主要市场合规覆盖", "跨机构支付网络"],
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 px-4 relative">
      <div className="absolute inset-0 grid-bg star-bg opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F5F5F7]">
            发展路线图
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-6 relative"
            >
              {/* Connector line for desktop */}
              {index < roadmapItems.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#A855F7] to-[#C084FC]" />
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-[#A855F7]" />
                <span className="text-lg font-bold gradient-text">{item.period}</span>
              </div>
              <ul className="space-y-2">
                {item.items.map((subItem, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#F5F5F7]/70">
                    <span className="w-1 h-1 rounded-full bg-[#C084FC] mt-2 flex-shrink-0" />
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
  return (
    <section className="py-24 px-4 relative bg-gradient-to-b from-[#0F0A1A] to-[#1A1228]">
      <div className="absolute inset-0 star-bg opacity-30" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F5F5F7]">
          让官网成为 DAPP 之前的信任入口
        </h2>
        <p className="text-[#F5F5F7]/70 mb-10 max-w-2xl mx-auto">
          首页的目标不是解释所有技术细节，而是让用户在 30 秒内理解 GANA 是什么、为什么可信、能为谁创造价值，并清晰地进入 DAPP 或阅读白皮书。
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.goldgana.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-btn px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2"
          >
            进入 GANA DAPP
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://gana-payment.gitbook.io/whitepaper"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-[#A855F7]/50 text-[#F5F5F7] font-semibold text-lg hover:bg-[#A855F7]/10 transition-colors"
          >
            查看 Product Docs
          </a>
        </div>
      </div>
    </section>
  )
}
