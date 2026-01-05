"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Code, Briefcase, Music, Gamepad2, MapPin, Clock } from "lucide-react"

const activities = [
  {
    category: "learning",
    icon: Code,
    status: "Active",
    title: "Advanced TypeScript Patterns",
    description: "Deep diving into advanced generic types, conditional types, and utility types",
    tags: ["TypeScript", "Advanced"],
    time: "Started 2 weeks ago",
    color: "primary",
  },
  {
    category: "learning",
    icon: Code,
    status: "Active",
    title: "WebGL & Three.js",
    description: "Building interactive 3D experiences for the web",
    tags: ["WebGL", "3D Graphics"],
    time: "Started 1 week ago",
    color: "primary",
  },
  {
    category: "building",
    icon: Briefcase,
    status: "Active",
    title: "Real-time Collaboration Tool",
    description: "Building a collaborative workspace with WebSockets and CRDT for conflict resolution",
    tags: ["Next.js", "WebSocket", "Redis"],
    time: "Week 3 of 8",
    color: "secondary",
  },
  {
    category: "building",
    icon: Briefcase,
    status: "Recently",
    title: "AI-Powered Code Review Bot",
    description: "Automated code review system using GPT-4 for pull request analysis",
    tags: ["Python", "OpenAI", "GitHub Actions"],
    time: "Completed 3 days ago",
    color: "secondary",
  },
  {
    category: "side-hustle",
    icon: Briefcase,
    status: "Active",
    title: "Freelance Development",
    description: "Building custom web applications for small businesses",
    tags: ["Consulting", "Full-stack"],
    time: "Ongoing",
    color: "primary",
  },
  {
    category: "music",
    icon: Music,
    status: "Currently",
    title: "Lo-fi Hip Hop Radio",
    description: "Beats to code/study to - my current focus playlist",
    tags: ["Focus", "Instrumental"],
    time: "Now playing",
    color: "secondary",
  },
  {
    category: "music",
    icon: Music,
    status: "Recently",
    title: "Synthwave Mix",
    description: "Retro vibes for late-night coding sessions",
    tags: ["Electronic", "Synthwave"],
    time: "Last listened 2 hours ago",
    color: "secondary",
  },
  {
    category: "gaming",
    icon: Gamepad2,
    status: "Active",
    title: "Baldur's Gate 3",
    description: "Epic RPG adventure, currently in Act 2",
    tags: ["RPG", "Story-driven"],
    time: "15 hours playtime",
    color: "primary",
  },
  {
    category: "life",
    icon: MapPin,
    status: "Currently",
    title: "Working remotely",
    description: "Embracing the digital nomad lifestyle while building products",
    tags: ["Remote", "Travel"],
    time: "Ongoing",
    color: "secondary",
  },
]

const statusColors = {
  Active: "bg-green-500/10 text-green-500 border-green-500/20",
  Recently: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  Currently: "bg-purple-500/10 text-purple-500 border-purple-500/20",
}

const categories = [
  { name: "All", value: "all" },
  { name: "Learning", value: "learning" },
  { name: "Building", value: "building" },
  { name: "Side Hustles", value: "side-hustle" },
  { name: "Music", value: "music" },
  { name: "Gaming", value: "gaming" },
  { name: "Life", value: "life" },
]

export default function NowPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeader
        icon={<Activity className="w-10 h-10" />}
        title="What I'm Doing Now"
        subtitle="A real-time snapshot of my current activities, projects, and interests. Updated regularly to give you insight into my world."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Clock className="w-4 h-4" />
          <span>Last updated: 2 hours ago</span>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="p-6 h-full hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-2 rounded-lg ${activity.color === "primary" ? "bg-primary/10" : "bg-secondary/10"}`}
                  >
                    <Icon className={`w-5 h-5 ${activity.color === "primary" ? "text-primary" : "text-secondary"}`} />
                  </div>
                  <Badge className={statusColors[activity.status as keyof typeof statusColors]} variant="outline">
                    {activity.status}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{activity.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{activity.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {activity.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {activity.time}
                </p>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12"
      >
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <h3 className="text-2xl font-bold mb-4">About This Page</h3>
          <p className="text-muted-foreground leading-relaxed">
            Inspired by Derek Sivers' "now page" concept, this is my digital check-in. It's a living document that shows
            what I'm focused on right now - projects I'm building, skills I'm learning, music I'm listening to, and how
            I'm spending my time. It's more than a status update; it's a commitment tracker and a window into my current
            priorities.
          </p>
        </Card>
      </motion.div>
    </div>
  )
}
