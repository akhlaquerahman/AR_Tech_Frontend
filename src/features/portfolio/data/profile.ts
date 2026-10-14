export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  location?: string;
  type: "Internship" | "Full-time" | "Contract";
  description: string;
  responsibilities: string[];
  technologies: string[];
  projectsWorkedOn: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface DeveloperProfile {
  name: string;
  brandName: string;
  headline: string;
  positioning: string;
  summary: string;
  bio: string[];
  location: string;
  contactEmail: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const DEVELOPER_PROFILE: DeveloperProfile = {
  name: "Akhlaque Rahman",
  brandName: "AR Tech",
  headline: "Software Engineer & MERN Full Stack Developer",
  positioning: "Independent Software Development & Digital Solutions Studio",
  summary:
    "I'm Akhlaque Rahman, a software developer focused on building modern web applications, business software, and AI-powered solutions. Through my development experience, I work across frontend development, backend APIs, databases, and intelligent application workflows.",
  bio: [
    "I'm Akhlaque Rahman, a software developer focused on building modern web applications, business software, and AI-powered solutions. Through my development experience, I work across frontend development, backend APIs, databases, and intelligent application workflows.",
    "At AR Tech, I partner with businesses and founders to turn ideas into practical, reliable, and high-performance digital products — avoiding brittle prototypes in favor of clean architecture, type safety, and honest execution.",
  ],
  location: "India",
  contactEmail: "akhlaque.artech@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:akhlaque.artech@gmail.com",
  },
};

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: "mobiloitte",
    role: "Software Engineer Intern",
    company: "Mobiloitte Technology",
    period: "5 Months",
    duration: "5 Months",
    type: "Internship",
    description:
      "Contributed to full-stack web application development and AI-integrated workflows across multiple client and internal engineering initiatives.",
    responsibilities: [
      "Engineered core modules and responsive interfaces for enterprise HRMS workforce application.",
      "Developed full-stack features and expense ledger workflows for the SmartSplit web application.",
      "Contributed to retrieval-augmented generation (RAG) knowledge retrieval pipelines for e-commerce search.",
      "Integrated secure REST APIs, role-based access control, and optimized database queries with MongoDB.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "RAG Pipelines", "Tailwind CSS"],
    projectsWorkedOn: ["HRMS Web Application", "SmartSplit Application", "RAG-Based E-Commerce Application"],
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-fullstack",
    title: "Full Stack Web Development & MERN Specialization",
    issuer: "Verified Technical Training Institution",
    issueDate: "2024",
  },
  {
    id: "cert-react-node",
    title: "Modern React & Node.js Application Engineering",
    issuer: "Developer Certification Authority",
    issueDate: "2024",
  },
  {
    id: "cert-ai-rag",
    title: "Generative AI, Embeddings & RAG Fundamentals",
    issuer: "AI Engineering Program",
    issueDate: "2024",
  },
];
