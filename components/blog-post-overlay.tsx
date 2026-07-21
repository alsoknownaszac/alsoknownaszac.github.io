"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, Share2, ChevronLeft } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

interface BlogPostOverlayProps {
  post: BlogPost;
  onClose?: () => void;
}

export function BlogPostOverlay({ post, onClose }: BlogPostOverlayProps) {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = (window as any).__lenis;
    if (lenis) lenis.stop();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollEl.scrollTop += e.deltaY;
    };
    scrollEl.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scrollEl.removeEventListener("wheel", handleWheel);
      if (lenis) lenis.start();
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, text: post.excerpt, url });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      router.push("/blog", { scroll: false });
    }
  };

  return (
    <motion.div
      key="blog-post-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] bg-background"
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.8,
        }}
        className="absolute inset-0"
      >
        <div
          ref={scrollRef}
          className="h-full overflow-y-auto overscroll-contain"
          data-lenis-prevent
        >
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-background/90 backdrop-blur-md border-b border-border">
            <Button
              onClick={handleClose}
              variant="ghost"
              size="sm"
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
            <Button
              onClick={handleShare}
              variant="ghost"
              size="sm"
              className="gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>

          <div className="px-4 py-8">
            <div className="max-w-3xl mx-auto">
              <article>
                <header className="mb-8">
                  <Badge variant="secondary" className="mb-4">
                    {post.category}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                    {post.title}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </header>
                <Separator className="mb-8" />
                <div className="prose prose-invert prose-lg max-w-none">
                  <div
                    className="[&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-4 [&>h1]:mt-8 
                               [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-3 [&>h2]:mt-6
                               [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-2 [&>h3]:mt-4
                               [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-4
                               [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-4 [&>ul]:text-muted-foreground
                               [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-4 [&>ol]:text-muted-foreground
                               [&>pre]:bg-muted [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:mb-4 [&>pre]:overflow-x-auto
                               [&>code]:bg-muted [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono
                               [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-4"
                    dangerouslySetInnerHTML={{
                      __html: post.content.replace(/\n/g, "<br />"),
                    }}
                  />
                </div>
              </article>
              <Separator className="my-12" />
              <div>
                <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">
                    Enjoyed this article?
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Check out more of my writing on software engineering,
                    product development, and building in public.
                  </p>
                  <Button asChild>
                    <Link href="/blog">Read More Articles</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
