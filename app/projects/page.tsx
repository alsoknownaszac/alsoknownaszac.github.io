"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { SectionHeader } from "@/components/section-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, ExternalLink, Github, ArrowRight } from "lucide-react"
import { projects } from "@/lib/projects-data"

const categories = ["All", "Web App", "Mobile", "AI/ML", "SaaS", "E-Commerce", "Tools"] as const

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.categories.includes(selectedCategory))

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeader
        icon={<Briefcase className="w-10 h-10" />}
        title="Projects"
        subtitle="A showcase of products I've built, shipped, and contributed to. Each project represents real problems solved with thoughtful engineering."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </motion.div>

      <div className="space-y-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300 group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-video md:aspect-auto overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
                  )}
                </div>

                <div className="p-6 md:p-8 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">{project.tagline}</p>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">
                      <span className="font-semibold">Role:</span> {project.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    <Button asChild size="sm" className="gap-2">
                      <Link href={`/projects/${project.id}`}>
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button asChild size="sm" variant="outline" className="gap-2 bg-transparent">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild size="sm" variant="outline" className="gap-2 bg-transparent">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <p className="text-muted-foreground">No projects found in this category.</p>
        </motion.div>
      )}
    </div>
  )
}
