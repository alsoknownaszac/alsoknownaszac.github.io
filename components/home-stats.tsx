"use client";

const stats = [
  { value: 4, suffix: "+", label: "Years building" },
  { value: 15, suffix: "+", label: "Projects shipped" },
  { value: 8, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Remote-ready" },
];

export function StatsCounter() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto px-4 mb-14">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            By the Numbers
          </h2>
          <p className="font-mono text-sm text-muted-foreground/60 mt-3 leading-relaxed max-w-lg">
            A quick snapshot — each number represents real, shipped work.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2 tabular-nums">
                {stat.value}
                {stat.suffix}
              </div>
              <p className="text-xs text-muted-foreground/60 uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
