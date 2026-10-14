import { HeroSection } from "@/components/sections/hero/hero-section";
import { ServicesPreview } from "@/components/sections/services/services-preview";
import { FeaturedProjectsSection } from "@/features/portfolio/components/featured-projects-section";
import { TechnologyStackSection } from "@/components/sections/tech-stack/technology-stack-section";
import { ProcessSection } from "@/components/sections/process/process-section";
import { IndustriesSection } from "@/components/sections/industries/industries-section";
import { AboutDeveloperSection } from "@/components/sections/about/about-developer-section";
import { FAQSection } from "@/components/sections/faq/faq-section";
import { LeadCaptureForm } from "@/features/leads/components/lead-capture-form";
import { ProjectCTASection } from "@/components/sections/cta/project-cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero & Interactive Smartphone Showcase */}
      <HeroSection />

      {/* 2. Core Engineering Capabilities Grid */}
      <ServicesPreview />

      {/* 3. Featured Projects & Real Working Systems (SmartSplit, PulseWork, Cortex AI) */}
      <FeaturedProjectsSection />

      {/* 4. Modern Technology Stack Grid */}
      <TechnologyStackSection />

      {/* 5. Professional Development Process (From Idea to Launch) */}
      <ProcessSection />

      {/* 6. Industries & Use Cases */}
      <IndustriesSection />

      {/* 7. About Akhlaque Rahman / AR Tech Studio */}
      <AboutDeveloperSection />

      {/* 9. Frequently Asked Questions Accordion */}
      <FAQSection />

      {/* 10. Lead Scope Capture Form */}
      <section className="py-20 md:py-24 border-t border-white/[0.08] relative">
        <div className="container max-w-4xl px-4 sm:px-8 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-gradient-hero">Inquire</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
              Ready to Accelerate Your Technology?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3">
              Submit your project scope and I will review your requirements and respond with a technical plan and estimate.
            </p>
          </div>
          <LeadCaptureForm />
        </div>
      </section>

      {/* 11. Final Call-to-Action to Discuss Project */}
      <ProjectCTASection />
    </div>
  );
}
