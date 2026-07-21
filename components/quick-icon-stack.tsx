"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, FolderKanban, PenLine } from "lucide-react";

const links = [
  {
    label: "Résumé",
    href: "/resume",
    description: "Professional experience, skills, and background",
    icon: FileText,
  },
  {
    label: "Projects",
    href: "/projects",
    description: "In-depth case studies of products I've built",
    icon: FolderKanban,
  },
  {
    label: "Writing",
    href: "/blog",
    description: "Thoughts on engineering, design, and product craft",
    icon: PenLine,
  },
];

export function QuickIconStack() {
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
          Option I — Icon-Led Vertical Stack
        </motion.p>
      </div>

      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex flex-col">
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="group"
            >
              <Link
                href={link.href}
                className="flex items-start gap-6 md:gap-8 py-10 border-t border-border hover:border-foreground/20 transition-colors duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-border/60 text-muted-foreground group-hover:text-foreground group-hover:border-foreground/30 transition-colors duration-300">
                  <link.icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
                      {link.label}
                    </h3>
                    <span className="text-sm font-medium text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300 ml-4 flex-shrink-0">
                      →
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-md">
                    {link.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
