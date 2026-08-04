import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/profile'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, onClick: copyEmail },
    { label: 'LinkedIn', value: 'linkedin.com/in/rohith-k-09546a150', href: profile.linkedin },
    { label: 'Resume', value: 'Download PDF', href: '/Resume2025.pdf' },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  ]

  return (
    <section id="contact" className="section-padding border-t border-white/[0.04]">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Contact"
          title="Let's connect"
          description="Open to conversations about support engineering, AI workflows, and backend systems."
          inView={inView}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="space-y-1"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick?.() } : undefined}
              className="group flex items-center justify-between py-5 border-b border-white/[0.04] hover:border-white/10 transition-colors"
              data-cursor
            >
              <span className="text-sm text-zinc-500 w-24 shrink-0">{link.label}</span>
              <span className="text-sm text-zinc-300 group-hover:text-white transition-colors text-right">
                {link.label === 'Email' && copied ? 'Copied to clipboard' : link.value}
              </span>
              <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors ml-4">→</span>
            </a>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          href={`mailto:${profile.email}`}
          className="inline-block mt-12 text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors"
          data-cursor
        >
          {profile.email} →
        </motion.a>
      </div>
    </section>
  )
}
