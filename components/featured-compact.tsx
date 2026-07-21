"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects-data";

const featured = projects.filter((p) => p.featured).slice(0, 5);

export function FeaturedCompact() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto px-4 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">
            • FeaturedCompact v3
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            What I've Built
          </h2>
          <p className="font-mono text-sm text-muted-foreground/60 mt-3 leading-relaxed max-w-lg">
            A timeline of shipped work — each project linked to its full case
            study.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/projects/${project.id}/`}
                className="group flex items-start gap-5 py-6 border-t border-border/50 hover:border-foreground/10 transition-colors duration-300"
              >
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 relative overflow-hidden border border-border/30 group-hover:border-foreground/15 transition-colors duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider">
                      {project.role}
                    </span>
                    <span className="text-muted-foreground/25 text-[10px]">
                      ·
                    </span>
                    <span className="text-[10px] text-muted-foreground/40">
                      {project.categories[0]}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold tracking-tight text-foreground group-hover:text-muted-foreground transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground/60 leading-relaxed line-clamp-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 flex items-center pt-1">
                  <ArrowRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-muted-foreground group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
