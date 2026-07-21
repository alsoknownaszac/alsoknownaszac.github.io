"use client";

import { motion } from "framer-motion";
import { PageWrapper } from "@/components/page-wrapper";
import {
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

const socialLinks = [
  {
    name: "Email",
    url: "mailto:mayo16collins@gmail.com",
    icon: Mail,
    description: "mayo16collins@gmail.com",
  },
  {
    name: "GitHub",
    url: "https://github.com/alsoknownaszac",
    icon: Github,
    description: "github.com/alsoknownaszac",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/collins-amayo-xxv",
    icon: Linkedin,
    description: "linkedin.com/in/collins-amayo-xxv",
  },
];

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mayo16collins@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Social Links */}
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-16"
            >
              <div className="space-y-1">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target={link.name === "Email" ? undefined : "_blank"}
                      rel={
                        link.name === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                      className="flex items-center gap-4 px-4 py-4 border-b border-border/50 hover:border-foreground/10 hover:bg-muted/10 transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 rounded-full bg-muted/30 border border-border/40 flex items-center justify-center flex-shrink-0 group-hover:border-foreground/20 group-hover:bg-muted/50 transition-all duration-200">
                        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {link.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {link.description}
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.section>

            {/* Email CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="border border-border/60 rounded-lg p-8 text-center bg-card/20"
            >
              <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6 max-w-md mx-auto">
                Whether you have a project idea, a collaboration in mind, or
                just want to say hello — my inbox is always open. I try to
                respond to every message within 24 hours.
              </p>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-all duration-200 active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  mayo16collins@gmail.com
                </button>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-full border border-border hover:border-foreground/20 hover:bg-muted/20 transition-all duration-200 text-muted-foreground hover:text-foreground"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-green-500 mt-3"
                >
                  Copied to clipboard!
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
