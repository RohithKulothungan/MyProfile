import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.04] py-8 md:py-10 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="container-fluid flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#6b6b75]">
          © {year} {profile.fullName}. Crafted with intent.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#8a8a93] hover:text-white transition-colors"
            data-cursor
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-xs text-[#8a8a93] hover:text-white transition-colors"
            data-cursor
          >
            Email
          </a>
          <a
            href="/Resume2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#8a8a93] hover:text-white transition-colors"
            data-cursor
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
