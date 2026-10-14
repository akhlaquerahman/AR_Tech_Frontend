"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Palette,
  Video,
  BarChart3,
  Maximize2,
} from "lucide-react";
import dynamic from "next/dynamic";
import { MobileDeviceMockup } from "@/features/portfolio/components/mobile-device-mockup";
import {
  AkhlaqueSmartSplitMobileScreen,
  AkhlaqueHRMSMobileScreen,
  AkhlaqueSmartSplitAIScreen,
} from "@/features/portfolio/components/real-mobile-screens";

const ScreenZoomModal = dynamic(
  () =>
    import("@/features/portfolio/components/screen-zoom-modal").then(
      (mod) => mod.ScreenZoomModal
    ),
  { ssr: false }
);

const HERO_APP_SCREENS = [
  {
    id: "smartsplit",
    title: "SmartSplit Overview & Expense Dashboard",
    category: "FinTech & Payments",
    tagline: "Total balance, net settlement tracking, spending trends, and admin controls.",
    platform: "Responsive Web & Mobile",
    slug: "smartsplit-expense-settlement",
    imgSrc: "/images/projects/smartsplit-dashboard-clean.png",
    component: AkhlaqueSmartSplitMobileScreen,
  },
  {
    id: "smartsplit-ai",
    title: "SmartSplit AI Financial Assistant",
    category: "AI & Workflow Automation",
    tagline: "Natural conversational AI assistant for group settlements, receipt parsing, and queries.",
    platform: "Web & In-App Assistant",
    slug: "smartsplit-expense-settlement",
    imgSrc: "/images/projects/smartsplit-ai-chat-clean.png",
    component: AkhlaqueSmartSplitAIScreen,
  },
  {
    id: "hrms-calendar",
    title: "HRMS Shift & Attendance Calendar",
    category: "Enterprise Workforce",
    tagline: "Shift schedules, monthly attendance logs, punch-in/out records, and leave tracking.",
    platform: "Enterprise Web App",
    slug: "hrms-workforce-management",
    imgSrc: "/images/projects/hrms-calendar-clean.png",
    component: AkhlaqueHRMSMobileScreen,
  },
];

const COMPLETE_SERVICE_RANGE = [
  { label: "Web & App Development", icon: Code2 },
  { label: "UI/UX & Product Design", icon: Palette },
  { label: "Video Editing & Creative Content", icon: Video },
  { label: "Data Analytics & Dashboards", icon: BarChart3 },
  { label: "AI, RAG & Workflow Automation", icon: Cpu },
  { label: "Custom Software Solutions", icon: Layers },
];

