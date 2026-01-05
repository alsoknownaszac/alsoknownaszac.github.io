"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

const resumeData = {
  personal: {
    name: "Collins Amayo",
    title: "Full-Stack Product Engineer",
    email: "mayo16collins@gmail.com",
    phone: "+2348122683190",
    location: "Port Harcourt, Rivers, NGA",
    github: "github.com/alsoknownaszac",
    linkedin: "linkedin.com/in/collins-amayo-xxv",
  },
  skills: [
    "CSS3",
    "HTML5",
    "Javascript",
    "Typescript",
    "ReactJS",
    "NextJS",
    "Jest",
    "Bootstrap",
    "TailwindCSS",
    "ReactQuery",
    "Axios",
    "NodeJS",
    "ReactHooks",
    "GIT",
    "Firebase",
    "GraphQl",
    "AJAX",
    "Atlassian suite",
    "Stripe",
    "Supabase",
    "AI Agent",
    "RESTful Architecture",
    "Playwright",
    "Vitest",
  ],
  experience: [
    {
      title: "Full-Stack Product Engineer",
      company: "Surrosantarra",
      location: "Remote",
      period: "Sep 2025 - Present",
      achievements: [
        "Architected and developed an enterprise user management platform using Next.js 15, React 19, and TypeScript, serving 8 distinct admin roles with role-based access control (RBAC) and permission-based UI rendering",
        "Developed a comprehensive KYC document approval workflow with bulk operations, multi-step review process, and document status tracking (pending, approved, rejected, needs_reupload)",
        "Established Test-Driven Development (TDD) workflow with Playwright for E2E testing and Vitest for unit/component testing, achieving comprehensive test coverage for critical user flows",
        "Designed notification system supporting multi-channel delivery (email, SMS, in-app) with template-based notifications for user actions (suspensions, approvals, wallet adjustments)",
      ],
    },
    {
      title: "Software Engineer (Contract)",
      company: "Goldenlakes",
      location: "Remote",
      period: "Mar 2025 - Jul 2025",
      website: "https://goldenlakesxplore.com",
      achievements: [
        "Enhanced customer engagement and brand trust by delivering mobile-first, high-performance pages with Next.js and Tailwind, contributing to improved conversion rates",
        "Optimized media delivery through Cloudinary integration, reducing page load times by ~30% and improving session duration without sacrificing visual quality",
        "Accelerated release pace by introducing automated CI/CD pipelines with GitHub Actions, reducing deployment errors and shortening release cycles",
      ],
    },
    {
      title: "Software Engineer (Contract)",
      company: "Jazuba Limited",
      location: "Remote",
      period: "Mar 2025 - Jul 2025",
      website: "https://jazubaltd.com/",
      achievements: [
        "Increased development efficiency and feature pace by leveraging AI-powered coding agents for scaffolding, bug tracking, and automated testing",
        "Strengthened data security and streamlined authentication by integrating Supabase for secure, scalable backend management",
        "Enhanced customer trust and payment success rate by integrating a Stripe-powered system with real-time invoicing and dynamic transaction updates",
      ],
    },
    {
      title: "Software Engineer",
      company: "TappShare",
      location: "Remote",
      period: "Sep 2023 - Dec 2024",
      achievements: [
        "Boosted web performance and organic growth by introducing server-side rendering with React and Next.js, improving SEO rankings and site discoverability",
        "Improved data reliability and reduced redundant API calls by integrating React Query with intelligent caching and synchronization",
        "Delivered a fully responsive, accessible UI that increased retention and engagement by offering faster load times and smoother navigation across devices",
      ],
    },
    {
      title: "Software Engineer",
      company: "Kleekit",
      location: "Delta State (Remote)",
      period: "Feb 2021 - Dec 2024",
      achievements: [
        "Designed and launched a digital healthcare platform that streamlined patient access, improving usability and engagement across mobile and desktop",
        "Contributed to the launch of a crypto payments product by ensuring seamless backend integration and secure, responsive UI flows",
        "Delivered multiple high-traffic web applications from concept to production, improving SEO visibility and driving measurable growth in user acquisition",
      ],
    },
  ],
  education: [
    {
      degree: "National Diploma",
      school: "Petroleum Training Institute",
      period: "Nov 2014 - Jul 2016",
    },
  ],
}

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    window.print()
  }

  return (
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

      <div className="container mx-auto px-4 max-w-[850px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          ref={resumeRef}
          className="bg-white text-gray-900 shadow-2xl print:shadow-none"
          style={{
            minHeight: "11in",
            padding: "0.75in 0.75in",
          }}
        >
          {/* Header Section */}
          <header className="mb-6 pb-6 border-b-2 border-gray-900">
            <h1 className="text-4xl font-bold mb-1 tracking-tight text-gray-900">{resumeData.personal.name}</h1>
            <p className="text-lg text-gray-700 mb-3">{resumeData.personal.title}</p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <a href={`mailto:${resumeData.personal.email}`} className="hover:underline">
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
            <p className="text-sm text-gray-800 leading-relaxed">{resumeData.skills.join(", ")}</p>
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
                      <h3 className="text-base font-bold text-gray-900">{job.title}</h3>
                      <p className="text-sm text-gray-700 font-semibold">
                        {job.company}
                        {job.website && (
                          <>
                            {" "}
                            •{" "}
                            <a
                              href={job.website}
                              className="text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {job.website}
                            </a>
                          </>
                        )}{" "}
                        ({job.location})
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 italic whitespace-nowrap ml-4">{job.period}</p>
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
                      <h3 className="text-base font-bold text-gray-900">{edu.school}</h3>
                      <p className="text-sm text-gray-700">{edu.degree}</p>
                    </div>
                    <p className="text-sm text-gray-600 italic whitespace-nowrap ml-4">{edu.period}</p>
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
            This resume follows a traditional PDF format optimized for ATS systems and professional readability. Click
            the "Export PDF" button to download a print-ready version.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
