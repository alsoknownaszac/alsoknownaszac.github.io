"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/projects-data";

const featured = projects.filter((p) => p.featured).slice(0, 5);

export function FeaturedCards() {
  return (
    <section className="relative z-10 py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">
            • FeaturedCards v2
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Recent Work
          </h2>
          <p className="font-mono text-sm text-muted-foreground/60 mt-3 leading-relaxed max-w-lg">
            Production-grade applications shipped with care — scroll through the
            highlights.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        {/* Horizontally scrollable card strip */}
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide max-w-full">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[300px] md:w-[380px] snap-start group"
            >
              <Link href={`/projects/${project.id}/`} className="block">
                {/* Image card */}
                <div className="relative aspect-[4/3] overflow-hidden border border-border/40 mb-4 group-hover:border-foreground/15 transition-colors duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 300px, 380px"
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                    <span className="text-sm font-medium text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      View case study →
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
                      {project.role}
                    </span>
                    <span className="text-muted-foreground/30">·</span>
                    <span className="text-[11px] text-muted-foreground/50">
                      {project.tech.length} technologies
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-muted-foreground transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mt-6 text-xs text-muted-foreground/40"
        >
          <span className="animate-pulse">←</span>
          <span>scroll to explore</span>
          <span className="animate-pulse">→</span>
        </motion.div>
      </div>
    </section>
  );
}
