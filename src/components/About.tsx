import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/profile'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-medium tracking-[0.3em] uppercase text-indigo-400 mb-4 block"
            >
              About
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Building systems that{' '}
              <span className="font-serif italic gradient-text">empower</span>{' '}
              support teams
            </motion.h2>
          </div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed"
            >
              {profile.about}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-zinc-500 leading-relaxed"
            >
              {profile.personalNote}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {[
                { label: 'Location', value: profile.location },
                { label: 'Email', value: profile.email },
                { label: 'Phone', value: profile.phone },
                { label: 'Status', value: 'Open to opportunities' },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-sm text-zinc-300 break-all">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
