"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  icon?: ReactNode
}

export function SectionHeader({ title, subtitle, icon }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-3">
        {icon && <div className="text-primary">{icon}</div>}
        <h1 className="text-4xl md:text-5xl font-bold text-balance">{title}</h1>
      </div>
      {subtitle && <p className="text-lg text-muted-foreground text-pretty max-w-2xl">{subtitle}</p>}
    </motion.div>
  )
}