export function HeroSection() {
  const [zoomedScreen, setZoomedScreen] = useState<(typeof HERO_APP_SCREENS)[0] | null>(null);

  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 lg:pb-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[350px] bg-purple-700/12 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[380px] bg-pink-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[300px] bg-blue-600/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="container relative max-w-7xl px-4 sm:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN — All-in-One Digital Studio Positioning */}
          <div className="lg:col-span-6 text-left space-y-6">

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.14]">
              Your Ideas. Our Expertise.{" "}
              <span className="text-gradient-hero">Digital Solutions</span> That Deliver.
            </h1>

            {/* Supporting Description constrained to comfortable width */}
            <p className="text-base sm:text-lg text-neutral-300/90 max-w-[540px] leading-relaxed font-normal">
              From websites and mobile apps to UI/UX design, video editing, data analytics and AI-powered automation, AR Tech turns your ideas into practical digital solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 px-7 py-3 rounded-full bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center space-x-2 px-7 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 hover:border-white/25 font-medium text-sm transition-all backdrop-blur-sm"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Complete Service Range Badges */}
            <div className="pt-6 border-t border-white/[0.08]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-2.5">
                Complete Service Capabilities
              </span>
              <div className="flex flex-wrap gap-2">
                {COMPLETE_SERVICE_RANGE.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/6 text-xs text-neutral-300"
                    >
                      <Icon className="h-3.5 w-3.5 text-pink-400/90" />
                      <span>{s.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — Multi-Phone Showcase with Click-to-Zoom */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            {/* Ambient subtle glow */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-purple-600/20 via-pink-600/15 to-blue-600/15 blur-3xl pointer-events-none" />

            {/* Smartphone Composition Stage */}
            <div className="relative w-full max-w-[560px] h-[450px] sm:h-[480px] lg:h-[490px] flex items-center justify-center">
              {/* Back Phone Left: SmartSplit AI Assistant (~360px tall x 180px wide) */}
              <button
                type="button"
                onClick={() => setZoomedScreen(HERO_APP_SCREENS[1])}
                aria-label="Inspect SmartSplit AI Assistant screen"
                className="hidden sm:block absolute left-2 lg:left-4 bottom-5 w-[185px] lg:w-[195px] h-[360px] lg:h-[375px] -rotate-[7deg] transition-all duration-300 hover:scale-[1.04] hover:z-30 hover:opacity-100 opacity-80 cursor-pointer group text-left"
              >
                <div className="absolute top-4 right-4 z-40 p-1.5 rounded-full bg-black/75 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="h-3.5 w-3.5" />
                </div>
                <MobileDeviceMockup isProminent={false}>
                  <AkhlaqueSmartSplitAIScreen />
                </MobileDeviceMockup>
              </button>

              {/* Back Phone Right: HRMS Shift & Attendance (~360px tall x 180px wide) */}
              <button
                type="button"
                onClick={() => setZoomedScreen(HERO_APP_SCREENS[2])}
                aria-label="Inspect HRMS Shift & Attendance screen"
                className="hidden sm:block absolute right-2 lg:right-4 bottom-5 w-[185px] lg:w-[195px] h-[360px] lg:h-[375px] rotate-[7deg] transition-all duration-300 hover:scale-[1.04] hover:z-30 hover:opacity-100 opacity-80 cursor-pointer group text-left"
              >
                <div className="absolute top-4 right-4 z-40 p-1.5 rounded-full bg-black/75 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="h-3.5 w-3.5" />
                </div>
                <MobileDeviceMockup isProminent={false}>
                  <AkhlaqueHRMSMobileScreen />
                </MobileDeviceMockup>
              </button>

              {/* Center Primary Phone: SmartSplit Main Dashboard (~425px tall x 220px wide) */}
              <button
                type="button"
                onClick={() => setZoomedScreen(HERO_APP_SCREENS[0])}
                aria-label="Inspect SmartSplit Mobile App screen in full view"
                className="relative w-[215px] sm:w-[218px] lg:w-[222px] h-[415px] sm:h-[425px] lg:h-[435px] z-20 transition-all duration-300 hover:scale-[1.02] cursor-pointer group text-left"
              >
                <div className="absolute top-4 right-4 z-40 flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/85 border border-white/25 text-[10px] font-mono text-purple-200 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Maximize2 className="h-3 w-3 text-pink-400" />
                  <span>Click to Zoom</span>
                </div>
                <MobileDeviceMockup isProminent={true}>
                  <AkhlaqueSmartSplitMobileScreen />
                </MobileDeviceMockup>
              </button>
            </div>

            {/* Quick Interactive Thumbnail Strip */}
            <div className="flex items-center space-x-2 mt-4 pt-3 border-t border-white/8">
              <span className="text-[11px] text-neutral-400 mr-1 font-medium">Quick inspect:</span>
              {HERO_APP_SCREENS.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setZoomedScreen(app)}
                  className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/[0.04] hover:bg-white/[0.12] text-neutral-300 hover:text-white border border-white/8 transition-colors flex items-center space-x-1"
                >
                  <span>
                    {app.id === "smartsplit"
                      ? "SmartSplit Overview"
                      : app.id === "smartsplit-ai"
                      ? "SmartSplit AI"
                      : app.id === "hrms-calendar"
                      ? "HRMS Calendar"
                      : "Telemetry"}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Click-to-Zoom Modal (rendered only on demand) */}
      {zoomedScreen && (
        <ScreenZoomModal
          isOpen={true}
          onClose={() => setZoomedScreen(null)}
          title={zoomedScreen.title}
          category={zoomedScreen.category}
          tagline={zoomedScreen.tagline}
          platform={zoomedScreen.platform}
          slug={zoomedScreen.slug}
          imgSrc={zoomedScreen.imgSrc}
          ScreenComponent={zoomedScreen.component || null}
        />
      )}
    </section>
  );
}
