"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

interface CaseStudyItem {
  slug: string;
  title: string;
  tagline: string;
  category: "all" | "web" | "enterprise" | "ai";
  categoryLabel: string;
  readTime: string;
  projectOrigin: string;
  highlights: string[];
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    slug: "smartsplit-expense-architecture",
    title: "SmartSplit: Engineering Group Expense Calculations & Settlements",
    tagline: "Multilateral ledger balancing, settlement requests, administrative oversight, and AI assistant integration.",
    category: "web",
    categoryLabel: "Full-Stack Web & Mobile",
    readTime: "6 min read",
    projectOrigin: "Mobiloitte Internship Project",
    highlights: [
      "Real-time group ledger balance calculations",
      "Administrative settlement request verification",
      "Integrated AI chatbot for contextual queries",
    ],
  },
  {
    slug: "hrms-workforce-architecture",
    title: "HRMS: Scalable Workforce & Attendance Management",
    tagline: "Punch-in/punch-out attendance timestamps, break logs, role-based RBAC, and leave approval workflows.",
    category: "enterprise",
    categoryLabel: "Enterprise Systems",
    readTime: "5 min read",
    projectOrigin: "Mobiloitte Internship Project",
    highlights: [
      "Tamper-resistant daily punch-in/out timestamps",
      "Role-based access control (Admin, HR, Employee)",
      "Automated leave application and approval queue",
    ],
  },
  {
    slug: "conversational-ai-guardrails",
    title: "RAG Architecture: Grounded Product Knowledge & Vector Search",
    tagline: "Dense vector search embeddings, semantic similarity thresholds, and hallucination-free catalog discovery.",
    category: "ai",
    categoryLabel: "AI & Automation",
    readTime: "7 min read",
    projectOrigin: "AI Engineering & MERN Stack",
    highlights: [
      "High-dimensional vector search embeddings",
      "Strict grounding in indexed documentation",
      "Low-latency streaming responses to client",
    ],
  },
];

const FILTERS = [
  { id: "all", label: "All Technical Breakdowns" },
  { id: "web", label: "Web Applications" },
  { id: "enterprise", label: "Enterprise Systems" },
  { id: "ai", label: "AI & RAG Solutions" },
];

export function CaseStudiesGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStudies =
    activeFilter === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="max-w-2xl text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-gradient-hero">
              Technical Documentation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
              Architectural Breakdowns &amp; Solutions
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
              Explore in-depth engineering breakdowns covering real technical problems, MongoDB schema designs, and implemented full-stack solutions.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="mt-6 md:mt-0 inline-flex items-center text-sm font-semibold text-neutral-300 hover:text-white transition-colors group"
          >
            <span>Browse all breakdowns</span>
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center space-x-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === f.id
                  ? "bg-white text-neutral-950 shadow-lg shadow-white/10"
                  : "bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/6"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group rounded-2xl glass-panel p-7 transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-950/20 hover:-translate-y-1 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-0.5 rounded-full">
                    {study.categoryLabel}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">·</span>
                  <span className="text-xs text-neutral-400">{study.readTime}</span>
                </div>

                <span className="text-[11px] font-mono text-purple-300 block mb-2">
                  {study.projectOrigin}
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
                  {study.tagline}
                </p>

                <div className="space-y-1.5 mb-6 pt-3 border-t border-white/6">
                  {study.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-neutral-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-purple-400 group-hover:text-pink-400 transition-colors pt-2 border-t border-white/6">
                <BookOpen className="mr-1.5 h-3.5 w-3.5" />
                <span>Read technical breakdown</span>
                <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
