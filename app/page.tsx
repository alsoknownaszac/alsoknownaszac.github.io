"use client";

import dynamic from "next/dynamic";
import { TechTagCloud } from "@/components/tech-tag-cloud";
import { QuickBento } from "@/components/quick-bento";
import { PageWrapper } from "@/components/page-wrapper";
import { StatsCounter } from "@/components/home-stats";
import { ProcessTimeline } from "@/components/home-process";
import { PhilosophyGrid } from "@/components/home-philosophy";
import { ToolsMarquee } from "@/components/home-tools";
import { CurrentStatus } from "@/components/home-status";

const HeroParallax = dynamic(
  () =>
    import("@/components/hero-parallax").then((mod) => ({
      default: mod.HeroParallax,
    })),
  { ssr: false },
);

export default function HomePage() {
  return (
    <PageWrapper isHomePage>
      <div className="overflow-hidden">
        {/* Hero Section */}
        <HeroParallax />

        {/* Technologies */}
        <TechTagCloud />

        {/* Stats Counter */}
        <StatsCounter />

        {/* Process Timeline */}
        <ProcessTimeline />

        {/* Philosophy Grid */}
        <PhilosophyGrid />

        {/* Tools Marquee */}
        <ToolsMarquee />

        {/* Current Status */}
        <CurrentStatus />

        {/* Quick Links — bottom of page */}
        <QuickBento />
      </div>
    </PageWrapper>
  );
}
