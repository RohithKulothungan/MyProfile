export const profile = {
  name: 'Rohith K',
  fullName: 'Rohith KM',
  roles: ['Support Engineer', 'AI Builder', 'Salesforce Architect'],
  tagline: 'I design systems that make customer support faster, smarter, and impossible to ignore.',
  location: 'Chennai, India',
  email: 'rohithkannan.2595@gmail.com',
  phone: '+91 8870312775',
  linkedin: 'https://www.linkedin.com/in/rohith-k-09546a150/',
  about:
    'Technical owner at Poshmark building the infrastructure behind world-class customer support — from Salesforce Service Cloud to AI chatbots and high-scale backend platforms.',
  philosophy:
    'Great support engineering is invisible to customers and indispensable to teams. I build for both.',
  stats: [
    { value: '8+', label: 'Years building' },
    { value: '5', label: 'Core systems shipped' },
    { value: '3–9%', label: 'GMV lift from ML' },
  ],
}

export const projects = [
  {
    id: 'case-tracking',
    title: 'Case Tracking System',
    subtitle: 'Hybrid data architecture',
    description:
      'MongoDB for lightning-fast case discovery. Salesforce as the conversation source of truth. Synced updates, ownership checks, and operational monitoring at scale.',
    tags: ['MongoDB', 'Salesforce', 'Node.js', 'Redis'],
    span: 'large' as const,
    accent: '#7C5CFF',
  },
  {
    id: 'ai-chatbot',
    title: 'AI Support Chatbot',
    subtitle: 'End-to-end ownership',
    description:
      'Vendor evaluation to production — workflows, APIs, safety controls, and human escalation across orders, refunds, and returns.',
    tags: ['AI', 'Service Cloud', 'OAuth'],
    span: 'medium' as const,
    accent: '#FF6B4A',
  },
  {
    id: 'microservices',
    title: 'Support Microservices',
    subtitle: 'Platform layer',
    description:
      'Secure APIs exposing customer, order, and support data with scoped access and full observability.',
    tags: ['Ruby', 'REST', 'AWS'],
    span: 'small' as const,
    accent: '#2DD4BF',
  },
  {
    id: 'salesforce',
    title: 'Service Cloud',
    subtitle: 'Agent experience',
    description:
      'Omni-Channel, dashboards, and automation across Apex, Flow, LWC, and Aura.',
    tags: ['Apex', 'LWC', 'Flow'],
    span: 'small' as const,
    accent: '#FBBF24',
  },
  {
    id: 'analytics',
    title: 'Analytics & Self-Service',
    subtitle: 'Deflection at scale',
    description:
      'Knowledge discovery and case deflection with measurable impact on volume and cost.',
    tags: ['Kibana', 'Knowledge', 'Analytics'],
    span: 'medium' as const,
    accent: '#60A5FA',
  },
]

export const experience = [
  {
    company: 'Poshmark',
    role: 'ML & AI Engineer · Lead Backend',
    period: '2024 — Present',
    location: 'Chennai',
    summary:
      'Own critical sprint delivery, Service Cloud integrations, and Customer Ops automation. ML feed personalization driving measurable GMV growth.',
    stack: ['Ruby on Rails', 'MongoDB', 'Apex', 'Einstein AI'],
  },
  {
    company: 'Ansearch',
    role: 'Software Intern · Founding Team',
    period: '2023 — 2024',
    location: 'Edinburgh',
    summary:
      'Built Enterprise Search SaaS prototype — ML pipelines, integrations, and scalable architecture from day one.',
    stack: ['Python', 'ML', 'Docker'],
  },
  {
    company: 'Poshmark',
    role: 'Senior Software Engineer II',
    period: '2019 — 2023',
    location: 'Chennai',
    summary:
      'ML content-tagging systems and production architecture connecting models to backend at scale.',
    stack: ['Ruby on Rails', 'MongoDB', 'Apex'],
  },
  {
    company: 'Zoho',
    role: 'Member Technical Staff',
    period: '2017 — 2019',
    location: 'Chennai',
    summary:
      'Backend services for Zoho Finance — PayPal, PayTm integrations, GST tax compliance, and API automation.',
    stack: ['Java', 'SQL', 'REST APIs'],
  },
]

export const education = [
  {
    school: 'Herriot Watt University',
    degree: 'MSc Artificial Intelligence',
    year: '2024',
    location: 'Edinburgh, Scotland',
  },
  {
    school: 'Pondicherry University',
    degree: 'B.Tech Information Technology',
    year: '2017',
    location: 'Pondicherry, India',
    note: 'University Rank · 9.28 GPA',
  },
]

export const skills = [
  'Salesforce Service Cloud',
  'Apex',
  'Flow',
  'LWC',
  'Node.js',
  'Ruby on Rails',
  'Java',
  'REST APIs',
  'MongoDB',
  'Redis',
  'AWS',
  'AI Workflows',
  'OAuth 2.0',
  'Kibana',
  'Datadog',
  'Technical Leadership',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]
