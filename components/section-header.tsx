"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
}

export function SectionHeader({ title, subtitle, icon }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-12"
    >
      {icon && <div className="text-muted-foreground mb-3">{icon}</div>}
      {title && (
        <h1 className="text-3xl md:text-4xl font-semibold text-balance tracking-tight mb-3">
          {title}
        </h1>
      )}
      {subtitle && (
        <p className="text-sm md:text-base text-muted-foreground/60 text-pretty max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
