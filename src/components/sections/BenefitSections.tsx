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

const BENEFITS: Benefit[] = [
  {
    number: '01',
    heading: '79% of People Prescribed Orthotics Never Get Them',
    body: 'Getting them is not just one appointment. It\'s a consultation, a fitting, a follow-up, sometimes a referral to a specialist you didn\'t know you needed, all during business hours, all requiring time off work. An endless cycle but YOU need help NOW.',
    imageUrl: '/images/benefit-1-wait.png',
    imageAlt: '6-8 weeks wait time for prescription orthotics',

  },
  {
    number: '02',
    heading: 'The Insurance Nightmare',
    body: 'You check your plan. It covers orthotics. Relief, until the claim gets denied: the provider was a physiotherapist, not a podiatrist. Or wasn\'t in-network. Thousands go through this every year. You did everything right and still owe $500 insurance won\'t touch.',
    imageUrl: '/images/benefit-2-insurance.png',
    imageAlt: '$500+ typical cost if your claim is denied — insurance nightmare chart',

  },
  {
    number: '03',
    heading: 'Foot Pain Doesn\'t Stay in Your Feet',
    body: '77% of Americans have experienced foot pain — and roughly half say it has limited their daily activities: walking, exercising, working, playing with their kids. When every step hurts, you move less. And when you move less, everything else pays: your knees and hips absorb what your arches won\'t, your step count drops, your energy and mood tend to follow. That\'s the real bill for another year of waiting.',
    imageUrl: '/images/benefit-3-foot-pain.png',
    imageAlt: 'Woman sitting on couch holding her foot in pain',

  },
  {
    number: '04',
    heading: "You're not paying for the orthotic.",
    body: "The materials in a custom insole cost a fraction of what you're quoted. You're paying for the office, the chair, the 12-minute casting, and the lab's markup. And if the first pair isn't right, which happens, the adjustment is another visit. There's no return window on a $650 pair of insoles.",
    imageUrl: '/images/benefit-4-markup.png',
    imageAlt: 'Doctor holding a medical bill showing the hidden costs behind prescription orthotics',
  },
  {
    number: '05',
    heading: 'Then a Podiatrist Got Tired of Watching People Walk Away',
    stat: 'For five years, this technology was prescription-only. More than 350 podiatrists across the U.S. fitted it to over 20,000 patients before it was released directly to the public.',
    body: 'Dr. Tim Nguyen has practiced podiatry in Oxnard, California for over 40 years. His waiting room is full and he\'s booked three months out. So he spent a decade building something his colleagues called reckless: a true custom orthotic you fit yourself, at home, in 15 minutes. No referral. No casting appointment. No lab.',
    imageUrl: '/images/benefit-5-doctor-2.png',
    imageAlt: 'Dr. Tim T. Nguyen, DPM — Chief Medical Officer and inventor of HydroFit technology',
  },
  {
    number: '06',
    heading: "The $500 Gamble Is Gone.",
    body: "This is the part Dr. Nguyen insisted on, because it removes the last reason to wait. Fit them. Wear them for 180 days. If you're not moving better, standing longer, and doing more, you get every dollar back. You don't even send them back, because they're molded to your feet and no good to anyone else. Compare the math: $600 to $800 at the clinic with no refund possible, or $239 once, protected for 180 days.",
    imageUrl: '/images/benefit-6-doctor-credentials.png',
    imageAlt: 'Dr. Tim T. Nguyen, DPM — Chief Medical Officer with verified credentials and Contour insoles',
    ctaLabel: 'Get Your Custom Fit for $239',
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

        {/* Optional mid-section CTA */}
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
