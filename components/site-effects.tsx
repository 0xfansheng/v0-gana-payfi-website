"use client"

import { type CSSProperties, useEffect } from "react"

const dataStreams = [
  { left: "6%", delay: "-1.6s", duration: "7.4s", height: "32vh" },
  { left: "14%", delay: "-5.2s", duration: "8.8s", height: "26vh" },
  { left: "25%", delay: "-3.1s", duration: "6.8s", height: "38vh" },
  { left: "39%", delay: "-7.4s", duration: "9.6s", height: "30vh" },
  { left: "52%", delay: "-2.7s", duration: "7.9s", height: "42vh" },
  { left: "64%", delay: "-6.5s", duration: "8.5s", height: "28vh" },
  { left: "76%", delay: "-4.4s", duration: "7.1s", height: "36vh" },
  { left: "88%", delay: "-8.1s", duration: "9.2s", height: "24vh" },
]

const circuitPulses = [
  { top: "18%", left: "8%", width: "22vw", rotate: "-8deg", delay: "-1.2s" },
  { top: "34%", left: "58%", width: "28vw", rotate: "13deg", delay: "-3.8s" },
  { top: "57%", left: "13%", width: "30vw", rotate: "7deg", delay: "-5.4s" },
  { top: "73%", left: "47%", width: "36vw", rotate: "-11deg", delay: "-2.6s" },
]

export function SiteEffects() {
  useEffect(() => {
    const root = document.documentElement
    let frame = 0

    const setPointer = (x: number, y: number, intensity: number) => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        root.style.setProperty("--fx-pointer-x", `${x}px`)
        root.style.setProperty("--fx-pointer-y", `${y}px`)
        root.style.setProperty("--fx-pointer-intensity", `${intensity}`)
      })
    }

    setPointer(window.innerWidth * 0.5, window.innerHeight * 0.36, 0.38)

    const handlePointerMove = (event: PointerEvent) => {
      setPointer(event.clientX, event.clientY, event.pointerType === "mouse" ? 0.82 : 0.55)
    }

    const handlePointerLeave = () => {
      root.style.setProperty("--fx-pointer-intensity", "0.28")
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerleave", handlePointerLeave)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerleave", handlePointerLeave)
    }
  }, [])

  return (
    <div className="site-effects" aria-hidden="true">
      <div className="site-effects__grid" />
      <div className="site-effects__stars" />
      <div className="site-effects__reticle" />
      <div className="site-effects__data-rain">
        {dataStreams.map((stream) => (
          <span
            key={stream.left}
            style={
              {
                "--fx-left": stream.left,
                "--fx-delay": stream.delay,
                "--fx-duration": stream.duration,
                "--fx-height": stream.height,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="site-effects__circuit">
        {circuitPulses.map((pulse) => (
          <span
            key={`${pulse.top}-${pulse.left}`}
            style={
              {
                "--fx-top": pulse.top,
                "--fx-left": pulse.left,
                "--fx-width": pulse.width,
                "--fx-rotate": pulse.rotate,
                "--fx-delay": pulse.delay,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="site-effects__beam site-effects__beam--primary" />
      <div className="site-effects__beam site-effects__beam--secondary" />
      <div className="site-effects__scanline" />
    </div>
  )
}
