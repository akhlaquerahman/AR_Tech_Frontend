import React from "react";

interface BackgroundFallbackProps {
  className?: string;
}

export function BackgroundFallback({ className = "" }: BackgroundFallbackProps) {
  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#040407] ${className}`}
    >
      {/* Radial Atmospheric Glows matching AR Tech dark obsidian palette */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-br from-purple-700/18 via-pink-600/12 to-transparent blur-[140px] rounded-full" />
      <div className="absolute top-[20%] right-[-5%] w-[600px] h-[500px] bg-pink-600/10 blur-[150px] rounded-full" />
      <div className="absolute top-[35%] left-[-10%] w-[650px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full" />
      <div className="absolute bottom-[-10%] left-1/3 w-[700px] h-[400px] bg-purple-900/12 blur-[160px] rounded-full" />

      {/* Subtle organic dot mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:32px_32px] opacity-35" />
    </div>
  );
}
