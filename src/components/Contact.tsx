import { useCallback, useEffect, useRef, useState } from 'react'
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import { profile } from '../data/profile'

const channels = [
  {
    id: 'email',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    hint: 'Send a message',
    accent: '#7c5cff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'phone',
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    hint: 'Call or WhatsApp',
    accent: '#2dd4bf',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8.5 5.5c.4 2.2 1.2 4.3 2.3 6.1l-1.4 1.4a12.5 12.5 0 0 0 5.1 5.1l1.4-1.4c1.8 1.1 3.9 1.9 6.1 2.3l.5 2.8a1 1 0 0 1-.9 1.2 16 16 0 0 1-7.2-1.6 15.7 15.7 0 0 1-7-7A16 16 0 0 1 5.2 6.4a1 1 0 0 1 1.2-.9l2.1.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'location',
    label: 'Location',
    value: profile.location,
    hint: 'GMT+5:30',
    accent: '#ff6b4a',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="11" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'resume',
    label: 'Resume',
    value: 'Download PDF',
    href: '/Resume2025.pdf',
    hint: 'Full work history',
    accent: '#9b8cff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M8 4.5h6.2L18 8.3V19.5A1.5 1.5 0 0 1 16.5 21h-9A1.5 1.5 0 0 1 6 19.5v-15A1.5 1.5 0 0 1 7.5 3H8Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 4.5V9h4.5M12 13v5M9.5 15.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
] as const

const quickTopics = [
  { label: 'Full-time role', subject: 'Full-time opportunity' },
  { label: 'Contract work', subject: 'Contract collaboration' },
  { label: 'Coffee chat', subject: 'Quick chat' },
] as const

function useLocalTime(timeZone = 'Asia/Kolkata') {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat('en-IN', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
          timeZone,
        }).format(new Date()),
      )
    }

    update()
    const id = window.setInterval(update, 30_000)
    return () => window.clearInterval(id)
  }, [timeZone])

  return time
}

