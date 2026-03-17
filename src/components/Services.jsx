import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <circle cx="12" cy="10" r="3" />
        <path d="M9 7l-2-2M15 7l2-2M9 13l-2 2M15 13l2 2" />
      </svg>
    ),
    title: 'AI Automations',
    description:
      'Smart workflows that save time — lead capture, follow-ups, data pipelines, and more using n8n, Make, and AI tools.',
    tags: ['n8n', 'Make.com', 'OpenAI', 'Zapier'],
    number: '01',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="15" rx="2" />
        <polyline points="8 21 12 17 16 21" />
        <line x1="3" y1="8" x2="21" y2="8" />
        <path d="M7 12h2M11 12h6" />
      </svg>
    ),
    title: 'Business Websites',
    description:
      'Clean, fast, and conversion-focused websites built for businesses that want to look professional and generate leads.',
    tags: ['React', 'Next.js', 'Tailwind', 'SEO'],
    number: '02',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
        <circle cx="12" cy="12" r="7" strokeDasharray="2 2" />
      </svg>
    ),
    title: 'Business Systems',
    description:
      'End-to-end business systems — CRMs, dashboards, and internal tools designed around how your business actually works.',
    tags: ['CRM', 'Dashboard', 'Internal Tools', 'APIs'],
    number: '03',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 px-6 bg-[#0a0a0a]"
      aria-label="Services — What Ayush builds"
    >
      {/* Subtle divider line */}
      <div className="max-w-5xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="font-inter text-xs text-[#c8b8a2] tracking-[0.25em] uppercase">
            03 — Services
          </span>
          <span className="flex-1 h-px bg-white/5" />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="font-syne font-bold text-[clamp(2.5rem,5vw,4rem)] leading-tight text-[#e8e8e8] mb-4">
            What I Build
          </h2>
          <p className="font-inter text-base text-[#a0a0a0]">
            Real solutions for real businesses.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5" role="list">
          {services.map((service, i) => (
            <motion.article
              key={service.number}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              role="listitem"
              className="group relative rounded-2xl border border-white/6 bg-[#111111] p-8 overflow-hidden
                         hover:border-[#c8b8a2]/25 hover:-translate-y-1.5
                         transition-all duration-500 ease-out"
              style={{ willChange: 'transform' }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(200,184,162,0.07) 0%, transparent 60%)',
                  boxShadow: 'inset 0 0 0 1px rgba(200,184,162,0.1)',
                }}
                aria-hidden="true"
              />

              {/* Number */}
              <div className="font-syne text-xs text-[#a0a0a0]/30 tracking-[0.2em] mb-6">
                {service.number}
              </div>

              {/* Icon */}
              <div className="text-[#c8b8a2] mb-6 transition-transform duration-300 group-hover:scale-110 inline-block">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-syne font-bold text-xl text-[#e8e8e8] mb-3 group-hover:text-[#c8b8a2] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-sm text-[#a0a0a0] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-inter text-[10px] px-2 py-1 rounded-full bg-[#1a1a1a] border border-white/5 text-[#a0a0a0]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b8a2]/0 to-transparent group-hover:via-[#c8b8a2]/30 transition-all duration-500"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
