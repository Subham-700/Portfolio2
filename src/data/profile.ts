/**
 * Single source of truth for all portfolio content.
 * Everything here is taken from Subham's resume — edit this file to update the site.
 */

export const site = {
  // Set NEXT_PUBLIC_SITE_URL to your deployed domain (used for SEO / Open Graph).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  resume: "/Subham_Gupta_Resume.pdf",
};

export const profile = {
  name: "Subham Gupta",
  firstName: "Subham",
  role: "AI Full-Stack Developer",
  location: "India",
  email: "subhamkumargupta1234@gmail.com",
  phone: "+91-7003051164",
  phoneHref: "tel:+917003051164",
  github: "https://github.com/Subham-700",
  githubHandle: "Subham-700",
  linkedin: "https://www.linkedin.com/in/subham-gupta700/",
  linkedinHandle: "subham-gupta700",
  headline: "I build the systems behind streaming platforms.",
  intro:
    "Full-stack developer with 1+ year of production experience at Accedo Technologies, shipping CMS and audience-management systems for Tata Play Binge and SBS CTV — with TypeScript, React, Next.js, Node.js and MongoDB.",
  seoDescription:
    "Subham Gupta — Full-Stack Developer (TypeScript, React, Next.js, Node.js, MongoDB). 1+ year building production CMS, JWT/RBAC auth and middleware integrations for OTT platforms Tata Play Binge and SBS CTV at Accedo Technologies.",
  keywords: [
    "Subham Gupta",
    "Full-Stack Developer",
    "AI Full-Stack Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack",
    "MongoDB",
    "Express.js",
    "JWT Authentication",
    "RBAC",
    "Jest",
    "OTT CMS",
    "Accedo",
    "India",
  ],
};

export const about = {
  paragraphs: [
    "I'm a full-stack developer who has spent the last year inside the content and audience tooling of OTT platforms. At Accedo Technologies I worked on a production CMS used for content operations on major streaming services, built a multi-step audience data form for Tata Play Binge, and improved product stability for SBS CTV.",
    "I'm comfortable across the stack — designing REST APIs and NoSQL schemas, securing them with JWT and role-based access control, wiring third-party providers into middleware, and building accessible, component-driven UIs on top.",
  ],
  brings: [
    {
      title: "Production habits",
      body: "Shipped in fast-paced agile teams, on a client platform with real users and real deadlines.",
    },
    {
      title: "Security by default",
      body: "JWT authentication and RBAC across 10+ protected API endpoints.",
    },
    {
      title: "Quality you can measure",
      body: "Raised Jest test coverage by ~30% on SBS CTV to stabilise releases.",
    },
    {
      title: "Accessible UI",
      body: "WCAG-compliant, validated forms built with Preact and TypeScript.",
    },
  ],
};

