"use client";

import { Ship, Users, Zap, Layers } from "lucide-react";

const values = [
  {
    icon: <Ship className="w-5 h-5" />,
    title: "Ship Early, Iterate Often",
    desc: "Done is better than perfect. Ship an MVP, gather real feedback, and iterate based on data — not assumptions.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Performance is a Feature",
    desc: "Every millisecond matters. Optimize Core Web Vitals, reduce bundle sizes, and make things feel instant.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Simplicity Over Complexity",
    desc: "The best solutions are the simplest ones. Choose boring technology, write boring code, and let the product shine.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "User-First, Always",
    desc: "Every technical decision traces back to a user need. Build for the person on the other side of the screen.",
  },
];

export function PhilosophyGrid() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto px-4 mb-14">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            What I Believe
          </h2>
          <p className="font-mono text-sm text-muted-foreground/60 mt-3 leading-relaxed max-w-lg">
            The principles that guide every project, every decision, and every
            line of code.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group p-6 border border-border/40 hover:border-foreground/10 hover:bg-muted/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-border/30 bg-muted/10 flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-foreground/20 transition-all duration-300 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1.5">
                    {value.title}
                  </h3>
                  <p className="text-xs text-muted-foreground/60 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
