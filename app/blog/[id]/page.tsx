import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { BlogPostOverlay } from "@/components/blog-post-overlay";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return <BlogPostOverlay post={post} />;
}
