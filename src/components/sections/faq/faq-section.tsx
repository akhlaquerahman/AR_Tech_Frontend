"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of projects does AR Tech build?",
    answer:
      "We design and engineer bespoke web applications, responsive corporate websites, cross-platform mobile apps (iOS & Android with React Native/Flutter), internal operational dashboards, and custom AI/automation tools. Whether you require a full product built from zero or performance upgrades to an existing codebase, we tailor solutions to your specific technical requirements.",
  },
  {
    id: "faq-2",
    question: "Can I request a custom website or mobile application?",
    answer:
      "Yes, absolutely. We do not force one-size-fits-all templates. Every project begins with a discovery discussion to determine whether a Next.js web application, React Native mobile app, or hybrid setup is optimal for your target audience, performance targets, and maintenance goals.",
  },
  {
    id: "faq-3",
    question: "Do you develop AI chatbots and RAG-based solutions?",
    answer:
      "Yes. We build production-ready retrieval-augmented generation (RAG) pipelines and conversational AI copilots grounded in your private documentation or databases. Our implementations emphasize strict anti-hallucination boundaries, privacy governance, low-latency streaming responses, and smooth operator handoffs.",
  },
  {
    id: "faq-4",
    question: "How is a project estimated and priced?",
    answer:
      "Every project is priced transparently based on functional scope, technical complexity, custom integrations, and agreed deliverables. We avoid hidden fees or arbitrary estimates; after an initial consultation, you receive a detailed breakdown of milestones, deliverables, and estimated investments.",
  },
  {
    id: "faq-5",
    question: "How long does a project take?",
    answer:
      "Timelines depend directly on scope and requirements. A focused marketing website or prototype can typically be delivered in 2 to 3 weeks, while full-stack web applications, mobile platforms, or custom SaaS systems usually range from 4 to 10 weeks with regular preview builds and weekly milestone reviews.",
  },
  {
    id: "faq-6",
    question: "Can you maintain or improve an existing application?",
    answer:
      "Yes. In addition to greenfield builds, we perform architectural audits, Lighthouse Core Web Vitals optimization, TypeScript refactoring, backend API modernization, and ongoing maintenance agreements for existing web and mobile systems.",
  },
  {
    id: "faq-7",
    question: "How do I get started?",
    answer:
      "Simply fill out our project scope inquiry form below or navigate to our Contact page. Share a brief overview of what you are aiming to build, your timeline, and any key requirements. We will review your brief and schedule an intro consultation within 24 business hours.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="container max-w-4xl px-4 sm:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-gradient-hero">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Clear, honest answers about working with AR Tech, project lifecycles, pricing, and our engineering capabilities.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl glass-panel border border-white/8 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-4 w-4 text-pink-400 flex-shrink-0" />
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-neutral-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-pink-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-content-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-5 sm:px-6 pb-6 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
