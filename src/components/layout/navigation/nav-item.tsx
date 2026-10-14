import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItemProps {
  label: string;
  href: string;
  isActive?: boolean;
}

export function NavItem({ label, href, isActive = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors px-3 py-1.5 rounded-md",
        isActive
          ? "text-primary bg-primary/10"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
      )}
    >
      {label}
    </Link>
  );
}
