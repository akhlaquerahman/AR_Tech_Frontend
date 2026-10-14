import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container max-w-5xl px-4 sm:px-8 mx-auto">
        <div className="relative rounded-3xl glass-panel-glow p-10 sm:p-16 text-center overflow-hidden border border-purple-500/30">
          {/* Ambient glow behind CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-pink-400 text-xs font-semibold mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Have an ambitious product in mind?</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-5 uppercase leading-[1.1]">
              Let&apos;s Build Your Next <span className="text-gradient-hero">Digital Advantage</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mb-10 leading-relaxed font-normal">
              From mission-critical web applications to custom AI pipelines, AR Tech engineers software that propels technology brands forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-200 transition-all shadow-xl shadow-white/10 group"
              >
                <span>Initiate Project Consultation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 hover:border-white/25 font-medium text-sm transition-all backdrop-blur-sm group"
              >
                <span>Browse Services</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
