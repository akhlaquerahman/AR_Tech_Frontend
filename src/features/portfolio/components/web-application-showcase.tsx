import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Activity, Database, TrendingUp } from "lucide-react";
import { BrowserFrame } from "./browser-frame";

export function WebApplicationShowcase() {
  return (
    <section className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-gradient-hero">
              Enterprise Web Platforms
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
              Cloud-Native SaaS &amp; Intelligent Dashboards
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
              Mission-critical web portals designed for data density, sub-second telemetry, and seamless workflow automation.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="mt-6 md:mt-0 inline-flex items-center text-sm font-semibold text-neutral-300 hover:text-white transition-colors group"
          >
            <span>View all web architectures</span>
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Feature 1: Nexus Analytics SaaS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-5 text-left space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
                SaaS Platform
              </span>
              <span className="text-xs text-neutral-400">FinTech &amp; Data</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Nexus Real-Time Telemetry Platform
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              High-throughput streaming analytics platform handling 50,000 telemetry events per second with WebSocket streams, interactive trend forecasting, and zero render stutters.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {["Next.js 15", "TypeScript", "Node.js", "Express", "MongoDB", "TanStack Query"].map((t) => (
                <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.05] border border-white/5 text-neutral-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-3 pt-3">
              <Link
                href="/portfolio/nexus-analytics-saas"
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs hover:bg-neutral-200 transition-all shadow-md group"
              >
                <span>View Case Study</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://demo.nexus.artech.dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/12 text-xs font-medium transition-all"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="h-3.5 w-3.5 text-pink-400" />
              </a>
            </div>
          </div>

          {/* Browser frame preview */}
          <div className="lg:col-span-7">
            <BrowserFrame url="nexus.artech.dev/analytics">
              {/* Mockup Dashboard UI */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/8 text-left">
                    <span className="text-[10px] text-neutral-400 font-mono block">Ingestion Rate</span>
                    <span className="text-lg font-bold text-white tracking-tight">54.2k evt/s</span>
                    <span className="text-[10px] text-emerald-400 flex items-center mt-0.5">
                      <TrendingUp className="h-3 w-3 mr-0.5" /> +14.8% peak
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/8 text-left">
                    <span className="text-[10px] text-neutral-400 font-mono block">Avg Latency</span>
                    <span className="text-lg font-bold text-white tracking-tight">68ms</span>
                    <span className="text-[10px] text-purple-400 flex items-center mt-0.5">
                      <Activity className="h-3 w-3 mr-0.5" /> Global Edge
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/8 text-left">
                    <span className="text-[10px] text-neutral-400 font-mono block">Node Health</span>
                    <span className="text-lg font-bold text-white tracking-tight">100%</span>
                    <span className="text-[10px] text-blue-400 flex items-center mt-0.5">
                      <Database className="h-3 w-3 mr-0.5" /> 8 Shards Synced
                    </span>
                  </div>
                </div>

                {/* Telemetry Stream Chart Mock */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/6 text-left space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-mono">Real-Time Throughput Buffer</span>
                    <span className="text-[10px] text-pink-400 font-mono">Stream Active</span>
                  </div>
                  <div className="h-24 w-full flex items-end space-x-1.5 pt-2">
                    {[45, 60, 52, 78, 65, 88, 70, 92, 85, 96, 74, 82, 91, 100, 89, 95].map((val, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-t bg-gradient-to-t from-purple-600/50 via-pink-500/70 to-blue-400"
                        style={{ height: `${val}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </BrowserFrame>
          </div>
        </div>

        {/* Feature 2: Crestview Capital Investment Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <BrowserFrame url="crestview.artech.dev/portal">
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between border-b border-white/8 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-white">Institutional Portfolio Analytics</h4>
                    <p className="text-xs text-neutral-400">Private Equity Asset Distribution · Sub-second SSR</p>
                  </div>
                  <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    100/100 Lighthouse
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/8">
                    <span className="text-[10px] text-neutral-400 block">Total AUM Monitored</span>
                    <span className="text-xl font-black text-white">$1.42B</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/8">
                    <span className="text-[10px] text-neutral-400 block">Internal IRR Yield</span>
                    <span className="text-xl font-black text-emerald-400">24.6%</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-white/6 text-xs text-neutral-300 font-mono flex items-center justify-between">
                  <span>Server-Rendered Component Hydration Payload:</span>
                  <span className="text-pink-400 font-bold">&lt; 12 kB total JS</span>
                </div>
              </div>
            </BrowserFrame>
          </div>

          <div className="lg:col-span-5 text-left space-y-4 order-1 lg:order-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-0.5 rounded-full">
                Corporate Web
              </span>
              <span className="text-xs text-neutral-400">Private Equity &amp; Finance</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Crestview Capital Investment Portal
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Ultra-high-performance institutional web portal architected with pure React Server Components, eliminating client-side JavaScript bloat and achieving instantaneous Core Web Vitals.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {["Next.js App Router", "React Server Components", "Tailwind CSS", "Framer Motion", "Zod"].map((t) => (
                <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.05] border border-white/5 text-neutral-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-3 pt-3">
              <Link
                href="/portfolio/crestview-capital-portal"
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs hover:bg-neutral-200 transition-all shadow-md group"
              >
                <span>View Case Study</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://demo.crestview.artech.dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/12 text-xs font-medium transition-all"
              >
                <span>Live Portal Demo</span>
                <ExternalLink className="h-3.5 w-3.5 text-pink-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
