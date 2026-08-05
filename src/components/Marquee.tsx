import { skills } from '../data/profile'

export default function Marquee() {
  const items = [...skills, ...skills]

  return (
    <section
      className="py-6 md:py-8 border-y border-[rgba(255,255,255,0.06)] overflow-hidden bg-[var(--color-surface)]/40"
      aria-hidden
    >
      <div className="marquee-track">
        {items.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex items-center gap-5 px-5 text-[0.8125rem] font-medium text-[var(--color-muted)] whitespace-nowrap"
          >
            <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
