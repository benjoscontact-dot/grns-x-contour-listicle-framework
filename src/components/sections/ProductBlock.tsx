import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ShieldCheck, Truck, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'

const VARIANTS = ['Men\'s (US 7–13)', 'Women\'s (US 5–11)']

const PRICING_TIERS = [
  {
    label: 'Most Popular',
    tag: '🤩 MOST POPULAR',
    sublabel: 'One pair — fits both shoes. Lasts 2–3+ years.',
    priceNow: '$239',
    priceWas: '$299',
    perDay: '~$0.25/day',
    badge: 'SAVE 20%',
    highlighted: true,
    perks: [
      'Free shipping',
      '180-Day Money-Back Guarantee',
      'Free replacement if molding goes wrong',
    ],
  },
  {
    label: 'Two Pairs',
    tag: '2-PAIR BUNDLE',
    sublabel: 'One pair per shoe type — dedicate a pair to each.',
    priceNow: '$399',
    priceWas: '$598',
    perDay: '~$0.21/day per pair',
    badge: 'SAVE 33%',
    highlighted: false,
    perks: [
      'Free shipping',
      '180-Day Money-Back Guarantee',
    ],
  },
]

const PRODUCT_BENEFITS = [
  'Molds to your arch under your real bodyweight — in motion',
  'Sets into a rigid custom shell. No soft foam that compresses flat.',
  'Sits at factory insole profile — fits sneakers, boots, dress shoes',
  'Patented HydroFit technology · US Patent 7,017,218 B2',
]

export default function ProductBlock() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [selectedTier, setSelectedTier] = useState(0)

  return (
    <section id="offers" className="px-4 py-16 md:py-24" style={{ background: 'hsl(var(--secondary))' }}>
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Contour Custom Pro
          </h2>
          <p className="text-muted-foreground mt-2 text-base md:text-lg">
            Custom orthotics that mold to your feet at home in 15 minutes. Patented HydroFit technology · Medical-grade materials · Built to last 2–3+ years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-border bg-background aspect-square"
          >
            {/* PLACEHOLDER: Replace with your product image */}
            <img
              src="https://contourinsoles.com/cdn/shop/files/preview_images/WithBoxAngle_1.png?v=1778645149&width=800"
              alt="[PLACEHOLDER: Product image alt text]"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Purchase card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            {/* Variant selector */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-2">Select Size:</p>
              <div className="flex gap-2 flex-wrap">
                {VARIANTS.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      selectedVariant === i
                        ? 'border-primary text-primary-foreground'
                        : 'border-border text-foreground bg-background hover:border-primary/50'
                    }`}
                    style={selectedVariant === i ? { background: 'hsl(var(--primary))', borderColor: 'hsl(var(--primary))' } : {}}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Benefit checklist */}
            <ul className="flex flex-col gap-2">
              {PRODUCT_BENEFITS.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
                  {b}
                </li>
              ))}
            </ul>

            {/* Pricing tiers */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-foreground">Choose Your Package:</p>
              {PRICING_TIERS.map((tier, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTier(i)}
                  className={`w-full text-left rounded-xl border-2 p-4 transition-all ${
                    selectedTier === i ? '' : 'border-border bg-background'
                  }`}
                  style={selectedTier === i ? { borderColor: 'hsl(var(--primary))', background: 'hsl(var(--primary) / 0.04)' } : {}}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="text-xs font-bold uppercase tracking-wide rounded-full px-2 py-0.5"
                      style={{ background: tier.highlighted ? 'hsl(var(--primary))' : 'hsl(var(--muted))', color: tier.highlighted ? 'white' : 'hsl(var(--muted-foreground))' }}
                    >
                      {tier.tag}
                    </span>
                    <span className="text-xs font-semibold rounded-full px-2 py-0.5 bg-secondary text-foreground">{tier.badge}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">{tier.sublabel}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">{tier.priceNow}</span>
                    <span className="text-sm line-through text-muted-foreground">{tier.priceWas}</span>
                    <span className="text-xs text-muted-foreground">{tier.perDay}</span>
                  </div>
                  <ul className="mt-2 flex flex-col gap-1">
                    {tier.perks.map((p, j) => (
                      <li key={j} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Check className="w-3 h-3" style={{ color: 'hsl(var(--primary))' }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>

            {/* Main CTA button */}
            <Button
              size="lg"
              className="w-full rounded-xl text-base font-bold py-6 transition-transform hover:scale-[1.02]"
              style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', boxShadow: 'var(--shadow-cta)' }}
            >
              Get Your Custom Fit + Free Shipping
            </Button>

            {/* Micro-trust row */}
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" style={{ color: 'hsl(var(--primary))' }} /> 180-Day Guarantee</span>
              <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5" style={{ color: 'hsl(var(--primary))' }} /> Free Shipping</span>
              <span className="flex items-center gap-1"><RotateCcw className="w-3.5 h-3.5" style={{ color: 'hsl(var(--primary))' }} /> Free Replacement</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
