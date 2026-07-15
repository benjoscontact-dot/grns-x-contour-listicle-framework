import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Michael R.',
    tag: 'Verified Purchase',
    headline: '"Finally did it in 15 minutes"',
    body: 'I\'d been putting off going to the podiatrist for two years. Too many appointments, too much hassle. This took me 15 minutes at my kitchen table. My plantar fasciitis has been noticeably better within the first week.',
    stars: 5,
    avatar: 'https://i.pravatar.cc/96?img=11',
  },
  {
    name: 'Sandra T.',
    tag: 'Verified Purchase',
    headline: '"$600 prescription pair is in a drawer. These aren\'t."',
    body: 'I spent $600 on prescription orthotics that ended up in a drawer because they were too thick for my work shoes. These actually fit in every pair I own — my sneakers, my work flats, even my boots.',
    stars: 5,
    avatar: 'https://i.pravatar.cc/96?img=5',
  },
  {
    name: 'James K.',
    tag: 'Verified Purchase',
    headline: '"Better than the ones my doctor prescribed"',
    body: 'My insurance wouldn\'t cover orthotics. At $239 I just bought these myself and honestly they\'re more comfortable than the pair I got from my podiatrist three years ago. No break-in period either.',
    stars: 5,
    avatar: 'https://i.pravatar.cc/96?img=15',
  },
  {
    name: 'Deborah M.',
    tag: 'Verified Purchase',
    headline: '"The insurance fight was never worth it"',
    body: 'I went through two denied insurance claims and gave up. A friend told me about Contour and I\'m so glad I didn\'t go through a third claim. No forms, no referrals, no waiting. Just comfortable feet.',
    stars: 5,
    avatar: 'https://i.pravatar.cc/96?img=44',
  },
  {
    name: 'Carlos V.',
    tag: 'Verified Purchase',
    headline: '"I was skeptical — very wrong"',
    body: 'The whole water-injection thing sounds gimmicky. I almost didn\'t try it. After wearing them for 3 weeks on a job that has me on my feet 10 hours a day, my heel pain is basically gone. I was completely wrong to be skeptical.',
    stars: 5,
    avatar: 'https://i.pravatar.cc/96?img=68',
  },
  {
    name: 'Patricia L.',
    tag: 'Verified Purchase',
    headline: '"The 180-day guarantee made me try it"',
    body: 'I\'ve wasted money on so many insoles. The 180-day guarantee is what made me finally try. Two months later I\'ve already ordered a second pair for my walking shoes. The first pair has been in my work boots every single day.',
    stars: 5,
    avatar: 'https://i.pravatar.cc/96?img=32',
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What People Are Saying
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <StarRow count={5} />
            <span className="text-sm font-medium text-foreground">
              20,000+ patients fitted
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
