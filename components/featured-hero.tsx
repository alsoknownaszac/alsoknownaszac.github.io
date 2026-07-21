"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { projects, type Project } from "@/lib/projects-data";

const featuredProjects: Project[] = projects
  .filter((p) => p.featured)
  .slice(0, 3);

export function FeaturedHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-muted/30 overflow-hidden py-24 md:py-32"
    >
      <div className="container mx-auto px-4 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs font-medium text-muted-foreground uppercase tracking-widest"
        >
          Option D — Full-Width Featured Hero
        </motion.p>
      </div>

      {/* Hero Project — Full Width */}
      {featuredProjects.slice(0, 1).map((project, i) => {
        const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
        return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 mb-12"
          >
            <Link href={`/projects/${project.id}/`} className="group block">
              <motion.div
                style={{ y }}
                className="relative aspect-[21/9] overflow-hidden border border-border/50 mb-6"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <span className="inline-block px-2.5 py-0.5 bg-foreground/90 text-background text-xs font-medium mb-4">
                    Featured
                  </span>
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                    {project.tagline}
                  </p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}

      {/* Remaining two — Side by side */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
        {featuredProjects.slice(1, 3).map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            viewport={{ once: true }}
          >
            <Link href={`/projects/${project.id}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden border border-border/50 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {project.tagline}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
