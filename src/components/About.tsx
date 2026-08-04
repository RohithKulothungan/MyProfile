import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile, skills } from '../data/profile'
import SectionHeader from './SectionHeader'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="About"
          title="Engineering support at scale"
          inView={inView}
        />

        <div ref={ref} className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl space-y-5"
          >
            <p className="body-text">{profile.about}</p>
            <p className="muted-text">{profile.personalNote}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="section-label mb-5">Expertise</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {skills.map((skill) => (
                <li key={skill} className="text-sm text-zinc-400">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-3 gap-8 pt-4 border-t border-white/[0.04]"
          >
            {[
              { label: 'Location', value: profile.location },
              { label: 'Email', value: profile.email },
              { label: 'Phone', value: profile.phone },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-zinc-500 mb-1.5">{item.label}</p>
                <p className="text-sm text-zinc-300">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
