import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/profile'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, action: copyEmail },
    { label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.linkedin },
    { label: 'Resume', value: 'Download PDF', href: '/Resume2025.pdf' },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-indigo-400 mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            Let's build something{' '}
            <span className="font-serif italic gradient-text">great</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Open to discussing customer support engineering, AI workflows, Salesforce architecture, and impactful backend systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={link.action ? (e) => { e.preventDefault(); link.action?.() } : undefined}
                  className="block p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-400/30 hover:bg-white/[0.06] transition-all duration-300 text-center group"
                  data-cursor
                >
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">{link.label}</p>
                  <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                    {link.label === 'Email' && copied ? 'Copied!' : link.value}
                  </p>
                </a>
              ) : (
                <div className="block p-6 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">{link.label}</p>
                  <p className="text-sm text-zinc-300">{link.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 text-5xl md:text-8xl font-bold gradient-text hover:opacity-80 transition-opacity"
            data-cursor
          >
            Say hello
            <span className="text-3xl md:text-5xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
