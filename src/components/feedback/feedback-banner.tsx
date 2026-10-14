import * as React from "react";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeedbackBannerProps {
  type?: "info" | "success" | "error";
  title?: string;
  message: string;
  className?: string;
}

export function FeedbackBanner({
  type = "info",
  title,
  message,
  className,
}: FeedbackBannerProps) {
  const icons = {
    info: <Info className="h-5 w-5 text-accent" />,
    success: <CheckCircle2 className="h-5 w-5 text-emerald-400" />,
    error: <AlertCircle className="h-5 w-5 text-rose-400" />,
  };

  const bgStyles = {
    info: "bg-accent/10 border-accent/30 text-accent-foreground",
    success: "bg-emerald-500/10 border-emerald-500/30 text-emerald-200",
    error: "bg-destructive/10 border-destructive/30 text-destructive-foreground",
  };

  return (
    <div
      role="alert"
      className={cn(
        "flex items-start space-x-3 p-4 rounded-xl border text-sm",
        bgStyles[type],
        className
      )}
    >
      <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
      <div className="flex-1">
        {title && <h5 className="font-semibold mb-1">{title}</h5>}
        <p className="leading-relaxed opacity-90">{message}</p>
      </div>
    </div>
  );
}
