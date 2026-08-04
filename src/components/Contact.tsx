import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/profile'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="section-gap relative">
      <div className="container-fluid">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[clamp(1.25rem,3vw,2rem)]"
        >
          <div className="absolute inset-0 gradient-mesh" />
          <div className="absolute inset-0 bg-[#0c0c0e]/60 backdrop-blur-sm" />
          <div className="absolute inset-0 border border-white/[0.08] rounded-[inherit]" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 p-8 md:p-12 lg:p-16">
            <div>
              <p className="eyebrow mb-4">Contact</p>
              <h2 className="display-lg text-white mb-6">
                Let's build something remarkable
              </h2>
              <p className="body-lg mb-8">
                Open to full-time roles, contract work, and conversations about support engineering, AI, and platform architecture.
              </p>

              <div className="flex flex-wrap gap-3">
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

            <div className="flex flex-col justify-center space-y-1">
              {[
                { label: 'Email', value: profile.email, action: copyEmail, href: `mailto:${profile.email}` },
                { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
                { label: 'Location', value: profile.location },
                { label: 'Resume', value: 'Download PDF', href: '/Resume2025.pdf' },
              ].map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') || item.href.endsWith('.pdf') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={item.action ? (e) => { e.preventDefault(); item.action?.() } : undefined}
                      className="group flex items-center justify-between py-4 md:py-5 border-b border-white/[0.06] hover:border-white/12 transition-colors"
                      data-cursor
                    >
                      <span className="text-sm text-[#8a8a93]">{item.label}</span>
                      <span className="text-sm text-white group-hover:text-[var(--color-accent)] transition-colors text-right truncate ml-4">
                        {item.label === 'Email' && copied ? 'Copied!' : item.value}
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center justify-between py-4 md:py-5 border-b border-white/[0.06]">
                      <span className="text-sm text-[#8a8a93]">{item.label}</span>
                      <span className="text-sm text-white text-right">{item.value}</span>
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
