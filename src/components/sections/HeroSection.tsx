import { motion } from 'framer-motion'
import { ShieldCheck, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section id="hero" className="bg-background py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Promo sale banner above product image — mirrors Grüns "SUMMER SALE" strip */}
        <div
          className="hidden md:flex items-center justify-center rounded-xl px-6 py-3 mb-6 font-bold uppercase tracking-widest text-sm"
          style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
        >
          ✦ Patented HydroFit Technology · University of Tokyo Tested · 20,000+ Feet Fitted
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT: Copy column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-5"
          >
            {/* Social proof pill */}
            <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2 w-fit border border-border">
              <div className="flex -space-x-1">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-muted border-2 border-background overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/48?img=${10 + i}`}
                      alt="customer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" style={{ color: 'hsl(38 92% 50%)' }} />
                ))}
              </div>
              <span className="text-xs font-medium text-foreground">
                350+ podiatrists · 20,000+ patients fitted
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">
              <span style={{ color: 'hsl(var(--primary))' }}>6 Reasons</span> You Still Don't Have the Custom Orthotics{' '}
              <span style={{ color: 'hsl(var(--primary))' }}>You Know You Need</span>
            </h1>

            {/* Subheadline / hook */}
            <p className="text-muted-foreground text-lg leading-relaxed">
              You already know orthotics would help. Your feet remind you every morning. But between the appointments, the insurance fights, and the $500+ price tags, getting them has felt like its own kind of pain. Here's why it's not your fault, and what finally changed.
            </p>

            {/* CTA block */}
            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="w-fit rounded-full px-8 py-4 text-base font-bold shadow-lg transition-transform hover:scale-105"
                style={{
                  background: 'hsl(var(--primary))',
                  color: 'hsl(var(--primary-foreground))',
                  boxShadow: 'var(--shadow-cta)',
                }}
              >
                Get Your Custom Fit for $239
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                <span>Try Risk-Free — 180-Day Money-Back Guarantee</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Product image full size 1:1 */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="w-full rounded-2xl overflow-hidden aspect-square bg-secondary"
          >
            <img
              src="/images/hero-header-2.png"
              alt="Contour Custom Pro orthotics — Podiatrists Choice, 20,000+ Americans trust this USPA Patented Instant Fit Technology"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
