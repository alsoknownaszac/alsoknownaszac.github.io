# Sanity CMS Implementation Plan

> **Status:** Planned — not yet implemented  
> **Date:** July 22, 2026  
> **Goal:** Replace all hardcoded data for Blog, Projects, and Live pages with Sanity CMS.

---

## 🚨 Critical Prerequisite: Static Export vs Sanity

Current `next.config.mjs`:

```js
output: 'export',
trailingSlash: true,
```

**This is incompatible with Sanity.** `output: 'export'` generates flat HTML files at build time that never change. Sanity requires SSR or ISR to fetch live data.

### Required Changes:

| Current                 | Required                                                        |
| ----------------------- | --------------------------------------------------------------- |
| `output: 'export'`      | Remove it (default Next.js SSR/ISR mode)                        |
| GitHub Pages deployment | **Vercel** (supports ISR, has free tier, custom domain support) |
| `generateStaticParams`  | Keep — used for static generation + ISR revalidation            |

> **Note:** Vercel Analytics is already integrated in `app/layout.tsx`, so the site is already Vercel-ready.

---

## Questions to Resolve Before Starting

1. **Sanity account**: Do you have one already? If not, the CLI setup will prompt you to create/login.
2. **Vercel**: Are you okay moving from GitHub Pages to Vercel?
3. **Sanity Studio location**: Embed at `/studio` on your site, or host separately at `your-project.sanity.studio`?

---

## Phase 1: Sanity Setup

### 1.1 Install Dependencies

```bash
pnpm add next-sanity @sanity/client @sanity/image-url
pnpm add -D @sanity/cli
```

### 1.2 Initialize Sanity

```bash
npx sanity@latest init --env
```

This will:

- Create a `studio/` directory with Sanity Studio embedded in Next.js
- Generate `sanity.config.ts` and `sanity.cli.ts`
- Prompt for project name, dataset name, and auth

### 1.3 Environment Variables

Create/update `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_STUDIO_URL=/studio
```

### 1.4 Sanity Studio Route

Add `/studio` route in Next.js App Router so you can manage content at `yoursite.com/studio`:

```
app/studio/[[...tool]]/page.tsx
```

---

## Phase 2: Sanity Schemas

### 2.1 Blog Post Schema

```
studio/schemas/blog-post.ts
```

Fields:

- `title` (string, required)
- `slug` (slug, from title)
- `excerpt` (text)
- `content` (block content / rich text)
- `category` (string, list: "Thoughts", "Technical", "Projects", "Ideas")
- `tags` (array of strings)
- `publishedAt` (datetime)
- `readTime` (string)
- `featuredImage` (image with alt text)

### 2.2 Project Schema

```
studio/schemas/project.ts
```

Fields:

- `title` (string, required)
- `slug` (slug, from title)
- `tagline` (string)
- `description` (text)
- `problem` (text)
- `solution` (text)
- `impact` (array of strings)
- `role` (string)
- `tech` (array of strings)
- `categories` (array of strings)
- `image` (image with alt text)
- `gallery` (array of images)
- `liveUrl` (url)
- `githubUrl` (url)
- `featured` (boolean, default false)

### 2.3 Live Update Schema

```
studio/schemas/live-update.ts
```

Fields:

- `title` (string, required)
- `body` (text)
- `type` (string, list: "coding", "learning", "thought", "listening", "milestone")
- `tags` (array of strings)
- `publishedAt` (datetime)

### 2.4 Register All Schemas

In `sanity.config.ts`, import and register all three schemas.

---

## Phase 3: Data Fetching Layer

### 3.1 Sanity Client (`lib/sanity.ts`)

```ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2024-01-01",
  useCdn: true, // `false` for live/real-time pages
});
```

### 3.2 GROQ Queries (`lib/queries.ts`)

Create typed GROQ queries:

```ts
// All blog posts (for listing page)
export const allBlogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) { ... }`;

// Single blog post by slug
export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] { ... }`;

// All blog slugs (for generateStaticParams)
export const allBlogSlugsQuery = `*[_type == "blogPost"].slug.current`;

// All featured projects
export const featuredProjectsQuery = `*[_type == "project" && featured == true] { ... }`;

// All projects
export const allProjectsQuery = `*[_type == "project"] | order(_createdAt desc) { ... }`;

// Single project by slug
export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] { ... }`;

