export const profile = {
  name: 'Rohith K',
  fullName: 'Rohith KM',
  title: 'Support Engineering · AI · Salesforce',
  tagline: 'Building scalable systems for customer support, self-service, and agent operations.',
  location: 'Chennai, India',
  email: 'rohithkannan.2595@gmail.com',
  phone: '+91 8870312775',
  linkedin: 'https://www.linkedin.com/in/rohith-k-09546a150/',
  about:
    'At Poshmark, I design and ship systems that make support faster and more reliable — combining Salesforce Service Cloud, backend services, APIs, and AI-assisted workflows.',
  personalNote:
    'Based in Chennai. Interested in product-driven engineering, early-stage teams, and thoughtful system design.',
}

export const projects = [
  {
    id: 'case-tracking',
    title: 'Case Tracking System',
    description:
      'Hybrid platform with MongoDB for fast case discovery and Salesforce as the source of truth for conversations.',
    tags: ['MongoDB', 'Salesforce', 'Node.js'],
  },
  {
    id: 'ai-chatbot',
    title: 'AI Support Chatbot',
    description:
      'Customer-facing chatbot with workflow design, API integration, safety controls, and human escalation paths.',
    tags: ['AI', 'Service Cloud', 'OAuth'],
  },
  {
    id: 'microservices',
    title: 'Support Microservices',
    description:
      'Backend services exposing customer, order, and support capabilities with scoped access and observability.',
    tags: ['Ruby', 'REST APIs', 'AWS'],
  },
  {
    id: 'salesforce',
    title: 'Service Cloud Optimization',
    description:
      'Improved agent workflows through case visibility, Omni-Channel, dashboards, and Apex/Flow/LWC automation.',
    tags: ['Apex', 'LWC', 'Flow'],
  },
  {
    id: 'analytics',
    title: 'Analytics & Self-Service',
    description:
      'Knowledge discovery and case deflection strategies with measurable impact on support volume and cost.',
    tags: ['Analytics', 'Knowledge', 'Kibana'],
  },
]

export const experience = [
  {
    company: 'Poshmark',
    role: 'ML & AI Engineer · Lead Backend Developer',
    period: '2024 — Present',
    location: 'Chennai',
    summary:
      'Lead sprint delivery, Service Cloud integrations, and Customer Operations automation. ML-driven feed personalization with measurable GMV impact.',
    stack: ['Ruby on Rails', 'MongoDB', 'Apex', 'Einstein AI'],
  },
  {
    company: 'Ansearch',
    role: 'Software Intern',
    period: '2023 — 2024',
    location: 'Edinburgh',
    summary:
      'Founding-team contributor on an Enterprise Search SaaS prototype — integration, ML pipelines, and architecture.',
    stack: ['Python', 'ML', 'Docker'],
  },
  {
    company: 'Poshmark',
    role: 'Senior Software Engineer II',
    period: '2019 — 2023',
    location: 'Chennai',
    summary:
      'Built ML content-tagging systems and backend architecture connecting models to production infrastructure.',
    stack: ['Ruby on Rails', 'MongoDB', 'Apex'],
  },
  {
    company: 'Zoho',
    role: 'Member Technical Staff',
    period: '2017 — 2019',
    location: 'Chennai',
    summary:
      'Backend services for Zoho Finance — API integrations, tax compliance, and payment gateway work.',
    stack: ['Java', 'SQL', 'REST APIs'],
  },
]

export const education = [
  {
    school: 'Herriot Watt University',
    degree: 'MSc Artificial Intelligence',
    year: '2024',
    location: 'Edinburgh',
  },
  {
    school: 'Pondicherry University',
    degree: 'B.Tech Information Technology',
    year: '2017',
    location: 'Pondicherry',
    note: 'University Rank · 9.28 GPA',
  },
]

export const skills = [
  'Salesforce Service Cloud',
  'Apex · Flow · LWC',
  'Node.js · Ruby · Java',
  'REST APIs · OAuth · JWT',
  'MongoDB · Redis · AWS',
  'Kibana · Datadog · New Relic',
  'AI workflow design',
  'Technical ownership',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
