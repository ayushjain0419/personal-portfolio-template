import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

// Replace YOUR_FORM_ID with your Formspree form ID from https://formspree.io
const FORMSPREE_ID = 'maqplnjo'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({ name: '', email: '', service: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(null)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formState),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please email me directly.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 bg-[#0a0a0a] overflow-hidden"
      aria-label="Contact Ayush Jain"
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(200,184,162,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-inter text-xs text-[#c8b8a2] tracking-[0.25em] uppercase">
            06 — Contact
          </span>
          <span className="flex-1 h-px bg-white/5" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-syne font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-tight text-[#e8e8e8] mb-4"
        >
          Ready to Build
          <br />
          <span className="text-[#c8b8a2]">Something?</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-base text-[#a0a0a0] mb-14 max-w-lg"
        >
          Whether you need automation, a website, or a complete system — let's talk.
        </motion.p>

        {/* Form */}
        {!submitted ? (
          <motion.form
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-5"
            aria-label="Contact form"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block font-inter text-xs text-[#a0a0a0] mb-2 tracking-wide">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-[#111111] border border-white/8 rounded-xl px-4 py-3.5
                             font-inter text-sm text-[#e8e8e8] placeholder-[#a0a0a0]/30
                             focus:outline-none focus:border-[#c8b8a2]/50
                             transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-inter text-xs text-[#a0a0a0] mb-2 tracking-wide">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-[#111111] border border-white/8 rounded-xl px-4 py-3.5
                             font-inter text-sm text-[#e8e8e8] placeholder-[#a0a0a0]/30
                             focus:outline-none focus:border-[#c8b8a2]/50
                             transition-colors duration-200"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="service" className="block font-inter text-xs text-[#a0a0a0] mb-2 tracking-wide">
                  Service Interest <span className="text-[#a0a0a0]/40">(optional)</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-white/8 rounded-xl px-4 py-3.5
                             font-inter text-sm text-[#e8e8e8]
                             focus:outline-none focus:border-[#c8b8a2]/50
                             transition-colors duration-200 appearance-none cursor-pointer"
                  style={{ color: formState.service ? '#e8e8e8' : '#a0a0a050' }}
                >
                  <option value="" disabled style={{ color: '#a0a0a0' }}>Select a service</option>
                  <option value="AI Automation">AI Automation</option>
                  <option value="Business Website">Business Website</option>
                  <option value="Business System">Business System</option>
                  <option value="Not Sure">Not Sure</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block font-inter text-xs text-[#a0a0a0] mb-2 tracking-wide">
                  Budget Range <span className="text-[#a0a0a0]/40">(optional)</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formState.budget}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-white/8 rounded-xl px-4 py-3.5
                             font-inter text-sm text-[#e8e8e8]
                             focus:outline-none focus:border-[#c8b8a2]/50
                             transition-colors duration-200 appearance-none cursor-pointer"
                  style={{ color: formState.budget ? '#e8e8e8' : '#a0a0a050' }}
                >
                  <option value="" disabled style={{ color: '#a0a0a0' }}>Select budget</option>
                  <option value="Under ₹25K">Under ₹25K</option>
                  <option value="₹25K–₹75K">₹25K–₹75K</option>
                  <option value="₹75K–₹1L">₹75K–₹1L</option>
                  <option value="₹1L+">₹1L+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-inter text-xs text-[#a0a0a0] mb-2 tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell me what you're building or what problem you need solved..."
                className="w-full bg-[#111111] border border-white/8 rounded-xl px-4 py-3.5
                           font-inter text-sm text-[#e8e8e8] placeholder-[#a0a0a0]/30
                           focus:outline-none focus:border-[#c8b8a2]/50
                           transition-colors duration-200 resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                type="submit"
                disabled={sending}
                className="group relative w-full sm:w-auto px-10 py-3.5 rounded-full
                           bg-[#e8e8e8] text-[#0a0a0a] font-inter font-semibold text-sm
                           tracking-wide overflow-hidden
                           hover:bg-[#c8b8a2] disabled:opacity-60
                           transition-all duration-300"
              >
                {sending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              {error && (
                <p className="font-inter text-xs text-red-400/80 self-center" role="alert">
                  {error}
                </p>
              )}
            </div>

            {/* Trust signals */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
              <p className="font-inter text-xs text-[#a0a0a0]/50 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/60" aria-hidden="true" />
                Reply within 24 hours
              </p>
              <span className="hidden sm:block text-[#a0a0a0]/20 text-xs">·</span>
              <a
                href="https://wa.me/917411971654"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-xs text-[#c8b8a2]/70 hover:text-[#c8b8a2] transition-colors duration-200"
                aria-label="Chat on WhatsApp (opens in new tab)"
              >
                Prefer WhatsApp? Chat here →
              </a>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 rounded-2xl border border-[#c8b8a2]/15 bg-[#111111]"
          >
            <div
              className="font-syne font-bold text-2xl mb-2"
              style={{
                background: 'linear-gradient(135deg, #c8b8a2 0%, #a0907a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Message Sent!
            </div>
            <p className="font-inter text-sm text-[#a0a0a0]">
              I'll get back to you soon. Looking forward to building together.
            </p>
          </motion.div>
        )}

        {/* LinkedIn */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <a
            href="https://linkedin.com/in/ayushavee"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-[#a0a0a0] hover:text-[#c8b8a2] transition-colors duration-300 group"
            aria-label="Ayush Jain on LinkedIn (opens in new tab)"
          >
            <span className="text-[#c8b8a2] group-hover:scale-110 transition-transform duration-200">
              <LinkedInIcon />
            </span>
            <span className="font-inter text-sm">linkedin.com/in/ayushavee</span>
          </a>

          <span className="text-[#a0a0a0]/20 text-sm">·</span>

          <a
            href="https://github.com/ayushjain0419"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-[#a0a0a0] hover:text-[#c8b8a2] transition-colors duration-300 group"
            aria-label="Ayush Jain on GitHub (opens in new tab)"
          >
            <span className="text-[#c8b8a2] group-hover:scale-110 transition-transform duration-200">
              <GitHubIcon />
            </span>
            <span className="font-inter text-sm">github.com/ayushjain0419</span>
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="mt-24 text-center border-t border-white/5 pt-8"
        role="contentinfo"
      >
        <p className="font-inter text-xs text-[#a0a0a0]/40 tracking-wide">
          © 2026 Ayush Jain&nbsp;&nbsp;·&nbsp;&nbsp;Build with Ayush&nbsp;&nbsp;·&nbsp;&nbsp;India
        </p>
      </motion.footer>
    </section>
  )
}
