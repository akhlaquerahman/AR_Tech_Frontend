import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";

interface CaseStudyDetailPageProps {
  params: Promise<{ slug: string }>;
}

const CASE_STUDY_MAP: Record<
  string,
  {
    title: string;
    category: string;
    projectTag: string;
    date: string;
    readTime: string;
    summary: string;
    technologies: string[];
    sections: { heading: string; content: string }[];
  }
> = {
  "smartsplit-expense-architecture": {
    title: "SmartSplit: Engineering Group Expense Calculations & Settlements",
    category: "Full-Stack Web & Mobile",
    projectTag: "Mobiloitte Internship Project",
    date: "2024",
    readTime: "6 min read",
    summary:
      "A technical walkthrough of how the SmartSplit application tracks group expenses, calculates net balances between participants, verifies settlement requests, and integrates an AI chatbot for contextual expense support.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "REST APIs"],
    sections: [
      {
        heading: "1. The Challenge: Multilateral Group Expense Balances",
        content:
          "In shared living and group trips, multiple members incur expenses on behalf of varying subsets of people. Without a centralized ledger algorithm, calculating who owes whom requires chaotic back-and-forth calculations. Our objective was to automate balance tracking into clear debtor/creditor relationships.",
      },
      {
        heading: "2. Full-Stack Ledger Architecture",
        content:
          "The backend was engineered using Node.js, Express, and MongoDB. Each expense entry records the payer, total amount, category, and participating split members. Aggregation pipelines calculate running net balances in real time, preventing duplicate adjustments.",
      },
      {
        heading: "3. Administrative Oversight & AI Assistant Integration",
        content:
          "To assist users, we integrated an AI assistant interface that can parse user questions regarding group spending history, balance breakdowns, and expense categorization. Administrative controls allow group managers to approve settlements and reconcile balances seamlessly.",
      },
    ],
  },
  "hrms-workforce-architecture": {
    title: "HRMS: Engineering Scalable Workforce & Attendance Management",
    category: "Enterprise Systems",
    projectTag: "Mobiloitte Internship Project",
    date: "2024",
    readTime: "5 min read",
    summary:
      "An architectural overview of the HRMS web application developed at Mobiloitte Technology, managing employee attendance timestamps, break logs, role-based governance, and leave approval workflows.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "RESTful APIs", "Tailwind CSS"],
    sections: [
      {
        heading: "1. The Challenge: Accurate Attendance Tracking & Roles",
        content:
          "Workforce operations require tamper-resistant timestamping for punch-ins, punch-outs, and intermittent meal or tea breaks. Additionally, sensitive company information like employee salaries and performance notes must be protected through strict role-based access control.",
      },
      {
        heading: "2. Role-Based Access Control & MongoDB Schema Design",
        content:
          "We engineered modular MongoDB schemas linking employees to departments and assigned shifts. JWT-backed authorization middleware ensures that general employees only access their personal timesheets and leave requests, while managers and HR personnel can review department queues.",
      },
      {
        heading: "3. Self-Service Leave & Attendance Reporting",
        content:
          "The frontend was crafted with React, TypeScript, and Tailwind CSS to ensure instantaneous responsiveness. Employees can submit leave requests with date pickers, track approval status in real-time, and view consolidated monthly attendance summaries.",
      },
    ],
  },
  "conversational-ai-guardrails": {
    title: "RAG Architecture: Grounded Product Knowledge & Vector Search",
    category: "AI & Automation",
    projectTag: "AI & Full-Stack Engineering",
    date: "2024",
    readTime: "7 min read",
    summary:
      "How retrieval-augmented generation (RAG) and dense vector embeddings enable e-commerce and customer-facing web applications to answer detailed catalog queries without model hallucinations.",
    technologies: ["Python", "FastAPI", "Vector Embeddings", "Next.js", "TypeScript", "MongoDB"],
    sections: [
      {
        heading: "1. The Hallucination Risk in E-Commerce",
        content:
          "Using off-the-shelf generative models for product specifications or policies frequently results in hallucinations. In an e-commerce context, a fabricated return policy or false compatibility claim damages trust immediately.",
      },
      {
        heading: "2. Dense Vector Embeddings & Similarity Thresholds",
        content:
          "We indexed product manuals, warranties, and catalog specifications into high-dimensional vector embeddings. When a customer poses a question, cosine similarity searches extract only the top relevant documentation snippets to augment the prompt, with confidence thresholds preventing ungrounded speculation.",
      },
      {
        heading: "3. Streaming Delivery & Frontend Integration",
        content:
          "To provide a responsive user experience, backend responses stream chunk-by-chunk to the Next.js client interface, reducing perceived latency and providing instant conversational feedback.",
      },
    ],
  },
};

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const study = CASE_STUDY_MAP[slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-4xl px-4 sm:px-8 mx-auto">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-sm font-semibold text-neutral-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to all case studies</span>
        </Link>

        {/* Header Card */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 mb-12 border border-white/10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full">
              {study.category}
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300">
              {study.projectTag}
            </span>
            <span className="text-xs text-neutral-400 flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {study.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {study.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
            {study.summary}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            {study.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-neutral-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 mb-16">
          {study.sections.map((section, idx) => (
            <div key={idx} className="rounded-2xl glass-panel p-8 text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {section.heading}
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl glass-panel-glow p-8 text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-2">Discuss your technical architecture</h3>
          <p className="text-sm text-neutral-300 max-w-md mb-6 leading-relaxed">
            Need an experienced MERN or AI-integrated full stack developer for your next project? Let&apos;s connect.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-200 transition-all shadow-lg"
          >
            <span>Discuss Your Project</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
