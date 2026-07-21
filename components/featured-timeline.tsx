"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects-data";

const featuredProjects: Project[] = projects
  .filter((p) => p.featured)
  .slice(0, 3);

export function FeaturedTimeline() {
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
          Option F — Numbered Timeline Cards
        </motion.p>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col gap-16 md:gap-20">
          {featuredProjects.map((project, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                viewport={{ once: true, margin: "-80px" }}
                className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center group`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <Link
                    href={`/projects/${project.id}/`}
                    className="block overflow-hidden border border-border/50 relative aspect-[4/3]"
                  >
                    <div className="absolute top-4 left-4 z-10 text-7xl md:text-8xl font-bold text-foreground/5 select-none pointer-events-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Link href={`/projects/${project.id}`} className="block">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3 block">
                      {String(i + 1).padStart(2, "0")} / 0
                      {featuredProjects.length}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-5">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-muted-foreground/70 px-2 py-0.5 border border-border/40"
                        >
                          {tech}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
