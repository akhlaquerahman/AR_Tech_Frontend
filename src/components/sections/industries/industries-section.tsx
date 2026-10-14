import React from "react";
import {
  ShoppingBag,
  Users2,
  Wallet,
  GraduationCap,
  Headphones,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

interface IndustryItem {
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  applications: string[];
}

const INDUSTRIES: IndustryItem[] = [
  {
    title: "E-Commerce & Retail",
    category: "Online Commerce",
    icon: ShoppingBag,
    description: "Modern storefronts, transactional workflows, and administrative dashboards designed for high conversion.",
    applications: [
      "Custom product catalogues & checkout funnels",
      "Real-time order tracking & inventory sync",
      "Seller & merchant back-office portals",
    ],
  },
  {
    title: "HR & Workforce Management",
    category: "Operations",
    icon: Users2,
    description: "Streamlined team management, attendance telemetry, and self-service employee experiences.",
    applications: [
      "Geofenced check-in & biometric verification",
      "Leave approval queues & shift scheduling",
      "Employee self-service portals & document vaults",
    ],
  },
  {
    title: "Finance & Expense Management",
    category: "FinTech & Ledger",
    icon: Wallet,
    description: "Transparent balance computation, automated bill splitting, and multi-currency expense clearing.",
    applications: [
      "Smart debt settlement & graph balancing",
      "Automated OCR receipt scanning & line itemization",
      "Multi-currency conversion & spending insights",
    ],
  },
  {
    title: "Education & Learning",
    category: "EdTech",
    icon: GraduationCap,
    description: "Interactive student portals, knowledge management repositories, and structured progress tracking.",
    applications: [
      "Modular course delivery & student dashboard",
      "Assessment tracking & automated grading logs",
      "Interactive coding club & peer collaboration rooms",
    ],
  },
  {
    title: "Customer Support & AI Automation",
    category: "Intelligence & CRM",
    icon: Headphones,
    description: "Contextual RAG bots, automated tier-1 inquiry resolution, and instant operator escalation handoffs.",
    applications: [
      "Documentation-grounded AI knowledge assistants",
      "24/7 FAQ query resolution with zero hallucinations",
      "Multi-channel support chat widgets",
    ],
  },
  {
    title: "Business Dashboards & Analytics",
    category: "Telemetry & Data",
    icon: BarChart3,
    description: "Data-dense visual portals, sub-second streaming metrics, and operational performance telemetry.",
    applications: [
      "Sub-second event monitoring & error alerts",
      "Custom KPI aggregation widgets & trend forecasting",
      "Granular role-based team access controls",
    ],
  },
];

export function IndustriesSection() {
  return (
    <section className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-gradient-hero">
            Domain Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
            Solutions for Real Business Needs
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Practical digital platforms tailored for core business domains where speed, reliability, and clear usability directly impact outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel p-7 transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-950/20 hover:-translate-y-1 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-11 w-11 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:text-pink-400 flex items-center justify-center transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                        {ind.category}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                        {ind.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 mb-5 leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/6">
                    {ind.applications.map((app, aIdx) => (
                      <div key={aIdx} className="flex items-start space-x-2 text-xs text-neutral-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-pink-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{app}</span>
                      </div>
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
