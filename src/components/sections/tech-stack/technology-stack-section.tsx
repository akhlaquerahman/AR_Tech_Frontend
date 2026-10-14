import React from "react";
import {
  Code2,
  Server,
  Database,
  Cpu,
  Wrench,
  CheckCircle2,
} from "lucide-react";

interface TechItem {
  name: string;
  badge?: string;
}

interface TechCategory {
  title: string;
  icon: React.ElementType;
  description: string;
  accent: string;
  skills: TechItem[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    description: "Responsive, type-safe, sub-second web interfaces",
    accent: "text-blue-400 border-blue-500/20 bg-blue-500/10",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    description: "High-throughput APIs and reliable architectures",
    accent: "text-purple-400 border-purple-500/20 bg-purple-500/10",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "REST APIs" },
      { name: "WebSocket Streams" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    description: "Optimized schemas, indexing, and data durability",
    accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Redis Caching" },
    ],
  },
  {
    title: "AI & Workflow Automation",
    icon: Cpu,
    description: "Contextual RAG, vector search, and LLM integrations",
    accent: "text-pink-400 border-pink-500/20 bg-pink-500/10",
    skills: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "LLM Integrations" },
      { name: "RAG Pipelines" },
      { name: "Vector Search" },
    ],
  },
  {
    title: "Tools & Delivery",
    icon: Wrench,
    description: "Disciplined version control, containers, and QA",
    accent: "text-amber-400 border-amber-500/20 bg-amber-500/10",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Vitest & Testing" },
      { name: "CI/CD Deployment" },
    ],
  },
];

export function TechnologyStackSection() {
  return (
    <section className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-gradient-hero">
            Technology Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
            Built With Modern Technologies
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            We choose reliable technologies that fit your product, performance requirements and long-term goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel p-6 flex flex-col justify-between text-left transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-950/20 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`h-10 w-10 rounded-xl border flex items-center justify-center ${cat.accent}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{cat.title}</h3>
                      <p className="text-xs text-neutral-400">{cat.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/6 hover:border-white/15 text-xs text-neutral-200 transition-colors"
                      >
                        <CheckCircle2 className="h-3 w-3 text-pink-400/80 flex-shrink-0" />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
