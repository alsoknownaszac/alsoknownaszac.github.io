"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/lib/projects-data";

const featuredProjects: Project[] = projects
  .filter((p) => p.featured)
  .slice(0, 5);

// Varying aspect ratios for masonry effect
const aspectClasses = [
  "aspect-[4/5] md:row-span-2",
  "aspect-[16/9]",
  "aspect-[3/4] md:row-span-2",
  "aspect-[16/10] md:col-span-2",
  "aspect-[1/1]",
];

export function FeaturedMasonry() {
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
          Option J — Asymmetric Masonry Grid
        </motion.p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              viewport={{ once: true }}
              className={`${aspectClasses[i % aspectClasses.length]} group`}
            >
              <Link
                href={`/projects/${project.id}/`}
                className="block relative w-full h-full overflow-hidden border border-border/50"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mb-1.5 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm md:text-base font-semibold tracking-tight text-foreground leading-tight">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
