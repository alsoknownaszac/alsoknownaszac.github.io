"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageWrapper } from "@/components/page-wrapper";
import { SectionHeader } from "@/components/section-header";
import {
  Activity,
  Zap,
  Code2,
  Coffee,
  BookOpen,
  Terminal,
  Music,
  Sparkles,
  MoreHorizontal,
  RefreshCw,
  Clock,
} from "lucide-react";

interface LiveEntry {
  id: string;
  type: "coding" | "learning" | "thought" | "listening" | "milestone";
  icon: React.ReactNode;
  title: string;
  body: string;
  timestamp: Date;
  tags?: string[];
}

const iconMap: Record<LiveEntry["type"], React.ReactNode> = {
  coding: <Code2 className="w-4 h-4" />,
  learning: <BookOpen className="w-4 h-4" />,
  thought: <Sparkles className="w-4 h-4" />,
  listening: <Music className="w-4 h-4" />,
  milestone: <Zap className="w-4 h-4" />,
};

const typeLabels: Record<LiveEntry["type"], string> = {
  coding: "Coding",
  learning: "Learning",
  thought: "Thinking",
  listening: "Listening to",
  milestone: "Milestone",
};

const initialEntries: LiveEntry[] = [
  {
    id: "1",
    type: "coding",
    icon: iconMap.coding,
    title: "Advanced TypeScript Patterns",
    body: "Deep diving into conditional types, mapped types, and template literal types. Building a type-safe API layer that infers response shapes from route definitions — no more manual type casting.",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    tags: ["TypeScript", "API Design"],
  },
  {
    id: "2",
    type: "learning",
    icon: iconMap.learning,
    title: "Designing Data-Intensive Applications",
    body: "Re-reading Kleppmann's classic. Currently on Chapter 5 — replication strategies. The leader-based vs leaderless debate is fascinating when applied to real-world distributed systems.",
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    tags: ["Systems Design", "Databases"],
  },
  {
    id: "3",
    type: "milestone",
    icon: iconMap.milestone,
    title: "Shipped: AI Code Review Bot",
    body: "Just deployed an automated code review system using GPT-4 for PR analysis. It catches common patterns, suggests improvements, and has already caught 3 bugs in production PRs this week.",
    timestamp: new Date(Date.now() - 1000 * 60 * 240),
    tags: ["AI", "GitHub Actions", "Automation"],
  },
  {
    id: "4",
    type: "coding",
    icon: iconMap.coding,
    title: "Real-time Collaboration Engine",
    body: "Week 3 of building a collaborative workspace. Implemented CRDT-based conflict resolution with WebSocket sync. The tricky part is handling concurrent edits to the same paragraph — using Yjs for the heavy lifting.",
    timestamp: new Date(Date.now() - 1000 * 60 * 420),
    tags: ["WebSocket", "CRDT", "Next.js"],
  },
  {
    id: "5",
    type: "thought",
    icon: iconMap.thought,
    title: "On Developer Experience",
    body: "The best tools disappear. When your CLI, your linter, your CI pipeline all work without friction, you enter flow state faster. Been thinking about how to design tooling that feels invisible but powerful.",
    timestamp: new Date(Date.now() - 1000 * 60 * 600),
    tags: ["DX", "Tooling"],
  },
  {
    id: "6",
    type: "listening",
    icon: iconMap.listening,
    title: "Lo-fi Hip Hop Radio",
    body: "Current focus playlist. Beats to code/study to — 24/7 lo-fi stream that's been my soundtrack for deep work sessions this month.",
    timestamp: new Date(Date.now() - 1000 * 60 * 900),
    tags: ["Focus", "Music"],
  },
  {
    id: "7",
    type: "coding",
    icon: iconMap.coding,
    title: "WebGL Shader Experiments",
    body: "Playing with fragment shaders for the portfolio site. Created a noise-based gradient that reacts to scroll position. Performance is surprisingly good even on mobile.",
    timestamp: new Date(Date.now() - 1000 * 60 * 1440),
    tags: ["WebGL", "Graphics", "Three.js"],
  },
  {
    id: "8",
    type: "thought",
    icon: iconMap.thought,
    title: "Building in Public Retrospective",
    body: "Six months of building in public. The accountability factor is real — knowing people watch your progress makes you ship faster. Also, the community feedback loop is invaluable for course-correcting early.",
    timestamp: new Date(Date.now() - 1000 * 60 * 2160),
    tags: ["Building in Public", "Reflection"],
  },
];

// Time-ago formatter
function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// Typewriter component
function TypewriterText({
  text,
  onComplete,
  speed = 15,
}: {
  text: string;
  onComplete?: () => void;
  speed?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current <= text.length) {
        setDisplayed(text.slice(0, indexRef.current));
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-foreground/60 ml-0.5 animate-pulse align-middle" />
      )}
    </span>
  );
}

