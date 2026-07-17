import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'

export default function PivotSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-8"
        >
          {/* Eyebrow */}
          <span
            className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full w-fit"
            style={{ background: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))' }}
          >
            So What Actually Changed?
          </span>

          {/* Statement stack */}
          <div className="flex flex-col gap-5">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Here's the thing: you were right to want custom orthotics.
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              The problem was never the solution. It was the process.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              What if you could get the same clinical-grade custom fit, molded to <em>your</em> arch, under <em>your</em> weight, in <em>your</em> shoes — in 15 minutes at home?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No appointments. No insurance fights. No lab. No waiting.
            </p>
          </div>

          {/* Doctor authority block */}
          <div
            className="flex flex-col sm:flex-row gap-6 items-start rounded-2xl border border-border p-6"
            style={{ background: 'hsl(var(--secondary))' }}
          >
            {/* Avatar placeholder — replace with Dr. Nguyen photo */}
            <div className="w-20 h-20 rounded-full overflow-hidden bg-muted flex-shrink-0 border-2 border-border">
              <img
                src="https://i.pravatar.cc/160?img=56"
                alt="Dr. Tim T. Nguyen, DPM"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                "That's exactly what a podiatrist with 40+ years of experience built when he got tired of watching his own patients walk away from the orthotics they needed."
              </p>
              <p className="text-sm font-semibold text-foreground">Dr. Tim T. Nguyen, DPM</p>
              <p className="text-xs text-muted-foreground">
                40+ years in practice · 20,000+ patients fitted · Inventor of HydroFit technology · Board-trained at USC Medical Center
              </p>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="w-fit rounded-full px-8 font-bold transition-transform hover:scale-105"
            style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', boxShadow: 'var(--shadow-cta)' }}
          >
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
