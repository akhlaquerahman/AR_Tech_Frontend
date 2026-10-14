"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ExternalLink, Smartphone } from "lucide-react";

interface ScreenZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  tagline: string;
  platform: string;
  slug?: string;
  imgSrc?: string;
  ScreenComponent?: React.ComponentType | null;
}

export function ScreenZoomModal({
  isOpen,
  onClose,
  title,
  category,
  tagline,
  platform,
  slug,
  imgSrc,
  ScreenComponent,
}: ScreenZoomModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      // Disable background scrolling
      document.body.style.overflow = "hidden";

      // Focus modal container for accessibility
      modalRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
        previousActiveElement.current?.focus();
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!isOpen || (!ScreenComponent && !imgSrc)) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-screen-title"
      tabIndex={-1}
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto outline-none animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-neutral-950 border border-white/15 p-5 sm:p-7 shadow-2xl shadow-purple-950/50 z-10 flex flex-col items-center text-left">
        {/* Top Header */}
        <div className="w-full flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-0.5 rounded-full">
                {category}
              </span>
              <span className="text-xs text-neutral-400 font-mono">Concept Demo</span>
            </div>
            <h3 id="modal-screen-title" className="text-xl font-bold text-white mt-1.5">
              {title}
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">{tagline}</p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close zoomed view"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Enlarged Phone Frame */}
        <div className="relative w-[300px] sm:w-[340px] h-[550px] sm:h-[610px] rounded-[48px] p-[3px] bg-gradient-to-b from-neutral-600 via-neutral-800 to-neutral-900 border border-white/20 shadow-2xl my-2 select-none ring-1 ring-white/20">
          <div className="relative w-full h-full rounded-[45px] p-[4px] bg-[#0c0d12] border border-white/15 flex flex-col overflow-hidden">
            {/* Screen Glass Reflection */}
            <div className="absolute -top-16 -left-16 w-56 h-full bg-gradient-to-r from-white/[0.07] to-transparent rotate-12 pointer-events-none z-30" />

            <div className="relative w-full h-full rounded-[41px] overflow-hidden bg-[#090a0f] border border-white/10 flex flex-col text-left">
              {imgSrc ? (
                /* Full high-res direct app screenshot view */
                <div className="relative w-full h-full overflow-hidden bg-neutral-950 flex items-center justify-center">
                  <Image
                    src={imgSrc}
                    alt={title}
                    fill
                    sizes="400px"
                    className={`${
                      imgSrc.includes("ai-chat") ? "object-contain p-2" : "object-cover object-top"
                    }`}
                    priority
                  />
                </div>
              ) : (
                <>
                  {/* Top Status Bar & Dynamic Island */}
                  <div className="relative w-full pt-2 px-6 flex items-center justify-between text-[11px] text-neutral-300 font-medium z-30 pointer-events-none">
                    <span className="font-semibold tracking-tight text-[11px]">9:41</span>

                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[84px] h-[20px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-md border border-white/10">
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-blue-500/60" />
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                    </div>

                    <div className="flex items-center space-x-1.5 text-neutral-400">
                      <svg className="w-3.5 h-3 fill-current" viewBox="0 0 16 12">
                        <rect x="0" y="8" width="2.5" height="4" rx="0.5" />
                        <rect x="4.5" y="5.5" width="2.5" height="6.5" rx="0.5" />
                        <rect x="9" y="3" width="2.5" height="9" rx="0.5" />
                        <rect x="13.5" y="0.5" width="2.5" height="11.5" rx="0.5" />
                      </svg>
                      <div className="w-4 h-2.5 rounded-[3px] border border-neutral-400 p-[1px] flex items-center">
                        <div className="h-full w-2.5 bg-neutral-200 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Screen Component */}
                  <div className="relative w-full h-full flex-1 overflow-hidden pt-2 pb-5 px-3.5 flex flex-col justify-between z-20">
                    {ScreenComponent && <ScreenComponent />}
                  </div>

                  {/* Home indicator */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/35 rounded-full z-30 pointer-events-none" />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="w-full pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-1.5 text-neutral-400">
            <Smartphone className="h-3.5 w-3.5 text-purple-400" />
            <span>Platform: {platform}</span>
          </div>

          {slug && (
            <a
              href={`/portfolio/${slug}`}
              className="inline-flex items-center space-x-1 text-pink-400 hover:text-pink-300 font-semibold"
            >
              <span>View Case Study</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
