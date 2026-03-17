import { motion } from 'framer-motion'

export default function Loader({ onComplete }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 0.9, delay: 1.4, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
    >
      {/* Brand name */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-inter text-3xl text-[#c8b8a2] tracking-[0.3em] uppercase mb-3"
      >
        Build with Ayush
      </motion.p>

      {/* Thin expanding line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-px w-32 bg-gradient-to-r from-transparent via-[#c8b8a2]/50 to-transparent origin-center"
      />
    </motion.div>
  )
}
