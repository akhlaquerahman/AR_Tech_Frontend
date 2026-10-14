"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Smartphone, CheckCircle2 } from "lucide-react";
import { MobileDeviceMockup } from "./mobile-device-mockup";
import { SmartSplitScreen, PulseWorkScreen, CortexAIScreen } from "./mobile-screen-previews";

const MOBILE_APPS = [
  {
    id: "smartsplit",
    name: "SmartSplit App",
    category: "FinTech & Payments",
    tagline: "Group expense management, AI receipt parsing, and automated debt settlement.",
    platform: "iOS & Android (React Native)",
    screenComponent: SmartSplitScreen,
    slug: "smartsplit-expense-settlement",
    features: [
      "AI receipt scanning with auto-split",
      "Multi-currency conversion & group ledgers",
      "Instant UPI & card settlement flows",
    ],
  },
  {
    id: "pulsework",
    name: "PulseWork HRMS",
    category: "Workforce & Operations",
    tagline: "Geofenced mobile attendance, shift planning, and digital payroll approvals.",
    platform: "Cross-Platform (Flutter & PostGIS)",
    screenComponent: PulseWorkScreen,
    slug: "pulsework-hrms-attendance",
    features: [
      "GPS-verified geofence clock-in",
      "Self-service leave & shift swaps",
      "Instant manager approval telemetry",
    ],
  },
  {
    id: "cortex",
    name: "Cortex AI Copilot",
    category: "Enterprise AI & Diagnostics",
    tagline: "Field engineering assistant with vector-cached technical diagnostics.",
    platform: "iOS & Android (React Native & OpenAI)",
    screenComponent: CortexAIScreen,
    slug: "cortex-ai-customer-assistant",
    features: [
      "Voice & text query processing",
      "Offline vector cache for field teams",
      "Automated system health telemetry",
    ],
  },
];

export function MobileAppShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const currentApp = MOBILE_APPS[activeTab];

  return (
    <section className="py-20 md:py-28 border-t border-white/[0.08] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-purple-700/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[300px] bg-pink-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl px-4 sm:px-8 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold tracking-wider uppercase text-pink-400 mb-3">
              <Smartphone className="h-3.5 w-3.5" />
              <span>Mobile Engineering Studio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Crafting High-Impact <span className="text-gradient-hero">Mobile Applications</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
              We design and engineer bespoke iOS, Android, and cross-platform mobile apps with fluid gestures, biometric security, and offline resilience.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="mt-6 md:mt-0 inline-flex items-center text-sm font-semibold text-neutral-300 hover:text-white transition-colors group"
          >
            <span>Explore all mobile products</span>
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center space-x-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {MOBILE_APPS.map((app, idx) => (
            <button
              key={app.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === idx
                  ? "bg-white text-neutral-950 shadow-lg shadow-white/10"
                  : "bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/6"
              }`}
            >
              {app.name}
            </button>
          ))}
        </div>

        {/* Showcase Grid: Left Info & Right Device Mockup Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* App Info & Highlights — 5 cols */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                {currentApp.category}
              </span>
              <span className="text-xs text-neutral-500 ml-3 font-mono">Concept Demo</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                {currentApp.name}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 mt-2 leading-relaxed">
                {currentApp.tagline}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 text-xs text-neutral-400 font-mono">
              <span className="text-pink-400 font-bold">Platform:</span> {currentApp.platform}
            </div>

            <div className="space-y-2.5 pt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block">
                Key Architectural Capabilities
              </span>
              {currentApp.features.map((feat, i) => (
                <div key={i} className="flex items-center space-x-2.5 text-sm text-neutral-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href={`/portfolio/${currentApp.slug}`}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-all shadow-md group"
              >
                <span>View Full App Case Study</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Device Mockup Composition — 7 cols */}
          <div className="lg:col-span-7 relative flex items-center justify-center pt-4 sm:pt-0">
            {/* Multi-Device Composition (Hidden on tiny screens, prominent centered on desktop) */}
            <div className="relative w-full max-w-[580px] h-[480px] sm:h-[530px] flex items-center justify-center">
              {/* Secondary Phone Left (PulseWork / SmartSplit preview) */}
              <div className="hidden sm:block absolute left-0 bottom-2 w-[220px] h-[430px] -rotate-6 transition-all duration-500 opacity-60 hover:opacity-85 pointer-events-none">
                <MobileDeviceMockup isProminent={false}>
                  <PulseWorkScreen />
                </MobileDeviceMockup>
              </div>

              {/* Secondary Phone Right (Cortex AI preview) */}
              <div className="hidden sm:block absolute right-0 bottom-2 w-[220px] h-[430px] rotate-6 transition-all duration-500 opacity-60 hover:opacity-85 pointer-events-none">
                <MobileDeviceMockup isProminent={false}>
                  <CortexAIScreen />
                </MobileDeviceMockup>
              </div>

              {/* Primary Active Phone Center */}
              <div className="relative w-[260px] sm:w-[280px] h-[470px] sm:h-[510px] z-30 transition-all duration-500">
                <MobileDeviceMockup isProminent={true}>
                  <currentApp.screenComponent />
                </MobileDeviceMockup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
