export const profile = {
  name: 'Rohith K',
  fullName: 'Rohith KM',
  headline: 'Backend Engineer',
  subheadline: 'MSc Artificial Intelligence · Lead Backend Developer · Support Engineering · Salesforce',
  tagline:
    'I build intelligent systems — from enterprise customer support at Poshmark to AI-powered customer intelligence at Ansearch.',
  location: 'Chennai, India',
  email: 'rohithkannan.2595@gmail.com',
  phone: '+91 8870312775',
  linkedin: 'https://www.linkedin.com/in/rohith-k-09546a150/',
  about:
    'Technical owner at Poshmark building the infrastructure behind world-class customer support. Previously COO and founding-team engineer at Ansearch — an Edinburgh-based AI startup turning customer conversations into product and sales signals. MSc in Artificial Intelligence from Heriot-Watt University, Edinburgh.',
  philosophy:
    'Great engineering connects what customers say to what teams ship — traceable, measurable, and built to scale.',
  stats: [
    { value: '8+', label: 'Years building' },
    { value: '2', label: 'Companies shaped' },
    { value: 'MSc', label: 'AI · Heriot-Watt' },
  ],
}

export const ansearch = {
  name: 'Ansearch',
  url: 'https://ansearch.ai',
  tagline: 'Customer Intelligence for Product Management & Sales',
  headline: 'Your customers are telling you what they want. Ansearch makes sure you hear it.',
  description:
    'Ansearch turns every customer interaction into sharper sales, GTM, and roadmap updates — traceable to the exact word, automatic, and hallucination-free.',
  role: 'COO · Founding Team',
  secondaryRole: 'Integration Specialist & ML Engineer',
  period: '2023 — 2024',
  location: 'Edinburgh, United Kingdom',
  linkedin: 'https://www.linkedin.com/in/rohith-k-09546a150/',
  contributions: [
    'Founding-team engineer building the Enterprise Search / customer intelligence SaaS from prototype to product',
    'Designed scalable architecture and ML pipelines for transcript analysis with zero-hallucination traceability',
    'Led integrations with task systems (Linear, Jira roadmap) and third-party data sources',
    'COO — owned operations, engineering delivery, and platform reliability across UK and EU infrastructure',
  ],
  howItWorks: [
    {
      step: '01',
      title: 'Record or upload interactions',
      description:
        'Works entirely in the browser — no app, no plugin, no post-meeting admin. Upload calls, meetings, and customer conversations.',
    },
    {
      step: '02',
      title: 'AI analyses every transcript',
      description:
        'Extracts pain points, buying intent, feature requests, company context, and product signals. Builds a searchable knowledge base of customer voices.',
    },
    {
      step: '03',
      title: 'Roadmap & backlog, updated',
      description:
        'Flags signals for review, updates your backlog in Linear or Jira, and traces every ticket back to the exact customer sentence.',
    },
  ],
  signals: [
    'Pain points & feature requests',
    'Buying intent detection',
    'Company & persona mapping',
    'Hallucination-free analysis pipeline',
    'CRM & GTM automation',
    'Sovereign cloud infrastructure',
  ],
  stack: ['Python', 'ML Pipelines', 'RAG', 'REST APIs', 'Docker', 'Linear', 'NLP'],
}

export const education = [
  {
    school: 'Heriot-Watt University',
    degree: 'MSc Artificial Intelligence',
    year: '2024',
    location: 'Edinburgh, Scotland, UK',
    note: 'Built foundational AI models from scratch — including encoder-decoder transformer models for French–English translation achieving 67% accuracy.',
    highlights: [
      'Deep learning & neural network foundations',
      'Encoder-decoder transformers for machine translation',
      'Model evaluation, training pipelines, and NLP research',
    ],
  },
  {
    school: 'Pondicherry University (SMVEC)',
    degree: 'B.Tech Information Technology',
    year: '2017',
    location: 'Pondicherry, India',
    note: 'University Rank Holder · 9.28 GPA',
  },
]

