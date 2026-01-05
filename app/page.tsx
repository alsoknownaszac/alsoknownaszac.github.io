"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Briefcase, Activity, BookOpen } from "lucide-react"

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
    <div className="container mx-auto px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-[calc(100vh-12rem)] flex flex-col justify-center mb-20"
      >
        <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20">Available for opportunities</Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Building products that{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            solve problems
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl leading-relaxed">
          Software engineer crafting seamless digital experiences. Focused on building scalable, user-centric products
          that make a difference.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-20"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Work</h2>
            <p className="text-muted-foreground">Products I've built and shipped</p>
          </div>
          <Button asChild variant="ghost">
            <Link href="/projects">
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="group overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
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
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-20"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Recent Activity</h2>
            <p className="text-muted-foreground">What I'm up to right now</p>
          </div>
          <Button asChild variant="ghost">
            <Link href="/now">
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {recentActivity.map((activity, index) => (
            <motion.div
              key={activity.content}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="p-4 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{activity.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium mb-1">{activity.content}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <Card className="p-6 hover:border-primary/50 transition-colors group cursor-pointer">
          <Link href="/resume" className="block">
            <Briefcase className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Resume</h3>
            <p className="text-muted-foreground text-sm">View my professional experience and download my resume</p>
          </Link>
        </Card>
        <Card className="p-6 hover:border-secondary/50 transition-colors group cursor-pointer">
          <Link href="/blog" className="block">
            <BookOpen className="w-8 h-8 text-secondary mb-4" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">Blog</h3>
            <p className="text-muted-foreground text-sm">Read my thoughts on tech, development, and product building</p>
          </Link>
        </Card>
        <Card className="p-6 hover:border-primary/50 transition-colors group cursor-pointer">
          <Link href="/now" className="block">
            <Activity className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Now</h3>
            <p className="text-muted-foreground text-sm">Check what I'm currently working on and learning</p>
          </Link>
        </Card>
      </motion.section>
    </div>
  )
}
