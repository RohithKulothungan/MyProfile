import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] py-8 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <div className="page-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[0.75rem] text-[#6b6b75]">
          © {year} {profile.fullName}
        </p>
        <div className="flex items-center gap-5">
          {[
            { label: 'LinkedIn', href: profile.linkedin, external: true },
            { label: 'Email', href: `mailto:${profile.email}` },
            { label: 'Resume', href: '/Resume2025.pdf', external: true },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-[0.75rem] text-[var(--color-muted)] hover:text-white transition-colors"
              data-cursor
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
