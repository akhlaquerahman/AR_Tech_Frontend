import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-3">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
        Loading AR Tech Architecture...
      </p>
    </div>
  );
}
