import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
  inView?: boolean
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  inView = true,
}: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-16 md:mb-20 max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}
    >
      <p className="section-label mb-4">{label}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="body-text mt-5">{description}</p>}
    </motion.div>
  )
}
