"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageWrapper } from "@/components/page-wrapper";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts, type BlogPost } from "@/lib/blog-data";
import { BlogPostOverlay } from "@/components/blog-post-overlay";

export default function BlogPage() {
  const posts = blogPosts;
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        <section>
          <div className="max-w-2xl mx-auto">
            <p className="font-mono text-sm text-muted-foreground/60 mb-12 leading-relaxed">
              Thoughts on software engineering, product development, and
              building in public.
            </p>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.04 * i }}
              >
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full text-left group flex flex-col gap-2 py-6 border-t border-border hover:border-foreground/20 transition-colors duration-300 cursor-pointer"
                >
                  {/* Meta row */}
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground/60">
                    <span className="font-medium uppercase tracking-widest text-[10px] px-2 py-0.5 border border-border/40">
                      {post.category}
                    </span>
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground group-hover:text-muted-foreground transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground/70 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Tags + arrow */}
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-muted-foreground/50"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-muted-foreground group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Blog Post Overlay */}
      <AnimatePresence>
        {selectedPost && (
          <BlogPostOverlay
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
