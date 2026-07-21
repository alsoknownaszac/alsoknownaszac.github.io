"use client";

import { Lightbulb, PencilRuler, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Understand",
    desc: "Deep dive into the problem space — who it's for, what it needs to do, and why it matters.",
  },
  {
    icon: <PencilRuler className="w-5 h-5" />,
    title: "Design",
    desc: "Map the architecture, design the data model, and sketch the user flows before writing code.",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Build",
    desc: "Write clean, tested, production-grade code — iterating fast and shipping incrementally.",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Ship & Iterate",
    desc: "Deploy, monitor, gather feedback, and continuously improve based on real usage data.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto px-4 mb-14">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            How I Work
          </h2>
          <p className="font-mono text-sm text-muted-foreground/60 mt-3 leading-relaxed max-w-lg">
            A repeatable process refined across 15+ shipped projects — from
            first conversation to production.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border/50" />
              )}
              <div className="w-12 h-12 rounded-full border border-border/40 bg-muted/20 flex items-center justify-center text-muted-foreground mb-4 mx-auto md:mx-0">
                {step.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2 text-center md:text-left">
                {String(i + 1).padStart(2, "0")}. {step.title}
              </h3>
              <p className="text-xs text-muted-foreground/60 leading-relaxed text-center md:text-left">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
