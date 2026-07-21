"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects-data";

const featuredProjects: Project[] = projects
  .filter((p) => p.featured)
  .slice(0, 3);

export function FeaturedStacked() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative z-10 bg-muted/30 overflow-hidden py-24 md:py-32"
      style={{ minHeight: "200vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-xs font-medium text-muted-foreground uppercase tracking-widest"
          >
            Option M — Depth-Stacked Cards
          </motion.p>
        </div>

        <div
          className="container mx-auto px-4 relative flex items-center justify-center"
          style={{ height: "60vh" }}
        >
          {featuredProjects.map((project, i) => {
            const progressStart = i * (1 / featuredProjects.length);
            const progressEnd = (i + 1) * (1 / featuredProjects.length);
            const y = useTransform(
              scrollYProgress,
              [progressStart, progressEnd],
              [i * 30, (i + 1) * 30],
            );
            const scale = useTransform(
              scrollYProgress,
              [progressStart, progressEnd],
              [1 - i * 0.03, 1 - (i + 1) * 0.03],
            );
            const opacity = useTransform(
              scrollYProgress,
              [
                progressStart,
                progressStart + 0.05,
                progressEnd - 0.05,
                progressEnd,
              ],
              [1, 1, 1, 0.3],
            );
            const zIndex = featuredProjects.length - i;

            return (
              <motion.div
                key={project.id}
                style={{
                  y,
                  scale,
                  opacity,
                  zIndex,
                  rotate: i * 0.8 - 0.8,
                }}
                className="absolute w-full max-w-2xl"
              >
                <Link
                  href={`/projects/${project.id}/`}
                  className="block border border-border/60 bg-card shadow-2xl shadow-black/[0.04] group"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 672px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mb-1 block">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors inline-flex items-center gap-1 flex-shrink-0 ml-4">
                        View
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scroll downward hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground/40">
            Scroll to unstack
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-4 h-4 border-r-2 border-b-2 border-muted-foreground/30 rotate-45"
          />
        </motion.div>
      </div>
    </section>
  );
}
