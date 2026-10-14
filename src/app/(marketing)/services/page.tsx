import { constructMetadata } from "@/lib/seo";
import { ServiceCard } from "@/features/services/components/service-card";
import { ServiceItem } from "@/features/services/types";

export const metadata = constructMetadata({
  title: "Services & Studio Capabilities",
  description: "Explore the enterprise engineering services offered by AR Tech: web development, SaaS, AI solutions, automation, and UI/UX.",
});

const SERVICES: ServiceItem[] = [
  {
    slug: "web-development",
    title: "Custom Web Applications & SaaS",
    shortDescription: "High-performance full-stack web platforms and cloud-native software built with modern architectures.",
    description: "End-to-end web engineering ranging from responsive web portals to mission-critical SaaS architectures.",
    iconName: "Code2",
    features: ["Next.js & React architectures", "Node.js & Express RESTful APIs", "Cloud deployment & CI/CD", "Database architecture"],
    deliverables: ["Full-stack web application", "Interactive UI/UX", "API documentation", "Deployment scripts"],
    isActive: true,
    order: 1,
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions & Intelligent Automation",
    shortDescription: "Custom AI agents, intelligent workflow automation, and custom chatbot integrations for enterprises.",
    description: "Empowering businesses through tailored machine learning workflows, automated pipelines, and conversational AI.",
    iconName: "Bot",
    features: ["Custom AI assistants & bots", "Workflow automation", "Document processing", "API integrations"],
    deliverables: ["Trained chatbot or agent", "Integration webhooks", "Admin monitoring", "User guides"],
    isActive: true,
    order: 2,
  },
  {
    slug: "business-websites",
    title: "Professional Business Websites",
    shortDescription: "Conversion-optimized, ultra-fast corporate websites and dynamic landing pages tailored for technology brands.",
    description: "Modern, SEO-optimized digital presence crafted to establish credibility and capture high-intent inbound leads.",
    iconName: "Globe",
    features: ["SEO & metadata optimization", "Responsive across all screens", "Sub-second load times", "Lead capture forms"],
    deliverables: ["Production website", "CMS integration option", "Analytics setup", "Domain & SSL configuration"],
    isActive: true,
    order: 3,
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Digital Product Design",
    shortDescription: "User-centered interface design, comprehensive design systems, and rapid interactive prototypes.",
    description: "Transforming complex product ideas into sleek, intuitive, and delightful user experiences.",
    iconName: "Layout",
    features: ["Wireframing & user journeys", "Design systems & component tokens", "Interactive prototypes", "Developer handoff"],
    deliverables: ["Figma source files", "Design system specs", "Clickable prototype", "Asset exports"],
    isActive: true,
    order: 4,
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-6xl px-4 sm:px-8 mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-primary">Capabilities</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mt-3 mb-4">
            Technical Capabilities & Engineering Services
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Tailored digital solutions engineered with precision, modern full-stack architectures, and future scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