// Single entry card
function EntryCard({ entry, isNew }: { entry: LiveEntry; isNew: boolean }) {
  const [titleComplete, setTitleComplete] = useState(!isNew);

  return (
    <motion.div
      initial={isNew ? { opacity: 0, y: -20, scale: 0.95 } : false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="relative flex gap-4 py-5 px-4 border-b border-border/50 hover:bg-muted/20 transition-colors duration-200"
    >
      {/* Avatar/icon */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground">
        {entry.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wider">
            {typeLabels[entry.type]}
          </span>
          <span className="text-muted-foreground/30">·</span>
          <span className="text-xs text-muted-foreground/50 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {timeAgo(entry.timestamp)}
          </span>
          {isNew && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="ml-auto text-[10px] font-medium px-1.5 py-0.5 bg-foreground/10 text-foreground/70 rounded-full"
            >
              New
            </motion.span>
          )}
        </div>

        {/* Title */}
        {isNew ? (
          <h3 className="text-base font-semibold text-foreground mb-1.5">
            <TypewriterText
              text={entry.title}
              speed={25}
              onComplete={() => setTitleComplete(true)}
            />
          </h3>
        ) : (
          <h3 className="text-base font-semibold text-foreground mb-1.5">
            {entry.title}
          </h3>
        )}

        {/* Body */}
        <AnimatePresence mode="wait">
          {(!isNew || titleComplete) && (
            <motion.p
              initial={isNew ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-muted-foreground/80 leading-relaxed mb-2 line-clamp-3"
            >
              {entry.body}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Tags */}
        {entry.tags && entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function LivePage() {
  const [entries, setEntries] = useState(initialEntries);
  const [newEntryIds, setNewEntryIds] = useState<Set<string>>(new Set());
  const [isLive, setIsLive] = useState(true);
  const [pulseVisible, setPulseVisible] = useState(true);

  // Simulate the "live" pulsing dot
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseVisible((v) => !v);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Simulate new entries appearing (demo mode)
  const addRandomEntry = useCallback(() => {
    const demoEntries: Omit<LiveEntry, "id" | "timestamp">[] = [
      {
        type: "thought",
        icon: iconMap.thought,
        title: "The 80/20 of Clean Code",
        body: "Readable code isn't about comments — it's about naming things well and keeping functions small. A function should do one thing and have a name that describes exactly that.",
        tags: ["Clean Code", "Best Practices"],
      },
      {
        type: "coding",
        icon: iconMap.coding,
        title: "Edge Functions Deployment",
        body: "Just moved our API middleware to Cloudflare Workers. Cold starts went from 300ms to sub-5ms. The developer experience of `wrangler dev` is surprisingly good.",
        tags: ["Cloudflare", "Edge", "Performance"],
      },
      {
        type: "learning",
        icon: iconMap.learning,
        title: "Rust for WebAssembly",
        body: "Started the Rust book this week. Goal: compile compute-heavy modules to WASM and use them in the browser. The borrow checker is both brilliant and infuriating.",
        tags: ["Rust", "WASM", "Learning"],
      },
      {
        type: "milestone",
        icon: iconMap.milestone,
        title: "1000 GitHub Stars!",
        body: "Our open-source design system hit 1k stars today. It's been 8 months of consistent maintenance, responding to issues, and building community. Grateful for every contributor.",
        tags: ["Open Source", "Milestone"],
      },
      {
        type: "listening",
        icon: iconMap.listening,
        title: "Ambient Focus Mix",
        body: "Switched from lo-fi to ambient electronic for this afternoon's deep work session. Brian Eno-inspired generative music — perfect for complex debugging sessions.",
        tags: ["Focus", "Ambient"],
      },
    ];

    const random = demoEntries[Math.floor(Math.random() * demoEntries.length)];
    const id = `demo-${Date.now()}`;

    setEntries((prev) => [
      {
        ...random,
        id,
        timestamp: new Date(),
      } as LiveEntry,
      ...prev,
    ]);
    setNewEntryIds((prev) => new Set(prev).add(id));
  }, []);

  // Auto-add new entries every 8-15 seconds when live
  useEffect(() => {
    if (!isLive) return;

    const schedule = () => {
      const delay = 8000 + Math.random() * 7000;
      return setTimeout(() => {
        addRandomEntry();
      }, delay);
    };

    let timeout = schedule();

    const interval = setInterval(() => {
      timeout = schedule();
    }, 15000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isLive, addRandomEntry]);

  // Clear "new" badge after a while
  useEffect(() => {
    const interval = setInterval(() => {
      setNewEntryIds((prev) => {
        if (prev.size === 0) return prev;
        return new Set();
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="pb-10">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 ${pulseVisible ? "animate-ping" : ""}`}
                    />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-xs text-muted-foreground/60 font-medium">
                    LIVE
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsLive(!isLive)}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  isLive
                    ? "border-green-500/30 text-green-600 bg-green-500/5"
                    : "border-border text-muted-foreground hover:border-foreground/20"
                }`}
              >
                <RefreshCw
                  className={`w-3 h-3 ${isLive ? "animate-spin" : ""}`}
                  style={{ animationDuration: "3s" }}
                />
                {isLive ? "Auto-updating" : "Paused"}
              </button>
            </div>
            <p className="font-mono text-sm text-muted-foreground/60 leading-relaxed">
              A live feed of what I'm building, learning, and thinking — updated
              in real-time. Kind of like a personal changelog.
            </p>
          </div>
        </div>

        {/* Feed */}
        <div className="max-w-2xl mx-auto border border-border/60 rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm">
          <AnimatePresence initial={false}>
            {entries.map((entry) => (
              <EntryCard
                key={entry.id}
                entry={entry}
                isNew={newEntryIds.has(entry.id)}
              />
            ))}
          </AnimatePresence>

          {/* Bottom padding */}
          <div className="py-6 flex items-center justify-center">
            <p className="text-xs text-muted-foreground/40 flex items-center gap-2">
              <MoreHorizontal className="w-4 h-4" />
              {isLive ? "Waiting for new updates..." : "Feed paused"}
            </p>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 max-w-xl mx-auto text-center"
        >
          <div className="border-t border-border pt-8">
            <p className="text-xs text-muted-foreground/50 leading-relaxed">
              This is a live feed — a raw, unfiltered log of what I'm working on
              right now. No algorithms, no curation. Just honest updates from
              the trenches of software engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