export const projects = [
  {
    id: 'ansearch-platform',
    title: 'Ansearch AI Platform',
    subtitle: 'Founding team · Edinburgh',
    description:
      'Customer intelligence SaaS that analyses transcripts for product signals, buying intent, and feature requests — with every insight traced to the exact customer sentence.',
    tags: ['AI', 'RAG', 'NLP', 'Python'],
    span: 'large' as const,
    accent: '#FF6B4A',
    link: 'https://ansearch.ai',
  },
  {
    id: 'case-tracking',
    title: 'Case Tracking System',
    subtitle: 'Hybrid data architecture',
    description:
      'MongoDB for lightning-fast case discovery. Salesforce as the conversation source of truth. Synced updates, ownership checks, and operational monitoring at scale.',
    tags: ['MongoDB', 'Salesforce', 'Node.js', 'Redis'],
    span: 'medium' as const,
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
    accent: '#2DD4BF',
  },
  {
    id: 'microservices',
    title: 'Support Microservices',
    subtitle: 'Platform layer',
    description:
      'Secure APIs exposing customer, order, and support data with scoped access and full observability.',
    tags: ['Ruby', 'REST', 'AWS'],
    span: 'small' as const,
    accent: '#FBBF24',
  },
  {
    id: 'salesforce',
    title: 'Service Cloud',
    subtitle: 'Agent experience',
    description:
      'Omni-Channel, dashboards, and automation across Apex, Flow, LWC, and Aura.',
    tags: ['Apex', 'LWC', 'Flow'],
    span: 'small' as const,
    accent: '#60A5FA',
  },
]

export const experience = [
  {
    company: 'Poshmark',
    role: 'Lead Backend Developer · ML & AI Engineer',
    period: '2024 — Present',
    location: 'Chennai, India',
    summary:
      'Technical owner for critical sprint delivery, Service Cloud integrations (Einstein AI, Stella Connect), and Customer Operations automation. ML feed personalization contributing to 3–9% daily GMV lift.',
    stack: ['Ruby on Rails', 'MongoDB', 'Apex', 'Einstein AI', 'Kibana'],
  },
  {
    company: 'Ansearch',
    role: 'COO · Founding Team Engineer',
    period: '2023 — 2024',
    location: 'Edinburgh, UK',
    summary:
      'Founding-team member at an Edinburgh AI startup building customer intelligence software. Served as COO overseeing operations while engineering ML pipelines, integrations, and the core analysis platform that powers ansearch.ai.',
    stack: ['Python', 'ML Pipelines', 'RAG', 'Docker', 'REST APIs'],
    link: 'https://ansearch.ai',
  },
  {
    company: 'Poshmark',
    role: 'Senior Software Engineer II (Backend)',
    period: '2019 — 2023',
    location: 'Chennai, India',
    summary:
      'Built ML content-tagging systems — image embeddings, text embeddings, cosine similarity — and production architecture connecting models to backend at scale.',
    stack: ['Ruby on Rails', 'MongoDB', 'Apex', 'SOQL'],
  },
  {
    company: 'Zoho Corporation',
    role: 'Member Technical Staff (Backend)',
    period: '2017 — 2019',
    location: 'Chennai, India',
    summary:
      'Backend services for Zoho Finance suite — PayPal & PayTm integrations, GST tax compliance, Zoho Invoice APIs, and automated API testing.',
    stack: ['Java', 'SQL', 'REST APIs'],
  },
]

export const skills = [
  'Salesforce Service Cloud',
  'Apex · Flow · LWC',
  'AI & ML Pipelines',
  'RAG & NLP',
  'Transformers',
  'Node.js · Ruby · Java',
  'Python',
  'REST APIs · OAuth',
  'MongoDB · Redis · AWS',
  'Docker',
  'Kibana · Datadog',
  'Technical Leadership',
  'Startup Operations',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Ansearch', href: '#ansearch' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]
