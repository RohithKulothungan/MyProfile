import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience, education } from '../data/profile'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-indigo-400 mb-4 block">
            Experience & Education
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            My <span className="font-serif italic gradient-text">journey</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
                >
                  <p className="text-xs text-indigo-400 mb-2">{edu.year}</p>
                  <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                  <p className="text-sm text-zinc-400">{edu.school}</p>
                  <p className="text-xs text-zinc-500 mt-1">{edu.location}</p>
                  {edu.note && (
                    <p className="text-sm text-zinc-500 mt-3 leading-relaxed">{edu.note}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-8">Work Experience</h3>
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent" />

              <div className="space-y-8">
                {experience.map((job, i) => (
                  <motion.div
                    key={`${job.company}-${job.period}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-indigo-400 bg-[#0a0a0f]" />

                    <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-xl font-bold group-hover:text-indigo-300 transition-colors">
                            {job.role}
                          </h4>
                          <p className="text-indigo-400 font-medium">{job.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-zinc-400">{job.period}</p>
                          <p className="text-xs text-zinc-500">{job.location}</p>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {job.highlights.map((h) => (
                          <li key={h} className="text-sm text-zinc-400 leading-relaxed flex gap-2">
                            <span className="text-indigo-400 shrink-0">→</span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {job.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
