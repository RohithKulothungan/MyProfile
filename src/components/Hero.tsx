import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data/profile'

function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
  }

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-500 text-white font-medium rounded-full hover:bg-indigo-400 transition-colors duration-300"
      data-cursor
    >
      {children}
    </a>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

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
      { x: 0.3, y: 0.4, r: 0.35, color: [99, 102, 241], speed: 0.0003 },
      { x: 0.7, y: 0.3, r: 0.3, color: [139, 92, 246], speed: 0.0004 },
      { x: 0.5, y: 0.7, r: 0.25, color: [6, 182, 212], speed: 0.0005 },
    ]

    const draw = () => {
      time++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      blobs.forEach((blob, i) => {
        const cx = (blob.x + Math.sin(time * blob.speed + i) * 0.08) * canvas.width
        const cy = (blob.y + Math.cos(time * blob.speed * 1.3 + i) * 0.06) * canvas.height
        const radius = blob.r * Math.min(canvas.width, canvas.height)

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
        gradient.addColorStop(0, `rgba(${blob.color.join(',')}, 0.15)`)
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

  const titleWords = profile.name.split(' ')

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas id="hero-canvas" className="absolute inset-0 pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0f_70%)]" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-widest uppercase text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            {profile.title}
          </span>
        </motion.div>

        <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight mb-8">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.15em]"
            >
              {i === titleWords.length - 1 ? (
                <span className="gradient-text font-serif italic">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed mb-12"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#projects">
            View my work
            <span>↓</span>
          </MagneticButton>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-zinc-300 font-medium border border-white/10 rounded-full hover:border-white/30 hover:text-white transition-all duration-300"
            data-cursor
          >
            LinkedIn
            <span className="text-xs">↗</span>
          </a>
          <a
            href="/Resume2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-zinc-300 font-medium border border-white/10 rounded-full hover:border-white/30 hover:text-white transition-all duration-300"
            data-cursor
          >
            Resume
            <span className="text-xs">↓</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
