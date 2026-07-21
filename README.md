# Software engineer showcase

_Automatically synced with your [v0.app](https://v0.app) deployments_

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/alsoknownaszacs-projects/v0-software-engineer-showcase)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/ijH8I3FCPVE)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/alsoknownaszacs-projects/v0-software-engineer-showcase](https://vercel.com/alsoknownaszacs-projects/v0-software-engineer-showcase)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/ijH8I3FCPVE](https://v0.app/chat/ijH8I3FCPVE)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Homepage Section Variants

Multiple design variants were explored for key homepage sections. The currently active variants are:

### Featured Work — **Option E ✓** (Horizontal Scroll Strip)

| Variant        | Component                          | Description                                                                                                                                                    |
| -------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Option D**   | `components/featured-hero.tsx`     | Full-Width Featured Hero — First project spans full width with large editorial image, parallax scroll, gradient overlay. Remaining two sit side-by-side below. |
| **Option E ✓** | `components/featured-scroll.tsx`   | Horizontal Scroll Strip — Large project images in a horizontally scrollable row with snap behavior, numbered overlays, and right-edge fade gradient.           |
| **Option F**   | `components/featured-timeline.tsx` | Numbered Timeline Cards — Alternating left/right image-content layout with large faded numbers (01, 02, 03) behind each image. Premium portfolio feel.         |

### Technology — **Option C ✓** (Organic Tag Cloud)

| Variant        | Component                         | Description                                                                                                                                                     |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Option A**   | `components/tech-marquee.tsx`     | Dual Marquees — Two infinite horizontal scrolling tickers moving in opposite directions at different speeds and sizes.                                          |
| **Option B**   | `components/tech-typographic.tsx` | Typographic Display — Staggered cinematic column of tech names with varying sizes (3xl–8xl), font weights, and alignments.                                      |
| **Option C ✓** | `components/tech-tag-cloud.tsx`   | Organic Tag Cloud — 20 skill tags scattered in a non-grid layout with pseudo-random positioning, varying sizes/opacities, and subtle floating drift animations. |

### Quick Links — **Option G ✓** (Bento Grid)

| Variant        | Component                         | Description                                                                                                                            |
| -------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Option G ✓** | `components/quick-bento.tsx`      | Bento Grid — Asymmetric 2-column grid where Résumé spans two rows on the left. Subtle grain dot pattern on each card.                  |
| **Option H**   | `components/quick-line.tsx`       | Minimal Horizontal Line Row — Three links as horizontal rule-separated rows with expanding lines on hover. Ultra-minimal, typographic. |
| **Option I**   | `components/quick-icon-stack.tsx` | Icon-Led Vertical Stack — Each link has a bordered icon box, large title, description, and subtle hover scale.                         |

### Switching Variants

To switch to a different variant, edit `app/page.tsx` and swap the imported component. For example, to switch Featured Work from Option E to Option D:

```tsx
// Current:
import { FeaturedScroll } from "@/components/featured-scroll";
// ...
<FeaturedScroll />;

// Switch to:
import { FeaturedHero } from "@/components/featured-hero";
// ...
<FeaturedHero />;
```
