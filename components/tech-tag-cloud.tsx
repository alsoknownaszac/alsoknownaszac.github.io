"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Ruby on Rails",
  "PostgreSQL",
  "GraphQL",
  "Stripe",
  "Playwright",
  "Framer Motion",
  "REST APIs",
  "Git & GitHub",
  "Vercel",
  "Figma",
  "Docker",
  "AWS",
  "Python",
  "Redis",
  "Prisma",
];

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Pre-compute all tag positions once — runs at import time, never re-executes
const positionedSkills = skills.map((skill, i) => {
  const seed = i * 7 + 3;
  return {
    name: skill,
    left: seededRandom(seed) * 92 + 3,
    top: seededRandom(seed + 1) * 92 + 3,
    isLarge: seededRandom(seed + 2) > 0.7,
    isMedium: seededRandom(seed + 2) > 0.4 && seededRandom(seed + 2) <= 0.7,
    opacityHigh: seededRandom(seed + 3) > 0.7,
    opacityMid: seededRandom(seed + 3) > 0.35 && seededRandom(seed + 3) <= 0.7,
  };
});

export function TechTagCloud() {
  const cloudRef = useRef<HTMLDivElement>(null);

  // Single IntersectionObserver — reveals all tags with CSS transitions
  useEffect(() => {
    const el = cloudRef.current;
    if (!el) return;

    const tags = el.querySelectorAll<HTMLDivElement>(".cloud-tag");
    if (tags.length === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tags.forEach((tag, i) => {
            setTimeout(() => {
              tag.classList.add("visible");
            }, i * 40);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 bg-background overflow-hidden py-24 md:py-32">
      {/* Title — still Framer Motion, just one element */}
      <div className="container mx-auto px-4 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Technologies
          </h2>
          <p className="font-mono text-sm text-muted-foreground/60 mt-3 leading-relaxed max-w-lg">
            The stack I reach for when building production-grade applications.
          </p>
        </motion.div>
      </div>

      {/* Tag cloud — zero Framer Motion, plain divs + CSS transitions */}
      <div
        ref={cloudRef}
        className="container mx-auto px-4 relative min-h-[550px] md:min-h-[650px]"
      >
        {positionedSkills.map((skill) => {
          const sizeClass = skill.isLarge
            ? "text-2xl md:text-3xl font-semibold"
            : skill.isMedium
              ? "text-lg md:text-xl font-medium"
              : "text-sm md:text-base font-normal";

          const opacityClass = skill.opacityHigh
            ? "text-foreground/90"
            : skill.opacityMid
              ? "text-muted-foreground"
              : "text-muted-foreground/50";

          return (
            <div
              key={skill.name}
              className={`cloud-tag absolute opacity-0 scale-90 ${sizeClass} ${opacityClass} hover:text-foreground transition-colors duration-300 cursor-default select-none`}
              style={{
                left: `${skill.left}%`,
                top: `${skill.top}%`,
                transform: "translate(-50%, -50%)",
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              }}
            >
              {skill.name}
            </div>
          );
        })}
      </div>

      {/* Scoped CSS — matches only inside this component's section context */}
      <style jsx>{`
        div :global(.cloud-tag.visible) {
          opacity: 1 !important;
          transform: translate(-50%, -50%) scale(1) !important;
        }
      `}</style>
    </section>
  );
}
