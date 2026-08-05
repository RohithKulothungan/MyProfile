import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/profile'

const channels = [
  {
    id: 'email',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    hint: 'Send a message',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    hint: 'Call or WhatsApp',
  },
  {
    id: 'location',
    label: 'Location',
    value: profile.location,
    hint: 'GMT+5:30',
  },
  {
    id: 'resume',
    label: 'Resume',
    value: 'Download PDF',
    href: '/Resume2025.pdf',
    hint: 'Full work history',
  },
] as const

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="section">
      <hr className="section-divider page-container mb-[var(--section-space)]" />

      <div className="page-container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 lg:gap-x-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <p className="eyebrow mb-3">Contact</p>
            <h2 className="display-lg text-white mb-5">
              Let&apos;s build something remarkable
            </h2>
            <p className="body-lg max-w-md mb-8">
              Open to full-time roles, contract work, and conversations about support engineering, AI, and platform architecture.
            </p>

            <div className="mb-8">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[var(--color-muted)] mb-3">
                Direct line
              </p>
              <button
                type="button"
                onClick={copyEmail}
                className="group block w-full text-left"
                data-cursor
              >
                <span className="font-[family-name:var(--font-display)] text-[clamp(1.125rem,2.2vw+0.5rem,1.75rem)] font-semibold leading-snug tracking-[-0.02em] text-white transition-colors group-hover:text-[#c4b5fd] break-all">
                  {copied ? 'Copied to clipboard' : profile.email}
                </span>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[0.8125rem] text-[var(--color-muted)] group-hover:text-[#9b8cff] transition-colors">
                  {copied ? 'Paste anywhere' : 'Click to copy'}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </button>
            </div>

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
              <a href="/Resume2025.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost btn-sm" data-cursor>
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {channels.map((channel, index) => {
                const content = (
                  <>
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)] mb-3">
                      {channel.label}
                    </p>
                    <p className="font-[family-name:var(--font-display)] text-[1rem] font-medium text-white leading-snug mb-2 break-words">
                      {channel.id === 'email' && copied ? 'Copied!' : channel.value}
                    </p>
                    {'hint' in channel && (
                      <p className="text-[0.75rem] text-[#6b6b75] group-hover:text-[var(--color-muted)] transition-colors">
                        {channel.hint}
                      </p>
                    )}
                  </>
                )

                const className =
                  'group card card-pad-sm block h-full transition-[border-color,transform,box-shadow] duration-300 hover:border-[rgba(124,92,255,0.35)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]'

                return (
                  <motion.div
                    key={channel.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.14 + index * 0.06 }}
                  >
                    {'href' in channel ? (
                      <a
                        href={channel.href}
                        target={channel.href.endsWith('.pdf') ? '_blank' : undefined}
                        rel={channel.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                        onClick={
                          channel.id === 'email'
                            ? (e) => {
                                e.preventDefault()
                                copyEmail()
                              }
                            : undefined
                        }
                        className={className}
                        data-cursor
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={className}>{content}</div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-8 flex items-center gap-3 px-1">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-mint)] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-mint)]" />
              </span>
              <p className="text-[0.8125rem] text-[var(--color-muted)]">
                Open to opportunities · Based in {profile.location}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
