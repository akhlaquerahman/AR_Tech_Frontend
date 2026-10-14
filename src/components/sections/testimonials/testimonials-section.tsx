import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "AR Tech transformed our fragmented SaaS architecture into an ultra-reliable, high-throughput web platform. The performance gains were immediate.",
    author: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "Nexus Dynamics",
  },
  {
    quote: "Their team understands the delicate intersection between cutting-edge AI integrations and clean, enterprise-grade software engineering.",
    author: "Marcus Vance",
    role: "VP of Product",
    company: "Aurora Systems",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 border-t border-white/[0.08] relative">
      <div className="container max-w-6xl px-4 sm:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-gradient-hero">Industry Trust</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
            Engineered for High-Growth Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel p-8 relative hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-950/20 transition-all duration-300"
            >
              <div className="flex space-x-1 text-pink-400 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-pink-400 text-pink-400" />
                ))}
              </div>
              <p className="text-neutral-200 text-base italic leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-white text-sm">{item.author}</p>
                <p className="text-xs text-neutral-400">
                  {item.role} · <span className="text-purple-400 font-medium">{item.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
