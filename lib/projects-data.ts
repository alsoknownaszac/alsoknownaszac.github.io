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
];
