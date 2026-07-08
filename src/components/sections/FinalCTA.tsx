import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

// PLACEHOLDER: Final CTA section closing perks list
const CLOSING_PERKS = [
  '[PLACEHOLDER: Closing perk 1 — e.g. "Free Shipping Today"]',
  '[PLACEHOLDER: Closing perk 2 — e.g. "180-Day Money Back Guarantee"]',
  '[PLACEHOLDER: Closing perk 3 — e.g. "Cancel Anytime — No Lock-In"]',
  '[PLACEHOLDER: Closing perk 4 — e.g. "Results in [X] Days or Your Money Back"]',
]

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 md:py-28 px-4" style={{ background: 'hsl(var(--foreground))' }}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-6"
        >
          {/* PLACEHOLDER: Urgency eyebrow */}
          <span
            className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
            style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
          >
            [PLACEHOLDER: Urgency tag — e.g. "Limited Time Offer"]
          </span>

          {/* PLACEHOLDER: Final headline */}
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold leading-tight" style={{ color: 'hsl(0 0% 100%)' }}>
            [PLACEHOLDER: Closing headline — strong, outcome-driven, e.g. "Start Walking Without Pain Today"]
          </h2>

          {/* PLACEHOLDER: Closing subtext */}
          <p className="text-base md:text-lg" style={{ color: 'hsl(0 0% 100% / 0.65)' }}>
            [PLACEHOLDER: Closing body — 1–2 sentences reinforcing the offer and removing risk. e.g. "Join 20,000+ customers who've already made the switch. Try it risk-free for 180 days."]
          </p>

          {/* Perks list */}
          <ul className="flex flex-col gap-2 w-full max-w-sm">
            {CLOSING_PERKS.map((perk, i) => (
              <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'hsl(0 0% 100% / 0.85)' }}>
                <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
                {perk}
              </li>
            ))}
          </ul>

          {/* Pricing summary */}
          <div className="flex items-baseline gap-3 mt-2">
            <span className="font-heading text-4xl font-extrabold" style={{ color: 'hsl(0 0% 100%)' }}>
              {/* PLACEHOLDER: Sale price */}
              $[XX.XX]
            </span>
            <span className="text-lg line-through" style={{ color: 'hsl(0 0% 100% / 0.4)' }}>
              {/* PLACEHOLDER: Original price */}
              $[XX.XX]
            </span>
            <span
              className="text-xs font-bold uppercase rounded-full px-3 py-1"
              style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
            >
              {/* PLACEHOLDER: Discount badge */}
              SAVE [X]%
            </span>
          </div>

          {/* Primary CTA */}
          <Button
            size="lg"
            className="w-full max-w-sm rounded-full py-6 text-lg font-bold transition-transform hover:scale-105"
            style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', boxShadow: 'var(--shadow-cta)' }}
          >
            {/* PLACEHOLDER: Final CTA label */}
            [PLACEHOLDER: Final CTA — e.g. "Claim My Discount + Free Shipping"]
          </Button>

          {/* Guarantee micro-copy */}
          <div className="flex items-center gap-2 text-sm" style={{ color: 'hsl(0 0% 100% / 0.55)' }}>
            <ShieldCheck className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
            {/* PLACEHOLDER: Guarantee micro-copy */}
            [PLACEHOLDER: Guarantee line — e.g. "180-Day Money Back Guarantee. No questions asked."]
          </div>
        </motion.div>
      </div>
    </section>
  )
}
