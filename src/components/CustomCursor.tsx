import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20 })
  const dotX = useSpring(mouseX, { stiffness: 500, damping: 40 })
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 40 })

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const hover = () => {
      ringRef.current?.classList.add('cursor-hover')
      cursorRef.current?.classList.add('cursor-hover')
    }
    const unhover = () => {
      ringRef.current?.classList.remove('cursor-hover')
      cursorRef.current?.classList.remove('cursor-hover')
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
        ref={ringRef}
        className="fixed top-0 left-0 z-[10000] pointer-events-none mix-blend-difference hidden md:block"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <div className="w-10 h-10 rounded-full border border-white/60 transition-all duration-300 [&.cursor-hover]:w-16 [&.cursor-hover]:h-16 [&.cursor-hover]:border-white/30" />
      </motion.div>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[10001] pointer-events-none hidden md:block"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 transition-all duration-300 [&.cursor-hover]:w-2 [&.cursor-hover]:h-2 [&.cursor-hover]:bg-white" />
      </motion.div>
    </>
  )
}
