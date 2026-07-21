"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Image from "next/image";

interface EnhancedCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "glass" | "gradient" | "minimal";
  hover?: boolean;
  onClick?: () => void;
}

export function EnhancedCard({
  children,
  className = "",
  variant = "default",
  hover = true,
  onClick,
}: EnhancedCardProps) {
  const baseClasses =
    "relative overflow-hidden transition-all duration-300 ease-out";

  const variants = {
    default: "bg-card border border-border/50",
    elevated: "bg-card border border-border/30",
    glass: "bg-card/80 backdrop-blur-xl border border-border/20",
    gradient: "bg-card border border-border/30",
    minimal: "bg-transparent border-0",
  };

  const hoverEffects = hover
    ? {
        default: "hover:border-foreground/10 hover:-translate-y-0.5",
        elevated: "hover:border-foreground/15 hover:-translate-y-1",
        glass: "hover:bg-card/90 hover:-translate-y-0.5",
        gradient: "hover:border-foreground/15 hover:-translate-y-1",
        minimal: "hover:-translate-y-0.5",
      }
    : {};

  return (
    <motion.div
      className={cn(
        baseClasses,
        variants[variant],
        hover && hoverEffects[variant],
        onClick && "cursor-pointer",
        className,
      )}
      onClick={onClick}
      whileHover={hover ? { scale: 1.005 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  onClick?: () => void;
  slug?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  featured,
  onClick,
  slug,
}: ProjectCardProps) {
  return (
    <EnhancedCard variant="default" onClick={onClick} className="group h-full">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {featured && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block px-2.5 py-0.5 bg-foreground/90 text-background text-xs font-medium">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 text-foreground tracking-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted-foreground/80 transition-colors duration-300"
            >
              {tag}
              {tags.indexOf(tag) < Math.min(tags.length, 4) - 1 && (
                <span className="ml-2 text-border">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </EnhancedCard>
  );
}

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  onClick?: () => void;
}

export function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  tags,
  onClick,
}: BlogCardProps) {
  return (
    <EnhancedCard variant="default" onClick={onClick} className="group h-full">
      <div className="p-5 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {category}
          </span>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>
              {new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{readTime}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-foreground tracking-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center text-foreground/80 text-sm font-medium">
            <span>Read</span>
            <svg
              className="w-3.5 h-3.5 ml-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </EnhancedCard>
  );
}

interface ActivityCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  status: string;
  time: string;
  tags: string[];
  color?: "primary" | "secondary";
}

export function ActivityCard({
  icon,
  title,
  description,
  status,
  time,
  tags,
  color = "primary",
}: ActivityCardProps) {
  return (
    <EnhancedCard variant="default" className="group h-full">
      <div className="p-5 h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-muted-foreground text-sm">{icon}</div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {status}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold mb-2 text-foreground tracking-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs text-muted-foreground/70">
              {tag}
            </span>
          ))}
        </div>

        {/* Time */}
        <div className="flex items-center text-xs text-muted-foreground/60 mt-auto pt-3 border-t border-border/30">
          <svg
            className="w-3 h-3 mr-1.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {time}
        </div>
      </div>
    </EnhancedCard>
  );
}
