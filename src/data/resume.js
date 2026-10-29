// ---------------------------------------------------------------------------
// Edit this file to update all résumé content displayed on the website.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Rodrigo Miranda',
  role: 'Senior Full Stack .NET Developer',
  tagline:
    'I build reliable enterprise systems with C#, ASP.NET Core and cloud infrastructure, focused on scalability, performance and long-term value.',
  location: 'Guarulhos, São Paulo, Brazil',
  email: 'rodrigo@rmiranda.com.br',
  phone: '+55 11 99983-2400',
  website: 'https://rmiranda.com.br',
  avatar: '/avatar.jpg',
  resumePdf: '/resume.pdf',
  coverLetterPdf: '/cover-letter.pdf',
  social: {
    github: 'https://github.com/netrunner2099',
    linkedin: 'https://linkedin.com/in/rodrigo-rmiranda',
  },
}

export const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '50+', label: 'Integrated Modules' },
  { value: '10+', label: 'Years Remote' },
  { value: 'Multi Cloud', label: 'AWS, Azure, GCP' },
]

export const heroTech = [
  'C#',
  'ASP.NET Core',
  'REST APIs',
  'SQL Server',
  'Oracle',
  'Docker',
  'Kubernetes',
  'AWS',
]

// Optional links for technology badges (applied wherever the name appears as a tag)
export const techLinks = {
  'TOTVS RM': 'https://www.totvs.com/sistema-de-gestao/totvs-backoffice-linha-rm/',
  'TOTVS RM/Corpore': 'https://www.totvs.com/sistema-de-gestao/totvs-backoffice-linha-rm/',
  'Lyceum ERP': 'https://www.lyceum.com.br/',
}

export const about = {
  paragraphs: [
    'Senior Full Stack .NET Developer with 20+ years of experience turning complex business needs into reliable systems. My expertise is anchored in the Microsoft ecosystem — C#, ASP.NET MVC and ASP.NET Core for robust enterprise architectures and high-throughput REST APIs — with deep proficiency in data modeling, performance tuning and stored procedure optimization across SQL Server and Oracle.',
    'I have a proven track record of delivering continuous long-term value: for over a decade at Nacional Tubos I have evolved core systems, relational databases and server infrastructure side by side. Having founded and served as CEO of Netrunner Tecnologia, I approach development with an executive sense of ownership and the stakeholder alignment needed to bridge business strategy and technical execution.',
    'I am currently deepening my expertise through a postgraduate specialization in Applied AI Software Engineering and a degree in Cyber Defense, to engineer inherently secure, resilient and intelligent software products. Experienced in fully remote work since 2014, and open to international relocation or distributed remote arrangements.',
  ],
  highlights: [
    '20+ years of professional experience',
    'Fully remote work since 2014',
    'Founder & CEO of Netrunner Tecnologia',
    'Multi-cloud: AWS, Azure, GCP, Oracle Cloud',
    'English: professional working proficiency',
    'Open to remote & international relocation',
  ],
}

export const experience = [
  {
    company: 'Control+F5',
    role: 'Senior .NET Developer',
    period: 'Jun 2020 — May 2025',
    location: 'São Paulo, SP (Remote)',
    description:
      'Full stack development on a fully remote, distributed engagement.',
    achievements: [
      'Developed web applications and backend components utilizing ASP.NET MVC.',
      'Architected and delivered RESTful APIs for distributed services integration.',
      'Collaborated effectively in a fully remote, distributed team environment, ensuring autonomous delivery and seamless asynchronous communication.',
    ],
    stack: ['ASP.NET MVC', 'C#', 'REST APIs'],
  },
  {
    company: 'Nacional Tubos',
    url: 'https://nacionaltubos.com.br/',
    role: 'Senior .NET Developer',
    period: 'Jun 2014 — Present',
    location: 'Limeira, SP (Remote)',
    description:
      'Over a decade of continuous, unified evolution across core systems, relational databases and IT infrastructure.',
    achievements: [
      'Developed a corporate portal with more than 50 integrated modules and reports on the TOTVS RM platform.',
      'Lead the ongoing development and maintenance of enterprise systems using ASP.NET MVC.',
      'Administer and optimize mission-critical Oracle databases, ensuring data integrity and high availability.',
      'Design, deploy and support software integrations with the TOTVS RM (ERP) corporate ecosystem.',
    ],
    stack: ['ASP.NET MVC', 'C#', 'Oracle', 'TOTVS RM'],
  },
  {
    company: 'Agence Interativa Ltda.',
    role: 'Senior .NET Developer',
    period: 'Jul 2007 — May 2012',
    location: 'Guarulhos, SP',
    description:
      'Custom web applications and ERP integrations for enterprise environments.',
    achievements: [
      'Built custom web applications using ASP.NET and administered Oracle databases.',
      'Engineered direct integrations between corporate intranet solutions and the TOTVS RM/Corpore ERP platform.',
      'Handled network administration and customized reporting within enterprise environments.',
    ],
    stack: ['ASP.NET', 'Oracle', 'TOTVS RM/Corpore'],
  },
  {
    company: 'Inspirit Tecnologia e Sistemas Ltda.',
    role: 'System Development Manager',
    period: 'Aug 2002 — Jun 2007',
    location: 'São Paulo, SP',
    description:
      'Coordinated end-to-end web development initiatives and oversaw technical alignment for international products.',
    achievements: [
      'Engineered web solutions using ASP and ASP.NET, alongside database administration on Microsoft SQL Server.',
      "Led the digital automation of FAAP's university secretariat, moving administrative processes online and saving 50 tons of paper per year.",
      'The operation became so streamlined that an entire building was emptied as administrative work no longer required physical space.',
    ],
    stack: ['ASP', 'ASP.NET', 'SQL Server'],
  },
]

