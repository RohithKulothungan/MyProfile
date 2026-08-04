import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data/profile'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  useEffect(() => {
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const blobs = [
      { x: 0.25, y: 0.35, r: 0.3, color: [129, 140, 248], speed: 0.00025 },
      { x: 0.75, y: 0.25, r: 0.25, color: [99, 102, 241], speed: 0.0003 },
    ]

    const draw = () => {
      time++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      blobs.forEach((blob, i) => {
        const cx = (blob.x + Math.sin(time * blob.speed + i) * 0.05) * canvas.width
        const cy = (blob.y + Math.cos(time * blob.speed * 1.2 + i) * 0.04) * canvas.height
        const radius = blob.r * Math.min(canvas.width, canvas.height)

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
        gradient.addColorStop(0, `rgba(${blob.color.join(',')}, 0.08)`)
        gradient.addColorStop(1, `rgba(${blob.color.join(',')}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(cx, cy, radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[92vh] flex items-end md:items-center overflow-hidden">
      <canvas id="hero-canvas" className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#09090b_75%)]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-36 pb-24 md:pt-40 md:pb-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-label mb-6"
        >
          {profile.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,7vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white mb-8"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="body-text max-w-xl mb-12"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-zinc-950 bg-white rounded-full hover:bg-zinc-200 transition-colors"
            data-cursor
          >
            View work
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-zinc-300 border border-white/10 rounded-full hover:border-white/25 hover:text-white transition-colors"
            data-cursor
          >
            LinkedIn
          </a>
          <a
            href="/Resume2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            data-cursor
          >
            Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
