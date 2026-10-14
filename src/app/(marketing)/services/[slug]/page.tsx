import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Sparkles, Send } from "lucide-react";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

const SERVICE_DATA: Record<
  string,
  {
    title: string;
    description: string;
    features: string[];
    deliverables: string[];
    targetAudience: string;
  }
> = {
  "web-development": {
    title: "Custom Web Applications & SaaS",
    description:
      "Enterprise full-stack engineering utilizing Next.js App Router, Express, TypeScript, and MongoDB. We craft scalable architectures capable of supporting complex business workflows with zero lag.",
    features: [
      "Modular monolith backend with layered architecture",
      "React Server Components & streaming SSR for instant loads",
      "Tailwind CSS custom design systems with dark-mode tokens",
      "Automated testing pipelines with Vitest and Playwright",
    ],
    deliverables: [
      "Production-ready Next.js / Express codebase",
      "Interactive Swagger OpenAPI documentation",
      "Automated unit & E2E test suite",
      "Dockerized deployment setup & CI/CD workflow",
    ],
    targetAudience: "Startups, scale-ups, and established businesses seeking enterprise web platforms.",
  },
  "ai-solutions": {
    title: "AI Solutions & Intelligent Automation",
    description:
      "Intelligent system automation, custom conversational AI agents, and custom workflow orchestration tailored to optimize operational costs.",
    features: [
      "Context-aware Retrieval-Augmented Generation (RAG)",
      "Autonomous support & workflow agents",
      "Data pipeline automation and document parsing",
      "Safe, privacy-compliant integrations",
    ],
    deliverables: [
      "Custom conversational AI model integration",
      "Webhook and queue processing pipeline",
      "Monitoring dashboard & telemetry",
      "Comprehensive developer and user documentation",
    ],
    targetAudience: "Organizations looking to automate repetitive business workflows and elevate customer experience.",
  },
  "business-websites": {
    title: "Professional Business Websites",
    description:
      "Ultra-fast, conversion-optimized web presences engineered to present corporate authority, engage prospects, and capture qualified inbound inquiries.",
    features: [
      "Sub-second Core Web Vitals optimization",
      "Schema.org structured metadata and SEO best practices",
      "Mobile-first responsive fluid layouts",
      "Direct WhatsApp and CRM lead capture integrations",
    ],
    deliverables: [
      "Modern, custom-designed corporate web experience",
      "Integrated lead capture and analytics",
      "SSL, CDN, and high-availability cloud deployment",
    ],
    targetAudience: "Technology brands, digital agencies, and modern service providers.",
  },
  "ui-ux-design": {
    title: "UI/UX & Digital Product Design",
    description:
      "Human-centered digital product interfaces, modern design systems, and clickable prototypes that bridge product vision with engineering reality.",
    features: [
      "Design systems with Figma tokens and component specs",
      "Wireframing, information architecture, and user journey maps",
      "High-fidelity interactive prototypes",
      "Direct developer handoff specs",
    ],
    deliverables: [
      "Complete Figma design library and source files",
      "Color palette, typography, and spacing tokens",
      "Interactive prototype link for stakeholder demos",
    ],
    targetAudience: "Founders and product managers building new digital ventures from the ground up.",
  },
};

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = SERVICE_DATA[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-4xl px-4 sm:px-8 mx-auto">
        <Link
          href="/services"
          className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all capabilities</span>
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AR Tech Capability Blueprint</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            {service.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl glass-panel p-8">
            <h3 className="text-lg font-bold text-foreground mb-4">Key Technical Features</h3>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-muted-foreground">
                  <CheckCircle2 className="mr-3 h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl glass-panel p-8">
            <h3 className="text-lg font-bold text-foreground mb-4">What We Deliver</h3>
            <ul className="space-y-3">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-muted-foreground">
                  <CheckCircle2 className="mr-3 h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl glass-panel-glow p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div className="mb-6 sm:mb-0 max-w-md">
            <h4 className="text-xl font-bold text-foreground mb-1">Commission this Service</h4>
            <p className="text-xs text-muted-foreground">{service.targetAudience}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/25"
          >
            <span>Inquire for {service.title}</span>
            <Send className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
