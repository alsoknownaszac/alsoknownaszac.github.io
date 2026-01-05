"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 })
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 })
  const springY3 = useSpring(y3, { stiffness: 100, damping: 30 })

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y: springY3 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
      />
      
      {/* Floating Elements */}
      <motion.div
        style={{ y: springY2 }}
        className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"
      />
      <motion.div
        style={{ y: springY1 }}
        className="absolute bottom-40 left-10 w-24 h-24 bg-secondary/10 rounded-full blur-lg"
      />

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-4 flex flex-col justify-center min-h-screen"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge className="w-fit mb-6 bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
            Available for opportunities
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-balance leading-none"
        >
          Building{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-300% animate-gradient"
          >
            products
          </motion.span>
          that solve{" "}
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted-foreground"
          >
            problems
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-4xl leading-relaxed"
        >
          Software engineer crafting seamless digital experiences. 
          Focused on building scalable, user-centric products that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap gap-6"
        >
          <Button asChild size="lg" className="group text-lg px-8 py-6">
            <Link href="/projects">
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 backdrop-blur-sm">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}