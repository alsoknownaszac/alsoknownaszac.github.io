"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageWrapper } from "@/components/page-wrapper";
import { SectionHeader } from "@/components/section-header";
import { Briefcase, ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/projects-data";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        <section>
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-sm text-muted-foreground/60 mb-12 leading-relaxed">
              A selection of projects I've built — from fintech platforms to
              healthcare systems and everything in between.
            </p>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                viewport={{ once: true }}
                className="group border-t border-border hover:border-foreground/15 transition-colors duration-300"
              >
                <div className="py-8 md:py-10">
                  {/* Top row: numbering + role */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-muted-foreground/40 tabular-nums">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
                      {project.role}
                    </span>
                  </div>

                  {/* Title + tagline */}
                  <Link href={`/projects/${project.id}/`} className="block">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground group-hover:text-muted-foreground transition-colors mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xl">
                      {project.tagline}
                    </p>
                  </Link>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground/70 leading-relaxed mb-5 line-clamp-3 max-w-xl">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] text-muted-foreground/60 px-2 py-0.5 border border-border/30"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="text-[11px] text-muted-foreground/40 px-2 py-0.5">
                        +{project.tech.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={`/projects/${project.id}/`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                    >
                      Case study
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
