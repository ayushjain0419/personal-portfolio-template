import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="grain relative">
      <AnimatePresence>
        {!loaded && <Loader key="loader" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  )
}
