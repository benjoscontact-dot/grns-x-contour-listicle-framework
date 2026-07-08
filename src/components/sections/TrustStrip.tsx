import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Star, Truck, RotateCcw, Award, Users } from 'lucide-react'

// PLACEHOLDER: Replace labels with your actual trust signals
const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: '[PLACEHOLDER: Trust signal 1]',
    subtitle: '[PLACEHOLDER: e.g. "180-Day Money Back Guarantee"]',
  },
  {
    icon: Star,
    title: '[PLACEHOLDER: Trust signal 2]',
    subtitle: '[PLACEHOLDER: e.g. "80,000+ Five-Star Reviews"]',
  },
  {
    icon: Truck,
    title: '[PLACEHOLDER: Trust signal 3]',
    subtitle: '[PLACEHOLDER: e.g. "Free Shipping On All Orders"]',
  },
  {
    icon: RotateCcw,
    title: '[PLACEHOLDER: Trust signal 4]',
    subtitle: '[PLACEHOLDER: e.g. "Cancel or Pause Anytime"]',
  },
  {
    icon: Award,
    title: '[PLACEHOLDER: Trust signal 5]',
    subtitle: '[PLACEHOLDER: e.g. "Clinically Tested Formula"]',
  },
  {
    icon: Users,
    title: '[PLACEHOLDER: Trust signal 6]',
    subtitle: '[PLACEHOLDER: e.g. "1M+ Happy Customers"]',
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
          {/* PLACEHOLDER: Trust section heading */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            [PLACEHOLDER: Trust section heading — e.g. "Why Customers Trust Us"]
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
