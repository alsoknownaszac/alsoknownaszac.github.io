"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  {
    label: "Résumé",
    href: "/resume",
    detail: "Professional experience & background",
  },
  { label: "Projects", href: "/projects", detail: "In-depth case studies" },
  {
    label: "Writing",
    href: "/blog",
    detail: "Thoughts on engineering & design",
  },
];

export function QuickLine() {
  return (
    <section className="relative z-10 bg-muted/30 overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-4 mb-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs font-medium text-muted-foreground uppercase tracking-widest"
        >
          Option H — Minimal Horizontal Line Row
        </motion.p>
      </div>

      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex flex-col gap-0">
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: true }}
            >
              <Link
                href={link.href}
                className="group flex items-center justify-between py-8 border-t border-border hover:border-foreground/30 transition-colors duration-300"
              >
                <div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-sm text-muted-foreground/60 mt-0.5">
                    {link.detail}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden md:block h-px w-12 bg-border group-hover:w-20 group-hover:bg-foreground/30 transition-all duration-300" />
                  <span className="text-sm font-medium text-muted-foreground/60 group-hover:text-foreground transition-colors">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
