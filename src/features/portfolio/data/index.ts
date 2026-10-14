import { ProjectItem } from "../types";

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  // 1. SmartSplit Web & Mobile Application
  {
    slug: "smartsplit-expense-settlement",
    title: "SmartSplit — Group Expense Management & Settlement",
    tagline: "Track shared group expenses, compute net balances, and streamline settlements with AI assistance",
    description:
      "A complete expense management web and mobile solution engineered to eliminate ledger disputes in shared travel, roommate living, and team budgets. Features group ledger balancing, settlement requests, administrative controls, and contextual AI chatbot support.",
    category: "web-development",
    projectType: "Full-Stack Web & Mobile App",
    clientIndustry: "Finance & Expense Management",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    thumbnailUrl: "/images/projects/smartsplit-dashboard.png",
    liveUrl: "/portfolio/smartsplit-expense-settlement",
    isFeatured: true,
    isConcept: false,
    platform: "Web & Cloud",
    features: [
      "Group expense recording & categorized breakdowns",
      "Real-time balance & debt settlement calculation",
      "Settlement request verification & admin oversight",
      "AI assistant integration for receipt guidance and group summaries",
      "Responsive interface optimized for desktop and mobile",
    ],
  },

  // 2. HRMS Workforce Application
  {
    slug: "hrms-workforce-management",
    title: "HRMS — Workforce & Attendance Management System",
    tagline: "Employee lifecycle tracking, punch-in/punch-out attendance, leaves, and shift management",
    description:
      "A human resource management system built during software engineering internship at Mobiloitte Technology. Designed for streamlined workforce operations, employee directories, shift tracking, break logs, role-based governance, and attendance reporting.",
    category: "enterprise",
    projectType: "Enterprise Web Application",
    clientIndustry: "HR & Workforce Management",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "REST APIs", "Tailwind CSS"],
    thumbnailUrl: "/images/projects/hrms-calendar.png",
    liveUrl: "/portfolio/hrms-workforce-management",
    isFeatured: true,
    isConcept: false,
    platform: "Web & Cloud",
    features: [
      "Attendance punch-in, punch-out, and break duration tracking",
      "Employee directory & department administration",
      "Self-service leave requests and approval workflows",
      "Shift assignment and scheduling management",
      "Role-based access control (Admin, HR, Manager, Employee)",
      "Attendance summaries and reporting exports",
    ],
  },

  // 3. RAG-Based E-Commerce Application
  {
    slug: "rag-ecommerce-assistant",
    title: "RAG-Based E-Commerce Knowledge Application",
    tagline: "Intelligent product catalog discovery and contextual customer query answering with vector search",
    description:
      "An intelligent e-commerce application incorporating retrieval-augmented generation (RAG) to provide grounded answers to customer product inquiries, specifications, warranty questions, and contextual catalog recommendations.",
    category: "ai-solutions",
    projectType: "AI-Powered Web Application",
    clientIndustry: "E-Commerce & AI Solutions",
    technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "Vector Embeddings", "MongoDB", "Node.js"],
    thumbnailUrl: "/images/projects/smartsplit-ai-chat.png",
    liveUrl: "/portfolio/rag-ecommerce-assistant",
    isFeatured: true,
    isConcept: false,
    platform: "Web & Cloud",
    features: [
      "Vector search indexing across structured product catalogs",
      "Contextual query answering grounded strictly in product documentation",
      "E-commerce product catalog browsing and filtering",
      "Interactive customer AI conversational assistant widget",
      "Reduced hallucination risk through similarity thresholding",
    ],
  },

  // 4. Real-Time Chat Application
  {
    slug: "realtime-chat-collaboration",
    title: "Real-Time Collaboration & Direct Chat Web App",
    tagline: "Instant member-to-member messaging, channels, and presence indicators with WebSockets",
    description:
      "A full-stack real-time communication platform engineered with Node.js and WebSockets providing instant message delivery, room channels, user online presence, and message persistence in MongoDB.",
    category: "web-development",
    projectType: "Full-Stack Web Application",
    clientIndustry: "Communication & Real-Time Web",
    technologies: ["React", "Node.js", "Express", "WebSockets", "MongoDB", "Tailwind CSS"],
    thumbnailUrl: "/images/smartsplit/chat.jpg",
    liveUrl: "/portfolio/realtime-chat-collaboration",
    isFeatured: true,
    isConcept: false,
    platform: "Responsive Web",
    features: [
      "Low-latency duplex communication via WebSockets",
      "Direct one-on-one and group conversation channels",
      "Real-time user presence and typing indicators",
      "Message history persistence and search",
    ],
  },

  // 5. Automated Certificate Generator
  {
    slug: "certificate-generator-system",
    title: "Automated Certificate Generation System",
    tagline: "Custom template selection, dynamic recipient data binding, and instant export",
    description:
      "A productivity web tool allowing organizations and educators to select certificate templates, import or input recipient lists, dynamically position typography, and generate verified PDF/image certificates in batches.",
    category: "web-development",
    projectType: "Productivity Web Tool",
    clientIndustry: "Education & Productivity",
    technologies: ["React", "TypeScript", "Node.js", "Canvas API", "Tailwind CSS"],
    thumbnailUrl: "/images/smartsplit/dashboard.jpg",
    liveUrl: "/portfolio/certificate-generator-system",
    isFeatured: false,
    isConcept: false,
    platform: "Responsive Web",
    features: [
      "Customizable certificate layout & format selection",
      "Dynamic data field binding for student names & courses",
      "Client-side instant preview with canvas rendering",
      "One-click high-resolution PDF/image export",
    ],
  },
];
