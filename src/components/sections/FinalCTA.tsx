import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CLOSING_PERKS = [
  'Free Shipping on Every Order',
  '180-Day Money-Back Guarantee. You Keep the Orthotics.',
  'Free Replacement if Molding Goes Wrong',
  'Lasts 2–3+ Years (~$0.25/day)',
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
            Free Shipping · 180-Day Guarantee
          </span>

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold leading-tight" style={{ color: 'hsl(0 0% 100%)' }}>
            Stop Waiting. Start Walking Without Pain.
          </h2>

          <p className="text-base md:text-lg" style={{ color: 'hsl(0 0% 100% / 0.65)' }}>
            We know you've been burned before. That's why we don't ask you to trust us on day one, we ask you to try us. Wear them for 30 days. If you're not feeling the difference, we'll send a free replacement pair or refund every penny. No restocking fee. No return shipping. The orthotics are yours either way.
          </p>

          {/* Perks list */}
          <ul className="flex flex-col gap-2 w-full max-w-sm text-left">
            {CLOSING_PERKS.map((perk, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'hsl(0 0% 100% / 0.85)' }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'hsl(var(--primary))' }} />
                <span>{perk}</span>
              </li>
            ))}
          </ul>

          {/* Pricing summary */}
          <div className="flex items-baseline gap-3 mt-2">
            <span className="font-heading text-4xl font-extrabold" style={{ color: 'hsl(0 0% 100%)' }}>
              $239
            </span>
          </div>

          {/* Primary CTA */}
          <Button
            asChild
            size="lg"
            className="w-full max-w-md rounded-full px-6 py-6 text-sm md:text-lg font-bold leading-tight transition-transform hover:scale-105"
            style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', boxShadow: 'var(--shadow-cta)' }}
          >
            <a href="#offers">Get Your Custom Fit for $239 + Free Shipping</a>
          </Button>

          {/* Guarantee micro-copy */}
          <div className="flex items-center gap-2 text-sm" style={{ color: 'hsl(0 0% 100% / 0.55)' }}>
            <ShieldCheck className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
            180-Day Money-Back Guarantee. You keep the orthotics either way.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
