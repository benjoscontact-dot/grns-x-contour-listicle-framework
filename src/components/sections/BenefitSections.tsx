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
    ctaLabel: 'Skip the Clinic — Get Fitted at Home',
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
    heading: 'The Weeks of Waiting (While Your Feet Keep Hurting)',
    body: 'After all the appointments and paperwork, your orthotics go to a lab. You wait 2-6 weeks. Your feet don\'t stop hurting while you wait. When they finally arrive, they\'re made from a static mold, a plaster cast or foam box impression of your foot standing still. Not walking. Not under your real weight. A snapshot of your foot doing nothing, turned into a rigid shell you\'re supposed to wear every day.',
    imageUrl: 'https://contourinsoles.com/cdn/shop/files/CONTOUR_MIXED_VIEW_PDP_PIC.png?v=1776807537&width=800',
    imageAlt: 'Contour Custom Pro orthotics multiple angles',

  },
  {
    number: '05',
    heading: 'The Ones That Didn\'t Work (Or Made It Worse)',
    body: 'Maybe you did get custom orthotics. And they didn\'t help. Or worse, they made your feet feel even more painful than before. This happens more than clinics admit. A mold taken wrong, a modification missed, an arch built too aggressively. And now you\'re out $500+ with orthotics collecting dust in a drawer, and less trust in the entire process than when you started. "Why does it feel like nothing is helping?" Sound familiar?',
    imageUrl: 'https://contourinsoles.com/cdn/shop/files/CONTOUR_SIDE_VIEW2_PDP_PIC.png?v=1776807537&width=800',
    imageAlt: 'Contour Custom Pro side profile showing slim fit',

  },
  {
    number: '06',
    heading: "They Don't Fit Your Actual Life",
    body: "Prescription orthotics are thick. They make your shoes tight. They don't transfer between shoes easily. You can't wear them in your dress shoes, your work boots, your everyday sneakers, so the pair you spent $500 on only works in one pair of shoes. The moment convenience drops, compliance drops. And orthotics that live in your closet don't fix your feet.",
    imageUrl: 'https://contourinsoles.com/cdn/shop/files/Mood_Photo_2_Top.png?v=1776807381&width=800',
    imageAlt: 'Contour Custom Pro sitting flat inside a normal shoe',

    ctaLabel: 'See How Contour Is Different',
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
