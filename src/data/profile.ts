export const profile = {
  name: 'Rohith K',
  fullName: 'Rohith KM',
  title: 'Customer Support Engineering | AI | Salesforce',
  tagline: 'Technical owner and builder focused on scalable, intelligent customer support experiences',
  location: 'Chennai, India',
  email: 'rohithkannan.2595@gmail.com',
  phone: '+91 8870312775',
  linkedin: 'https://www.linkedin.com/in/rohith-k-09546a150/',
  about: `At Poshmark, I build systems that make customer support faster, more reliable, and easier to use. My work combines Salesforce Service Cloud, backend platforms, APIs, analytics, and AI-assisted workflows to improve both customer self-service and agent operations.`,
  personalNote: 'Passionate about video editing and exploring new destinations. Thrive in early-stage startup environments with a deep focus on product development.',
}

export const projects = [
  {
    id: 'case-tracking',
    title: 'Case Tracking System',
    description:
      'Designed a hybrid platform using MongoDB for fast case discovery while retaining Salesforce as the source of truth. Supports synchronized updates, ownership checks, replies, attachments, duplicate reduction, rate limiting, and operational monitoring.',
    tags: ['MongoDB', 'Salesforce', 'Node.js', 'Redis'],
    color: '#6366f1',
  },
  {
    id: 'ai-chatbot',
    title: 'AI Customer Support Chatbot',
    description:
      'Technical owner for a customer-facing chatbot initiative — vendor evaluation, workflow design, API integration, authentication, safety controls, Service Cloud case creation, and human escalation across order, cancellation, shipping, refund, and returns journeys.',
    tags: ['AI', 'Service Cloud', 'APIs', 'OAuth'],
    color: '#8b5cf6',
  },
  {
    id: 'microservices',
    title: 'Customer Support Microservices',
    description:
      'Built backend services that securely expose customer, order, and support capabilities to internal and external channels. Architecture emphasizes clear contracts, scoped access, fault handling, observability, and maintainability.',
    tags: ['Ruby', 'REST APIs', 'AWS', 'Observability'],
    color: '#06b6d4',
  },
  {
    id: 'salesforce',
    title: 'Salesforce Service Cloud Optimization',
    description:
      'Improved agent efficiency through related-case optimization, case visibility, reporting, dashboards, attachment handling, Omni-Channel and Messaging enablement, and automation troubleshooting across Apex, Flow, LWC, Aura, and Visualforce.',
    tags: ['Apex', 'LWC', 'Flow', 'Omni-Channel'],
    color: '#f59e0b',
  },
  {
    id: 'analytics',
    title: 'Support Center Analytics & Self-Service',
    description:
      'Developed approaches to improve Knowledge discovery, case deflection, content performance, and customer experience using Service Cloud capabilities — with emphasis on measurable outcomes and responsible cost control.',
    tags: ['Analytics', 'Knowledge', 'Self-Service', 'Kibana'],
    color: '#10b981',
  },
]

export const experience = [
  {
    company: 'Poshmark India Pvt Ltd',
    role: 'ML & AI Engineer (AND) Lead Backend Developer',
    period: 'May 2024 — Present',
    location: 'Chennai, India',
    highlights: [
      'Led development of critical sprint deliverables with timely delivery and minimal bugs',
      'Managed integrations with ServiceCloud, Stella Connect, Einstein AI, and SuedeOne Virtual Authentication',
      'Spearheaded automation for Customer Operations processes',
      'Personalised user feeds via ML classification, contributing to 3–9% daily GMV lift',
    ],
    stack: ['Ruby on Rails', 'MongoDB', 'Apex', 'SOQL', 'Kibana', 'JIRA'],
  },
  {
    company: 'Ansearch Pvt Ltd',
    role: 'Software Intern (Part Time)',
    period: 'Mar 2023 — May 2024',
    location: 'Edinburgh, UK',
    highlights: [
      'Contributed to Enterprise Search SaaS prototype as Integration Specialist and ML Engineer',
      'Designed scalable architecture and optimized data pipelines to reduce costs',
      'Part of the founding team, actively involved in product direction and development',
    ],
    stack: ['Python', 'ML Pipelines', 'REST APIs', 'Docker'],
  },
  {
    company: 'Poshmark India Pvt Ltd',
    role: 'Senior Software Engineer — II (Backend)',
    period: 'Mar 2019 — Jan 2023',
    location: 'Chennai, India',
    highlights: [
      'Built ML systems for content tagging: image embedding, percolator, text embeddings, cosine similarity',
      'Designed architecture connecting ML systems to backend infrastructure',
      'Led multiple critical sprint deliverables across customer operations',
    ],
    stack: ['Ruby on Rails', 'MongoDB', 'Git', 'Kibana', 'Apex', 'Flows'],
  },
  {
    company: 'Zoho Corporation',
    role: 'Member Technical Staff (Backend)',
    period: 'May 2017 — Mar 2019',
    location: 'Chennai, India',
    highlights: [
      'Developed and maintained backend services using Java and in-house frameworks',
      'Built API collections for Zoho Invoice and integrated Zoho Tax with GST India',
      'Led automation of API testing and handled PayPal and PayTm integrations for Zoho Finance suite',
    ],
    stack: ['Java', 'SQL', 'REST APIs', 'Git'],
  },
]

export const education = [
  {
    school: 'Herriot Watt University',
    degree: 'Master of Science, Artificial Intelligence',
    year: '2024',
    location: 'Edinburgh, Scotland',
    note: 'Built foundational AI models including encoder-decoder transformers for French-English translation with 67% accuracy',
  },
  {
    school: 'SMVEC, Pondicherry University',
    degree: 'Bachelor of Technology, Information Technology',
    year: '2017',
    location: 'Pondicherry, India',
    note: 'University Rank Holder with 9.28 GPA',
  },
]

export const skills = [
  { category: 'Salesforce', items: ['Service Cloud', 'Apex', 'Flow', 'LWC', 'Aura', 'Visualforce', 'Omni-Channel'] },
  { category: 'Backend', items: ['Node.js', 'Ruby on Rails', 'Java', 'REST APIs', 'OAuth 2.0', 'JWT'] },
  { category: 'Data & Infra', items: ['MongoDB', 'Redis', 'AWS', 'Docker', 'SQL'] },
  { category: 'Observability', items: ['Kibana', 'Datadog', 'New Relic'] },
  { category: 'AI & ML', items: ['Workflow Design', 'Model Integration', 'Embeddings', 'Einstein AI'] },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
