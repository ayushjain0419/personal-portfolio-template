import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import useScrollDirection from '../hooks/useScrollDirection'

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Work', to: 'work' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const { scrollDir, scrolled } = useScrollDirection()
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Fade in after 1s on load
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const navHidden = scrollDir === 'down' && scrolled

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: navHidden ? 0 : 1, y: navHidden ? -80 : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed top-0 left-0 right-0 z-[1000] px-6 py-4"
          aria-label="Main navigation"
        >
          <nav
            className={`
              max-w-6xl mx-auto flex items-center justify-between
              px-6 py-3 rounded-2xl transition-all duration-500
              ${scrolled
                ? 'bg-[#111111]/80 backdrop-blur-xl border border-white/5 shadow-2xl'
                : 'bg-transparent'
              }
            `}
          >
            {/* Logo */}
            <Link
              to="hero"
              smooth duration={600}
              className="font-syne font-bold text-lg text-[#e8e8e8] tracking-tight hover:text-[#c8b8a2] transition-colors"
              aria-label="Ayush Jain — go to top"
            >
              Ayush<span className="text-[#c8b8a2]">.</span>
            </Link>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-80}
                    className="font-inter text-sm text-[#a0a0a0] hover:text-[#e8e8e8] transition-colors tracking-wide relative group"
                    activeClass="text-[#e8e8e8]"
                    spy
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#c8b8a2] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="contact"
                smooth
                duration={600}
                offset={-80}
                className="font-inter text-sm px-5 py-2 rounded-full border border-[#c8b8a2]/40 text-[#c8b8a2] hover:border-[#c8b8a2] hover:bg-[#c8b8a2]/5 transition-all duration-300 tracking-wide"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={`block w-5 h-px bg-[#e8e8e8] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-px bg-[#e8e8e8] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-[#e8e8e8] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </nav>

          {/* Mobile drawer */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="md:hidden fixed inset-0 top-0 z-[9998] bg-[#0a0a0a]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={link.to}
                      smooth
                      duration={600}
                      offset={-80}
                      onClick={() => setMenuOpen(false)}
                      className="font-syne text-3xl font-bold text-[#e8e8e8] hover:text-[#c8b8a2] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.08 }}
                >
                  <Link
                    to="contact"
                    smooth
                    duration={600}
                    onClick={() => setMenuOpen(false)}
                    className="font-inter text-base px-8 py-3 rounded-full border border-[#c8b8a2]/50 text-[#c8b8a2] hover:bg-[#c8b8a2]/10 transition-all"
                  >
                    Let's Talk
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
