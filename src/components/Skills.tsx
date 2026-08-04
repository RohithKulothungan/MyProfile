import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/profile'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-indigo-400 mb-4 block">
            Core Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            Tools & <span className="font-serif italic gradient-text">technologies</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 transition-all duration-500 group"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-indigo-400 group-hover:w-12 transition-all duration-300" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 + j * 0.03 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 text-sm rounded-xl bg-white/[0.04] border border-white/5 text-zinc-300 hover:border-indigo-400/30 hover:text-white transition-all cursor-default"
                    data-cursor
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 md:p-12 rounded-3xl border border-white/5 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 text-center"
        >
          <p className="text-2xl md:text-3xl font-serif italic text-zinc-300 mb-2">
            "Technical ownership and cross-functional delivery"
          </p>
          <p className="text-sm text-zinc-500">
            Bridging engineering, product, and customer operations to ship impactful solutions
          </p>
        </motion.div>
      </div>
    </section>
  )
}
