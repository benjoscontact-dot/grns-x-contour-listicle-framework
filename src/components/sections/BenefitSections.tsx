import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'

interface Benefit {
  number: string
  heading: string
  body: string
  imageUrl: string
  imageAlt: string
  stat?: string
  ctaLabel?: string
}

// PLACEHOLDER: Replace each benefit with your product's actual benefit copy + images
const BENEFITS: Benefit[] = [
  {
    number: '01',
    heading: '[PLACEHOLDER: Benefit 1 Headline]',
    body: '[PLACEHOLDER: Benefit 1 body — 2-3 sentences explaining this benefit with specifics. Include a stat or mechanism if possible.]',
    imageUrl: 'https://contourinsoles.com/cdn/shop/files/Mood_Photo_4_Filling.png?v=1776807568&width=800',
    imageAlt: '[PLACEHOLDER: Benefit 1 image description]',
    stat: '[PLACEHOLDER: Supporting stat, e.g. "15% of people suffer from X"]',
    ctaLabel: '[PLACEHOLDER: Mid-section CTA label]',
  },
  {
    number: '02',
    heading: '[PLACEHOLDER: Benefit 2 Headline]',
    body: '[PLACEHOLDER: Benefit 2 body — 2-3 sentences explaining this benefit. Connect to a real customer pain point.]',
    imageUrl: 'https://contourinsoles.com/cdn/shop/files/Mood_Photo_2_Standing.png?v=1776807568&width=800',
    imageAlt: '[PLACEHOLDER: Benefit 2 image description]',
    stat: '[PLACEHOLDER: Supporting stat or proof point]',
  },
  {
    number: '03',
    heading: '[PLACEHOLDER: Benefit 3 Headline]',
    body: '[PLACEHOLDER: Benefit 3 body — 2-3 sentences. Use the mechanism behind the benefit to build credibility.]',
    imageUrl: 'https://contourinsoles.com/cdn/shop/files/CONTOUR_HAND_VIEW_PDP_PIC.png?v=1776807537&width=800',
    imageAlt: '[PLACEHOLDER: Benefit 3 image description]',
    stat: '[PLACEHOLDER: Supporting stat or proof point]',
  },
  {
    number: '04',
    heading: '[PLACEHOLDER: Benefit 4 Headline]',
    body: '[PLACEHOLDER: Benefit 4 body — 2-3 sentences. You can reference ingredients, technology, or clinical data here.]',
    imageUrl: 'https://contourinsoles.com/cdn/shop/files/CONTOUR_MIXED_VIEW_PDP_PIC.png?v=1776807537&width=800',
    imageAlt: '[PLACEHOLDER: Benefit 4 image description]',
    stat: '[PLACEHOLDER: Supporting stat or proof point]',
  },
  {
    number: '05',
    heading: '[PLACEHOLDER: Benefit 5 Headline]',
    body: '[PLACEHOLDER: Benefit 5 body — 2-3 sentences. Address a common objection or compare to alternatives.]',
    imageUrl: 'https://contourinsoles.com/cdn/shop/files/CONTOUR_SIDE_VIEW2_PDP_PIC.png?v=1776807537&width=800',
    imageAlt: '[PLACEHOLDER: Benefit 5 image description]',
    stat: '[PLACEHOLDER: Supporting stat or proof point]',
  },
  {
    number: '06',
    heading: '[PLACEHOLDER: Benefit 6 Headline]',
    body: '[PLACEHOLDER: Benefit 6 body — 2-3 sentences. End on a habit/lifestyle benefit that reinforces long-term use.]',
    imageUrl: 'https://contourinsoles.com/cdn/shop/files/Mood_Photo_2_Top.png?v=1776807381&width=800',
    imageAlt: '[PLACEHOLDER: Benefit 6 image description]',
    stat: '[PLACEHOLDER: Supporting stat or proof point]',
    ctaLabel: '[PLACEHOLDER: Final CTA before product block]',
  },
]

function BenefitItem({ benefit, index }: { benefit: Benefit; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-14 items-center py-14 md:py-20 border-b border-border last:border-0`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 rounded-2xl overflow-hidden aspect-[4/3] bg-secondary">
        {/* PLACEHOLDER: Replace src with your benefit-specific product/lifestyle image */}
        <img
          src={benefit.imageUrl}
          alt={benefit.imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Copy */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* Big number */}
        <span
          className="font-heading text-7xl font-extrabold leading-none select-none"
          style={{ color: 'hsl(var(--number-color) / 0.15)' }}
        >
          {benefit.number}
        </span>

        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground -mt-6">
          {benefit.heading}
        </h2>

        {/* Optional stat callout */}
        {benefit.stat && (
          <div
            className="rounded-lg px-4 py-3 text-sm font-medium italic border-l-4"
            style={{
              background: 'hsl(var(--secondary))',
              borderColor: 'hsl(var(--primary))',
              color: 'hsl(var(--muted-foreground))',
            }}
          >
            {benefit.stat}
          </div>
        )}

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          {benefit.body}
        </p>

        {/* Optional mid-section CTA (appears on 1st and last benefit) */}
        {benefit.ctaLabel && (
          <Button
            size="lg"
            className="mt-2 w-fit rounded-full px-8 font-bold transition-transform hover:scale-105"
            style={{
              background: 'hsl(var(--primary))',
              color: 'hsl(var(--primary-foreground))',
              boxShadow: 'var(--shadow-cta)',
            }}
          >
            {benefit.ctaLabel}
          </Button>
        )}
      </div>
    </motion.div>
  )
}

export default function BenefitSections() {
  return (
    <section id="benefits" className="bg-background px-4">
      <div className="max-w-5xl mx-auto">
        {BENEFITS.map((benefit, i) => (
          <BenefitItem key={benefit.number} benefit={benefit} index={i} />
        ))}
      </div>
    </section>
  )
}
