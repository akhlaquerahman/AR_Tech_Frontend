import React from "react";
import Image from "next/image";

interface MobileDeviceMockupProps {
  children?: React.ReactNode;
  imgSrc?: string;
  imgAlt?: string;
  className?: string;
  isProminent?: boolean;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
}

export function MobileDeviceMockup({
  children,
  imgSrc,
  imgAlt = "Mobile app preview",
  className = "",
  isProminent = false,
  objectFit = "cover",
  objectPosition = "center top",
}: MobileDeviceMockupProps) {
  return (
    <div
      className={`relative w-full h-full rounded-[44px] p-[3px] bg-gradient-to-b from-neutral-600 via-neutral-800 to-neutral-900 shadow-2xl transition-all duration-500 select-none ${
        isProminent
          ? "ring-1 ring-white/20 shadow-[0_25px_60px_-15px_rgba(168,85,247,0.4),0_0_35px_rgba(236,72,153,0.15)]"
          : "ring-1 ring-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]"
      } ${className}`}
    >
      {/* Outer Titanium / Matte Frame Rim */}
      <div className="relative w-full h-full rounded-[41px] p-[4px] bg-[#0c0d12] border border-white/15 flex flex-col overflow-hidden">
        {/* Subtle Side Glass Reflection Streak */}
        <div className="absolute -top-12 -left-12 w-48 h-full bg-gradient-to-r from-white/[0.08] to-transparent rotate-12 pointer-events-none z-30" />

        {/* Screen Display Container */}
        <div className="relative w-full h-full rounded-[37px] overflow-hidden bg-[#090a0f] border border-white/10 flex flex-col text-left">
          {imgSrc ? (
            /* Direct Authentic Screenshot Mode */
            <div className="relative w-full h-full overflow-hidden bg-neutral-950">
              <Image
                src={imgSrc}
                alt={imgAlt}
                fill
                sizes="(max-width: 768px) 240px, 360px"
                className={objectFit === "contain" ? "object-contain" : "object-cover"}
                style={{ objectPosition }}
                priority={isProminent}
                loading={isProminent ? "eager" : "lazy"}
              />
            </div>
          ) : (
            /* Interactive Simulated Screen Component Mode */
            <>
              {/* Top Status Bar & Dynamic Island */}
              <div className="relative w-full pt-2 px-5 flex items-center justify-between text-[10px] text-neutral-300 font-medium z-30 pointer-events-none">
                <span className="font-semibold tracking-tight text-[10.5px]">9:41</span>

                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[78px] h-[19px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-md border border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-blue-500/60" />
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>

                <div className="flex items-center space-x-1.5 text-neutral-400">
                  <svg className="w-3 h-2.5 fill-current" viewBox="0 0 16 12">
                    <rect x="0" y="8" width="2.5" height="4" rx="0.5" />
                    <rect x="4.5" y="5.5" width="2.5" height="6.5" rx="0.5" />
                    <rect x="9" y="3" width="2.5" height="9" rx="0.5" />
                    <rect x="13.5" y="0.5" width="2.5" height="11.5" rx="0.5" />
                  </svg>
                  <div className="w-4 h-2 rounded-[3px] border border-neutral-400 p-[1px] flex items-center">
                    <div className="h-full w-2.5 bg-neutral-200 rounded-[1px]" />
                  </div>
                </div>
              </div>

              {/* Screen Content Body */}
              <div className="relative w-full flex-1 overflow-hidden pt-1.5 pb-5 px-3 flex flex-col justify-between text-left z-20">
                {children}
              </div>

              {/* Bottom Gesture Bar */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/35 rounded-full z-30 pointer-events-none" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
