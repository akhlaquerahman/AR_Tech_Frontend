const STEPS = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understand the business problem, target audience, technical requirements, and project scope.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Define the user experience, wireframes, systems architecture, and implementation plan.",
  },
  {
    step: "03",
    title: "Development & Integration",
    description: "Build the application, integrate APIs and required services, with regular milestone reviews.",
  },
  {
    step: "04",
    title: "Testing & Delivery",
    description: "Test the product thoroughly, resolve issues, and execute the agreed deployment and handover.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 border-t border-white/[0.08] relative">
      <div className="container max-w-6xl px-4 sm:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-gradient-hero">Development Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
            From Idea to Launch
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            A transparent four-step engineering lifecycle ensuring predictable delivery and reliable product architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {STEPS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel p-6 relative hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-950/20 transition-all duration-300"
            >
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 opacity-60 mb-4 block font-mono">
                {item.step}
              </span>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
