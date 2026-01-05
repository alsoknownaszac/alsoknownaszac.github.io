"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Link2,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Coffee,
  Heart,
  Copy,
  Check,
  MessageSquare,
  FileText,
} from "lucide-react"
import { useState } from "react"

interface Link {
  name: string
  url: string
  icon: any
  description: string
  category: "social" | "support" | "alias"
}

const links: Link[] = [
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: Mail,
    description: "Reach out for collaborations or questions",
    category: "social",
  },
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
    description: "Check out my code and open source contributions",
    category: "social",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
    description: "Connect professionally",
    category: "social",
  },
  {
    name: "Twitter/X",
    url: "https://twitter.com/yourusername",
    icon: Twitter,
    description: "Follow my thoughts on tech and building",
    category: "social",
  },
  {
    name: "Discord",
    url: "https://discord.gg/yourinvite",
    icon: MessageSquare,
    description: "Join the community and chat",
    category: "social",
  },
  {
    name: "Buy Me a Coffee",
    url: "https://buymeacoffee.com/yourusername",
    icon: Coffee,
    description: "Support my work with a coffee",
    category: "support",
  },
  {
    name: "Ko-fi",
    url: "https://ko-fi.com/yourusername",
    icon: Heart,
    description: "One-time or monthly support",
    category: "support",
  },
]

const aliases = [
  { name: "alsoknownaszac", platform: "GitHub" },
  { name: "theletterz", platform: "Twitter" },
  { name: "z_codes", platform: "Instagram" },
  { name: "zac.dev", platform: "Dev.to" },
]

export default function ContactPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const socialLinks = links.filter((link) => link.category === "social")
  const supportLinks = links.filter((link) => link.category === "support")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          icon={<Link2 className="w-10 h-10" />}
          title="Let's Connect"
          subtitle="Find me across the web, support my work, or discover my various online aliases."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
            Z
          </div>
          <h2 className="text-2xl font-bold mb-2">Your Name</h2>
          <p className="text-muted-foreground">Software Engineer & Product Builder</p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold mb-4">Social Links</h3>
          <div className="space-y-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="block group">
                    <Card className="p-4 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold group-hover:text-primary transition-colors">{link.name}</h4>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                        <div className="text-muted-foreground group-hover:text-primary transition-colors">→</div>
                      </div>
                    </Card>
                  </a>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold mb-4">Support My Work</h3>
          <Card className="p-6 bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20 mb-4">
            <p className="text-muted-foreground mb-4 leading-relaxed">
              If you find value in what I create and want to support my work, consider buying me a coffee or becoming a
              supporter. Your support helps me dedicate more time to open source projects, writing, and creating helpful
              content.
            </p>
          </Card>
          <div className="grid md:grid-cols-2 gap-3">
            {supportLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="block group">
                    <Card className="p-4 hover:border-secondary/50 transition-all duration-300 hover:scale-[1.02] h-full">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-bold group-hover:text-secondary transition-colors">{link.name}</h4>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                      </div>
                    </Card>
                  </a>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-xl font-bold mb-4">My Aliases</h3>
          <Card className="p-6">
            <p className="text-muted-foreground mb-4 text-sm">
              You might know me by different names across the internet. Here are all my aliases:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {aliases.map((alias, index) => (
                <div
                  key={alias.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">{alias.name}</p>
                      <p className="text-xs text-muted-foreground">{alias.platform}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleCopy(alias.name, index)}
                    className="h-8 w-8 p-0"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-12"
        >
          <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Looking for my resume?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my full professional experience and download a PDF copy.
            </p>
            <Button asChild size="lg">
              <a href="/resume">View Resume</a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
