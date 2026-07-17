import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

const FAQS = [
  {
    q: 'What if I mess up the molding process?',
    a: 'The HydroFit material is designed to self-correct under your bodyweight. Overfill slightly? Walking pressure distributes it. Underfill? It just takes a bit longer to mold. If anything goes wrong, we send a free replacement kit — new insole + syringe, no charge.',
  },
  {
    q: 'Will these fit in my shoes?',
    a: 'Yes. After setting, Contour sits at the same profile as the factory insole it replaces. Remove your existing insole, drop Contour in. Works in sneakers, boots, dress shoes, and most work shoes. No added bulk.',
  },
  {
    q: 'How is this different from drugstore insoles?',
    a: 'Drugstore insoles are pre-shaped foam or gel — one shape fits nobody. Contour molds to your arch under your weight and sets into a rigid custom shell. Same material category as prescription orthotics, not the soft stuff that compresses flat in weeks.',
  },
  {
    q: 'Do I need a prescription?',
    a: 'No. No prescription, no referral, no insurance approval needed. Order directly and fit at home.',
  },
  {
    q: 'How long do they last?',
    a: '2–3+ years of daily wear. The thermoset material sets one-way and doesn\'t soften, compress, or degrade like foam or heat-moldable insoles.',
  },
  {
    q: 'Will I have to wear them forever?',
    a: 'It depends on your condition. If your foot issue is structural and ongoing, you\'ll benefit from continued support. If your condition is temporary, you may only need them for specific activities. Either way, at $239 for 2–3+ years, the math works out.',
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="faq" className="py-16 md:py-24 px-4" style={{ background: 'hsl(var(--secondary))' }}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Common Questions
          </h2>
          <p className="text-muted-foreground mt-3 text-base">
            Everything you'd want to know before you order.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-background px-5 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground text-sm md:text-base py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col items-center gap-3 mt-10"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 font-bold transition-transform hover:scale-105"
            style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', boxShadow: 'var(--shadow-cta)' }}
          >
            <a href="#offers">Get Your Custom Fit for $239</a>
          </Button>
          <p className="text-xs text-muted-foreground">Free shipping · 180-Day Money-Back Guarantee · Free replacement if anything's off</p>
        </motion.div>
      </div>
    </section>
  )
}
