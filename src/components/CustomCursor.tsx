import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 25 })
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 25 })
  const dotX = useSpring(mouseX, { stiffness: 600, damping: 45 })
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 45 })

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const hover = () => {
      ringRef.current?.classList.add('cursor-hover')
      dotRef.current?.classList.add('cursor-hover')
    }
    const unhover = () => {
      ringRef.current?.classList.remove('cursor-hover')
      dotRef.current?.classList.remove('cursor-hover')
    }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', hover)
      el.addEventListener('mouseleave', unhover)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', hover)
        el.removeEventListener('mouseleave', unhover)
      })
    }
  }, [mouseX, mouseY])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none hidden md:block"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <div
          ref={ringRef}
          className="w-8 h-8 rounded-full border border-white/20 transition-all duration-300 [&.cursor-hover]:w-12 [&.cursor-hover]:h-12 [&.cursor-hover]:border-white/10"
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[10001] pointer-events-none hidden md:block"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <div
          ref={dotRef}
          className="w-1 h-1 rounded-full bg-white/60 transition-all duration-300 [&.cursor-hover]:scale-150"
        />
      </motion.div>
    </>
  )
}
