"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global system error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 flex min-h-screen flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Critical System Error</h2>
        <p className="text-slate-400 text-sm mb-6">A root layout error occurred.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-lg bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-colors"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
