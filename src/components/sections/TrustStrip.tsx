import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Truck, RotateCcw, Award, Users } from 'lucide-react'

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: '180-Day Money-Back Guarantee',
    subtitle: 'Wear them for 180 days. Not feeling the difference? Full refund, no questions asked.',
    logos: null,
  },
  {
    icon: Users,
    title: '20,000 Patients Fitted Across the U.S. by 350+ Podiatrists',
    subtitle: 'Real verified customers. Not paid endorsements.',
    logos: null,
  },
  {
    icon: Truck,
    title: 'Clinically Proven Technology',
    subtitle: 'Before Contour reached consumers, the same technology was already used in clinical settings. This isn\'t a product inspired by clinical care — it came from it.',
    logos: [
      { src: '/images/logo-apma.png', alt: 'American Podiatric Medical Association' },
      { src: '/images/logo-acfas.png', alt: 'American College of Foot and Ankle Surgeons' },
    ],
  },
  {
    icon: RotateCcw,
    title: 'Free Replacement If Anything\'s Off',
    subtitle: 'If your pair doesn\'t set right, we send a new kit at no charge.',
    logos: null,
  },
  {
    icon: Award,
    title: 'University of Tokyo Tested',
    subtitle: 'Independently tested for biomechanical performance.',
    logos: null,
  },
  {
    icon: Users,
    title: '20,000+ Feet Fitted',
    subtitle: 'Designed by Dr. Tim T. Nguyen, DPM — 40+ years in practice.',
    logos: null,
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
                  {badge.logos && (
                    <div className="flex items-center justify-center gap-3 mt-3 flex-wrap">
                      {badge.logos.map((logo) => (
                        <img
                          key={logo.alt}
                          src={logo.src}
                          alt={logo.alt}
                          className="h-8 w-auto object-contain opacity-80"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
