# Christopher Nguyen — Portfolio

A fast, accessible personal portfolio positioning Christopher Nguyen for **Application
Security**, **Backend**, and **Software Engineering** roles. Built as a clean, modern
product-style site that's easy for recruiters and engineers to scan.

**Live site:** _add your Vercel URL after the first deploy_

## Tech stack

- **[Next.js 16](https://nextjs.org/)** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-variable design tokens, light + dark themes)
- **Geist** / **Geist Mono** via `next/font`
- Build-time **OG image** & favicon via `next/og`
- Fully **static** — no backend, no database, no paid services
- Deploys free on **[Vercel](https://vercel.com/)**

## Features

- Responsive, mobile-first layout with a polished light/dark theme toggle (no flash on load)
- Home, Projects index, three detailed case studies, and a Resume page
- Typed content model — every fact lives in `src/content`, separate from presentation
- SEO: per-page metadata, Open Graph image, `sitemap.xml`, `robots.txt`, and JSON-LD
- Accessible: semantic landmarks, skip link, focus-visible styles, labelled controls,
  `prefers-reduced-motion` support, and AA color contrast

## Project structure

```text
public/
  images/                     # project screenshots (drop files here)
  Christopher_Nguyen_Resume.pdf
src/
  app/                        # routing + pages (Next.js App Router)
    layout.tsx                # root layout, metadata, theme script
    page.tsx                  # home page
    projects/                 # /projects and /projects/[slug] case studies
    resume/                   # /resume (embedded preview + download)
    sitemap.ts, robots.ts     # generated SEO files
    opengraph-image.tsx       # social share image
    icon.tsx                  # favicon (monogram)
  sections/                   # major page sections (Hero, About, Skills, …)
  components/                 # reusable blocks (Navbar, Footer, ProjectCard, CaseStudy)
    ui/                       # primitives (Button, Tag, Container, Icons, …)
  assets/                     # graphical SVG components (e.g. PipelineDiagram)
  content/                    # typed content — the single source of truth
  lib/                        # small utilities
```

## Local development

**Prerequisites:** Node.js 18.18+ (Node 20+ recommended) and npm.

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:3000
npm run build      # production build
npm start          # serve the production build locally
npm run lint       # ESLint
npx tsc --noEmit   # type-check
```

## Editing content

All copy and data live in `src/content` — update these, not the components:

- `profile.ts` — hero copy and the About section
- `skills.ts` — technical skills and focus areas
- `experience.ts` — work experience and education
- `projects.ts` — the three case studies (overview, role, architecture, metrics, links)
- `site.ts` — contact links, resume path, and the production URL

### Placeholders to fill in

Search the codebase for `REPLACE_ME` to find everything that needs your input:

- `src/content/site.ts` — set `url` to your real Vercel URL after the first deploy
- `src/content/projects.ts` — add the **McKesson** repo URL (once public) and demo video,
  and the **SpartyBoots** repo URL (set the link's `href`)
- `public/images/` — add project screenshots here, then surface them in the case study
- `public/Christopher_Nguyen_Resume.pdf` — replace with your latest resume anytime

## Deploying to Vercel (free)

1. **Push to GitHub** — create a repository and push this project.
2. **Import into Vercel** — at [vercel.com/new](https://vercel.com/new), select the repo.
3. **Build settings** — leave the defaults; Vercel auto-detects Next.js (Framework: Next.js,
   Build Command: `next build`, Output: `.next`). No environment variables are required.
4. **Deploy** — Vercel builds and gives you a production URL
   (e.g. `https://your-name.vercel.app`). Update `siteConfig.url` in `src/content/site.ts`
   to that URL and redeploy so canonical/OG links are correct.
5. **Custom domain (optional)** — add one later under the project's **Domains** settings.

## License

Personal project © Christopher Nguyen. Content and resume are not licensed for reuse.
