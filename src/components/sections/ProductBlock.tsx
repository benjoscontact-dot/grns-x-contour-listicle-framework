import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SHOPIFY_DOMAIN = 'https://contourinsoles.com'

// Gender → shoe sizes, each mapped to its live Shopify variant ID.
// Source: contourinsoles.com/products.json (product handle "contour-1").
const SIZES_BY_GENDER = {
  Men: [
    { label: 'M 4.5-5.5', id: '41931921522778' },
    { label: 'M 6–7.5', id: '41969800544346' },
    { label: 'M 8-8.5', id: '41969800577114' },
    { label: 'M 9-10', id: '41969800609882' },
    { label: 'M 10.5–11', id: '41969800642650' },
    { label: 'M 11.5–12.5', id: '41969800675418' },
    { label: 'M 13-14', id: '41969800708186' },
  ],
  Women: [
    { label: 'W 5.5–7', id: '41969812734042' },
    { label: 'W 7.5–8.5', id: '41969812701274' },
    { label: 'W 9–9.5', id: '41969812668506' },
    { label: 'W 10–11', id: '41969812635738' },
    { label: 'W 11.5–12', id: '41969812602970' },
    { label: 'W 12.5–13.5', id: '41969812570202' },
    { label: 'W 14-15', id: '41969803952218' },
  ],
} as const

const GENDERS = ['Men', 'Women'] as const

// Each tier is a quantity of the selected variant. Bundle pricing is applied
// automatically at checkout by Shopify's live quantity discount ("Special Offer").
const PRICING_TIERS = [
  {
    label: '1 Pair',
    qty: 1,
    price: '$239.00',
    perUnit: null,
    mostPopular: false,
  },
  {
    label: '2 Pairs',
    qty: 2,
    price: '$379.00',
    perUnit: '$189.5/ea',
    mostPopular: true,
  },
  {
    label: '3 Pairs',
    qty: 3,
    price: '$447.00',
    perUnit: '$149/ea',
    mostPopular: false,
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
  const [selectedGender, setSelectedGender] = useState<typeof GENDERS[number]>('Men')
  const [selectedSize, setSelectedSize] = useState(0)
  const [selectedTier, setSelectedTier] = useState(1)

  const sizes = SIZES_BY_GENDER[selectedGender]
  const selectedVariantId = sizes[selectedSize]?.id
  const selectedQty = PRICING_TIERS[selectedTier].qty
  // Shopify cart permalink — no API/token needed. Straight to checkout;
  // the automatic quantity discount applies the bundle price at checkout.
  const checkoutUrl = selectedVariantId
    ? `${SHOPIFY_DOMAIN}/cart/${selectedVariantId}:${selectedQty}?checkout`
    : `${SHOPIFY_DOMAIN}/products/contour-1`

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
            {/* Gender selector */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-2">
                Gender: <span className="text-muted-foreground font-normal">{selectedGender}</span>
              </p>
              <div className="flex gap-2">
                {GENDERS.map((g) => (
                  <button
                    key={g}
                    onClick={() => { setSelectedGender(g); setSelectedSize(0) }}
                    className={`px-6 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      selectedGender === g
                        ? 'border-primary text-primary-foreground'
                        : 'border-border text-foreground bg-background hover:border-primary/50'
                    }`}
                    style={selectedGender === g ? { background: 'hsl(var(--primary))', borderColor: 'hsl(var(--primary))' } : {}}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Shoe size selector */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-2">
                Shoe Size: <span className="text-muted-foreground font-normal">{sizes[selectedSize].label}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {sizes.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSize(i)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      selectedSize === i
                        ? 'border-primary text-primary-foreground'
                        : 'border-border text-foreground bg-background hover:border-primary/50'
                    }`}
                    style={selectedSize === i ? { background: 'hsl(var(--primary))', borderColor: 'hsl(var(--primary))' } : {}}
                  >
                    {s.label}
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

            {/* Pricing tiers — horizontal 3-card row */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Choose Your Package:</p>
              <div className="grid grid-cols-3 gap-3">
                {PRICING_TIERS.map((tier, i) => (
                  <div key={i} className="flex flex-col items-center">
                    {/* Most Popular badge — reserve space even when absent */}
                    <div className="h-7 flex items-end justify-center mb-1">
                      {tier.mostPopular && (
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full"
                          style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
                        >
                          Most Popular
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedTier(i)}
                      className={`w-full rounded-2xl border-2 p-4 text-center transition-all ${
                        selectedTier === i
                          ? 'border-primary'
                          : 'border-border bg-background hover:border-primary/40'
                      }`}
                      style={selectedTier === i ? { background: 'hsl(var(--primary) / 0.07)', borderColor: 'hsl(var(--primary))' } : {}}
                    >
                      <p className="font-bold text-foreground text-base">{tier.label}</p>
                      <p className="text-foreground font-semibold text-sm mt-0.5">{tier.price}</p>
                      {tier.perUnit && (
                        <p className="text-muted-foreground text-xs mt-0.5">{tier.perUnit}</p>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Main CTA button */}
            <Button
              asChild
              size="lg"
              className="w-full rounded-xl text-base font-bold py-6 transition-transform hover:scale-[1.02]"
              style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', boxShadow: 'var(--shadow-cta)' }}
            >
              <a href={checkoutUrl}>Add To Cart</a>
            </Button>

            {/* Guarantee card */}
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #4f8ef7, #6c5ce7)' }}>
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-bold text-foreground text-base">180-Day Money Back Guarantee</p>
                <p className="text-muted-foreground text-sm mt-0.5">Try them out for 30 days. If you don't like them?<br />We'll send a free replacement or full refund.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