export const skills = [
  {
    category: 'Languages & Front-end',
    items: ['C#', 'VB.NET', 'JavaScript/jQuery', 'HTML', 'SQL'],
  },
  {
    category: 'Back-end',
    items: ['ASP.NET Core', 'ASP.NET MVC', 'REST APIs', 'Web Services', 'ETL', 'Xamarin'],
  },
  {
    category: 'Databases',
    items: ['SQL Server', 'Oracle', 'AWS DynamoDB', 'Performance Tuning', 'Stored Procedures'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'GCP', 'Oracle Cloud', 'AWS Lambda', 'Docker', 'Kubernetes', 'Docker Swarm'],
  },
  {
    category: 'Infrastructure',
    items: [
      'Windows Server 2000–2025',
      'Linux (CentOS, Red Hat, Ubuntu, Kali)',
      'Active Directory',
      'LAN/WAN/VPN/Firewall',
      'Web Servers & SSL',
    ],
  },
  {
    category: 'Practices & Management',
    items: ['ITIL', 'COBIT', 'Scrum/Agile', 'NOC/SOC Management', 'Service Desk Management'],
  },
]

export const projects = [
  {
    name: 'TOTVS RM Corporate Portal',
    description:
      'Corporate portal with more than 50 integrated modules and reports on the TOTVS RM platform, continuously evolved for over a decade at Nacional Tubos.',
    tags: ['ASP.NET MVC', 'Oracle', 'TOTVS RM'],
    link: 'https://www.totvs.com/sistema-de-gestao/totvs-backoffice-linha-rm/',
  },
  {
    name: "FAAP's Portal",
    description:
      "Development of several web applications integrated with Techne's Lyceum educational ERP, such as the Student Service Center, a class and activity publishing system for MBA and graduate programs, and the Admissions System (integrated with payment providers). Digital automation of FAAP's university secretariat — administrative processes moved online, saving 50 tons of paper per year and freeing an entire building.",
    tags: ['ASP.NET', 'SQL Server', 'Lyceum ERP'],
    link: 'https://www.lyceum.com.br/',
  },
  {
    name: 'Netrunner Tecnologia',
    description:
      'Founded and led a Brazilian IT company specialized in custom software development and managed infrastructure services.',
    tags: ['Entrepreneurship', 'Custom Software', 'IT Services'],
    link: 'https://netrunner.com.br',
  },
]

export const education = [
  {
    institution: 'Uni PDS, São Paulo, SP',
    degree: 'Applied AI Software Engineering',
    period: 'Aug 2026 — Aug 2027',
    details: 'Postgraduate specialization focused on AI-powered software engineering.',
  },
  {
    institution: 'Faculdade Impacta, São Paulo, SP',
    degree: 'Cyber Defense',
    period: 'Aug 2026 — Dec 2028',
    details: 'Undergraduate technology degree in cyber defense and security.',
  },
  {
    institution: 'Faculdade Impacta, São Paulo, SP',
    degree: 'Systems Analysis and Development',
    period: 'Jan 2024 — Jun 2026',
    details: 'Undergraduate technology degree in systems analysis and development.',
  },
]

export const certifications = [
  { name: 'Design Patterns with C#', issuer: 'Impacta', year: '2026' },
  { name: 'Kubernetes for the Absolute Beginners, Hands-on', issuer: 'Udemy', year: '2020' },
  { name: 'Docker Swarm, Hands-on DevOps', issuer: 'Udemy', year: '2020' },
  { name: 'Docker for ASP.NET Core MVC', issuer: 'Udemy', year: '2020' },
  { name: 'Hands-on ASP.NET Core MVC', issuer: 'Udemy', year: '2020' },
  { name: 'ASP.NET Core, Web API', issuer: 'Udemy', year: '2020' },
  { name: 'AWS Lambda for .NET C# Developers', issuer: 'Udemy', year: '2020' },
]
