import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ServiceItem } from "../types";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative rounded-2xl glass-panel p-8 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <span className="font-bold text-lg">{service.title.charAt(0)}</span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-foreground mb-2">{service.title}</h3>
      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.shortDescription}</p>

      {service.features && service.features.length > 0 && (
        <ul className="mb-6 space-y-2">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-center text-xs text-muted-foreground">
              <CheckCircle2 className="mr-2 h-3.5 w-3.5 text-accent flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
      >
        <span>Explore service capabilities</span>
        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
