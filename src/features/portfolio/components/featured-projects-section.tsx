import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, CheckCircle2, Smartphone, Monitor, Cpu } from "lucide-react";

interface RealProject {
  title: string;
  badge: string;
  projectType: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  contribution: string;
  icon: React.ElementType;
  imgSrc?: string;
  demoUrl?: string;
  caseStudySlug: string;
  statusTag: string;
}

const REAL_PROJECTS: RealProject[] = [
  {
    title: "SmartSplit App",
    badge: "Consumer FinTech",
    projectType: "Mobile Application (React Native)",
    statusTag: "Working Prototype",
    problem:
      "Manual expense tracking within travel groups and roommates often leads to confusion, disputed balances, and slow, messy payment settlements.",
    solution:
      "A cross-platform mobile application providing automated receipt scanning, instant group ledger balancing with cycle-minimization algorithms, and multi-currency tracking.",
    features: [
      "AI receipt parsing & automatic split allocation",
      "O(V+E) group debt graph minimization",
      "Multi-currency conversion & offline SQLite sync",
      "UPI & card payment integration",
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "OCR AI"],
    contribution: "Full-stack mobile design, client UI, debt settling algorithm & backend REST API",
    icon: Smartphone,
    imgSrc: "/images/projects/smartsplit-dashboard-clean.png",
    demoUrl: "/portfolio/smartsplit-expense-settlement",
    caseStudySlug: "smartsplit-expense-settlement",
  },
  {
    title: "HRMS Workforce App",
    badge: "Enterprise Operations",
    projectType: "Workforce & Attendance System",
    statusTag: "Mobiloitte Internship",
    problem:
      "Distributed businesses and on-site engineering teams struggle with manual attendance tracking, punch-in/out timestamps, and fragmented leave request queues.",
    solution:
      "A human resource management portal featuring daily punch-in/punch-out tracking, break duration logs, shift scheduling, and self-service leave approval workflows.",
    features: [
      "Punch-in, punch-out, and break duration timestamps",
      "Self-service employee leave requests & manager queues",
      "Employee directory & department administrative controls",
      "Role-based access control (Admin, HR, Manager, Employee)",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "REST APIs", "Tailwind CSS"],
    contribution: "Full-stack development: attendance schemas, leave workflows & responsive UI",
    icon: Monitor,
    imgSrc: "/images/projects/hrms-calendar-clean.png",
    demoUrl: "/portfolio/hrms-workforce-management",
    caseStudySlug: "hrms-workforce-management",
  },
  {
    title: "SmartSplit AI Assistant & Knowledge",
    badge: "AI & Automation",
    projectType: "AI Assistant & RAG Q&A",
    statusTag: "Working Implementation",
    problem:
      "Group expense settlement questions, balance reconciliation, and receipt inquiries require instant, contextual guidance without manual ledger hunting.",
    solution:
      "An intelligent conversational assistant and RAG Q&A system integrated into SmartSplit that answers expense queries, explains balances, and automates settlement flows.",
    features: [
      "Conversational AI assistant with dev mode integration",
      "Quick action chips: Create Group, Add Expense, Reports & Analytics",
      "Balance queries and recent expense breakdowns",
      "Multi-modal audio voice input and document attachment support",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "AI Assistant", "Tailwind CSS"],
    contribution: "AI chat drawer interface, action chips dispatch & backend conversational endpoints",
    icon: Cpu,
    imgSrc: "/images/projects/smartsplit-ai-chat-clean.png",
    demoUrl: "/portfolio/smartsplit-expense-settlement",
    caseStudySlug: "smartsplit-expense-settlement",
  },
];

export function FeaturedProjectsSection() {
  return (
    <section className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-gradient-hero">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
              Real Projects &amp; Systems
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
              Explore concrete software engineered by AR Tech — solving real problems across FinTech, workforce management, and enterprise AI automation.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="mt-6 md:mt-0 inline-flex items-center text-sm font-semibold text-neutral-300 hover:text-white transition-colors group"
          >
            <span>View all projects in portfolio</span>
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {REAL_PROJECTS.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl glass-panel p-6 sm:p-7 flex flex-col justify-between text-left transition-all duration-300 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-950/20 hover:-translate-y-1.5 group"
              >
                <div>
                  {/* Visual Preview / Thumbnail Area */}
                  <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-neutral-900/90 border border-white/10 mb-6 flex items-center justify-center">
                    {project.imgSrc ? (
                      <Image
                        src={project.imgSrc}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 380px"
                        className={`${
                          idx === 2 ? "object-contain bg-neutral-950 p-2" : "object-cover object-top"
                        } transition-transform duration-500 group-hover:scale-105`}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-6 text-center">
                        <Icon className="h-10 w-10 text-pink-400 mb-2 opacity-80" />
                        <span className="text-xs font-mono text-neutral-400">Interactive Preview</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10.5px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 border border-white/15 text-pink-300 backdrop-blur-md">
                        {project.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {project.statusTag}
                      </span>
                    </div>
                  </div>

                  {/* Title & Type */}
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-pink-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-purple-400 font-medium mt-0.5">
                      {project.projectType}
                    </p>
                  </div>

                  {/* Problem & Solution */}
                  <div className="space-y-2.5 mb-5 text-xs text-neutral-300 leading-relaxed">
                    <p>
                      <strong className="text-neutral-200">The Problem:</strong>{" "}
                      <span className="text-neutral-400">{project.problem}</span>
                    </p>
                    <p>
                      <strong className="text-neutral-200">The Solution:</strong>{" "}
                      <span className="text-neutral-300">{project.solution}</span>
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-white/6">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                      Key Capabilities:
                    </span>
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-neutral-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-pink-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Contribution */}
                  <div className="mb-5 text-xs text-neutral-400 pt-2 border-t border-white/6">
                    <span className="font-semibold text-neutral-300">Developer Role:</span>{" "}
                    {project.contribution}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/6"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-white/8 text-xs font-semibold">
                  <Link
                    href={`/case-studies/${project.caseStudySlug}`}
                    className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors group-hover:underline"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>

                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      className="inline-flex items-center text-neutral-400 hover:text-white transition-colors"
                    >
                      <span>Explore Demo</span>
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
