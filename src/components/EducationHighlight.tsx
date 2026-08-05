import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { education } from '../data/profile'

export default function EducationHighlight() {
  const msc = education[0]
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  if (!msc.highlights) return null

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      className="card card-pad mt-6"
    >
      <div className="grid md:grid-cols-2 gap-6 md:gap-10">
        <div>
          <p className="eyebrow mb-3">MSc Research</p>
          <h3 className="font-[family-name:var(--font-display)] text-[1.0625rem] font-semibold text-white leading-normal mb-2">
            {msc.degree}
          </h3>
          <p className="text-[0.8125rem] text-[var(--color-muted)] mb-3">
            {msc.school} · {msc.location}
          </p>
          {msc.note && (
            <p className="body-md text-[#b8b8c0] leading-relaxed">{msc.note}</p>
          )}
        </div>
        <ul className="space-y-2.5">
          {msc.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-[0.875rem] text-[#a1a1ab] leading-relaxed">
              <span className="text-[var(--color-accent)] shrink-0">→</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
