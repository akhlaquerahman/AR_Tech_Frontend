import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export function ProjectCTASection() {
  return (
    <section className="py-20 md:py-24 border-t border-white/[0.08] relative overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-purple-700/15 via-pink-600/15 to-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container max-w-5xl px-4 sm:px-8 mx-auto relative z-10">
        <div className="rounded-3xl glass-panel-glow p-8 sm:p-12 lg:p-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-pink-300 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-pink-400" />
            <span>Start Your Next Project</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-tight">
            Have a Project in Mind?
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            Tell us what you want to build. We&apos;ll review your requirements and discuss the next steps.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-200 transition-all shadow-xl shadow-white/10 group"
            >
              <MessageSquare className="h-4 w-4 text-purple-600" />
              <span>Discuss Your Project</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 text-sm font-semibold transition-all backdrop-blur-sm"
            >
              <span>Explore Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
