"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 0]);

  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });
  const springY3 = useSpring(y3, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Subtle background gradient */}
      <motion.div
        style={{ y: springY3 }}
        className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-transparent"
      />

      <motion.div
        style={{ y: springY2 }}
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-muted/30 rounded-full blur-3xl"
      />

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 flex flex-col justify-center min-h-screen pt-14"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6"
          >
            Collins Amayo — Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-balance leading-tight tracking-tight"
          >
            Building products{" "}
            <span className="text-muted-foreground">that solve</span> problems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base md:text-lg text-muted-foreground mb-10 text-pretty leading-relaxed max-w-xl"
          >
            Software Engineer with 4+ years building production-grade web
            applications across fintech, SaaS, healthcare, and digital commerce.
            Founder of Prevision Digital Agency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              View projects
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <span className="text-xs text-muted-foreground/60">Scroll</span>
      </motion.div>
    </div>
  );
}
