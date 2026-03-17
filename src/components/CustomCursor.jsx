import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)
  const isHovering = useRef(false)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onEnter = () => { isHovering.current = true }
    const onLeave = () => { isHovering.current = false }

    document.addEventListener('mousemove', onMove)

    // Add hover detection for interactive elements
    const interactives = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    // Use MutationObserver to catch dynamically added elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    const animate = () => {
      // Dot follows cursor exactly
      dot.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`

      // Ring lags behind for trailing effect
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12

      const scale = isHovering.current ? 2.2 : 1
      ring.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px) scale(${scale})`
      ring.style.borderColor = isHovering.current ? '#c8b8a2' : '#a0a0a0'
      ring.style.opacity = isHovering.current ? '0.9' : '0.5'

      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#c8b8a2] pointer-events-none z-[99999]"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[99999]"
        style={{
          willChange: 'transform',
          borderColor: '#a0a0a0',
          opacity: 0.5,
          transition: 'border-color 0.2s, opacity 0.2s, scale 0.2s',
        }}
        aria-hidden="true"
      />
    </>
  )
}
