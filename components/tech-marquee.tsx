"use client";

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

export function TechMarquee() {
  return (
    <section className="relative z-10 bg-background overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-4 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs font-medium text-muted-foreground uppercase tracking-widest"
        >
          Option A — Dual Marquees
        </motion.p>
      </div>

      {/* First row — scrolls left */}
      <div className="flex w-full overflow-hidden mb-4">
        <motion.div
          className="flex gap-6 flex-shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="whitespace-nowrap text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground/85 hover:text-foreground transition-colors duration-300 cursor-default select-none"
            >
              {skill}
              <span className="text-muted-foreground/30 mx-3">·</span>
            </span>
          ))}
        </motion.div>
        {/* Duplicate for seamless loop */}
        <motion.div
          className="flex gap-6 flex-shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={`${skill}-dup-${i}`}
              className="whitespace-nowrap text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground/85 hover:text-foreground transition-colors duration-300 cursor-default select-none"
            >
              {skill}
              <span className="text-muted-foreground/30 mx-3">·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Second row — scrolls right, slower, lighter */}
      <div className="flex w-full overflow-hidden mt-4">
        <motion.div
          className="flex gap-6 flex-shrink-0"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={`${skill}-r-${i}`}
              className="whitespace-nowrap text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300 cursor-default select-none"
            >
              {skill}
              <span className="text-border mx-3">·</span>
            </span>
          ))}
        </motion.div>
        <motion.div
          className="flex gap-6 flex-shrink-0"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={`${skill}-r-dup-${i}`}
              className="whitespace-nowrap text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300 cursor-default select-none"
            >
              {skill}
              <span className="text-border mx-3">·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-background z-10" />
    </section>
  );
}
