import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const ThreeScene = lazy(() => import('./ThreeScene'))

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]"
      aria-label="Hero section"
    >
      {/* 3D Background */}
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div
              className="w-64 h-64 rounded-full opacity-10 animate-pulse"
              style={{ background: 'radial-gradient(circle, #c8b8a2 0%, transparent 70%)' }}
            />
          </div>
        }
      >
        <ThreeScene />
      </Suspense>

      {/* Radial gradient glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,184,162,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 font-inter text-xs text-emerald-400/80 tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for new projects
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="w-8 h-px bg-[#c8b8a2]/50" />
          <span className="font-inter text-xs text-[#c8b8a2] tracking-[0.25em] uppercase">
            Build with Ayush
          </span>
          <span className="w-8 h-px bg-[#c8b8a2]/50" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-syne font-extrabold text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-tight text-[#e8e8e8] mb-6"
        >
          Hi, I'm{' '}
          <span
            className="relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #e8e8e8 0%, #c8b8a2 60%, #a0907a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Ayush Jain
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="font-syne font-medium text-[clamp(1rem,2.5vw,1.4rem)] text-[#a0a0a0] tracking-wide mb-6"
        >
          Founder&nbsp;&nbsp;·&nbsp;&nbsp;AI Automations&nbsp;&nbsp;·&nbsp;&nbsp;Business Builder
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="font-inter text-base text-[#a0a0a0]/80 max-w-xl mx-auto leading-relaxed mb-12"
        >
          I build smart systems, websites, and AI workflows that help businesses grow —
          from India to the world.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="contact"
            smooth
            duration={700}
            offset={-80}
            className="group relative px-8 py-3.5 rounded-full bg-[#e8e8e8] text-[#0a0a0a] font-inter font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:bg-[#c8b8a2]"
            aria-label="Work with Ayush — go to contact"
          >
            <span className="relative z-10">Work With Me</span>
            <span className="absolute inset-0 bg-[#c8b8a2] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </Link>

          <Link
            to="services"
            smooth
            duration={700}
            offset={-80}
            className="px-8 py-3.5 rounded-full border border-[#e8e8e8]/20 text-[#e8e8e8] font-inter text-sm tracking-wide hover:border-[#c8b8a2]/60 hover:text-[#c8b8a2] transition-all duration-300"
            aria-label="See what Ayush builds — go to services"
          >
            See What I Build
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-inter text-xs text-[#a0a0a0]/50 tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#c8b8a2]/40 to-transparent">
          <motion.div
            className="w-full bg-[#c8b8a2]"
            style={{ height: '40%' }}
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
