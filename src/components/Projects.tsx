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
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative ${spanClass[project.span]} min-h-[220px]`}
      data-cursor
    >
      <div
        className="card-surface h-full p-6 md:p-8 flex flex-col transition-all duration-500 hover:border-white/15 hover:-translate-y-1"
        style={{
          boxShadow: `0 0 0 0 ${project.accent}00`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 20px 60px -20px ${project.accent}33`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        <div
          className="absolute top-0 left-6 md:left-8 right-6 md:right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
        />

        <div className="flex items-start justify-between gap-4 mb-auto">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: project.accent }}>
              {project.subtitle}
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.125rem,2vw,1.5rem)] font-semibold text-white group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>
          <span
            className="shrink-0 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sm text-[#8a8a93] group-hover:border-white/25 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
          >
            ↗
          </span>
        </div>

        <p className={`body-md mt-6 ${project.span === 'large' ? 'max-w-lg' : ''}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/[0.04]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] md:text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-[#8a8a93]"
            >
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
    <section id="work" className="section-gap relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-fluid">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="display-lg text-white">Systems I've built</h2>
          </div>
          <p className="body-md max-w-md md:text-right">
            Five projects that transformed how support operates at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-fr">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
