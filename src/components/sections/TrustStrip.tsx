import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Star, Truck, RotateCcw, Award, Users } from 'lucide-react'

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: '30-Day Money-Back Guarantee',
    subtitle: 'Wear them for 30 days. Not feeling the difference? Full refund — no questions asked.',
  },
  {
    icon: Star,
    title: '4.7 Stars · 39+ Reviews',
    subtitle: 'Real verified customers. Not paid endorsements.',
  },
  {
    icon: Truck,
    title: 'Free Shipping on All Orders',
    subtitle: 'No minimum. Ships fast.',
  },
  {
    icon: RotateCcw,
    title: 'Free Replacement If Anything\'s Off',
    subtitle: 'If your pair doesn\'t set right, we send a new kit at no charge.',
  },
  {
    icon: Award,
    title: 'University of Tokyo Tested',
    subtitle: 'Independently tested for biomechanical performance.',
  },
  {
    icon: Users,
    title: '20,000+ Feet Fitted',
    subtitle: 'Designed by Dr. Tim T. Nguyen, DPM — 40+ years in practice.',
  },
]

export default function TrustStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-14 px-4 border-y border-border bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Why Customers Trust Contour
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {TRUST_BADGES.map((badge, i) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl border border-border bg-secondary hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'hsl(var(--primary) / 0.1)' }}
                >
                  <Icon className="w-6 h-6" style={{ color: 'hsl(var(--primary))' }} />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{badge.title}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{badge.subtitle}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
