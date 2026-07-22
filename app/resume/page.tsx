"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/page-wrapper";
import { Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const resumeData = {
  personal: {
    name: "Collins Amayo",
    title: "Software Engineer",
    email: "mayo16collins@gmail.com",
    phone: "",
    location: "",
    github: "github.com/alsoknownaszac",
    linkedin: "linkedin.com/in/collins-amayo-xxv",
  },
  professionalSummary:
    "Software Engineer with 4+ years of experience building and shipping production-grade web applications across fintech, SaaS, healthcare, and digital commerce. Proficient in React, Next.js, TypeScript, and Ruby on Rails — from architecting enterprise platforms to integrating payment systems and delivering scalable web solutions. Founded and runs Prevision Digital Agency, delivering tailored web solutions for clients across multiple industries.",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "MobX",
    "React Query",
    "Ruby on Rails",
    "REST APIs",
    "GraphQL",
    "Playwright",
    "Vitest",
    "GitHub Actions",
    "Stripe",
    "SSR/ISR",
    "RBAC",
  ],
  experience: [
    {
      title: "Junior Full-Stack Engineer",
      company: "MUJ Digital LTD",
      location: "Remote",
      period: "Jan 2026 – Apr 2026",
      achievements: [
        "Built SpendTrails, a personal finance tracking app using Next.js and Plaid, enabling users to connect bank accounts and visualize spending in real time",
        "Developed a rental management system using Next.js and Ruby on Rails, progressing it from MVP to production and reducing manual property management workflows for landlords",
        "Integrated Stripe into both products to handle secure payments, subscriptions, and transaction processing at scale",
        "Architected REST APIs in Ruby on Rails to serve mobile and web clients, improving data consistency across platforms",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Surrosantara",
      location: "Remote",
      period: "Sep 2025 – Apr 2026",
      achievements: [
        "Architected an enterprise-grade user management platform using Next.js 15 and TypeScript, supporting 8 admin roles with secure RBAC and permission-based rendering",
        "Designed a structured KYC document approval workflow with multi-stage review, bulk operations, and status tracking using Next.js and TypeScript, ensuring compliance and data integrity across all user onboarding flows",
        "Built a multi-channel notification system (email, SMS, in-app) using template-driven automation, reducing manual operational communication and improving response time for critical user events",
        "Established TDD practices using Playwright (E2E) and Vitest (unit), covering critical user flows and reducing production bug reports",
        "Optimized state synchronization using MobX and intelligent caching strategies, eliminating redundant API calls and improving page load responsiveness",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "TappShare",
      location: "Remote",
      period: "Sep 2023 – Dec 2024",
      achievements: [
        "Improved SEO and platform discoverability by implementing server-side rendering (SSR) using React and Next.js, increasing organic visibility",
        "Enhanced API reliability and data consistency using React Query with intelligent caching and synchronization strategies",
        "Delivered a fully responsive and accessible UI across all device breakpoints, improving cross-device retention and usability",
        "Reduced redundant network requests using request deduplication and caching, improving system stability across distributed environments",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Kleekit",
      location: "Hybrid",
      period: "Feb 2021 – Dec 2023",
      achievements: [
        "Solely engineered the frontend of a medical platform using React, Redux, and Material UI — building three distinct systems (Doctor, Patient, and Clinic) each with dedicated dashboards, authentication flows, access levels, and full CRUD functionality across multiple pages",
        "Developed the frontend of a crypto payment system using React, TailwindCSS, and REST APIs — building the landing page, dashboard, transaction screens, and end-to-end payment flow with token authentication and frontend encryption for secure transactions",
        "Delivered responsive web applications across multiple projects using React, Next.js, TypeScript, GraphQL, and Redux — from architecture through to deployment",
        "Managed frontend data fetching, caching, and API synchronization using Apollo GraphQL, React Query, and Axios",
      ],
    },
  ],
  freelance: {
    title: "Founder & Software Engineer",
    company: "Prevision Digital Agency",
    location: "Remote",
    period: "Jan 2025 – Present",
    description:
      "Partnering with clients across multiple industries with tailored web solutions — from simple landing pages and portfolios to fully shipped production applications.",
    projects: [
      {
        name: "GoldenLakes",
        url: "https://goldenlakesxplore.com",
        achievements: [
          "Built mobile-first Next.js applications with optimized media delivery, reducing page load times by 30% and improving conversion rates across core landing flows",
          "Implemented GitHub Actions CI/CD pipelines and restructured API error handling, eliminating recurring deployment failures and strengthening production stability",
        ],
      },
      {
        name: "Miresourcegroup",
        url: "https://miresourcegroup.com",
        achievements: [
          "Architected a headless CMS-driven corporate website using Next.js App Router and Sanity CMS for an oil & gas firm, delivering 7 statically generated routes with ISR revalidation and a GROQ-based content layer with exponential-backoff retry logic for zero-downtime resilience",
          "Built a reusable four-layer React component architecture (Error Boundary → Suspense → Async Server Component → Client Component) with Framer Motion animations, validated by 50+ automation scripts covering pre-deploy checks, image auditing, and schema verification",
        ],
      },
    ],
  },
  education: [
    {
      degree: "Associate Degree in Petroleum and Gas Processing Engineering",
      school: "Petroleum Training Institute, Warri, NG",
      period: "Nov 2014 – Aug 2016",
    },
  ],
};

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-background py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 right-4 md:right-8 z-50"
        >
          <Button onClick={handlePrint} size="lg" className="gap-2 shadow-lg">
            <Download className="w-4 h-4" />
            Export PDF
          </Button>
        </motion.div>

        <div className="container mx-auto px-4 max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            ref={resumeRef}
            className="bg-white text-gray-900 shadow-2xl print:shadow-none p-6 md:p-[0.75in]"
          >
            {/* Header Section */}
            <header className="mb-6 pb-6 border-b-2 border-gray-900">
              <h1 className="text-4xl font-bold mb-1 tracking-tight text-gray-900">
                {resumeData.personal.name}
              </h1>
              <p className="text-lg text-gray-700 mb-3">
                {resumeData.personal.title}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <a
                    href={`mailto:${resumeData.personal.email}`}
                    className="hover:underline"
                  >
                    {resumeData.personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{resumeData.personal.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  <span>{resumeData.personal.github}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>{resumeData.personal.linkedin}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{resumeData.personal.location}</span>
                </div>
              </div>
            </header>

            {/* Skills */}
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-2 text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
                Skills
              </h2>
              <p className="text-sm text-gray-800 leading-relaxed">
                {resumeData.skills.join(", ")}
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-3 text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
                Work Experience
              </h2>
              <div className="space-y-4">
                {resumeData.experience.map((job, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="text-base font-bold text-gray-900">
                          {job.title}
                        </h3>
                        <p className="text-sm text-gray-700 font-semibold">
                          {job.company} ({job.location})
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 italic whitespace-nowrap ml-4">
                        {job.period}
                      </p>
                    </div>
                    <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-gray-800">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="leading-relaxed">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-3 text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
                Education
              </h2>
              <div className="space-y-2">
                {resumeData.education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-base font-bold text-gray-900">
                          {edu.school}
                        </h3>
                        <p className="text-sm text-gray-700">{edu.degree}</p>
                      </div>
                      <p className="text-sm text-gray-600 italic whitespace-nowrap ml-4">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Instructions Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 p-6 bg-card border border-border rounded-lg print:hidden"
          >
            <p className="text-sm text-muted-foreground">
              This resume follows a traditional PDF format optimized for ATS
              systems and professional readability. Click the "Export PDF"
              button to download a print-ready version.
            </p>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
