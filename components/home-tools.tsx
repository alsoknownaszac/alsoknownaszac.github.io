"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Terminal,
  Figma,
  Database,
  Cloud,
  GitBranch,
  Container,
  Workflow,
} from "lucide-react";

const tools = [
  {
    icon: <Monitor className="w-4 h-4" />,
    name: "VS Code",
    category: "Editor",
  },
  {
    icon: <Terminal className="w-4 h-4" />,
    name: "Warp",
    category: "Terminal",
  },
  { icon: <Figma className="w-4 h-4" />, name: "Figma", category: "Design" },
  {
    icon: <GitBranch className="w-4 h-4" />,
    name: "GitHub",
    category: "Version Control",
  },
  {
    icon: <Database className="w-4 h-4" />,
    name: "Supabase",
    category: "Database",
  },
  {
    icon: <Cloud className="w-4 h-4" />,
    name: "Vercel",
    category: "Deployment",
  },
  {
    icon: <Container className="w-4 h-4" />,
    name: "Docker",
    category: "DevOps",
  },
  {
    icon: <Workflow className="w-4 h-4" />,
    name: "Linear",
    category: "Project Mgmt",
  },
];

export function ToolsMarquee() {
  return (
    <section className="relative z-10 py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            My Environment
          </h2>
          <p className="font-mono text-sm text-muted-foreground/60 mt-3 leading-relaxed max-w-lg">
            The tools I use daily to design, build, ship, and maintain
            production-grade software.
          </p>
        </motion.div>
      </div>

      {/* Marquee row 1 — left to right */}
      <div className="relative mb-6">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {[...tools, ...tools].map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 border border-border/30 hover:border-foreground/10 hover:bg-muted/10 transition-all duration-300 group"
            >
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {tool.name}
                </p>
                <p className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">
                  {tool.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — right to left (reversed) */}
      <div className="relative">
        <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap">
          {[...tools].reverse().map((tool, i) => (
            <div
              key={`rev-${tool.name}-${i}`}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 border border-border/30 hover:border-foreground/10 hover:bg-muted/10 transition-all duration-300 group"
            >
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {tool.name}
                </p>
                <p className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">
                  {tool.category}
                </p>
              </div>
            </div>
          ))}
          {[...tools].reverse().map((tool, i) => (
            <div
              key={`rev2-${tool.name}-${i}`}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 border border-border/30 hover:border-foreground/10 hover:bg-muted/10 transition-all duration-300 group"
            >
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {tool.name}
                </p>
                <p className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">
                  {tool.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
