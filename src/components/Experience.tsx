import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience, education } from '../data/profile'
import SectionHeader from './SectionHeader'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Experience"
          title="Where I've built"
          inView={inView}
        />

        <div ref={ref} className="space-y-20">
          <div>
            <p className="section-label mb-8">Work</p>
            <div className="space-y-0">
              {experience.map((job, i) => (
                <motion.div
                  key={`${job.company}-${job.period}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-b border-white/[0.04] last:border-0"
                >
                  <div className="text-sm text-zinc-500 tabular-nums">
                    <p>{job.period}</p>
                    <p className="mt-1">{job.location}</p>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-white mb-1">
                      {job.role}
                    </h3>
                    <p className="text-sm text-indigo-300/80 mb-4">{job.company}</p>
                    <p className="body-text text-[0.975rem] mb-4 max-w-xl">{job.summary}</p>
                    <p className="text-xs text-zinc-500">{job.stack.join(' · ')}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className="section-label mb-8">Education</p>
            <div className="grid sm:grid-cols-2 gap-8">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="py-2"
                >
                  <p className="text-xs text-zinc-500 mb-2">{edu.year}</p>
                  <h4 className="font-[family-name:var(--font-display)] text-base font-medium text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-zinc-400">{edu.school}</p>
                  {edu.note && <p className="text-xs text-zinc-500 mt-2">{edu.note}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
