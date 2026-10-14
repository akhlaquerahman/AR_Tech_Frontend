import { constructMetadata } from "@/lib/seo";
import { Sparkles, Terminal, Briefcase, Award, CheckCircle2 } from "lucide-react";
import { WORK_EXPERIENCES, CERTIFICATES } from "@/features/portfolio/data/profile";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "About Akhlaque Rahman — AR Tech",
  description:
    "Learn about Akhlaque Rahman, MERN stack developer and founder of AR Tech studio, our software engineering experience, and project background.",
});

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-5xl px-4 sm:px-8 mx-auto">
        {/* Main Hero Card */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full">
            About Akhlaque Rahman · AR Tech
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6 leading-tight">
            Software Engineer &amp; Full Stack Developer
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed">
            I&apos;m Akhlaque Rahman, a software developer focused on building modern web applications, business software and AI-powered solutions. Through my project and development experience, I work across frontend development, backend APIs, databases and intelligent application workflows.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16 text-left">
          <div className="flex items-center space-x-2 mb-6">
            <Briefcase className="h-5 w-5 text-pink-400" />
            <h2 className="text-2xl font-bold text-white">Work Experience</h2>
          </div>

          <div className="space-y-6">
            {WORK_EXPERIENCES.map((exp) => (
              <div key={exp.id} className="rounded-2xl glass-panel p-8 border border-white/10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-sm text-purple-300 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-neutral-300">
                    Duration: {exp.duration}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                    Key Projects &amp; Deliverables:
                  </span>
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="h-4 w-4 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/6">
                  {exp.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Licenses & Certifications */}
        <div className="mb-16 text-left">
          <div className="flex items-center space-x-2 mb-6">
            <Award className="h-5 w-5 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Licenses &amp; Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATES.map((cert) => (
              <div key={cert.id} className="rounded-2xl glass-panel p-6 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">{cert.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">{cert.issuer}</p>
                </div>
                {cert.issueDate && (
                  <span className="text-xs font-mono text-purple-300 border-t border-white/6 pt-3 block">
                    Issued: {cert.issueDate}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Ethos & Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
          <div className="rounded-2xl glass-panel p-8">
            <div className="h-12 w-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Engineering Discipline</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Every project is constructed with strict TypeScript typing, reusable component architectures, automated testing, and clean RESTful backend contracts to ensure maintainable, scalable software.
            </p>
          </div>

          <div className="rounded-2xl glass-panel p-8">
            <div className="h-12 w-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-5">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Independent Studio Vision</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              AR Tech operates as an agile, developer-led studio offering direct, unbloated communication and craftsmanship — turning ambitious client requirements into production software without unnecessary bureaucracy.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl glass-panel-glow p-8 md:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Build Your Next Digital Product?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mb-8 leading-relaxed">
            Whether you need a full-stack web application, a mobile app, or an intelligent AI knowledge assistant, let&apos;s discuss how to bring it to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-200 transition-all shadow-xl"
          >
            <span>Discuss Your Project</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
