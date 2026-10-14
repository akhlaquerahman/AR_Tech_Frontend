import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Award,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { DEVELOPER_PROFILE, WORK_EXPERIENCES, CERTIFICATES } from "@/features/portfolio/data/profile";

export function AboutDeveloperSection() {
  return (
    <section className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Developer Overview & Positioning */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-gradient-hero">
                Developer &amp; Founder
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
                About Akhlaque Rahman
              </h2>
              <p className="text-sm font-mono text-purple-300 mt-1">
                {DEVELOPER_PROFILE.headline} · {DEVELOPER_PROFILE.brandName}
              </p>
            </div>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              {DEVELOPER_PROFILE.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Working Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/8 text-xs">
              <div className="rounded-xl glass-panel p-4 space-y-1">
                <span className="text-neutral-400 block font-mono">Specialization</span>
                <span className="text-white font-bold">MERN &amp; Full Stack Next.js</span>
              </div>
              <div className="rounded-xl glass-panel p-4 space-y-1">
                <span className="text-neutral-400 block font-mono">Focus Area</span>
                <span className="text-white font-bold">Web Apps, RAG &amp; APIs</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors"
              >
                <span>Read detailed background &amp; engineering principles</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Work Experience & Verified Certificates */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Experience Card */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Briefcase className="h-4 w-4 text-pink-400" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
                  Work Experience
                </h3>
              </div>

              {WORK_EXPERIENCES.map((exp) => (
                <div key={exp.id} className="rounded-2xl glass-panel p-6 border border-white/10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <p className="text-xs text-purple-300 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-neutral-300">
                      Duration: {exp.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/6">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                      Key Contributions:
                    </span>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start space-x-2 text-xs text-neutral-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-pink-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{resp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/6">
                    {exp.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Verified Certifications */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-4 w-4 text-purple-400" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
                  Licenses &amp; Certifications
                </h3>
              </div>

              <div className="space-y-3">
                {CERTIFICATES.map((cert) => (
                  <div
                    key={cert.id}
                    className="rounded-xl glass-panel p-4 flex items-center justify-between border border-white/8 hover:border-white/15 transition-colors"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{cert.title}</h4>
                      <p className="text-xs text-neutral-400">{cert.issuer}</p>
                    </div>
                    {cert.issueDate && (
                      <span className="text-[11px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-white/[0.04]">
                        {cert.issueDate}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
