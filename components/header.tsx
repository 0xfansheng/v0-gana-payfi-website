"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "产品", href: "#product" },
  { label: "机制", href: "#mechanism" },
  { label: "场景", href: "#scenarios" },
  { label: "媒体", href: "#media" },
  { label: "路线图", href: "#roadmap" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#05000F]/80 backdrop-blur-xl border-b border-[#8B1FFF]/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B1FFF] via-[#FF2D92] to-[#00E1FF] flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="font-bold text-lg text-[#F5F5F7]">
            GANA<span className="text-[#8B1FFF]"> · </span>PayFi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#F5F5F7]/70 hover:text-[#F5F5F7] text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://www.goldgana.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-btn px-6 py-2.5 rounded-full text-white text-sm font-medium"
          >
            进入 DAPP
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#F5F5F7] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#05000F]/95 backdrop-blur-xl border-b border-[#8B1FFF]/20">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#F5F5F7]/70 hover:text-[#F5F5F7] text-sm font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.goldgana.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-btn px-6 py-2.5 rounded-full text-white text-sm font-medium text-center mt-2"
            >
              进入 DAPP
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
