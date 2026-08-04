import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const ringX = useSpring(mouseX, { stiffness: 250, damping: 28 })
  const ringY = useSpring(mouseY, { stiffness: 250, damping: 28 })
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 50 })
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 50 })

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    const isNarrow = window.innerWidth < 1024
    if (isCoarse || isNarrow) return

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

  if (typeof window !== 'undefined') {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    const isNarrow = window.innerWidth < 1024
    if (isCoarse || isNarrow) return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none mix-blend-difference hidden lg:block"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <div
          ref={ringRef}
          className="w-9 h-9 rounded-full border border-white/50 transition-all duration-300 [&.cursor-hover]:w-14 [&.cursor-hover]:h-14 [&.cursor-hover]:border-white/25"
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[10001] pointer-events-none hidden lg:block"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <div
          ref={dotRef}
          className="w-1 h-1 rounded-full bg-[var(--color-accent)] transition-all duration-200 [&.cursor-hover]:scale-[2.5] [&.cursor-hover]:bg-white"
        />
      </motion.div>
    </>
  )
}