// All project slugs
export const allProjectSlugsQuery = `*[_type == "project"].slug.current`;

// Live updates (real-time, no cache)
export const liveUpdatesQuery = `*[_type == "liveUpdate"] | order(publishedAt desc) { ... }`;
```

### 3.3 TypeScript Types

Update/create types in `lib/types.ts`:

```ts
export interface BlogPost { ... }
export interface Project { ... }
export interface LiveUpdate { ... }
```

---

## Phase 4: Page Updates

### 4.1 Blog Listing Page (`app/blog/page.tsx`)

- **Before:** `import { blogPosts } from "@/lib/blog-data"`
- **After:** `import { client } from "@/lib/sanity"` + `import { allBlogPostsQuery } from "@/lib/queries"`
- Use ISR: `export const revalidate = 60;`

### 4.2 Blog Detail Page (`app/blog/[id]/page.tsx`)

- `generateStaticParams` → fetch slugs from Sanity
- Fetch single post by slug
- Pass to `BlogPostOverlay` component (already accepts `BlogPost` type)

### 4.3 BlogPostOverlay (`components/blog-post-overlay.tsx`)

- No changes needed — already data-agnostic, just receives `post` prop

### 4.4 Projects Listing (`app/projects/page.tsx`)

- Replace hardcoded `projects` import with Sanity fetch
- ISR with `revalidate = 60`

### 4.5 Project Detail (`app/projects/[id]/page.tsx`)

- `generateStaticParams` from Sanity slugs
- Fetch single project by slug

### 4.6 Live Page (`app/live/page.tsx`)

- Fetch from Sanity with `useCdn: false` (client-side, real-time)
- Use `useEffect` + `useState` or a server component with `revalidate = 0`
- Replace hardcoded `initialEntries` array

### 4.7 Homepage Featured Work (Optional)

- If you want featured projects back on the homepage, fetch `featured == true` from Sanity
- Currently `FeaturedSpotlight` is removed from `app/page.tsx`

---

## Phase 5: Data Migration

### 5.1 Migration Script

Create `scripts/migrate-to-sanity.ts`:

- Read current data from `lib/blog-data.ts` and `lib/projects-data.ts`
- Push each entry to Sanity using the Sanity client
- Run once: `npx tsx scripts/migrate-to-sanity.ts`

### 5.2 Verify Migration

- Check Sanity Studio to confirm all content is imported
- Test all pages render from Sanity data

### 5.3 Remove Hardcoded Data

- Delete `lib/blog-data.ts`
- Delete `lib/projects-data.ts`
- Remove all local imports of these files

---

## Phase 6: Deployment

### 6.1 Update `next.config.mjs`

```js
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  // REMOVE: output: 'export',
  trailingSlash: true,
};
```

### 6.2 Deploy to Vercel

- Connect GitHub repo to Vercel
- Set environment variables in Vercel dashboard:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - `SANITY_API_VERSION`
- Deploy

### 6.3 Custom Domain

- Point `alsoknownaszac.github.io` or another domain to Vercel deployment
- Configure Vercel domains in project settings

### 6.4 Sanity Webhook → Vercel Redeploy

- In Sanity dashboard → API → Webhooks
- Create webhook pointing to Vercel deploy hook URL
- Trigger: on Create, Update, Delete of blog posts, projects, or live updates
- This ensures content changes trigger automatic redeploys

---

## Rollback Plan

If anything goes wrong:

1. Revert to the commit before Sanity integration
2. GitHub Pages deployment still works with `output: 'export'`
3. Hardcoded data files can be restored from git history

---

## Estimated Timeline

| Phase                 | Estimated Time |
| --------------------- | -------------- |
| Phase 1: Setup        | 30 min         |
| Phase 2: Schemas      | 45 min         |
| Phase 3: Data Layer   | 30 min         |
| Phase 4: Page Updates | 1 hour         |
| Phase 5: Migration    | 30 min         |
| Phase 6: Deployment   | 30 min         |
| **Total**             | **~3.5 hours** |
