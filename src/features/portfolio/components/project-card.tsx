import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "../types";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl glass-panel overflow-hidden transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-950/20 hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-1 rounded-full">
            {project.category.replace("-", " ")}
          </span>
          <span className="text-xs text-neutral-400">{project.clientIndustry}</span>
        </div>
        <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-pink-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-400 mb-4 leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-neutral-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center text-sm font-medium text-neutral-300 hover:text-white transition-colors"
        >
          <span>View case study</span>
          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-pink-400" />
        </Link>
      </div>
    </div>
  );
}
