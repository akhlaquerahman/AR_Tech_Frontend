import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/features/portfolio/components/project-card";
import { ProjectItem } from "@/features/portfolio/types";

const FEATURED_PROJECTS: ProjectItem[] = [
  {
    slug: "nexus-analytics-saas",
    title: "Nexus Analytics Platform",
    tagline: "Real-time AI-powered analytics dashboard for digital businesses",
    description: "Enterprise SaaS platform providing streaming telemetry, custom reports, and predictive growth modeling.",
    category: "saas",
    clientIndustry: "FinTech & Business Intelligence",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    thumbnailUrl: "/images/projects/nexus-analytics.webp",
    liveUrl: "https://demo.nexus.artech.dev",
    isFeatured: true,
  },
  {
    slug: "aurora-ai-support-agent",
    title: "Aurora Conversational AI",
    tagline: "Autonomous customer intelligence and support pipeline",
    description: "Context-aware conversational AI assistant integrated with internal documentation and CRM pipelines.",
    category: "ai-solutions",
    clientIndustry: "E-Commerce & Support",
    technologies: ["Node.js", "Express", "OpenAI API", "Vector Embeddings", "TypeScript"],
    thumbnailUrl: "/images/projects/aurora-ai.webp",
    liveUrl: "https://demo.aurora.artech.dev",
    isFeatured: true,
  },
  {
    slug: "crestview-capital-portal",
    title: "Crestview Capital Corporate Portal",
    tagline: "Ultra-high-performance investment banking web platform",
    description: "Modern corporate web presence featuring dynamic market reports, secure inquiries, and sub-second load times.",
    category: "web-development",
    clientIndustry: "Private Equity & Finance",
    technologies: ["Next.js", "React Server Components", "Tailwind CSS", "Framer Motion"],
    thumbnailUrl: "/images/projects/crestview.webp",
    liveUrl: "https://demo.crestview.artech.dev",
    isFeatured: true,
  },
];

export function PortfolioPreview() {
  return (
    <section className="py-24 border-t border-white/[0.08] relative">
      <div className="container max-w-6xl px-4 sm:px-8 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-gradient-hero">Selected Work</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
              Featured Case Studies & Systems
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-neutral-300 hover:text-white transition-colors"
          >
            <span>Explore full portfolio</span>
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
