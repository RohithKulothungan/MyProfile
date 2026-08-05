import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/profile'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section id="about" className="section">
      <hr className="section-divider page-container mb-[var(--section-space)]" />

      <div className="page-container">
        <div ref={ref} className="grid lg:grid-cols-12 gap-x-12 gap-y-10 lg:gap-x-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <p className="eyebrow mb-3">About</p>
            <h2 className="display-lg text-white mb-5">
              Engineering support that scales
            </h2>
            <blockquote className="border-l-2 border-[var(--color-accent)] pl-4 body-md italic text-[#b8b8c0] leading-relaxed">
              &ldquo;{profile.philosophy}&rdquo;
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-[var(--stack-space)]"
          >
            <p className="body-lg max-w-[34rem]">{profile.about}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card card-pad-sm">
                <p className="eyebrow !text-[var(--color-mint)] mb-2.5">Focus</p>
                <p className="body-md text-[#b8b8c0]">
                  Salesforce Service Cloud, AI workflows, and backend platforms built for real support teams.
                </p>
              </div>
              <div className="card card-pad-sm">
                <p className="eyebrow !text-[var(--color-accent-warm)] mb-2.5">Approach</p>
                <p className="body-md text-[#b8b8c0]">
                  End-to-end ownership — architecture through delivery, with outcomes you can measure.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              {[
                { label: 'Based in', value: profile.location },
                { label: 'Email', value: profile.email },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] leading-normal text-[var(--color-muted)] mb-1.5 py-0.5">
                    {item.label}
                  </p>
                  <p className="text-[0.875rem] text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
