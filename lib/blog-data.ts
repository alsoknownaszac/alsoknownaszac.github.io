export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: "Thoughts" | "Technical" | "Projects" | "Ideas"
  date: string
  readTime: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "building-in-public",
    title: "Why I'm Building in Public",
    excerpt:
      "Thoughts on transparency, accountability, and the benefits of sharing your journey as you build products.",
    content: `Building in public has become more than just a trend—it's a philosophy that's transforming how we create products.

When I started my first project, I kept everything under wraps. I thought stealth mode was necessary to protect my ideas. But I quickly realized that ideas are cheap; execution is everything.

By sharing my progress, challenges, and even failures, I've gained something far more valuable than secrecy: community, accountability, and real-time feedback.

Here's what I've learned:

1. Accountability keeps you moving forward
When you share your goals publicly, you're more likely to follow through. There's something powerful about knowing people are watching your progress.

2. Feedback comes early and often
Instead of building in isolation for months only to discover nobody wants what you've made, you get constant reality checks. Your audience tells you what's working and what isn't.

3. You build an audience before launch
By the time you're ready to launch, you already have people invested in your success. They've watched you build it, and they want to see you succeed.

4. Transparency builds trust
People connect with the journey, not just the destination. Showing the messy middle makes you relatable and trustworthy.

The downsides? Yes, there are some. Copycats exist. Criticism can sting. But the benefits far outweigh the risks.

If you're building something, share it. Tweet about it. Write about it. Make videos about it. You'll be surprised how many people want to cheer you on.`,
    category: "Thoughts",
    date: "2025-01-15",
    readTime: "5 min",
    tags: ["Building in Public", "Startups", "Product Development"],
  },
  {
    id: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns for Better APIs",
    excerpt:
      "Explore advanced TypeScript techniques including conditional types, mapped types, and template literal types for building robust APIs.",
    content: `TypeScript has evolved far beyond basic type annotations. Modern TypeScript offers powerful features that can dramatically improve your API design and developer experience.

Let's explore some advanced patterns that will level up your TypeScript game.

## Conditional Types

Conditional types let you create types that depend on other types:

type IsString<T> = T extends string ? true : false

This pattern is incredibly useful for building flexible APIs that adapt based on input types.

## Mapped Types

Mapped types allow you to transform existing types:

type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

You can make all properties optional, readonly, or apply any transformation you need.

## Template Literal Types

Template literal types enable string manipulation at the type level:

type EventName<T extends string> = \`on\${Capitalize<T>}\`

This is perfect for ensuring type safety with dynamic property names.

## Real-World Example

Here's how you might combine these patterns in a real API:

type ApiResponse<T> = {
  data: T
  error: null
} | {
  data: null
  error: string
}

This ensures you always handle both success and error cases properly.

## Conclusion

These advanced patterns might seem complex at first, but they enable you to catch bugs at compile time instead of runtime. The investment in learning them pays dividends in code quality and developer experience.`,
    category: "Technical",
    date: "2025-01-10",
    readTime: "8 min",
    tags: ["TypeScript", "Programming", "Web Development"],
  },
  {
    id: "launching-side-project",
    title: "From Side Project to 1000 Users in 30 Days",
    excerpt:
      "A detailed breakdown of how I launched a side project and gained traction through strategic marketing and community engagement.",
    content: `Thirty days ago, I launched a side project that I'd been working on for three months. Today, it has over 1000 active users. Here's exactly how I did it.

## Week 1: The Foundation (Days 1-7)

Before launch day, I spent time building an audience. I shared progress updates on Twitter, posted in relevant subreddit communities, and reached out to a few influential people in the space for feedback.

On launch day, I posted to:
- Product Hunt
- Hacker News
- Reddit (3 relevant subreddits)
- Twitter with a thread
- LinkedIn with a post

Result: 200 signups on day one.

## Week 2: Doubling Down (Days 8-14)

I focused entirely on user feedback. I personally messaged every single user, asking what they liked and what could be better.

This revealed a critical insight: my target audience wasn't who I thought it was. I pivoted the messaging and positioning based on who was actually finding value.

Result: 300 more signups from word of mouth.

## Week 3: Content Marketing (Days 15-21)

I wrote detailed blog posts about the problem my product solves. I shared these on Medium, Dev.to, and my own blog. Each post linked back to the product.

I also started a weekly newsletter sharing tips related to the product's niche, with soft CTAs to try the product.

Result: 250 signups from content.

## Week 4: Community Building (Days 22-30)

I created a Discord community for users. This became my secret weapon. Users helped each other, shared tips, and became advocates for the product.

I also implemented a referral system that rewarded users for bringing friends.

Result: 250 more signups, and a engaged community.

## Key Takeaways

1. Start building an audience before launch
2. Listen to early users obsessively
3. Content marketing compounds over time
4. Community turns users into advocates
5. Launch is just the beginning

The real work starts after you launch. Stay focused, iterate quickly, and always put users first.`,
    category: "Projects",
    date: "2025-01-05",
    readTime: "6 min",
    tags: ["Startups", "Marketing", "Growth"],
  },
  {
    id: "developer-productivity-tools",
    title: "My Developer Productivity Stack in 2025",
    excerpt:
      "A comprehensive look at the tools, extensions, and workflows that help me stay productive as a software engineer.",
    content: `Productivity isn't about working more hours—it's about working smarter. Here's the exact stack of tools I use daily to maximize my output.

## Code Editor: VS Code

Extensions I can't live without:
- GitHub Copilot: AI pair programming
- GitLens: Git supercharged
- Error Lens: Inline error highlighting
- Prettier: Code formatting
- ESLint: Linting and code quality

## Terminal: Warp

Warp has replaced my default terminal. The AI command search and collaborative features are game-changers. I use Oh My Zsh with the "agnoster" theme and several plugins.

## Task Management: Linear

Linear combines project management with issue tracking. It's fast, keyboard-driven, and integrates with GitHub. I've tried many tools, and this is the one that stuck.

## Note-Taking: Obsidian

I use Obsidian for technical notes, meeting notes, and knowledge management. The graph view helps me see connections between concepts, and the markdown-based files mean I'm never locked in.

## API Testing: Hoppscotch

Lightweight, open-source alternative to Postman. Perfect for quickly testing API endpoints during development.

## Database: TablePlus

The best database GUI I've used. Supports multiple databases, has a clean interface, and is fast.

## Communication: Discord + Slack

Discord for community building and casual collaboration. Slack for work communication.

## Time Tracking: Toggl

I track time to understand where my hours actually go. The insights are eye-opening.

## Browser: Arc

Arc's sidebar navigation and spaces feature helps me organize work contexts. I have separate spaces for different projects.

## Conclusion

These tools help me stay in flow. The key is finding what works for you and sticking with it. Don't fall into the trap of constantly switching tools—that's the opposite of productive.`,
    category: "Technical",
    date: "2024-12-28",
    readTime: "7 min",
    tags: ["Productivity", "Tools", "Developer Experience"],
  },
  {
    id: "product-thinking",
    title: "Engineering vs Product Thinking: Why You Need Both",
    excerpt:
      "Exploring the difference between building features and building products, and why great engineers need product sense.",
    content: `There's a fundamental difference between being a great engineer and being a great product engineer. The latter requires something extra: product thinking.

## What is Product Thinking?

Product thinking is the ability to understand not just how to build something, but what to build and why. It's about seeing beyond the code to understand user needs, business goals, and market dynamics.

## Engineering Thinking

Engineers are trained to:
- Solve technical problems elegantly
- Write clean, maintainable code
- Optimize for performance and scalability
- Think in systems and abstractions

This is essential. But it's not enough.

## Product Thinking

Product thinkers ask:
- Who is this for?
- What problem does this solve?
- How will users discover this feature?
- What's the simplest version we can ship?
- How will we measure success?

## Why You Need Both

I've seen brilliant engineers build technically impressive features that nobody uses. I've also seen product people design features that are impossible to build or maintain.

The magic happens when you combine both mindsets:

1. You build features users actually need
2. You make pragmatic technical decisions
3. You can communicate with both technical and non-technical stakeholders
4. You ship faster by knowing when "good enough" is good enough
5. You understand the business impact of technical decisions

## How to Develop Product Thinking

1. Talk to users regularly
2. Analyze product metrics and understand what they mean
3. Study successful products in your space
4. Read product management books and blogs
5. Work closely with product managers and designers
6. Think about the "why" before diving into the "how"

## Conclusion

The best engineers I know are the ones who care deeply about the product, not just the code. They're curious about users, thoughtful about priorities, and pragmatic about trade-offs.

If you want to maximize your impact as an engineer, develop your product sense. It's the skill that will set you apart.`,
    category: "Ideas",
    date: "2024-12-20",
    readTime: "6 min",
    tags: ["Product Management", "Engineering", "Career"],
  },
  {
    id: "web-performance-2025",
    title: "Web Performance Optimization in 2025",
    excerpt:
      "Modern techniques for building blazing-fast web applications, from Core Web Vitals to cutting-edge frameworks.",
    content: `Web performance isn't just about making things fast—it's about making things feel fast. Here's what you need to know in 2025.

## Core Web Vitals Still Matter

Google's Core Web Vitals remain the gold standard:
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

These metrics directly impact your search rankings and user experience.

## Modern Performance Techniques

### 1. Server Components (React 18+)

React Server Components let you render on the server without sending JavaScript to the client. This dramatically reduces bundle size and improves initial load times.

### 2. Partial Prerendering

Next.js 14+ introduces partial prerendering, combining static and dynamic content seamlessly. Static shells load instantly while dynamic parts stream in.

### 3. Image Optimization

Use next/image or similar tools to automatically:
- Serve WebP/AVIF formats
- Generate multiple sizes
- Lazy load below the fold
- Prevent layout shift with placeholders

### 4. Code Splitting

Split your code at route boundaries and lazy load components that aren't immediately needed:

const HeavyComponent = lazy(() => import('./HeavyComponent'))

### 5. Edge Computing

Deploy to edge networks like Vercel Edge or Cloudflare Workers to serve content from locations close to your users.

## Measuring Performance

Use these tools:
- Lighthouse for audits
- WebPageTest for real-world testing
- Chrome DevTools Performance panel for profiling
- Real User Monitoring (RUM) tools for production data

## The 80/20 Rule

Focus on:
1. Reducing bundle size (code splitting, tree shaking)
2. Optimizing images
3. Caching effectively
4. Using a CDN

These four things will give you 80% of the performance gains with 20% of the effort.

## Conclusion

Performance is a feature. Users notice when your site is slow, and they'll leave. Invest in performance from day one—it's much harder to fix later.`,
    category: "Technical",
    date: "2024-12-15",
    readTime: "9 min",
    tags: ["Web Performance", "React", "Next.js", "Optimization"],
  },
]
