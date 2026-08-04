import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {year} {profile.fullName}. Crafted with care.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-white transition-colors"
            data-cursor
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-zinc-500 hover:text-white transition-colors"
            data-cursor
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
