import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote:
      "Ayush built us an automation that completely changed how we handle leads. What used to take our team hours now happens automatically — and faster than we ever managed manually.",
    name: 'Rakesh Mehta',
    role: 'Business Owner, Mehta Traders',
    initials: 'RM',
  },
  {
    quote:
      "The website he delivered was clean, professional, and actually converts. We saw a noticeable increase in enquiries within the first month. Would recommend to any business.",
    name: 'Priya Nair',
    role: 'Founder, Nair Wellness Studio',
    initials: 'PN',
  },
  {
    quote:
      "What I appreciated most was that Ayush understood the actual business problem first. He didn't just build what I asked — he built what I needed.",
    name: 'Arjun Sharma',
    role: 'Operations Head, Sharma Logistics',
    initials: 'AS',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

function QuoteIcon() {
  return (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
      <path
        d="M0 18V10.8C0 4.8 3.6 1.2 10.8 0l1.2 2.4C8.4 3.6 6.6 5.4 6 8.4H10.8V18H0ZM13.2 18V10.8C13.2 4.8 16.8 1.2 24 0l1.2 2.4C21.6 3.6 19.8 5.4 19.2 8.4H24V18H13.2Z"
        fill="#c8b8a2"
        fillOpacity="0.25"
      />
    </svg>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 px-6 bg-[#0a0a0a]"
      aria-label="Testimonials"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-xs text-[#c8b8a2] tracking-[0.25em] uppercase mb-4">
            What Clients Say
          </p>
          <h2 className="font-syne font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#e8e8e8]">
            Built on trust, delivered with results.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4" role="list">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              role="listitem"
              className="group relative rounded-2xl border border-white/6 bg-[#111111] p-8 overflow-hidden
                         hover:border-[#c8b8a2]/20 transition-all duration-500"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(200,184,162,0.06) 0%, transparent 60%)',
                }}
                aria-hidden="true"
              />

              <div className="mb-6">
                <QuoteIcon />
              </div>

              <blockquote className="font-inter text-sm text-[#a0a0a0] leading-relaxed mb-8 relative">
                "{t.quote}"
              </blockquote>

              <figcaption className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-syne font-bold text-[#c8b8a2] shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)', border: '1px solid rgba(200,184,162,0.15)' }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-syne font-semibold text-sm text-[#e8e8e8]">{t.name}</div>
                  <div className="font-inter text-xs text-[#a0a0a0]/60">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

      </div>
    </section>
  )
}
