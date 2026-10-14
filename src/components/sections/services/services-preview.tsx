import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Cpu,
  Globe2,
  Palette,
  Smartphone,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";

const SERVICES_GRID = [
  {
    icon: Code2,
    title: "Custom Web Applications & SaaS",
    description: "Scalable multi-tenant cloud platforms engineered with Next.js, Node.js, and MongoDB.",
    href: "/services/web-development",
    capabilities: [
      "Next.js App Router & Server Components",
      "High-throughput REST & WebSocket APIs",
      "Role-based multi-tenant security",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "High-performance iOS and Android applications with native fluid gestures and offline sync.",
    href: "/services/mobile-apps",
    capabilities: [
      "Cross-platform React Native & Flutter",
      "Biometric security & geofencing",
      "Offline-first SQLite & push pipelines",
    ],
  },
  {
    icon: Cpu,
    title: "AI Solutions & Automation",
    description: "Context-aware conversational agents, retrieval-augmented generation, and automated pipelines.",
    href: "/services/ai-solutions",
    capabilities: [
      "Vector search embeddings & LangChain",
      "Strict anti-hallucination guardrails",
      "Automated document extraction workflows",
    ],
  },
  {
    icon: Globe2,
    title: "High-Performance Websites",
    description: "Blazing fast corporate web experiences engineered for 100/100 Core Web Vitals and conversions.",
    href: "/services/business-websites",
    capabilities: [
      "Sub-second Largest Contentful Paint",
      "Structured schema & search engine optimization",
      "Tailored modern design systems",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX & Product Design",
    description: "Intuitive user journeys, responsive interface design systems, and clickable prototypes.",
    href: "/services/ui-ux-design",
    capabilities: [
      "Figma design tokens & wireframing",
      "Design systems & component libraries",
      "User testing & conversion architecture",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Enterprise Dashboards & Business Systems",
    description: "Complex operational consoles, telemetry monitors, and custom internal business portals.",
    href: "/services/enterprise-systems",
    capabilities: [
      "Real-time event graphs & streaming data",
      "Granular audit trails & compliance logs",
      "ERP, CRM & legacy database bridges",
    ],
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-gradient-hero">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
              Engineered for Scalable Performance
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
              We provide end-to-end engineering from cloud architecture and custom software to mobile apps and intelligent AI agents.
            </p>
          </div>
          <Link
            href="/services"
            className="mt-6 md:mt-0 inline-flex items-center text-sm font-semibold text-neutral-300 hover:text-white transition-colors group"
          >
            <span>View all 6 engineering services</span>
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_GRID.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel p-7 transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-950/20 hover:-translate-y-1 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="h-11 w-11 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:text-pink-400 flex items-center justify-center mb-5 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-neutral-400 mb-5 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-neutral-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-pink-400/80 flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-purple-400 group-hover:text-pink-400 transition-colors pt-2 border-t border-white/6"
                >
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
