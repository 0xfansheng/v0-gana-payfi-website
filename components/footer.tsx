import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-[#8B1FFF]/20 bg-[#05000F]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B1FFF] via-[#FF2D92] to-[#00E1FF] flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="font-bold text-lg text-[#F5F5F7]">
              GANA<span className="text-[#8B1FFF]"> · </span>PayFi
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.goldgana.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F5F7]/60 hover:text-[#F5F5F7] text-sm transition-colors"
            >
              DAPP
            </a>
            <a
              href="https://gana-payment.gitbook.io/whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F5F7]/60 hover:text-[#F5F5F7] text-sm transition-colors"
            >
              白皮书
            </a>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="border-t border-[#8B1FFF]/10 pt-8">
          <p className="text-[#F5F5F7]/40 text-xs leading-relaxed text-center max-w-4xl mx-auto">
            风险提示：加密货币投资具有高风险性。本网站所提供的信息仅供参考，不构成任何投资建议。
            GANA 提供的收益相关表述均为规划目标，实际收益可能因市场状况而有所不同。
            请在充分了解相关风险后谨慎决策，并确保遵守您所在地区的法律法规。
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-[#F5F5F7]/30 text-xs">
            © {new Date().getFullYear()} GANA · PayFi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
