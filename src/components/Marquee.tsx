import { skills } from '../data/profile'

export default function Marquee() {
  const items = [...skills, ...skills]

  return (
    <section className="py-8 md:py-12 border-y border-white/[0.04] overflow-hidden" aria-hidden>
      <div className="marquee-track">
        {items.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex items-center gap-6 md:gap-10 px-4 md:px-6 text-[clamp(0.875rem,2vw,1.125rem)] font-medium text-[#8a8a93] whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
