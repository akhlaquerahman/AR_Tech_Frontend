import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Layers, User, Briefcase } from "lucide-react";

interface PortfolioDetailPageProps {
  params: Promise<{ slug: string }>;
}

const PROJECT_DETAILS: Record<
  string,
  {
    title: string;
    tagline: string;
    description: string;
    category: string;
    industry: string;
    statusTag: string;
    context: string;
    developerRole: string;
    technologies: string[];
    challenges: string[];
    solutions: string[];
    features: string[];
    liveUrl?: string;
    githubUrl?: string;
  }
> = {
  "smartsplit-expense-settlement": {
    title: "SmartSplit — Group Expense Management & Settlement",
    tagline: "Track shared group expenses, compute net balances, and streamline settlements with AI assistance",
    description:
      "A complete group expense management solution engineered to eliminate ledger disputes in shared travel, roommate living, and team budgets. Features group expense recording, net balance and settlement calculation, settlement requests, administrative controls, and an integrated AI assistant.",
    category: "Full-Stack Web & Mobile App",
    industry: "Finance & Expense Management",
    statusTag: "Internship & Featured Project",
    context: "Developed at Mobiloitte Technology as part of full-stack software development work.",
    developerRole: "Full-Stack Developer (MERN Stack: React/Next.js, Node.js, Express, MongoDB)",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "REST APIs", "Tailwind CSS"],
    challenges: [
      "Calculating multilateral group balances accurately when multiple members make concurrent payments across varying split percentages.",
      "Designing an intuitive settlement flow that makes it crystal clear who owes whom without confusing members with excessive transaction cycles.",
      "Providing quick contextual assistance for parsing and querying group expense history.",
    ],
    solutions: [
      "Implemented structured ledger balancing algorithms calculating net debtor and creditor positions transparently.",
      "Engineered an administrative review and settlement request verification flow with clear status states.",
      "Integrated an AI assistant to assist users with expense categorization questions and group ledger balance overviews.",
    ],
    features: [
      "Group expense recording with category tagging and split allocation",
      "Real-time balance and net debt settlement calculations",
      "Settlement request verification and administrative controls",
      "AI assistant integration for receipt queries and balance summaries",
      "Responsive, mobile-friendly interface for on-the-go tracking",
    ],
    liveUrl: "/portfolio/smartsplit-expense-settlement",
  },
  "hrms-workforce-management": {
    title: "HRMS — Workforce & Attendance Management System",
    tagline: "Employee lifecycle tracking, punch-in/punch-out attendance, leaves, and shift management",
    description:
      "A human resource management system built during a 5-month software engineering internship at Mobiloitte Technology. Designed for streamlined workforce operations, employee and department administration, punch-in/punch-out attendance, break logs, role-based governance, and attendance reporting.",
    category: "Enterprise Web Application",
    industry: "HR & Workforce Management",
    statusTag: "Internship Project",
    context: "Engineered at Mobiloitte Technology during a 5-month Software Engineer Internship.",
    developerRole: "Full-Stack Software Engineer Intern (Frontend & Backend integration)",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "RESTful APIs", "Tailwind CSS"],
    challenges: [
      "Accurately capturing daily employee attendance timestamps including multiple breaks, punch-ins, and punch-outs without race conditions.",
      "Enforcing strict role-based access control (RBAC) across Administrators, HR Personnel, Managers, and general Employees.",
      "Consolidating fragmented leave requests into a unified managerial approval queue.",
    ],
    solutions: [
      "Engineered clean database schemas in MongoDB tracking punch intervals, total working hours, and overtime metrics reliably.",
      "Implemented JWT-based authentication with role-based middleware safeguarding sensitive salary and employee records.",
      "Created an intuitive self-service portal for employees to submit leave requests and managers to approve with a single click.",
    ],
    features: [
      "Attendance punch-in, punch-out, and break duration tracking",
      "Employee directory and department administration",
      "Self-service leave requests with manager approval workflows",
      "Shift assignment and scheduling management",
      "Role-based access control (Admin, HR, Manager, Employee)",
      "Attendance summaries and reporting exports",
    ],
    liveUrl: "/portfolio/hrms-workforce-management",
  },
  "rag-ecommerce-assistant": {
    title: "RAG-Based E-Commerce Knowledge Application",
    tagline: "Intelligent product catalog discovery and contextual customer query answering with vector search",
    description:
      "An intelligent e-commerce application incorporating retrieval-augmented generation (RAG) to provide grounded answers to customer product inquiries, specifications, warranty questions, and contextual catalog recommendations.",
    category: "AI-Powered Web Application",
    industry: "E-Commerce & AI Solutions",
    statusTag: "Internship & Portfolio Project",
    context: "Developed at Mobiloitte Technology focusing on AI-enhanced search and catalog intelligence.",
    developerRole: "Full-Stack & AI Integration Developer",
    technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "Vector Embeddings", "MongoDB", "Node.js"],
    challenges: [
      "Preventing generic LLMs from hallucinating product specifications, stock levels, or warranty terms when answering customer queries.",
      "Maintaining responsive search and chat latency when indexing extensive catalog documents into vector embeddings.",
    ],
    solutions: [
      "Configured vector search embeddings with strict similarity thresholding, restricting answers exclusively to indexed product documentation.",
      "Implemented streaming response chunks to provide instant feedback as responses are generated.",
      "Built a seamless fallback mechanism to escalate unverified queries gracefully.",
    ],
    features: [
      "Vector search indexing across structured product catalogs",
      "Contextual query answering grounded strictly in product documentation",
      "E-commerce product catalog browsing and filtering",
      "Interactive customer AI conversational assistant widget",
      "Reduced hallucination risk through similarity thresholding",
    ],
    liveUrl: "/portfolio/rag-ecommerce-assistant",
  },
  "realtime-chat-collaboration": {
    title: "Real-Time Collaboration & Direct Chat Web App",
    tagline: "Instant member-to-member messaging, channels, and presence indicators with WebSockets",
    description:
      "A full-stack real-time communication platform engineered with Node.js and WebSockets providing instant message delivery, room channels, user online presence, and message persistence in MongoDB.",
    category: "Full-Stack Web Application",
    industry: "Communication & Real-Time Web",
    statusTag: "Personal Project",
    context: "Developed as a personal engineering project to master duplex WebSocket architecture.",
    developerRole: "Full-Stack Developer",
    technologies: ["React", "Node.js", "Express", "WebSockets", "MongoDB", "Tailwind CSS"],
    challenges: [
      "Managing live socket connections, reconnects, and message delivery guarantees across multiple active browser tabs.",
      "Tracking real-time user typing indicators and online presence without flooding the server with state broadcasts.",
    ],
    solutions: [
      "Engineered room-based WebSocket broadcasting in Node.js with heartbeat ping/pong connection monitoring.",
      "Stored conversation transcripts persistently in MongoDB with indexing for fast chronological pagination.",
    ],
    features: [
      "Low-latency duplex communication via WebSockets",
      "Direct one-on-one and group conversation channels",
      "Real-time user presence and typing indicators",
      "Message history persistence and search",
    ],
    liveUrl: "/portfolio/realtime-chat-collaboration",
  },
  "certificate-generator-system": {
    title: "Automated Certificate Generation System",
    tagline: "Custom template selection, dynamic recipient data binding, and instant export",
    description:
      "A productivity web tool allowing organizations and educators to select certificate templates, import or input recipient lists, dynamically position typography, and generate verified PDF/image certificates in batches.",
    category: "Productivity Web Tool",
    industry: "Education & Productivity",
    statusTag: "Personal Project",
    context: "Built to automate repetitive certificate issuance for academic and professional workshops.",
    developerRole: "Frontend & Full-Stack Developer",
    technologies: ["React", "TypeScript", "Node.js", "Canvas API", "Tailwind CSS"],
    challenges: [
      "Rendering high-DPI typography and vector graphics consistently across different screen densities prior to export.",
      "Handling batch generation of multiple certificates efficiently in the browser without UI freezes.",
    ],
    solutions: [
      "Leveraged HTML5 Canvas 2D rendering with dynamic coordinate mapping and template scaling.",
      "Enabled instant live preview and direct high-resolution image/PDF export.",
    ],
    features: [
      "Customizable certificate layout & format selection",
      "Dynamic data field binding for student names & courses",
      "Client-side instant preview with canvas rendering",
      "One-click high-resolution PDF/image export",
    ],
    liveUrl: "/portfolio/certificate-generator-system",
  },
};

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-5xl px-4 sm:px-8 mx-auto">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-sm font-semibold text-neutral-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to all projects</span>
        </Link>

        {/* Top Header Card */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 mb-12 border border-white/10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-300">
              {project.statusTag}
            </span>
            <span className="text-xs text-neutral-400">· {project.industry}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mb-8">
            {project.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 text-xs">
            <div className="flex items-center space-x-2 text-neutral-300">
              <User className="h-4 w-4 text-pink-400 flex-shrink-0" />
              <span>
                <strong className="text-white">Role:</strong> {project.developerRole}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-neutral-300">
              <Briefcase className="h-4 w-4 text-purple-400 flex-shrink-0" />
              <span>
                <strong className="text-white">Context:</strong> {project.context}
              </span>
            </div>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="rounded-2xl glass-panel p-6 mb-12">
          <h2 className="text-xs uppercase tracking-widest font-bold text-neutral-400 mb-3">
            Technology Stack &amp; Libraries
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features & Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Key Implemented Features */}
          <div className="rounded-2xl glass-panel p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <Layers className="h-5 w-5 text-pink-400" />
              <span>Implemented Features</span>
            </h2>
            <div className="space-y-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-sm text-neutral-300">
                  <CheckCircle2 className="h-4 w-4 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges & Solutions */}
          <div className="rounded-2xl glass-panel p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              Architectural Highlights
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
              {project.challenges.map((challenge, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <p className="font-semibold text-neutral-200">
                    <span className="text-pink-400 mr-1.5">Focus {idx + 1}:</span>
                    {challenge}
                  </p>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    <span className="text-emerald-400 font-medium mr-1">Solution:</span>
                    {project.solutions[idx]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl glass-panel-glow p-8 text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-2">Interested in building a similar solution?</h3>
          <p className="text-sm text-neutral-300 max-w-md mb-6 leading-relaxed">
            Let&apos;s discuss your functional requirements, technical architecture, and project timeline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-200 transition-all shadow-lg"
          >
            <span>Initiate Project Consultation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
