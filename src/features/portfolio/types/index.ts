export type ProjectCategory =
  | "web-development"
  | "ai-solutions"
  | "saas"
  | "ui-ux"
  | "mobile-app"
  | "enterprise";

export interface ProjectItem {
  _id?: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  projectType?: string; // e.g. "Mobile App", "SaaS Platform", "AI Engine", "Web App"
  clientIndustry: string;
  technologies: string[];
  thumbnailUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  publishedAt?: string;
  isConcept?: boolean;
  features?: string[];
  platform?: "iOS & Android" | "Web & Cloud" | "Cross-Platform" | "Responsive Web";
}
