"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ExternalLink, Github, Target, Lightbulb, TrendingUp } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { use } from "react"

export default function ProjectDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = use(props.params)
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        <div className="mb-8">
          {project.featured && <Badge className="mb-4 bg-primary text-primary-foreground">Featured Project</Badge>}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.tagline}</p>
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild size="lg" className="gap-2">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  View Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  View Source Code
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="aspect-video overflow-hidden rounded-lg bg-muted mb-8">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <Target className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-bold mb-2">Problem</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
          </Card>
          <Card className="p-6">
            <Lightbulb className="w-8 h-8 text-secondary mb-3" />
            <h3 className="font-bold mb-2">Solution</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
          </Card>
          <Card className="p-6">
            <TrendingUp className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-bold mb-2">Role</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.role}</p>
          </Card>
        </div>

        <Separator className="my-12" />

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Impact & Results</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.impact.map((item, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {project.gallery.length > 0 && (
          <>
            <Separator className="my-12" />
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Gallery</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <Separator className="my-12" />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
