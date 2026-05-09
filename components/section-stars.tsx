"use client"

import { useEffect, useState } from "react"

type SectionStarsProps = {
  /** Nombre de points lumineux (densité du fond) */
  density?: number
  className?: string
}

export function SectionStars({ density = 55, className = "" }: SectionStarsProps) {
  const [stars, setStars] = useState<
    { top: string; left: string; delay: string }[]
  >([])

  useEffect(() => {
    setStars(
      Array.from({ length: density }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
      }))
    )
  }, [density])

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute size-0.5 rounded-full bg-white opacity-30 animate-pulse"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  )
}
