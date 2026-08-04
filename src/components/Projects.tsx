import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects } from '../data/profile'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
      data-cursor
    >
      <div className="relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]">
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}15, transparent 40%)`,
          }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <span
              className="text-5xl font-bold opacity-10 group-hover:opacity-20 transition-opacity"
              style={{ color: project.color }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <motion.div
              animate={{ rotate: hovered ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-white/30 group-hover:text-white transition-colors"
            >
              ↗
            </motion.div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-400 leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-zinc-400 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              className="absolute bottom-0 left-0 right-0 h-px origin-left"
              style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true })

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-xs font-medium tracking-[0.3em] uppercase text-indigo-400 mb-4 block"
          >
            Selected Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Work that <span className="font-serif italic gradient-text">matters</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
