import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We talk through your business, goals, and what\'s not working. No jargon, just clarity.',
  },
  {
    num: '02',
    title: 'Proposal',
    desc: 'I map out a solution, timeline, and cost. You get a clear plan before anything is built.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'I build it, keep you updated, and iterate fast. You see progress, not silence.',
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: 'We go live. I stick around to make sure everything runs smoothly.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-32 px-6 bg-[#0a0a0a] overflow-hidden"
      aria-label="How I work — process"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(200,184,162,0.03) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-inter text-xs text-[#c8b8a2] tracking-[0.25em] uppercase">
            04 — Process
          </span>
          <span className="flex-1 h-px bg-white/5" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-syne font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-tight text-[#e8e8e8] mb-16"
        >
          How It{' '}
          <span className="text-[#c8b8a2]">Works</span>
        </motion.h2>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute top-[2.6rem] left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-transparent via-[#c8b8a2]/20 to-transparent origin-left"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col"
              >
                {/* Step number bubble */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative flex-shrink-0">
                    <div className="w-11 h-11 rounded-full border border-[#c8b8a2]/30 bg-[#111111] flex items-center justify-center">
                      <span className="font-syne font-bold text-xs text-[#c8b8a2] tracking-widest">
                        {step.num}
                      </span>
                    </div>
                    {/* Pulse ring */}
                    <div
                      className="absolute inset-0 rounded-full border border-[#c8b8a2]/10 scale-125 opacity-0 animate-ping"
                      style={{ animationDelay: `${i * 0.4}s`, animationDuration: '3s' }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1 h-px bg-white/5 lg:hidden" aria-hidden="true" />
                </div>

                <h3 className="font-syne font-bold text-lg text-[#e8e8e8] mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-[#a0a0a0] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline note */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-14 font-inter text-xs text-[#a0a0a0]/50 tracking-wide"
        >
          Typical timeline: 1–4 weeks depending on scope.
        </motion.p>
      </div>
    </section>
  )
}
