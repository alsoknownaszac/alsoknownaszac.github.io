"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/lib/projects-data";

const featuredProjects: Project[] = projects
  .filter((p) => p.featured)
  .slice(0, 5);

export function FeaturedScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative z-10 bg-background overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-4 mb-12">
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

      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08 * i }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[85vw] md:w-[55vw] lg:w-[40vw] snap-start group cursor-pointer"
          >
            <Link href={`/projects/${project.id}/`} className="block">
              <div className="relative aspect-[16/9] overflow-hidden border border-border/50 mb-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 55vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-medium text-muted-foreground mb-2 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Fade edge on the right */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
    </section>
  );
}
