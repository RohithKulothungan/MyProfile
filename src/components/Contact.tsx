import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/profile'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const rows = [
    { label: 'Email', value: profile.email, action: copyEmail, href: `mailto:${profile.email}` },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { label: 'Location', value: profile.location },
    { label: 'Resume', value: 'Download PDF', href: '/Resume2025.pdf' },
  ]

  return (
    <section id="contact" className="section">
      <hr className="section-divider page-container mb-[var(--section-space)]" />

      <div className="page-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="card overflow-hidden relative"
        >
          <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-60" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-14 card-pad">
            <div>
              <p className="eyebrow mb-3">Contact</p>
              <h2 className="display-lg text-white mb-5">
                Let&apos;s build something remarkable
              </h2>
              <p className="body-lg mb-8 max-w-md">
                Open to full-time roles, contract work, and conversations about support engineering and platform architecture.
              </p>

              <div className="flex flex-wrap gap-2.5">
                <a href={`mailto:${profile.email}`} className="btn-primary" data-cursor>
                  Send email
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  data-cursor
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              {rows.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') || item.href.endsWith('.pdf') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={item.action ? (e) => { e.preventDefault(); item.action?.() } : undefined}
                      className="group grid grid-cols-[5rem_1fr_auto] items-center gap-4 py-4 border-b border-[rgba(255,255,255,0.06)] last:border-0 hover:bg-white/[0.02] -mx-3 px-3 rounded-[var(--radius-sm)] transition-colors"
                      data-cursor
                    >
                      <span className="text-[0.8125rem] text-[var(--color-muted)]">{item.label}</span>
                      <span className="text-[0.8125rem] text-white group-hover:text-[var(--color-accent)] transition-colors truncate">
                        {item.label === 'Email' && copied ? 'Copied!' : item.value}
                      </span>
                      <span className="text-[var(--color-muted)] text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                  ) : (
                    <div className="grid grid-cols-[5rem_1fr] items-center gap-4 py-4 border-b border-[rgba(255,255,255,0.06)] last:border-0">
                      <span className="text-[0.8125rem] text-[var(--color-muted)]">{item.label}</span>
                      <span className="text-[0.8125rem] text-white">{item.value}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
