import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ROWS = [
  { clinic: '3–5 appointments over weeks', contour: '15 minutes at home' },
  { clinic: '$400–$800', contour: '$239' },
  { clinic: '2–6 week lab wait', contour: 'Wear them today' },
  { clinic: 'Static mold — standing still', contour: 'Molds under your real gait' },
  { clinic: 'Insurance fights & denials', contour: 'No insurance needed' },
  { clinic: 'Often too bulky for most shoes', contour: 'Sits flat — replaces your factory insole' },
  { clinic: 'If they\'re wrong, start over', contour: 'Free replacement if anything\'s off' },
]

export default function ComparisonTable() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-4"
            style={{ background: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))' }}
          >
            What Makes This Different
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Every Barrier. Removed.
          </h2>
          <p className="text-muted-foreground mt-3 text-base max-w-lg mx-auto">
            This isn't a drugstore insole. And it isn't a clinic process. It's the clinical result without the clinical friction.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-border overflow-hidden"
          style={{ boxShadow: 'var(--shadow-card)' }}
        >
          {/* Header row */}
          <div className="grid grid-cols-2">
            <div className="py-4 px-5 bg-muted border-b border-border">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Prescription Orthotics</p>
            </div>
            <div className="py-4 px-5 border-b border-border" style={{ background: 'hsl(var(--primary))' }}>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'hsl(var(--primary-foreground))' }}>
                Contour Custom Pro
              </p>
            </div>
          </div>

          {/* Data rows */}
          {ROWS.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-background' : ''}`}
              style={i % 2 !== 0 ? { background: 'hsl(var(--secondary))' } : {}}
            >
              <div className="py-4 px-5 flex items-start gap-2.5 border-r border-border">
                <X className="w-4 h-4 flex-shrink-0 mt-0.5 text-destructive opacity-60" />
                <span className="text-sm text-muted-foreground">{row.clinic}</span>
              </div>
              <div className="py-4 px-5 flex items-start gap-2.5">
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'hsl(var(--primary))' }} />
                <span className="text-sm font-medium text-foreground">{row.contour}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-3 mt-8"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 font-bold transition-transform hover:scale-105"
            style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', boxShadow: 'var(--shadow-cta)' }}
          >
            <a href="#offers">Get Your Custom Fit for $239</a>
          </Button>
          <p className="text-xs text-muted-foreground">Free shipping · 180-Day Money-Back Guarantee</p>
        </motion.div>
      </div>
    </section>
  )
}
