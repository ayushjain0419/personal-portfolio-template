import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    number: '01',
    title: 'AI Lead Capture System',
    description:
      'Automated lead intake, qualification, and follow-up pipeline for a local services business — cutting manual work by 80% and responding to leads in under 2 minutes.',
    tags: ['n8n', 'OpenAI', 'Airtable', 'WhatsApp API'],
    outcome: '80% less manual work',
    outcomeLabel: 'Result',
  },
  {
    number: '02',
    title: 'Wholesale Business Dashboard',
    description:
      'Custom internal dashboard for Ayush Footwear Zone — tracking inventory, orders, and supplier relationships in one place, replacing scattered spreadsheets.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    outcome: '1 unified system',
    outcomeLabel: 'Result',
  },
  {
    number: '03',
    title: 'Business Website & CRM Integration',
    description:
      'Full website build for a service business with integrated contact form, lead routing to CRM, automated email sequences, and conversion-optimised landing pages.',
    tags: ['React', 'Tailwind', 'Make.com', 'HubSpot'],
    outcome: '3× more enquiries',
    outcomeLabel: 'Result',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="work"
      ref={ref}
      className="relative py-32 px-6 bg-[#0a0a0a]"
      aria-label="Projects — Work by Ayush Jain"
    >
      <div className="max-w-5xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="font-inter text-xs text-[#c8b8a2] tracking-[0.25em] uppercase">
            05 — Work
          </span>
          <span className="flex-1 h-px bg-white/5" />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="font-syne font-bold text-[clamp(2.5rem,5vw,4rem)] leading-tight text-[#e8e8e8] mb-4">
            Things I've Built
          </h2>
          <p className="font-inter text-base text-[#a0a0a0]">
            Real projects, real results.
          </p>
        </motion.div>

        <div className="space-y-4" role="list">
          {projects.map((project, i) => (
            <motion.article
              key={project.number}
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
                  background: 'radial-gradient(ellipse at 0% 50%, rgba(200,184,162,0.05) 0%, transparent 60%)',
                }}
                aria-hidden="true"
              />

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 relative">
                {/* Number + Title block */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-syne text-xs text-[#a0a0a0]/30 tracking-[0.2em]">
                      {project.number}
                    </span>
                    <h3 className="font-syne font-bold text-xl text-[#e8e8e8] group-hover:text-[#c8b8a2] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="font-inter text-sm text-[#a0a0a0] leading-relaxed mb-5 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-inter text-[10px] px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-white/5 text-[#a0a0a0]/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome metric */}
                <div className="md:text-right shrink-0">
                  <div className="font-inter text-[10px] text-[#a0a0a0]/40 tracking-[0.2em] uppercase mb-1">
                    {project.outcomeLabel}
                  </div>
                  <div
                    className="font-syne font-bold text-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #c8b8a2 0%, #a0907a 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {project.outcome}
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8b8a2]/0 to-transparent group-hover:via-[#c8b8a2]/25 transition-all duration-500"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
