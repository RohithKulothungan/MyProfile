import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/profile'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 pt-[max(1rem,env(safe-area-inset-top))]"
      >
        <div className="page-container">
          <nav
            className={`flex items-center justify-between h-14 rounded-[var(--radius-lg)] px-5 transition-all duration-400 ${
              scrolled || menuOpen
                ? 'bg-[var(--color-surface)]/90 backdrop-blur-xl border border-[rgba(255,255,255,0.09)] shadow-[var(--inset-highlight),0_8px_32px_rgba(0,0,0,0.4)]'
                : 'bg-transparent border border-transparent'
            }`}
          >
            <a
              href="#"
              className="font-[family-name:var(--font-display)] text-[0.9375rem] font-semibold tracking-[-0.02em] text-white"
              data-cursor
            >
              Rohith<span className="text-[var(--color-accent)]">.</span>
            </a>

            <ul className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-3.5 py-2 text-[0.8125rem] font-medium text-[var(--color-muted)] hover:text-white rounded-[var(--radius-sm)] hover:bg-white/[0.04] transition-colors"
                    data-cursor
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center gap-2">
              <a
                href="/Resume2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-sm"
                data-cursor
              >
                Resume
              </a>
              <a href="#contact" className="btn-primary btn-sm" data-cursor>
                Hire me
              </a>
            </div>

            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-[var(--radius-sm)] border border-transparent hover:border-[rgba(255,255,255,0.09)] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`absolute w-[18px] h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-[5px]'}`} />
              <span className={`absolute w-[18px] h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`absolute w-[18px] h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-[5px]'}`} />
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#050505]/96 backdrop-blur-2xl"
          >
            <motion.nav
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex flex-col justify-center items-center h-full gap-1 page-container"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.04 }}
                  className="font-[family-name:var(--font-display)] text-[clamp(2rem,8vw,3rem)] font-semibold text-white/90 hover:text-[var(--color-accent)] transition-colors py-3"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col w-full max-w-xs gap-2.5 mt-10"
              >
                <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full">
                  Hire me
                </a>
                <a href="/Resume2025.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost w-full">
                  Resume
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
