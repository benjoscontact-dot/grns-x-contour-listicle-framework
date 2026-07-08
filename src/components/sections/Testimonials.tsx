import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

// PLACEHOLDER: Replace all testimonial copy with real customer reviews
const TESTIMONIALS = [
  {
    name: '[Customer Name]',
    tag: 'Verified Customer',
    headline: '"[PLACEHOLDER: Short punchy review headline]"',
    body: '[PLACEHOLDER: Full review text — 2-3 sentences. Use a real customer quote that highlights a specific benefit or result. Keep it authentic and outcome-focused.]',
    stars: 5,
    avatar: 'https://i.pravatar.cc/96?img=1',
  },
  {
    name: '[Customer Name]',
    tag: 'Verified Customer',
    headline: '"[PLACEHOLDER: Short punchy review headline]"',
    body: '[PLACEHOLDER: Full review text — 2-3 sentences. Ideally different benefit angle from review 1.]',
    stars: 5,
    avatar: 'https://i.pravatar.cc/96?img=5',
  },
  {
    name: '[Customer Name]',
    tag: 'Verified Customer',
    headline: '"[PLACEHOLDER: Short punchy review headline]"',
    body: '[PLACEHOLDER: Full review text — 2-3 sentences. Address a common objection or skepticism that was overcome.]',
    stars: 5,
    avatar: 'https://i.pravatar.cc/96?img=9',
  },
  {
    name: '[Customer Name]',
    tag: 'Verified Customer',
    headline: '"[PLACEHOLDER: Short punchy review headline]"',
    body: '[PLACEHOLDER: Full review text — 2-3 sentences. Emotional, lifestyle-oriented review works well here.]',
    stars: 5,
    avatar: 'https://i.pravatar.cc/96?img=12',
  },
  {
    name: '[Customer Name]',
    tag: 'Verified Customer',
    headline: '"[PLACEHOLDER: Short punchy review headline]"',
    body: '[PLACEHOLDER: Full review text — 2-3 sentences. Before/after style testimonial.]',
    stars: 5,
    avatar: 'https://i.pravatar.cc/96?img=20',
  },
  {
    name: '[Customer Name]',
    tag: 'Verified Customer',
    headline: '"[PLACEHOLDER: Short punchy review headline]"',
    body: '[PLACEHOLDER: Full review text — 2-3 sentences. Loyalty/habit-forming angle.]',
    stars: 5,
    avatar: 'https://i.pravatar.cc/96?img=25',
  },
]

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          fill={i < count ? 'hsl(38 92% 50%)' : 'none'}
          stroke={i < count ? 'hsl(38 92% 50%)' : 'hsl(var(--border))'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="reviews" className="py-16 md:py-24 px-4" style={{ background: 'hsl(var(--secondary))' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* PLACEHOLDER: Testimonial section heading — e.g. "Real Customers. Real Results." */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            [PLACEHOLDER: Testimonial heading — e.g. "Real Customers. Real Results."]
          </h2>
          {/* PLACEHOLDER: Aggregate review stats */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <StarRow count={5} />
            <span className="text-sm font-medium text-foreground">
              [X.X] / 5 · [XX,XXX]+ verified reviews
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background rounded-2xl border border-border p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <StarRow count={t.stars} />
              <p className="font-semibold text-foreground text-sm">{t.headline}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.body}</p>
              <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-8 h-8 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-xs font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.tag}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
