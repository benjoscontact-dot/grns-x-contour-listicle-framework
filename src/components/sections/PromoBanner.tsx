import { useEffect, useState } from 'react'

// PLACEHOLDER: Set your target countdown date/time
const TARGET_DATE = new Date(Date.now() + 3 * 60 * 60 * 1000 + 12 * 60 * 1000)

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({ h: '03', m: '12', s: '00' })

  useEffect(() => {
    const tick = () => {
      const diff = TARGET_DATE.getTime() - Date.now()
      if (diff <= 0) return
      const h = Math.floor(diff / 3600000).toString().padStart(2, '0')
      const m = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0')
      const s = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0')
      setTimeLeft({ h, m, s })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="w-full py-2 px-4 flex items-center justify-center gap-4 text-sm font-medium"
      style={{ background: 'hsl(var(--promo-bg))', color: 'hsl(var(--promo-fg))' }}
    >
      {/* PLACEHOLDER: Promo banner headline and offer */}
      <span className="font-semibold tracking-wide uppercase text-xs md:text-sm">
        🎉 Limited Offer: Free Shipping + 180-Day Money-Back Guarantee
      </span>
      <div className="flex items-center gap-1 bg-white/20 rounded-md px-3 py-1 font-mono font-bold text-sm tabular-nums">
        <span>{timeLeft.h}</span>
        <span className="opacity-70">HRS</span>
        <span className="mx-1">:</span>
        <span>{timeLeft.m}</span>
        <span className="opacity-70">MIN</span>
        <span className="mx-1">:</span>
        <span>{timeLeft.s}</span>
        <span className="opacity-70">SEC</span>
      </div>
    </div>
  )
}
