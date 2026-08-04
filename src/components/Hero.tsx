import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/profile'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-bg" />

      <div className="container-fluid relative z-10 flex flex-col justify-between min-h-[100dvh] pt-[calc(5rem+env(safe-area-inset-top))] pb-[max(2rem,env(safe-area-inset-bottom))]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="hidden md:flex justify-end"
        >
          <div className="flex items-center gap-2 text-xs text-[#8a8a93]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </div>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center py-8 md:py-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="eyebrow mb-6 md:mb-8"
          >
            Customer Support · AI · Salesforce
          </motion.p>

          <div className="mb-6 md:mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="display-xl text-white"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-4 md:mt-6 h-[1.4em] overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,3vw+0.5rem,2.25rem)] font-medium text-[var(--color-accent)]"
                >
                  {profile.roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="body-lg max-w-2xl mb-10 md:mb-12"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-3"
          >
            <a href="#work" className="btn-primary" data-cursor>
              See my work
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              data-cursor
            >
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 border-t border-white/[0.06] pt-6 md:pt-8"
        >
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-[clamp(0.6875rem,1.5vw,0.8125rem)] text-[#8a8a93] mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 scroll-hint"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a8a93]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#8a8a93] to-transparent" />
      </motion.div>
    </section>
  )
}
