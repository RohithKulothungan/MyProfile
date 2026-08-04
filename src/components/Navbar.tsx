import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/profile'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
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
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-[clamp(1rem,4vw,1.5rem)] pt-[max(1rem,env(safe-area-inset-top))]"
      >
        <nav
          className={`container-fluid flex items-center justify-between h-14 md:h-16 px-4 md:px-6 rounded-2xl transition-all duration-500 ${
            scrolled || menuOpen
              ? 'bg-[#0c0c0e]/80 backdrop-blur-xl border border-white/[0.06] shadow-2xl shadow-black/20'
              : 'bg-transparent'
          }`}
        >
          <a href="#" className="font-[family-name:var(--font-display)] text-sm md:text-base font-semibold tracking-tight" data-cursor>
            Rohith<span className="text-[var(--color-accent)]">.</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm text-[#8a8a93] hover:text-white rounded-full hover:bg-white/[0.05] transition-all"
                  data-cursor
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a href="/Resume2025.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2 !px-4 text-sm" data-cursor>
              Resume
            </a>
            <a href="#contact" className="btn-primary !py-2 !px-5 text-sm" data-cursor>
              Hire me
            </a>
          </div>

          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`absolute w-5 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute w-5 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`absolute w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#050505]/95 backdrop-blur-2xl"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.05 }}
              className="flex flex-col justify-center items-center h-full gap-2 px-6"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-semibold text-white/90 hover:text-[var(--color-accent)] transition-colors py-3"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="flex flex-col sm:flex-row gap-3 mt-10 w-full max-w-xs"
              >
                <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full text-center">
                  Hire me
                </a>
                <a href="/Resume2025.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost w-full text-center">
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
