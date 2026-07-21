"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects-data";

const featuredProjects: Project[] = projects
  .filter((p) => p.featured)
  .slice(0, 3);

export function FeaturedSplitPanel() {
  return (
    <section className="relative z-10 bg-background overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-4 mb-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs font-medium text-muted-foreground uppercase tracking-widest"
        >
          Option L — Split-Panel Overlay
        </motion.p>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col gap-0">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: true, margin: "-60px" }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-0 border-t border-border`}
            >
              {/* Image Panel */}
              <div className="flex-1 relative aspect-[4/3] md:aspect-auto overflow-hidden border-b md:border-b-0 md:border-r border-border/50">
                <Link
                  href={`/projects/${project.id}/`}
                  className="block group h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />
                  {/* Overlay that pulls back on hover */}
                  <div className="absolute inset-0 bg-foreground/70 group-hover:bg-foreground/30 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-background/80 text-7xl md:text-9xl font-bold opacity-20 group-hover:opacity-0 transition-opacity duration-500 select-none pointer-events-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Link>
              </div>

              {/* Content Panel */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <Link href={`/projects/${project.id}`} className="block group">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4 block">
                    {String(i + 1).padStart(2, "0")} / 0
                    {featuredProjects.length}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground mb-4 group-hover:text-foreground/80 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-md">
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
          ))}
        </div>
      </div>
    </section>
  );
}
