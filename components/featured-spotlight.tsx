"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects-data";

const featuredProjects: Project[] = projects
  .filter((p) => p.featured)
  .slice(0, 5);

export function FeaturedSpotlight() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % featuredProjects.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length,
    );
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const project = featuredProjects[current];

  return (
    <section className="relative z-10 bg-muted/30 overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-4 mb-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs font-medium text-muted-foreground uppercase tracking-widest"
        >
          Featured Work
        </motion.p>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Spotlight content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
            >
              {/* Image */}
              <div className="w-full md:w-3/5 relative aspect-[16/10] overflow-hidden border border-border/50">
                <Link href={`/projects/${project.id}/`} className="block group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
              </div>

              {/* Details */}
              <div className="w-full md:w-2/5">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3 block">
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(featuredProjects.length).padStart(2, "0")}
                </span>
                <Link href={`/projects/${project.id}`} className="block group">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs text-muted-foreground/70 px-2 py-0.5 border border-border/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    View case study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center border border-border/50 hover:border-foreground/20 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {featuredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    i === current ? "bg-foreground" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center border border-border/50 hover:border-foreground/20 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
