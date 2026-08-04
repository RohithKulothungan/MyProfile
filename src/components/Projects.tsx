import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/profile'
import SectionHeader from './SectionHeader'

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 py-10 border-b border-white/[0.04] last:border-0"
    >
      <div className="flex items-start gap-4">
        <span className="text-xs text-zinc-600 font-medium tabular-nums pt-1">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-medium text-white group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
      </div>

      <div>
        <p className="body-text text-[0.975rem] mb-4">{project.description}</p>
        <p className="text-xs text-zinc-500">{project.tags.join(' · ')}</p>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true })

  return (
    <section id="projects" className="section-padding border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={headerRef}>
          <SectionHeader
            label="Selected work"
            title="Projects that shaped support operations"
            description="Systems built across Salesforce, backend platforms, and AI-assisted workflows."
            inView={inView}
          />
        </div>

        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
