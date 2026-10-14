import React from "react";

interface BrowserFrameProps {
  url?: string;
  children: React.ReactNode;
  className?: string;
}

export function BrowserFrame({
  url = "app.artech.dev",
  children,
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`rounded-2xl border border-white/12 bg-neutral-950/90 shadow-2xl overflow-hidden flex flex-col text-left ${className}`}
    >
      {/* Browser Bar */}
      <div className="px-4 py-2.5 bg-black/60 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        <div className="px-4 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-neutral-400">
          https://{url}
        </div>

        <div className="flex items-center space-x-1 text-[10px] text-emerald-400 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>LIVE</span>
        </div>
      </div>

      {/* Browser Canvas Content */}
      <div className="relative flex-1 p-4 sm:p-6 bg-gradient-to-b from-neutral-950 to-black overflow-hidden">
        {children}
      </div>
    </div>
  );
}
