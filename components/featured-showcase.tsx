"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects-data";

const featured = projects.filter((p) => p.featured).slice(0, 5);

export function FeaturedShowcase() {
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
            • FeaturedShowcase v1
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Selected Work
          </h2>
          <p className="font-mono text-sm text-muted-foreground/60 mt-3 leading-relaxed max-w-lg">
            A handpicked selection of production-grade projects across fintech,
            SaaS, and digital commerce.
          </p>
        </motion.div>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-20">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
            >
              <div className="w-full md:w-3/5 relative aspect-[16/10] overflow-hidden border border-border/40 group">
                <Link
                  href={`/projects/${project.id}/`}
                  className="block h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />
                </Link>
              </div>
              <div className="w-full md:w-2/5">
                <span className="text-xs font-mono text-muted-foreground/50 mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mb-3 block">
                  {project.role}
                </span>
                <Link href={`/projects/${project.id}/`} className="block group">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3 group-hover:text-foreground/70 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] text-muted-foreground/60 px-2 py-0.5 border border-border/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    View project <ArrowRight className="w-3.5 h-3.5" />
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
