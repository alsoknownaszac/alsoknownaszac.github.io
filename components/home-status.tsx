"use client";

import { Code2, BookOpen, Headphones } from "lucide-react";

const current = [
  {
    icon: <Code2 className="w-4 h-4" />,
    label: "Building",
    text: "A real-time collaboration tool with WebSocket sync and CRDT-based conflict resolution.",
  },
  {
    icon: <BookOpen className="w-4 h-4" />,
    label: "Reading",
    text: "Designing Data-Intensive Applications by Martin Kleppmann — deep dive into distributed systems.",
  },
  {
    icon: <Headphones className="w-4 h-4" />,
    label: "Listening to",
    text: "Lo-fi hip hop radio — beats to code/study to. The soundtrack for deep work.",
  },
];

export function CurrentStatus() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto px-4 mb-14">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            What I'm Up To
          </h2>
          <p className="font-mono text-sm text-muted-foreground/60 mt-3 leading-relaxed max-w-lg">
            A snapshot of what's currently on my desk — updated as things
            change.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          {current.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 px-5 py-4 border border-border/30 hover:border-foreground/10 hover:bg-muted/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full border border-border/30 bg-muted/10 flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-foreground/20 transition-all duration-300 flex-shrink-0">
                {item.icon}
              </div>
              <div className="pt-1">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mb-1 block">
                  {item.label}
                </span>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/live"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          >
            View the full live feed →
          </a>
        </div>
      </div>
    </section>
  );
}
