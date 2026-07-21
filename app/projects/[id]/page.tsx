import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/projects-data";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Projects
        </Link>

        <div className="mb-10">
          {project.featured && (
            <span className="inline-block px-2.5 py-0.5 bg-foreground text-background text-xs font-medium mb-4">
              Featured Project
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-semibold mb-3 text-balance tracking-tight">
            {project.title}
          </h1>
          <p className="text-base text-muted-foreground mb-6">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.liveUrl || "/404"}
              target={project.liveUrl ? "_blank" : undefined}
              rel={project.liveUrl ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
            <a
              href={project.githubUrl || "/404"}
              target={project.githubUrl ? "_blank" : undefined}
              rel={project.githubUrl ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Source Code
            </a>
          </div>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden bg-muted mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 border border-border">
            <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider text-muted-foreground">
              Problem
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="p-6 border border-border">
            <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider text-muted-foreground">
              Solution
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
          <div className="p-6 border border-border">
            <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider text-muted-foreground">
              Role
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.role}
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6 tracking-tight">
            Impact & Results
          </h2>
          <div className="space-y-3">
            {project.impact.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 border border-border"
              >
                <span className="block w-1.5 h-1.5 mt-1.5 bg-foreground flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6 tracking-tight">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 border border-border text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {project.gallery.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-semibold mb-6 tracking-tight">
              Gallery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video overflow-hidden bg-muted"
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="border border-border p-8 text-center">
          <h3 className="text-lg font-semibold mb-2 tracking-tight">
            Interested in working together?
          </h3>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-md mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
