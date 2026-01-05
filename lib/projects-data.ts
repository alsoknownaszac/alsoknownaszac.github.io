export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  problem: string
  solution: string
  impact: string[]
  role: string
  tech: string[]
  categories: string[]
  image: string
  gallery: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    tagline: "Full-stack marketplace connecting buyers and sellers",
    description:
      "Built a scalable e-commerce platform with real-time inventory management, secure payment processing, and dynamic product recommendations.",
    problem:
      "Small businesses struggled to compete with large marketplaces due to high fees and limited customization options.",
    solution:
      "Created an affordable, fully-customizable platform with low transaction fees, integrated analytics, and seamless third-party integrations.",
    impact: [
      "Onboarded 500+ sellers in first 6 months",
      "Processed $2M+ in transactions",
      "Achieved 98% uptime with zero data breaches",
      "Reduced cart abandonment by 35% with optimized checkout",
    ],
    role: "Lead Full-Stack Engineer",
    tech: ["Next.js", "PostgreSQL", "Stripe", "AWS S3", "Redis"],
    categories: ["Web App", "E-Commerce", "Full-Stack"],
    image: "/modern-ecommerce-dashboard.png",
    gallery: ["/ecommerce-product-listing.jpg", "/shopping-cart-interface.jpg", "/seller-dashboard-analytics.jpg"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    tagline: "ML-powered tool for creating marketing copy",
    description:
      "Developed an AI-powered content generation tool that helps marketers create high-quality copy for ads, emails, and social media in seconds.",
    problem:
      "Marketing teams spent hours brainstorming and writing copy, leading to bottlenecks and inconsistent brand voice.",
    solution:
      "Built an AI assistant trained on brand guidelines that generates on-brand copy with customizable tone, style, and length.",
    impact: [
      "Reduced content creation time by 70%",
      "Generated 100K+ pieces of copy for 500+ brands",
      "Improved engagement rates by 25% on average",
      "Achieved 4.8/5 user satisfaction rating",
    ],
    role: "Product Engineer & AI Integration Lead",
    tech: ["React", "Python", "OpenAI API", "FastAPI", "MongoDB"],
    categories: ["AI/ML", "SaaS", "Productivity"],
    image: "/ai-content-generation-interface.jpg",
    gallery: ["/ai-writing-assistant.jpg", "/brand-voice-customization.jpg", "/content-variations-preview.jpg"],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    tagline: "Collaborative workspace for distributed teams",
    description:
      "Created a real-time task management application with kanban boards, time tracking, and team collaboration features.",
    problem:
      "Remote teams lacked a unified platform that combined project management, communication, and time tracking.",
    solution:
      "Built an all-in-one workspace with real-time updates, integrations with popular tools, and insightful productivity analytics.",
    impact: [
      "Adopted by 200+ companies",
      "Managed 1M+ tasks across teams",
      "Improved team productivity by 40%",
      "Reduced meetings by 30% with async collaboration",
    ],
    role: "Co-Founder & Lead Developer",
    tech: ["TypeScript", "Node.js", "MongoDB", "WebSocket", "Docker"],
    categories: ["Web App", "Productivity", "SaaS"],
    image: "/project-management-kanban-board.png",
    gallery: ["/task-board.png", "/team-collaboration-chat.jpg", "/productivity-analytics-dashboard.png"],
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker Mobile App",
    tagline: "AI-powered personal fitness companion",
    description:
      "Mobile app that uses computer vision to track workouts, provide real-time form feedback, and generate personalized training plans.",
    problem: "Home workouts lacked the guidance and accountability of in-person training.",
    solution:
      "Leveraged device cameras and ML models to analyze exercise form and provide instant feedback, making quality training accessible.",
    impact: [
      "Downloaded by 50K+ users",
      "Averaged 4.6/5 star rating on app stores",
      "Users reported 60% improvement in form",
      "Featured in Apple App Store's Health & Fitness category",
    ],
    role: "Mobile Developer & ML Engineer",
    tech: ["React Native", "TensorFlow Lite", "Firebase", "Python"],
    categories: ["Mobile", "AI/ML", "Health"],
    image: "/fitness-tracking-app.png",
    gallery: ["/workout-form-analysis.jpg", "/training-plan-interface.jpg", "/progress-tracking-charts.jpg"],
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio Builder",
    tagline: "Create stunning portfolios in minutes",
    description:
      "A no-code platform for developers to create beautiful, customizable portfolios with pre-built templates and easy content management.",
    problem: "Developers spent more time building their portfolio sites than showcasing their actual work.",
    solution:
      "Designed a drag-and-drop builder with developer-focused templates, GitHub integration, and one-click deployment.",
    impact: [
      "Used by 10K+ developers",
      "Average portfolio creation time: 15 minutes",
      "95% of users deployed within first session",
      "Generated portfolios led to 300+ job offers",
    ],
    role: "Solo Developer",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
    categories: ["Web App", "Tools", "Developer Tools"],
    image: "/portfolio-builder-interface.jpg",
    gallery: ["/template-selection.jpg", "/drag-and-drop-editor.jpg", "/github-integration.jpg"],
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
]
