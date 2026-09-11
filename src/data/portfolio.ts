import {
  Code2,
  Layout,
  PenTool,
  Github,
  Linkedin,
  Twitter,
  Mail,
  // Sparkles,
  GitBranch,
  // Boxes,
  Accessibility,
  Gauge,
  Component,
  Figma,
  Atom,
  Braces,
  Database,
  Cloud,
  Layers,
  Server,
  FileCheck,
  CreditCard,
  Receipt,
  Users,
  Building2,
  RefreshCw,
} from "lucide-react";

export const profile = {
  name: "MinWoo ",
  role: "Full-Stack Developer · React & .NET",
  tagline:
    "I build scalable web applications and ERP systems that businesses rely on every day.",
  bio: "Full-stack developer with 3+ years building enterprise web applications and ERP systems with React and .NET. I work across the entire stack — from responsive React interfaces and Next.js SEO optimization to REST APIs, SQL database tuning, and Azure deployments. I care about clean code, real-world usability, and shipping features that solve business problems.",
  location: "Madrid, Spain · Remote",
  email: "minwoowork91@gmail.com",
  availability: "Open to new opportunities",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "ERP Modules Built", value: "8+" },
    { label: "Tech Stack", value: "React + .NET" },
    { label: "Work Mode", value: "Remote" },
  ],
};

export const socials = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Email", href: "mailto:minwoowork91@gmail.com", icon: Mail },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    category: "Front-End",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "TanStack Query", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Styled Components", level: 85 },
    ],
  },
  {
    category: "Back-End & Cloud",
    items: [
      { name: ".NET / ASP.NET", level: 88 },
      { name: "REST & SOAP APIs", level: 87 },
      { name: "SQL", level: 85 },
      { name: "Azure", level: 82 },
      { name: "Jest Testing", level: 80 },
      { name: "Figma", level: 78 },
    ],
  },
];

export const expertise = [
  {
    icon: Component,
    title: "ERP Development",
    desc: "Building enterprise modules — clients, contracts, payments, invoicing — that businesses run on daily.",
  },
  {
    icon: Layers,
    title: "Server State",
    desc: "TanStack Query for caching, synchronization, and efficient data fetching across complex ERP workflows.",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    desc: "Next.js SSR/SSG optimization for speed, Core Web Vitals, and search engine positioning.",
  },
  {
    icon: Accessibility,
    title: "Usability & a11y",
    desc: "Responsive interfaces with Tailwind, focused on usability and accessibility for real users.",
  },
  {
    icon: Server,
    title: "Full-Stack Delivery",
    desc: "React front-ends backed by .NET APIs, SQL databases, and Azure cloud deployments.",
  },
  {
    icon: GitBranch,
    title: "Testing & Quality",
    desc: "Unit and integration tests with Jest, plus hands-on production debugging and issue resolution.",
  },
];

export const projects = [
  {
    title: "Rental Management ERP",
    category: "Enterprise ERP",
    description:
      "A full rental management ERP with modules for clients, companies, landlords, contracts, renewals, and users. Built with React and .NET, deployed on Azure.",
    tags: ["React", ".NET", "Azure", "SQL"],
    accent: "from-brand-500 to-brand-700",
    featured: true,
    link: "#",
    metrics: "8+ modules",
  },
  {
    title: "Credit Check & Bank Reconciliation",
    category: "ERP Module",
    description:
      "Implemented credit check workflows and bank reconciliation features integrated with the rental ERP, handling payment matching and financial data processing.",
    tags: ["React", "TanStack Query", ".NET", "SQL"],
    accent: "from-accent-500 to-accent-700",
    featured: true,
    link: "#",
    metrics: "Financial grade",
  },
  {
    title: "Electronic Invoicing & Subscriptions",
    category: "ERP Module",
    description:
      "Built electronic invoicing and subscription management features, including automated billing cycles and integration with external invoicing systems via REST APIs.",
    tags: ["React", ".NET", "REST API", "Azure"],
    accent: "from-amber-500 to-orange-700",
    featured: false,
    link: "#",
    metrics: "Automated billing",
  },
  {
    title: "ERP Frontend Integration",
    category: "Web Application",
    description:
      "Integrated the React frontend with existing REST APIs and legacy SOAP services, building a unified interface for multiple business workflows and projects.",
    tags: ["React", "REST", "SOAP", "Tailwind"],
    accent: "from-rose-500 to-pink-700",
    featured: false,
    link: "#",
    metrics: "Multi-project",
  },
  {
    title: "SQL Query Optimization",
    category: "Database",
    description:
      "Optimized relational database queries in high-load ERP systems, improving response times and ensuring data integrity across complex business operations.",
    tags: ["SQL", ".NET", "Performance"],
    accent: "from-cyan-500 to-teal-700",
    featured: false,
    link: "#",
    metrics: "High-load ready",
  },
  {
    title: "Responsive ERP Interfaces",
    category: "UI/UX",
    description:
      "Designed and built responsive, accessible interfaces with Tailwind CSS and styled-components, adapted for different projects and business needs.",
    tags: ["React", "Tailwind", "Figma", "a11y"],
    accent: "from-violet-500 to-indigo-700",
    featured: false,
    link: "#",
    metrics: "Multi-project",
  },
];

export const experience = [
  {
    role: "Full-Stack Developer · React & .NET",
    company: "CTF Code to Fit / Grupo Plus Services",
    period: "Jun 2023 — Present",
    description:
      "Full-stack development and maintenance of a rental management ERP system using React and .NET. Working remotely from Madrid, I build and maintain modules across the entire stack — from React interfaces to .NET APIs, SQL databases, and Azure deployments.",
    achievements: [
      "Developed ERP modules for clients, companies, landlords, contracts, renewals, and users",
      "Implemented credit checks, bank reconciliation, payments, electronic invoicing, and subscriptions",
      "Built responsive interfaces with Tailwind CSS focused on usability and accessibility",
      "Developed complex web apps with React and Next.js, optimizing performance and SEO",
      "Implemented backend services with .NET and ASP.NET — REST and SOAP APIs for enterprise integration",
      "Optimized SQL queries for high-load systems, improving performance and data integrity",
      "Integrated React Query for efficient server state management, caching, and data fetching",
      "Wrote and maintained unit and integration tests with Jest, improving reliability and coverage",
      "Participated in deployment and maintenance of applications on Azure",
    ],
    tags: [
      "React",
      "Next.js",
      ".NET",
      "ASP.NET",
      "TanStack Query",
      "Tailwind",
      "SQL",
      "Azure",
      "Jest",
      "Figma",
    ],
  },
];

export const techStack = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Code2 },
  { name: "TypeScript", icon: Braces },
  { name: "TanStack Query", icon: Layers },
  { name: "Tailwind CSS", icon: Layout },
  { name: "Styled Components", icon: PenTool },
  { name: ".NET / ASP.NET", icon: Server },
  { name: "Azure", icon: Cloud },
  { name: "SQL", icon: Database },
  { name: "Jest", icon: FileCheck },
  { name: "Figma", icon: Figma },
  { name: "Git", icon: GitBranch },
];

export const erpModules = [
  { icon: Users, name: "Clients & Users" },
  { icon: Building2, name: "Companies & Landlords" },
  { icon: FileCheck, name: "Contracts & Renewals" },
  { icon: CreditCard, name: "Payments" },
  { icon: Receipt, name: "Electronic Invoicing" },
  { icon: RefreshCw, name: "Bank Reconciliation" },
];

export const contactInfo = {
  email: "minwoowork91@gmail.com",
  socials: socials,
};
