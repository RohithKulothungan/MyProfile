import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience, education } from '../data/profile'

function ExperienceRow({
  job,
  index,
  inView,
}: {
  job: (typeof experience)[0]
  index: number
  inView: boolean
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.06 + index * 0.05 }}
      className="grid md:grid-cols-[9rem_1fr] gap-4 md:gap-10 py-8 md:py-10 border-b border-[rgba(255,255,255,0.07)] last:border-0"
    >
      <div className="text-[0.8125rem] text-[var(--color-muted)] leading-relaxed">
        <p className="font-medium text-white/80">{job.period}</p>
        <p className="mt-1">{job.location}</p>
      </div>

      <div className="min-w-0">
        <h3 className="font-[family-name:var(--font-display)] text-[1.0625rem] md:text-[1.125rem] font-semibold text-white leading-snug mb-1">
          {job.role}
        </h3>
        <p className="text-[0.875rem] font-medium text-[var(--color-accent)] mb-4">
          {job.company}
          {'link' in job && job.link && (
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-[var(--color-muted)] hover:text-white transition-colors"
            >
              ↗
            </a>
          )}
        </p>
        <p className="body-md leading-relaxed mb-4 max-w-2xl">{job.summary}</p>
        <p className="text-[0.75rem] text-[#6b6b75] leading-relaxed">{job.stack.join(' · ')}</p>
      </div>
    </motion.article>
  )
}

function EducationRow({
  edu,
  index,
  inView,
}: {
  edu: (typeof education)[0]
  index: number
  inView: boolean
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.06 }}
      className="py-8 md:py-10 border-b border-[rgba(255,255,255,0.07)] last:border-0"
    >
      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)] mb-3">
        {edu.year}
      </p>
      <h3 className="font-[family-name:var(--font-display)] text-[1.0625rem] font-semibold text-white leading-snug mb-2">
        {edu.degree}
      </h3>
      <p className="text-[0.875rem] text-[var(--color-muted)] mb-1">{edu.school}</p>
      <p className="text-[0.8125rem] text-[#6b6b75] mb-4">{edu.location}</p>

      {edu.note && (
        <p className="body-md text-[#b0b0b8] leading-relaxed mb-4 max-w-xl">{edu.note}</p>
      )}

      {'highlights' in edu && edu.highlights && (
        <ul className="space-y-2 mt-2">
          {edu.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-[0.8125rem] text-[#8a8a93] leading-relaxed">
              <span className="text-[var(--color-accent)] shrink-0">·</span>
              {h}
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section id="journey" className="section">
      <hr className="section-divider page-container mb-[var(--section-space)]" />

      <div className="page-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <p className="eyebrow mb-3">Journey</p>
          <h2 className="display-lg text-white">Experience & education</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Work */}
          <div>
            <p className="eyebrow mb-2">Work</p>
            <div className="mt-6">
              {experience.map((job, i) => (
                <ExperienceRow key={`${job.company}-${job.period}`} job={job} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="eyebrow mb-2">Education</p>
            <div className="mt-6">
              {education.map((edu, i) => (
                <EducationRow key={edu.school} edu={edu} index={i} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
