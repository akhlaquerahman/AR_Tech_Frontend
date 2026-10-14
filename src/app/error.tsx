"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <div className="container max-w-2xl min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="h-16 w-16 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center mb-6">
        <AlertTriangle className="h-8 w-8" />
      </div>
      <h2 className="text-3xl font-bold text-foreground mb-3">Unexpected Application State</h2>
      <p className="text-muted-foreground text-sm max-w-md mb-8 leading-relaxed">
        An error occurred during page rendering. Our engineering logging has captured the incident.
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
      >
        <RefreshCcw className="h-4 w-4" />
        <span>Attempt Recovery</span>
      </button>
    </div>
  );
}
