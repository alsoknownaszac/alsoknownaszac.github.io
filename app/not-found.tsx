"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

const jokes = [
  "Looks like this page ran into a merge conflict... and lost.",
  "We tried `git blame` but nobody's taking responsibility for this 404.",
  "This endpoint returned `undefined`. Just like our weekend plans.",
  "HTTP 404: The requested resource went out for coffee and never came back.",
  "Even `console.log( page )` couldn't find this one.",
  "We'd file a JIRA ticket, but we both know it'd sit in the backlog forever.",
  "This page has been `rm -rf`'d into oblivion.",
  "Looks like someone forgot to `git push` this page.",
  "`typeof page === 'undefined'` — we checked. Twice.",
  "404: The server is a fortune teller. It knows where everything is, but it's not telling you this one.",
];

function getRandomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

export default function NotFound() {
  const joke = getRandomJoke();

  // Stop Lenis smooth scrolling on 404 page to prevent flash glitch
  useEffect(() => {
    // @ts-expect-error - Lenis is attached to window by the provider
    const lenis = window.__lenis;
    if (lenis) {
      lenis.stop();
      return () => lenis.start();
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center px-4 max-w-lg"
      >
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm text-muted-foreground mb-4"
        >
          {">"} Error: PageNotFoundError
        </motion.p>

        <h1 className="text-6xl font-semibold tracking-tight mb-4">404</h1>

        <p className="text-lg text-foreground font-medium mb-2">
          Oops! This page doesn't exist yet.
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-muted-foreground mb-8 italic leading-relaxed"
        >
          &ldquo;{joke}&rdquo;
        </motion.p>

        <div className="border border-border p-4 mb-8 text-left">
          <p className="font-mono text-xs text-muted-foreground mb-2">
            <span className="text-foreground">$</span> curl -I /this-page
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            HTTP/1.1 <span className="text-red-500">404</span> Not Found
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-2 opacity-50">
            <span className="text-foreground">$</span>{" "}
            <span className="animate-pulse">█</span>
          </p>
        </div>

        <p className="text-xs text-muted-foreground mb-6">
          We're working on getting this fixed. Probably stuck in code review.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
        >
          ← Back to safety
        </Link>
      </motion.div>
    </div>
  );
}
