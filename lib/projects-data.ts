export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  impact: string[];
  role: string;
  tech: string[];
  categories: string[];
  image: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "loanmate",
    title: "LoanMate",
    tagline: "Multi-tenant loan management platform for lenders and borrowers",
    description:
      "A full-stack, multi-tenant SaaS platform for managing loans, borrowers, payments, and documents. Built with Next.js 15, TypeScript, Supabase, and Tailwind CSS — featuring dual authentication, automated payment schedules, document management, and live chat.",
    problem:
      "Small lending organizations manage operations with Excel spreadsheets and manual processes. Existing solutions are lender-first, heavy, expensive ($50K-$500K/yr), and provide terrible UX for borrowers.",
    solution:
      "Built LoanMate as a lightweight, borrower-first experience layer. Features multi-tenant architecture with complete data isolation, dual authentication (admin/borrower), automated amortization schedules, Gmail SMTP with Resend fallback for 99%+ email delivery, and Row Level Security at the database level.",
    impact: [
      "Designed for 1-day setup vs 6–12 months for enterprise solutions",
      "Dual-provider email system for 99%+ delivery reliability",
      "Multi-tenant architecture with PostgreSQL Row Level Security",
      "Mobile-responsive across phones, tablets, and desktops",
      "Custom UI components replacing all browser alerts for professional UX",
    ],
    role: "Full-Stack Engineer",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "PostgreSQL",
      "Shadcn/ui",
    ],
    categories: ["Web App", "SaaS", "Full-Stack"],
    image: "/modern-ecommerce-dashboard.png",
    gallery: [],
    liveUrl: "https://v0-loan-mate-borrower-portal.vercel.app/",
    githubUrl: "https://github.com/stephaneK123/loan-mate-borrower-portal",
    featured: true,
  },
  {
    id: "question-tracker",
    title: "Question Tracker",
    tagline: "Responsive web app to help students track their questions",
    description:
      "A question tracking application built for students, designed to be integrated into a WordPress site or hosted independently. Allows individuals to track, manage, and review their questions with a clean, responsive interface.",
    problem:
      "Students lacked a dedicated tool to track and manage their questions across study sessions. Existing solutions were clunky or not integrated into their existing learning platforms.",
    solution:
      "Built a responsive web-based question tracker from the ground up — with Figma-designed wireframes, scrum-based development workflow, and integration-ready architecture that could work standalone or be embedded into a WordPress environment.",
    impact: [
      "Designed collaboratively with 4-person engineering team",
      "Built from Figma wireframes with iterative Scrum process",
      "Delivered initial MVP version within tight timeline",
      "Responsive design works across all devices",
    ],
    role: "Frontend Developer",
    tech: ["JavaScript", "HTML", "CSS", "Figma", "WordPress Integration"],
    categories: ["Web App", "Education", "Tools"],
    image: "/project-management-kanban-board.png",
    gallery: [],
    githubUrl: "https://github.com/Android-Battalion/Question-Tracker",
    featured: true,
  },
  {
    id: "clientbrief",
    title: "ClientBrief",
    tagline: "Streamlined client onboarding and project briefing tool",
    description:
      "A Next.js application designed to streamline the client onboarding process — capturing project requirements, automating briefs, and reducing back-and-forth communication between agencies and their clients.",
    problem:
      "Agencies and freelancers waste significant time in back-and-forth emails trying to gather project requirements from clients. The briefing process is fragmented, inconsistent, and error-prone.",
    solution:
      "Built a structured onboarding flow using Next.js App Router and TypeScript. Clients fill out guided briefs, agencies receive structured project requirements — reducing onboarding time and eliminating miscommunication.",
    impact: [
      "Streamlined client onboarding for digital agencies",
      "Reduced briefing time with structured, guided forms",
      "Built with Next.js App Router for optimal performance",
      "Type-safe across the entire stack with TypeScript",
    ],
    role: "Solo Developer",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    categories: ["Web App", "SaaS", "Tools"],
    image: "/ai-content-generation-interface.jpg",
    gallery: [],
    liveUrl: "https://clientbrief-kappa.vercel.app/",
    githubUrl: "https://github.com/alsoknownaszac/clientbrief",
    featured: true,
  },
  {
    id: "tendly",
    title: "Tendly",
    tagline: "Mobile-first community and event discovery app",
    description:
      "A React Native (Expo) mobile application focused on community building and event discovery. Built with file-based routing, smooth animations, and a clean mobile-native UI for discovering local happenings.",
    problem:
      "People struggle to discover local events and communities that match their interests. Existing platforms are cluttered with noise and lack a focused, clean mobile experience.",
    solution:
      "Built a mobile app using Expo and React Native with file-based routing, optimized for both iOS and Android. Features clean card-based event discovery, community joining flows, and intuitive navigation — making local discovery effortless.",
    impact: [
      "Cross-platform mobile app (iOS + Android) via Expo",
      "File-based routing for clean navigation architecture",
      "Optimized for mobile performance with React Native",
    ],
    role: "Mobile Developer",
    tech: ["React Native", "Expo", "TypeScript", "JavaScript"],
    categories: ["Mobile", "Community", "Social"],
    image: "/fitness-tracking-app.png",
    gallery: [],
    githubUrl: "https://github.com/alsoknownaszac/tendly2",
    featured: true,
  },
  {
    id: "spendtrails",
    title: "SpendTrails",
    tagline: "Personal finance tracking and spending insights",
    description:
      "A personal finance tracking application that helps users connect their bank accounts, visualize spending patterns, and gain insights into their financial habits. Built with Next.js and integrated with Plaid for secure banking data.",
    problem:
      "People struggle to understand where their money goes. Traditional budgeting apps are either too complex or lack real-time bank integration, making it tedious to track expenses manually.",
    solution:
      "Built SpendTrails with Plaid integration to securely connect bank accounts and automatically import transactions. Real-time spending visualizations, category breakdowns, and trend analysis help users make informed financial decisions without manual data entry.",
    impact: [
      "Real-time bank account integration via Plaid",
      "Automated transaction import and categorization",
      "Visual spending dashboards with trend analysis",
      "Secure financial data handling",
    ],
    role: "Full-Stack Engineer",
    tech: ["Next.js", "TypeScript", "Plaid API", "Tailwind CSS", "REST APIs"],
    categories: ["Web App", "Fintech", "Full-Stack"],
    image: "/portfolio-builder-interface.jpg",
    gallery: [],
    liveUrl: "https://www.spendtrails.com",
    featured: true,
  },
  {
    id: "script-room",
    title: "Script Room",
    tagline:
      "Four Gemini-powered agents turn a screenplay into a production package",
    description:
      "A React + Express web app that turns a raw screenplay or treatment into a structured production package. Paste or upload a script and four specialized agents run in sequence — parsing structure, checking continuity, drafting a shot list, and writing a pitch-ready one-pager — each explaining its own reasoning as it works. Built for the Google Cloud Agentic Cinema Hackathon (Replit partner track) with real runtime Vertex AI usage.",
    problem:
      "Turning a screenplay into a shootable production package is slow and fragmented — structure breakdowns, continuity passes, shot lists, and pitch one-pagers get produced by hand in separate documents, usually by the same person under deadline pressure.",
    solution:
      "Built Script Room as a four-stage agent pipeline on Google Cloud Vertex AI (gemini-2.5-flash via @google/genai) with schema-constrained structured output. Every stage — Parser, Continuity, Shot List, One-Pager — calls the same retry/backoff wrapper and writes through Drizzle ORM to PostgreSQL, while the UI surfaces each stage's reasoning note. Jobs are rate limited to 5 per IP per rolling hour, deduplicated within a 10-minute window, and always finish with a downloadable JSON package even when a model call fails.",
    impact: [
      "Four sequential agents: parser, continuity, shot list, one-pager",
      "Real runtime Vertex AI usage with schema-constrained structured output",
      "Automatic retry with exponential backoff (up to 4 attempts) plus safe fallbacks",
      "Rate limiting and duplicate-submission protection per IP",
      "Accepts 200–50,000 characters by paste or .txt upload, exports one JSON package",
    ],
    role: "Solo Developer",
    tech: [
      "React 19",
      "TypeScript",
      "Vite 7",
      "Tailwind CSS",
      "Express 5",
      "Google Cloud Vertex AI",
      "Gemini 2.5 Flash",
      "PostgreSQL",
      "Drizzle ORM",
      "Replit",
    ],
    categories: ["Web App", "AI", "Developer Tools"],
    image: "/script-room.png",
    gallery: [],
    liveUrl: "https://delectable-positive-copyleft.replit.app",
    githubUrl: "https://github.com/alsoknownaszac/script_room",
    featured: true,
  },
  {
    id: "newace-media",
    title: "Newace Media",
    tagline:
      "Portfolio website for Newace Media — wedding photography",
    description:
      "A portfolio website for Newace Media, a wedding photography studio. Rebuilt from a Vite + Express prototype into a Next.js App Router application — home, about, portfolio, an SSG wedding-stories journal, behind the scenes, and an inquiry-handling contact page — with a shared photo lightbox and validated enquiry submissions.",
    problem:
      "The studio had only a Figma design and an unfinished Vite + Express prototype, so there was no production site to send couples to. A photography business needs a fast, mobile-first experience where visitors can browse real weddings and send an enquiry with their date, event type, and location.",
    solution:
      "Ported the Figma design into a Next.js 15 App Router app: Figma tokens mapped into Tailwind v4 through @theme inline, all copy held in typed content modules rather than inline in components, and photographs served through next/image with their real intrinsic dimensions. One shared photo lightbox powers the portfolio grid, the behind-the-scenes cards, and each story gallery, while enquiries POST to a route handler validated with Zod and delivered over Resend. Wedding stories are statically generated from slugs, with sitemap and robots for search.",
    impact: [
      "Migrated a Vite + Express prototype to a production Next.js 15 App Router build",
      "Figma design tokens mapped into Tailwind v4 as typed theme utilities",
      "One shared photo lightbox across the portfolio grid, BTS cards, and story galleries",
      "Wedding stories statically generated from slugs via generateStaticParams",
      "Zod-validated inquiry endpoint with Resend delivery, plus sitemap and robots",
    ],
    role: "Full-Stack Engineer",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS v4",
      "Figma",
      "shadcn/ui",
      "Zod",
      "Resend",
      "Vercel",
    ],
    categories: ["Web App", "Marketing", "Frontend"],
    image: "/newace-media.png",
    gallery: [],
    liveUrl: "https://newace-media-home-web.vercel.app/",
    githubUrl: "https://github.com/alsoknownaszac/Newace-Media-home",
    featured: true,
  },
  {
    id: "miresourcegroup",
    title: "M.I Resource Services",
    tagline:
      "Portfolio website for an oil & gas support services company",
    description:
      "A corporate portfolio website for M.I Resource Services Ltd, an oil & gas support services company. Built with Next.js and Sanity CMS, it presents their engineering, procurement, supply chain, and logistics services, company credentials, testimonials, and a contact flow — deployed on Vercel and served at miresourcegroup.com.",
    problem:
      "M.I Resource Services needed a modern web presence to showcase 15+ years of oil & gas support work — engineering, procurement, supply chain management and logistics — to corporate clients, and to establish credibility for an ISO 9001-certified company that had no effective online footprint.",
    solution:
      "Built a responsive corporate portfolio site with dedicated service pages, company credentials (15+ years, 200+ projects, ISO 9001 certified), testimonials, and a contact and inquiry flow. Content is managed through a Sanity CMS so the team can update services, testimonials, and company information without touching code, with the site built on Next.js and deployed to Vercel.",
    impact: [
      "Dedicated pages for engineering, procurement, supply chain, and logistics services",
      "Sanity CMS for self-service updates to services, testimonials, and company info",
      "Company credentials surfaced: 15+ years, 200+ projects, ISO 9001 certified",
      "Responsive corporate design with a multi-office contact and inquiry flow",
      "SEO-ready with sitemap and robots, deployed on Vercel",
    ],
    role: "Frontend Developer",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "React 19",
      "shadcn/ui",
      "Framer Motion",
      "Vercel",
    ],
    categories: ["Website", "Portfolio", "Corporate"],
    image: "/miresourcegroup.png",
    gallery: [],
    liveUrl: "https://www.miresourcegroup.com/",
    githubUrl: "https://github.com/alsoknownaszac/miresourcegroup",
    featured: true,
  },
];