/** Skills marked `prod: true` were used in production at Accedo Technologies (per resume). */
export type Skill = { name: string; prod?: boolean };
export type SkillGroup = { id: string; title: string; caption: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    caption: "Component-driven, accessible interfaces",
    skills: [
      { name: "React.js", prod: true },
      { name: "Next.js", prod: true },
      { name: "TypeScript", prod: true },
      { name: "Preact", prod: true },
      { name: "Vite" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    caption: "APIs, auth and integrations",
    skills: [
      { name: "Node.js", prod: true },
      { name: "Express.js", prod: true },
      { name: "JWT Auth", prod: true },
      { name: "RBAC", prod: true },
      { name: "Nest.js" },
      { name: "FastAPI" },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "Socket.io" },
      { name: "RabbitMQ" },
    ],
  },
  {
    id: "data",
    title: "Databases",
    caption: "Schema design and caching",
    skills: [{ name: "MongoDB", prod: true }, { name: "Mongoose" }, { name: "Redis" }, { name: "PostgreSQL" }],
  },
  {
    id: "testing",
    title: "Testing",
    caption: "Confidence before shipping",
    skills: [{ name: "Jest", prod: true }, { name: "Vitest" }],
  },
  {
    id: "languages",
    title: "Languages",
    caption: "Day-to-day and problem solving",
    skills: [{ name: "TypeScript", prod: true }, { name: "JavaScript (ES6+)", prod: true }, { name: "C++" }, { name: "Python" }, { name: "SQL" }],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    caption: "Build, containerise, deploy",
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "GitHub Actions" },
      { name: "CI/CD" },
      { name: "AWS EC2" },
      { name: "AWS S3" },
      { name: "AWS IAM" },
      { name: "AWS RDS" },
      { name: "AWS Lambda" },
      { name: "API Gateway" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    caption: "Workflow",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Jira" },
      { name: "Postman" },
      { name: "Bruno" },
      { name: "Swagger" },
      { name: "VS Code" },
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  clients?: string[];
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Accedo Technologies",
    role: "Junior Software Engineer",
    location: "Noida",
    start: "Apr 2025",
    end: "May 2026",
    summary: "CMS, audience management and middleware for OTT platforms.",
    clients: ["Tata Play Binge", "SBS CTV"],
    points: [
      "Developed a production-grade CMS with TypeScript, React, Next.js, Express.js and MongoDB, supporting content operations for major OTT platforms.",
      "Engineered a multi-step audience data form for Tata Play Binge in Preact + TypeScript — full validation, state management and WCAG-compliant UI — cutting form error rate by ~40%.",
      "Implemented JWT authentication and Role-Based Access Control securing 10+ protected API endpoints across the CMS.",
      "Improved SBS CTV stability by increasing Jest test coverage by ~30%, enhancing multilingual workflows and building UI components for the AI-policy module.",
      "Integrated the Magnaquest provider into AccedoAssemble middleware, enabling third-party compatibility and reducing client onboarding effort by ~25%.",
    ],
    stack: ["TypeScript", "React", "Next.js", "Preact", "Express.js", "MongoDB", "Jest"],
  },
  {
    company: "Brain Mentors Pvt. Ltd.",
    role: "MERN Training",
    location: "Ghaziabad",
    start: "Oct 2024",
    end: "Jan 2025",
    summary: "Intensive full-stack MERN programme.",
    points: [
      "Built full-stack applications with MongoDB, Express.js, React.js and Node.js.",
      "Architected secure REST APIs, implemented authentication systems and strengthened component-based UI skills.",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

export const education = {
  school: "Raj Kumar Goel Institute of Technology",
  degree: "Bachelor of Technology",
  start: "Jul 2020",
  end: "Jul 2024",
  score: "CGPA: 78%",
};

export type Project = {
  slug: "washpro" | "chat" | "shortener";
  name: string;
  tagline: string;
  period: string;
  problem: string;
  features: string[];
  contribution: string;
  stack: string[];
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "washpro",
    name: "WashPro",
    tagline: "Laundry service management system",
    period: "Jul – Sep 2024",
    problem:
      "Laundry operations juggle orders across many stages, pricing rules and rack space. WashPro gives staff one admin portal to price, track and place every order.",
    features: [
      "Admin portal managing 500+ service orders with multi-stage tracking",
      "Automated pricing and optimised rack assignment",
      "Mongoose NoSQL schema with 10+ entity relationships",
      "Redis caching cut average API response time by ~30% at peak load",
    ],
    contribution: "Built the admin portal, data model, order-tracking flow and Redis caching layer.",
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redis", "Tailwind CSS"],
    github: "https://github.com/Subham-700/wash_pro",
  },
  {
    slug: "chat",
    name: "Talk-A-Tive",
    tagline: "Real-time chat application",
    period: "Mar – Jun 2024",
    problem: "Messaging only feels right when it's instant. Talk-A-Tive delivers messages and presence live over WebSockets.",
    features: [
      "Socket.io messaging with instant delivery and live user status",
      "Handled 50+ concurrent connections",
      "20% faster frontend load via optimised API calls and state management",
      "MongoDB schemas for chat history and session handling",
    ],
    contribution: "Built the real-time messaging layer, frontend state management and chat data model.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Subham-700/Talk-A-Tive",
  },
  {
    slug: "shortener",
    name: "Scalable URL Shortener",
    tagline: "High-performance link service",
    period: "Jan – Mar 2024",
    problem: "Short links are read far more than written, so redirects must be fast. This service caches hot routes in Redis.",
    features: [
      "Redis caching reduced redirect latency by ~50ms on cached routes",
      "Unique ID generation system for short links",
      "Dockerised for consistent deployments",
    ],
    contribution: "Built the REST API, ID generation, caching strategy and Docker setup.",
    stack: ["Node.js", "Express", "TypeScript", "MongoDB", "Redis", "React.js", "Docker"],
    github: "https://github.com/Subham-700/url_shortner",
  },
];

/** Impact figures exactly as stated on the resume. */
export const impact = [
  { value: "~40%", label: "lower form error rate", context: "Tata Play Binge audience form" },
  { value: "~30%", label: "more Jest test coverage", context: "SBS CTV product" },
  { value: "~25%", label: "less client onboarding effort", context: "Magnaquest × AccedoAssemble" },
  { value: "10+", label: "API endpoints secured", context: "JWT + RBAC in the CMS" },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

/**
 * Certifications / coding achievements — none are listed on the current resume.
 * Add entries here and they will appear in the Achievements section automatically.
 * Example: { title: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: "2026", url: "https://..." }
 */
export const certifications: { title: string; issuer: string; year?: string; url?: string }[] = [];
