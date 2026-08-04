import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/profile'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="about" className="section-gap relative">
      <div className="container-fluid">
        <div
          ref={ref}
          className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <p className="eyebrow mb-4">About</p>
            <h2 className="display-lg text-white mb-6">
              Engineering support that scales
            </h2>
            <blockquote className="border-l-2 border-[var(--color-accent)] pl-5 body-md italic text-[#c8c8d0]">
              "{profile.philosophy}"
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            <p className="body-lg">{profile.about}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card-surface p-6 md:p-8">
                <p className="eyebrow !text-[var(--color-mint)] mb-3">Focus</p>
                <p className="body-md text-[#c8c8d0]">
                  Salesforce Service Cloud, AI-assisted workflows, and backend platforms that agents and customers actually love.
                </p>
              </div>
              <div className="card-surface p-6 md:p-8">
                <p className="eyebrow !text-[var(--color-accent-warm)] mb-3">Approach</p>
                <p className="body-md text-[#c8c8d0]">
                  Technical ownership from architecture to delivery — measurable outcomes, not just features shipped.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
              {[
                { label: 'Based in', value: profile.location },
                { label: 'Email', value: profile.email },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-[#8a8a93] mb-1">{item.label}</p>
                  <p className="text-sm text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
