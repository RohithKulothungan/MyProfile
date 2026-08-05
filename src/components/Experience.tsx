import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience, education } from '../data/profile'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section id="journey" className="section overflow-hidden">
      <hr className="section-divider page-container mb-[var(--section-space)]" />

      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <p className="eyebrow mb-3">Journey</p>
          <h2 className="display-lg text-white">Experience & education</h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-8">
            {/* Desktop timeline */}
            <div className="hidden lg:block relative pl-1">
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[rgba(255,255,255,0.09)]" />

              <div className="space-y-5">
                {experience.map((job, i) => (
                  <motion.div
                    key={`${job.company}-${job.period}`}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.08 + i * 0.06 }}
                    className="relative pl-9"
                  >
                    <div className="absolute left-0 top-5 w-[11px] h-[11px] rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]" />

                    <div className="card card-pad">
                      <div className="flex items-start justify-between gap-6 mb-4">
                        <div className="min-w-0">
                          <h3 className="font-[family-name:var(--font-display)] text-[1.0625rem] font-semibold text-white tracking-[-0.02em]">
                            {job.role}
                          </h3>
                          <p className="text-[0.8125rem] font-medium text-[var(--color-accent)] mt-1">
                            {job.company}
                          </p>
                        </div>
                        <div className="text-right shrink-0 text-[0.8125rem] text-[var(--color-muted)] leading-relaxed">
                          <p>{job.period}</p>
                          <p>{job.location}</p>
                        </div>
                      </div>
                      <p className="body-md mb-4">{job.summary}</p>
                      <p className="text-[0.6875rem] text-[#6b6b75] tracking-wide">
                        {job.stack.join(' · ')}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile / tablet scroll */}
            <div className="lg:hidden scroll-bleed flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {experience.map((job, i) => (
                <motion.article
                  key={`mobile-${job.company}-${job.period}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.08 + i * 0.05 }}
                  className="card card-pad-sm min-w-[min(82vw,320px)] snap-center shrink-0"
                >
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)] mb-2">
                    {job.period}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-[1rem] font-semibold text-white mb-1">
                    {job.role}
                  </h3>
                  <p className="text-[0.8125rem] text-[var(--color-muted)] mb-3">
                    {job.company} · {job.location}
                  </p>
                  <p className="body-md text-[0.875rem]">{job.summary}</p>
                </motion.article>
              ))}
            </div>
            <p className="lg:hidden text-center text-[0.6875rem] text-[#6b6b75] mt-4 tracking-wide">
              Swipe to explore
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="lg:col-span-4"
          >
            <p className="eyebrow mb-5">Education</p>
            <div className="flex flex-col gap-4">
              {education.map((edu) => (
                <div key={edu.school} className="card card-pad-sm">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)] mb-2">
                    {edu.year}
                  </p>
                  <h4 className="font-[family-name:var(--font-display)] text-[0.9375rem] font-semibold text-white mb-1 tracking-[-0.01em]">
                    {edu.degree}
                  </h4>
                  <p className="text-[0.8125rem] text-[var(--color-muted)]">{edu.school}</p>
                  <p className="text-[0.75rem] text-[#6b6b75] mt-1">{edu.location}</p>
                  {edu.note && (
                    <p className="text-[0.75rem] text-[var(--color-mint)] mt-2.5 font-medium">{edu.note}</p>
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
