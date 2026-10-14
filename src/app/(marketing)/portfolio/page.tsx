import { constructMetadata } from "@/lib/seo";
import { ProjectCard } from "@/features/portfolio/components/project-card";
import { PORTFOLIO_PROJECTS } from "@/features/portfolio/data";

export const metadata = constructMetadata({
  title: "Portfolio & Engineering Case Studies",
  description: "Browse featured web platforms, SaaS applications, and AI integrations built by AR Tech.",
});

export default function PortfolioPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-6xl px-4 sm:px-8 mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-accent">Portfolio</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mt-3 mb-4">
            Engineered Systems & Live Demonstrations
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Case studies, architectural implementations, and digital platforms delivered for forward-thinking clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
