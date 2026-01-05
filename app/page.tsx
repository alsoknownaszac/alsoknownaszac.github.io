"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Briefcase, Activity, BookOpen } from "lucide-react"
import { HeroParallax } from "@/components/hero-parallax"
import { ParallaxSection, ParallaxText, ParallaxImage } from "@/components/parallax-section"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with real-time inventory",
    tech: ["Next.js", "PostgreSQL", "Stripe"],
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    title: "AI Content Generator",
    description: "ML-powered tool for creating marketing copy",
    tech: ["React", "Python", "OpenAI"],
    image: "/ai-content-generation-interface.jpg",
  },
  {
    title: "Task Management App",
    description: "Collaborative workspace for distributed teams",
    tech: ["TypeScript", "Node.js", "MongoDB"],
    image: "/project-management-kanban-board.png",
  },
]

const recentActivity = [
  { type: "learning", content: "Advanced TypeScript patterns", icon: "📚", time: "2 hours ago" },
  { type: "building", content: "Real-time chat feature", icon: "🛠️", time: "1 day ago" },
  { type: "music", content: "Focus & Flow playlist", icon: "🎵", time: "Currently" },
]

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <HeroParallax />

      {/* Featured Work Section */}
      <ParallaxSection speed={0.3} className="relative z-10 bg-background">
        <div className="container mx-auto px-4 py-32">
          <ParallaxText speed={0.2} className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Featured Work
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-muted-foreground"
                >
                  Products I've built and shipped
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button asChild variant="ghost" size="lg">
                  <Link href="/projects">
                    View All
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </ParallaxText>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden hover:border-primary/50 transition-all duration-500 cursor-pointer h-full">
                  <div className="aspect-video overflow-hidden bg-muted relative">
                    <ParallaxImage
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      speed={0.2}
                      className="w-full h-full"
                      scale={1.05}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Parallax Divider */}
      <ParallaxSection speed={0.5} className="relative h-96 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <ParallaxText speed={0.4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-muted-foreground/50 mb-4">
                Crafting Digital Experiences
              </h3>
              <p className="text-lg text-muted-foreground/70 max-w-2xl">
                Every project is an opportunity to solve real problems and create meaningful impact
              </p>
            </motion.div>
          </ParallaxText>
        </div>
      </ParallaxSection>

      {/* Recent Activity Section */}
      <ParallaxSection speed={0.2} className="relative z-10 bg-background">
        <div className="container mx-auto px-4 py-32">
          <ParallaxText speed={0.1} className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Recent Activity
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-muted-foreground"
                >
                  What I'm up to right now
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button asChild variant="ghost" size="lg">
                  <Link href="/now">
                    View All
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </ParallaxText>

          <div className="grid md:grid-cols-3 gap-6">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={activity.content}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <motion.span 
                      className="text-3xl group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 10 }}
                    >
                      {activity.icon}
                    </motion.span>
                    <div className="flex-1">
                      <p className="font-medium mb-2 group-hover:text-primary transition-colors">
                        {activity.content}
                      </p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Bottom Navigation Cards */}
      <ParallaxSection speed={0.1} className="relative z-10 bg-background">
        <div className="container mx-auto px-4 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <Card className="p-8 hover:border-primary/50 transition-all duration-500 group cursor-pointer relative overflow-hidden">
              <Link href="/resume" className="block relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Briefcase className="w-10 h-10 text-primary mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Resume
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  View my professional experience and download my resume
                </p>
              </Link>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>

            <Card className="p-8 hover:border-secondary/50 transition-all duration-500 group cursor-pointer relative overflow-hidden">
              <Link href="/blog" className="block relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <BookOpen className="w-10 h-10 text-secondary mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">
                  Blog
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Read my thoughts on tech, development, and product building
                </p>
              </Link>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>

            <Card className="p-8 hover:border-primary/50 transition-all duration-500 group cursor-pointer relative overflow-hidden">
              <Link href="/now" className="block relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Activity className="w-10 h-10 text-primary mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Now
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Check what I'm currently working on and learning
                </p>
              </Link>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          </motion.div>
        </div>
      </ParallaxSection>
    </div>
  )
}
