import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.04] py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-zinc-600">
          © {year} {profile.fullName}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            data-cursor
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            data-cursor
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
