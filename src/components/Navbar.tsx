import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/profile'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-white/[0.04]' : ''
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" data-cursor>
          Rohith K
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-500 hover:text-white transition-colors"
                data-cursor
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex text-sm text-zinc-400 hover:text-white transition-colors"
          data-cursor
        >
          Get in touch
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-zinc-400 transition-all ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-5 h-px bg-zinc-400 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-zinc-400 transition-all ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090b]/98 border-b border-white/[0.04] overflow-hidden"
          >
            <ul className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