function ChannelCard({
  channel,
  index,
  inView,
  copied,
  dimmed,
  localTime,
  onCopyEmail,
  onCopyPhone,
  onHover,
}: {
  channel: (typeof channels)[number]
  index: number
  inView: boolean
  copied: boolean
  dimmed: boolean
  localTime: string
  onCopyEmail: () => void
  onCopyPhone: () => void
  onHover: (id: string | null) => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const pointerX = useMotionValue(0.5)
  const pointerY = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [7, -7]), { stiffness: 260, damping: 22 })
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-7, 7]), { stiffness: 260, damping: 22 })
  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${useTransform(pointerX, (v) => `${v * 100}%`)} ${useTransform(pointerY, (v) => `${v * 100}%`)}, ${channel.accent}22, transparent 68%)`

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    pointerX.set((event.clientX - rect.left) / rect.width)
    pointerY.set((event.clientY - rect.top) / rect.height)
  }

  const resetPointer = () => {
    pointerX.set(0.5)
    pointerY.set(0.5)
  }

  const displayValue =
    channel.id === 'email' && copied
      ? 'Copied!'
      : channel.id === 'location' && localTime
        ? `${channel.value} · ${localTime}`
        : channel.value

  const content = (
    <>
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      <div className="relative flex items-start justify-between gap-3 mb-5">
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[rgba(255,255,255,0.08)] text-[var(--color-muted)] transition-all duration-300 group-hover:text-white group-hover:border-[rgba(255,255,255,0.16)]"
          style={{ color: undefined }}
        >
          <span className="transition-transform duration-300 group-hover:scale-110">{channel.icon}</span>
        </span>
        <span className="shrink-0 w-8 h-8 rounded-[var(--radius-sm)] border border-[rgba(255,255,255,0.09)] flex items-center justify-center text-xs text-[var(--color-muted)] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-45 group-hover:text-white group-hover:border-[rgba(255,255,255,0.16)] transition-all duration-300">
          {channel.id === 'resume' ? '↓' : '↗'}
        </span>
      </div>

      <p className="relative text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)] mb-2.5">
        {channel.label}
      </p>
      <p className="relative font-[family-name:var(--font-display)] text-[1rem] font-medium text-white leading-snug mb-3 break-words">
        {displayValue}
      </p>
      <p className="relative text-[0.75rem] text-[#6b6b75] group-hover:text-[var(--color-muted)] transition-colors mt-auto">
        {channel.hint}
      </p>
    </>
  )

  const className =
    'group relative card card-pad-sm flex flex-col min-h-[10.5rem] h-full overflow-hidden transition-[border-color,box-shadow,opacity,transform] duration-300 hover:border-[rgba(124,92,255,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]'

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: inView ? (dimmed ? 0.55 : 1) : 0,
        y: inView ? 0 : 16,
        scale: dimmed ? 0.985 : 1,
      }}
      transition={{ delay: 0.14 + index * 0.06 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        resetPointer()
        onHover(null)
      }}
      onPointerEnter={() => onHover(channel.id)}
      whileTap={{ scale: 0.985 }}
    >
      {'href' in channel ? (
        <a
          href={channel.href}
          target={channel.href.endsWith('.pdf') ? '_blank' : undefined}
          rel={channel.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
          onClick={
            channel.id === 'email'
              ? (event) => {
                  event.preventDefault()
                  onCopyEmail()
                }
              : channel.id === 'phone'
                ? (event) => {
                    event.preventDefault()
                    onCopyPhone()
                  }
                : undefined
          }
          className={className}
          data-cursor
        >
          {content}
        </a>
      ) : (
        <div className={className} data-cursor>
          {content}
        </div>
      )}
    </motion.div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null)
  const [activeChannel, setActiveChannel] = useState<string | null>(null)
  const localTime = useLocalTime()

  const copyText = useCallback(async (text: string, type: 'email' | 'phone') => {
    await navigator.clipboard.writeText(text)
    setCopied(type)
    window.setTimeout(() => setCopied(null), 2500)
  }, [])

  const copyEmail = useCallback(() => copyText(profile.email, 'email'), [copyText])
  const copyPhone = useCallback(() => copyText(profile.phone.replace(/\s/g, ''), 'phone'), [copyText])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'c' && window.getSelection()?.toString()) {
        return
      }

      if (event.key.toLowerCase() === 'c' && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault()
        copyEmail()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [copyEmail])

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-[rgba(124,92,255,0.12)] blur-3xl"
          animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-[6%] h-64 w-64 rounded-full bg-[rgba(45,212,191,0.08)] blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 16, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <hr className="section-divider page-container mb-[var(--section-space)]" />

      <div className="page-container relative" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-14 lg:gap-x-16 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col justify-between gap-[var(--block-space)]"
          >
            <div className="flex flex-col gap-[var(--stack-space)]">
              <div>
                <p className="eyebrow mb-3">Contact</p>
                <h2 className="display-lg text-white mb-6">
                  Let&apos;s build something remarkable
                </h2>
                <p className="body-lg max-w-md">
                  Open to full-time roles, contract work, and conversations about support engineering, AI, and platform architecture.
                </p>
              </div>

              <div className="pt-[var(--stack-space)] border-t border-[rgba(255,255,255,0.06)]">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[var(--color-muted)] mb-4">
                  Direct line
                </p>
                <motion.button
                  type="button"
                  onClick={copyEmail}
                  className="group block w-full text-left space-y-3"
                  data-cursor
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={copied === 'email' ? 'copied' : 'email'}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.22 }}
                      className="font-[family-name:var(--font-display)] text-[clamp(1.125rem,2.2vw+0.5rem,1.625rem)] font-semibold leading-[1.35] tracking-[-0.02em] text-white transition-colors group-hover:text-[#c4b5fd] break-all block"
                    >
                      {copied === 'email' ? 'Copied to clipboard ✓' : profile.email}
                    </motion.span>
                  </AnimatePresence>
                  <span className="block text-[0.8125rem] leading-relaxed text-[var(--color-muted)] group-hover:text-[#9b8cff] transition-colors">
                    {copied === 'email' ? 'Paste anywhere' : 'Click to copy · press C'}
                    <span aria-hidden className="ml-1.5 inline-block transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </motion.button>
              </div>

              <div className="pt-[var(--stack-space)] border-t border-[rgba(255,255,255,0.06)]">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[var(--color-muted)] mb-4">
                  Quick topics
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {quickTopics.map((topic) => (
                    <motion.a
                      key={topic.label}
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(topic.subject)}`}
                      className="tag !text-[#b8b8c0] hover:!text-white hover:!border-[rgba(124,92,255,0.35)] hover:!bg-[rgba(124,92,255,0.08)] transition-all"
                      data-cursor
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {topic.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <motion.a
                href={`mailto:${profile.email}`}
                className="btn-primary"
                data-cursor
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send email
              </motion.a>
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                data-cursor
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="/Resume2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-sm"
                data-cursor
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between gap-[var(--block-space)]"
          >
            <div className="grid sm:grid-cols-2 gap-5 [perspective:1200px]">
              {channels.map((channel, index) => (
                <ChannelCard
                  key={channel.id}
                  channel={channel}
                  index={index}
                  inView={inView}
                  copied={copied === 'email'}
                  dimmed={activeChannel !== null && activeChannel !== channel.id}
                  localTime={localTime}
                  onCopyEmail={copyEmail}
                  onCopyPhone={copyPhone}
                  onHover={setActiveChannel}
                />
              ))}
            </div>

            <motion.div
              className="flex flex-wrap items-center gap-3 pt-[var(--stack-space)] border-t border-[rgba(255,255,255,0.06)]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.45 }}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-mint)] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-mint)]" />
              </span>
              <p className="text-[0.8125rem] leading-relaxed text-[var(--color-muted)]">
                Open to opportunities · Based in {profile.location}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
