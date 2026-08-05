import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ansearch } from '../data/profile'

export default function AnsearchSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section id="ansearch" className="section">
      <hr className="section-divider page-container mb-[var(--section-space)]" />

      <div className="page-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <p className="eyebrow mb-3">Startup · Edinburgh</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="display-lg text-white">
              Building {ansearch.name}
            </h2>
            <a
              href={ansearch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost btn-sm w-fit"
              data-cursor
            >
              Visit ansearch.ai ↗
            </a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 card card-pad"
          >
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] leading-normal text-[var(--color-accent-warm)] mb-3 py-0.5">
              {ansearch.tagline}
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,2.5vw,1.625rem)] font-semibold text-white leading-normal tracking-[-0.02em] mb-4">
              {ansearch.headline}
            </h3>
            <p className="body-md text-[#b8b8c0] mb-6">{ansearch.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="tag !text-[var(--color-accent-warm)] !border-[rgba(255,107,74,0.2)]">
                {ansearch.role}
              </span>
              <span className="tag">{ansearch.period}</span>
              <span className="tag">{ansearch.location}</span>
            </div>

            <ul className="space-y-3">
              {ansearch.contributions.map((item) => (
                <li key={item} className="flex gap-3 text-[0.875rem] text-[#a1a1ab] leading-relaxed">
                  <span className="text-[var(--color-accent-warm)] shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* How it works */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <p className="eyebrow !text-[var(--color-mint)] mb-1">How Ansearch works</p>
            {ansearch.howItWorks.map((step) => (
              <div key={step.step} className="card card-pad-sm flex-1">
                <p className="text-[0.6875rem] font-semibold text-[var(--color-mint)] mb-2 leading-normal">
                  {step.step}
                </p>
                <h4 className="font-[family-name:var(--font-display)] text-[0.9375rem] font-semibold text-white mb-2 leading-normal">
                  {step.title}
                </h4>
                <p className="body-md text-[0.8125rem] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Signals strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-6 card card-pad-sm"
        >
          <p className="eyebrow mb-4">Platform capabilities</p>
          <div className="flex flex-wrap gap-2">
            {ansearch.signals.map((signal) => (
              <span key={signal} className="tag">
                {signal}
              </span>
            ))}
          </div>
          <p className="text-[0.75rem] text-[#6b6b75] mt-4 leading-relaxed">
            Zero training on customer data · Sovereign cloud · Every insight traceable to source
          </p>
        </motion.div>
      </div>
    </section>
  )
}
