"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const items = [
  { label: "React", size: "large", align: "left" },
  { label: "Next.js", size: "large", align: "right" },
  { label: "TypeScript", size: "medium", align: "center" },
  { label: "Tailwind CSS", size: "small", align: "left" },
  { label: "Node.js", size: "medium", align: "right" },
  { label: "Ruby on Rails", size: "small", align: "left" },
  { label: "PostgreSQL", size: "large", align: "center" },
  { label: "GraphQL", size: "small", align: "right" },
  { label: "Stripe", size: "medium", align: "left" },
  { label: "Playwright", size: "small", align: "center" },
  { label: "Framer Motion", size: "medium", align: "right" },
  { label: "Figma", size: "small", align: "left" },
];

const sizeClasses = {
  large: "text-5xl md:text-7xl lg:text-8xl font-semibold",
  medium: "text-3xl md:text-4xl lg:text-5xl font-medium",
  small: "text-xl md:text-2xl lg:text-3xl font-light",
};

const alignClasses = {
  left: "text-left ml-0",
  center: "text-center",
  right: "text-right ml-auto",
};

export function TechTypographic() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative z-10 bg-muted/30 overflow-hidden py-24 md:py-32"
    >
      <div className="container mx-auto px-4 mb-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs font-medium text-muted-foreground uppercase tracking-widest"
        >
          Option B — Typographic Display
        </motion.p>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.05 * i,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`${sizeClasses[item.size as keyof typeof sizeClasses]} ${alignClasses[item.align as keyof typeof alignClasses]} tracking-tight leading-tight text-foreground/80 hover:text-foreground transition-colors duration-300 cursor-default select-none`}
            >
              {item.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
