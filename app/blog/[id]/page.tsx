import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

function ShareButton({ post }: { post: any }) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <Button onClick={handleShare} variant="outline" size="sm" className="gap-2 bg-transparent">
      <Share2 className="w-4 h-4" />
      Share
    </Button>
  )
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article>
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{post.title}</h1>
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
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }}
            />
          </div>
        </article>

        <Separator className="my-12" />

        <div>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Check out more of my writing on software engineering, product development, and building in public.
            </p>
            <Button asChild>
              <Link href="/blog">Read More Articles</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
