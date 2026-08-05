import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/profile'

const spanClass = {
  large: 'bento-large',
  medium: 'bento-medium',
  small: 'bento-small',
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group relative ${spanClass[project.span]} flex`}
      data-cursor
    >
      <div
        className="card card-pad flex flex-col w-full h-full group-hover:-translate-y-0.5"
        style={{
          transition: 'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `var(--inset-highlight), 0 16px 48px -16px ${project.accent}40`
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'var(--inset-highlight), var(--shadow-card)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
        }}
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="min-w-0">
            <p
              className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] mb-2"
              style={{ color: project.accent }}
            >
              {project.subtitle}
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-[1.0625rem] md:text-[1.1875rem] font-semibold text-white tracking-[-0.02em] leading-snug">
              {project.title}
            </h3>
          </div>
          <span className="shrink-0 w-8 h-8 rounded-[var(--radius-sm)] border border-[rgba(255,255,255,0.09)] flex items-center justify-center text-xs text-[var(--color-muted)] group-hover:border-[rgba(255,255,255,0.16)] group-hover:text-white group-hover:rotate-45 transition-all duration-300">
            ↗
          </span>
        </div>

        <p className={`body-md flex-1 ${project.span === 'large' ? 'max-w-md' : ''}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-[rgba(255,255,255,0.06)]">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true })

  return (
    <section id="work" className="section">
      <hr className="section-divider page-container mb-[var(--section-space)]" />

      <div className="page-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-header flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8"
        >
          <div>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 className="display-lg text-white">Systems I&apos;ve built</h2>
          </div>
          <p className="body-md max-w-xs md:text-right md:pb-1">
            Five projects that transformed support at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 auto-rows-fr">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
