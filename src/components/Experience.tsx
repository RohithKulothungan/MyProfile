import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience, education } from '../data/profile'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="journey" className="section-gap relative overflow-hidden">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="eyebrow mb-4">Journey</p>
          <h2 className="display-lg text-white">Experience & education</h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Desktop: vertical timeline */}
          <div className="lg:col-span-8">
            <div className="hidden lg:block relative">
              <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-[var(--color-accent)] via-white/10 to-transparent" />

              <div className="space-y-0">
                {experience.map((job, i) => (
                  <motion.div
                    key={`${job.company}-${job.period}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="relative pl-10 pb-12 last:pb-0"
                  >
                    <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[var(--color-accent)] bg-[#050505]" />

                    <div className="card-surface p-6 md:p-8 hover:border-white/12 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold text-white">
                            {job.role}
                          </h3>
                          <p className="text-[var(--color-accent)] text-sm font-medium mt-1">{job.company}</p>
                        </div>
                        <div className="text-right text-sm text-[#8a8a93]">
                          <p>{job.period}</p>
                          <p>{job.location}</p>
                        </div>
                      </div>
                      <p className="body-md mb-4">{job.summary}</p>
                      <p className="text-xs text-[#6b6b75]">{job.stack.join(' · ')}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile & tablet: horizontal snap scroll */}
            <div
              className="lg:hidden flex gap-4 overflow-x-auto pb-4 -mx-[clamp(1.25rem,4vw,3rem)] px-[clamp(1.25rem,4vw,3rem)] snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none' }}
            >
              {experience.map((job, i) => (
                <motion.article
                  key={`mobile-${job.company}-${job.period}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="card-surface p-6 min-w-[min(85vw,340px)] snap-center shrink-0"
                >
                  <p className="text-xs text-[var(--color-accent)] font-medium mb-2">{job.period}</p>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white mb-1">
                    {job.role}
                  </h3>
                  <p className="text-sm text-[#8a8a93] mb-4">{job.company} · {job.location}</p>
                  <p className="body-md text-sm">{job.summary}</p>
                </motion.article>
              ))}
            </div>
            <p className="lg:hidden text-center text-xs text-[#6b6b75] mt-3">Swipe to explore →</p>
          </div>

          {/* Education sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4"
          >
            <p className="eyebrow mb-6">Education</p>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.school} className="card-surface p-6">
                  <p className="text-xs text-[var(--color-accent)] mb-2">{edu.year}</p>
                  <h4 className="font-[family-name:var(--font-display)] font-semibold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-[#8a8a93]">{edu.school}</p>
                  <p className="text-xs text-[#6b6b75] mt-1">{edu.location}</p>
                  {edu.note && (
                    <p className="text-xs text-[var(--color-mint)] mt-3 font-medium">{edu.note}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
