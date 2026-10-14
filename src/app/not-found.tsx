import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container max-w-4xl min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
        <FileQuestion className="h-8 w-8" />
      </div>
      <h1 className="text-4xl font-extrabold text-foreground mb-3">Page Not Found</h1>
      <p className="text-muted-foreground max-w-md mb-8 text-sm leading-relaxed">
        The digital resource or route you requested could not be located on the AR Tech platform.
      </p>
      <Link
        href="/"
        className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}
