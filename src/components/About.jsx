import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedNumber({ target, suffix = '', inView }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1200
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setDisplay(target)
        clearInterval(timer)
      } else {
        setDisplay(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])
  return <>{display}{suffix}</>
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const stats = [
  {
    target: 4,
    suffix: '+',
    label: 'Years in Software',
    sub: 'Since 2021',
  },
  {
    target: 3,
    suffix: '',
    label: 'Businesses Running Simultaneously',
    sub: 'Build with Ayush · Ayush Footwear Zone · Ayush Software Hub',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6 bg-[#0a0a0a]"
      aria-label="About Ayush Jain"
    >
      {/* Section label */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-16 max-w-5xl mx-auto"
      >
        <span className="font-inter text-xs text-[#c8b8a2] tracking-[0.25em] uppercase">
          02 — About
        </span>
        <span className="flex-1 h-px bg-white/5" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Portrait */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative group">
            {/* Glow rings */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'radial-gradient(circle, rgba(200,184,162,0.15) 0%, transparent 70%)',
                transform: 'scale(1.3)',
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -inset-3 rounded-full border border-[#c8b8a2]/15 animate-pulse"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-6 rounded-full border border-[#c8b8a2]/06"
              aria-hidden="true"
            />

            {/* Portrait circle */}
            <div
              className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-white/10"
            >
              <img
                src="/ayush.jpg"
                alt="Ayush Jain"
                className="w-full h-full object-cover scale-110"
                style={{ objectPosition: '60% 15%' }}
              />

              {/* Subtle overlay gradient */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(200,184,162,0.06) 0%, transparent 60%)',
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </motion.div>

        {/* Right — Bio */}
        <div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-syne font-bold text-[clamp(2rem,4vw,2.8rem)] leading-tight text-[#e8e8e8] mb-6"
          >
            Not just learning —
            <br />
            <span className="text-[#c8b8a2]">actually doing.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-inter text-base text-[#a0a0a0] leading-loose mb-8"
          >
            I'm Ayush — a BCA graduate and entrepreneur with 4+ years in software, running
            three ventures:{' '}
            <span className="text-[#e8e8e8] font-medium">Build with Ayush</span> (AI & tech),{' '}
            <span className="text-[#e8e8e8] font-medium">Ayush Footwear Zone</span> (wholesale
            business), and <span className="text-[#e8e8e8] font-medium">Ayush Software Hub</span> (software solutions). I've been building real-world systems since
            2021 — not just learning, but doing.
          </motion.p>

          {/* Tags */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {['n8n', 'Make.com', 'AI Workflows', 'React', 'Node.js', 'India'].map((tag) => (
              <span
                key={tag}
                className="font-inter text-xs px-3 py-1.5 rounded-full border border-white/8 text-[#a0a0a0] bg-[#111111]"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="max-w-5xl mx-auto mt-16 grid sm:grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
            className="group relative rounded-2xl border border-white/6 bg-[#111111] p-8 overflow-hidden hover:border-[#c8b8a2]/20 transition-all duration-500"
          >
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 80% 20%, rgba(200,184,162,0.06) 0%, transparent 60%)',
              }}
              aria-hidden="true"
            />
            <div
              className="font-syne font-extrabold text-5xl mb-2"
              style={{
                background: 'linear-gradient(135deg, #c8b8a2 0%, #a0907a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              <AnimatedNumber target={stat.target} suffix={stat.suffix} inView={inView} />
            </div>
            <div className="font-syne font-semibold text-base text-[#e8e8e8] mb-1">
              {stat.label}
            </div>
            <div className="font-inter text-xs text-[#a0a0a0]/60">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
