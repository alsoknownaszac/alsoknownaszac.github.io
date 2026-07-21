"use client";

import Link from "next/link";
import { FileText, FolderGit2, Send, ArrowUpRight } from "lucide-react";

const links = [
  {
    href: "/resume",
    label: "Résumé",
    desc: "Professional experience & skills.",
    icon: <FileText className="w-4 h-4" />,
    size: "md:col-span-1 md:row-span-2",
  },
  {
    href: "/projects",
    label: "Projects",
    desc: "Case studies and shipped work.",
    icon: <FolderGit2 className="w-4 h-4" />,
    size: "md:col-span-1 md:row-span-1",
  },
  {
    href: "/contact",
    label: "Contact",
    desc: "Get in touch or find me online.",
    icon: <Send className="w-4 h-4" />,
    size: "md:col-span-1 md:row-span-1",
  },
];

export function QuickBento() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="container mx-auto px-4 mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Explore
          </h2>
          <p className="font-mono text-sm text-muted-foreground/60 mt-3 leading-relaxed max-w-lg">
            Jump to the section that matters most to you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-[240px]">
          {links.map((link) => (
            <div key={link.href} className={link.size}>
              <Link
                href={link.href}
                className="h-full group flex flex-col justify-between p-5 border border-border/40 hover:border-foreground/10 hover:bg-muted/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 rounded-full border border-border/30 bg-muted/10 flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-foreground/20 transition-all duration-300">
                    {link.icon}
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/20 group-hover:text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {link.label}
                  </h3>
                  <p className="text-xs text-muted-foreground/60">
                    {link.desc}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
