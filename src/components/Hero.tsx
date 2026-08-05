import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-x-clip">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="page-container relative z-10 flex flex-col flex-1 min-h-[100dvh] pt-[calc(4.5rem+env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="hidden md:flex justify-end py-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-[var(--radius-full)] border border-[rgba(255,255,255,0.09)] bg-white/[0.02] text-[0.6875rem] font-medium leading-normal text-[var(--color-muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            Available for opportunities
          </div>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center py-10 md:py-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="eyebrow mb-5"
          >
            Customer Support · Backend · Salesforce
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 mb-8 space-y-2 overflow-visible"
          >
            <p className="role-title">{profile.headline}</p>
            <p className="role-subtitle">{profile.subheadline}</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="body-lg max-w-[36rem] mb-10"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-2.5"
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-3 gap-6 md:gap-10 pt-8 border-t border-[rgba(255,255,255,0.09)]"
        >
          {profile.stats.map((stat, i) => (
            <div key={stat.label} className={i > 0 ? 'pl-6 md:pl-10 border-l border-[rgba(255,255,255,0.09)]' : ''}>
              <p className="font-[family-name:var(--font-display)] text-[clamp(1.375rem,3vw,2rem)] font-semibold text-white tracking-[-0.03em] leading-tight">
                {stat.value}
              </p>
              <p className="text-[0.75rem] text-[var(--color-muted)] mt-2 leading-normal">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 scroll-hint pointer-events-none"
      >
        <span className="text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-muted)] leading-normal">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-transparent" />
      </motion.div>
    </section>
  )
}
