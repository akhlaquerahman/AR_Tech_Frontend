import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata = constructMetadata({
  title: "Technical Case Studies & Engineering Breakdowns",
  description: "In-depth technical case studies documenting how AR Tech solves challenging full-stack engineering problems.",
});

const CASE_STUDIES = [
  {
    slug: "smartsplit-expense-architecture",
    title: "SmartSplit: Engineering Group Expense Calculations & Settlements",
    tagline: "Multilateral ledger balancing, settlement requests, administrative oversight, and AI assistant integration.",
    category: "Full-Stack Web & Mobile",
    readTime: "6 min read",
  },
  {
    slug: "hrms-workforce-architecture",
    title: "HRMS: Scalable Workforce & Attendance Management",
    tagline: "Punch-in/punch-out attendance timestamps, break logs, role-based RBAC, and leave approval workflows.",
    category: "Enterprise Systems",
    readTime: "5 min read",
  },
  {
    slug: "conversational-ai-guardrails",
    title: "RAG Architecture: Grounded Product Knowledge & Vector Search",
    tagline: "Dense vector search embeddings, semantic similarity thresholds, and hallucination-free catalog discovery.",
    category: "AI & RAG Solutions",
    readTime: "7 min read",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-5xl px-4 sm:px-8 mx-auto">
        <div className="max-w-2xl mb-16 text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full">
            Knowledge &amp; Engineering
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Technical Case Studies
          </h1>
          <p className="text-neutral-300 text-base leading-relaxed">
            Detailed engineering breakdowns and architectural decisions behind our real software systems and internship deliverables.
          </p>
        </div>

        <div className="space-y-6 text-left">
          {CASE_STUDIES.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group block rounded-2xl glass-panel p-8 transition-all hover:border-purple-500/40 hover:-translate-y-0.5 border border-white/8"
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">
                  {study.category}
                </span>
                <span className="text-xs text-neutral-500">·</span>
                <span className="text-xs text-neutral-400">{study.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                {study.title}
              </h2>
              <p className="text-sm text-neutral-300 mb-4 leading-relaxed">{study.tagline}</p>
              <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-purple-400 group-hover:text-pink-400 transition-colors">
                <BookOpen className="mr-1.5 h-3.5 w-3.5" />
                <span>Read detailed breakdown</span>
                <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
