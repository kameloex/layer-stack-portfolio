# SITE_PLAN.md — Ahmed Kamel Portfolio (structure and content)

This file defines **what the site contains, how it is organised, and the rules it must follow**.
It deliberately does **not** define the visual concept, layout composition, typography or motion language. Those are left to the implementing agent's own judgment and creativity (see section 2).

Read order for the agent: `SITE_PLAN.md` → `docs/PROJECT_CONTENT.md` → `docs/PERSONAL_INFO.md` → `docs/MISSING_ASSETS.md` → `design/` (reference only).

---

## 1. Goal and audience

A fast, premium, interactive 3D portfolio that positions Ahmed Kamel, a software developer based in Alexandria, Egypt, as someone who builds usable digital products: web interfaces, interactive workflows, and software connected to physical systems.

Audience: recruiters, engineering teams, freelance clients. A visitor must understand who Ahmed is, what he built, and how to contact him within a few seconds, with or without 3D.

---

## 2. What is fixed and what is free

### Fixed (must follow)
| Area | Requirement |
|---|---|
| Background | **White** (`#FFFFFF`; `#F5F7FA` allowed for subtle surfaces) |
| Colors | **Only** white, light blue (`#77CFFF`, plus tints and shades of the same blue) and black (`#080B10`). The agent decides how to distribute them. No other hues (no purple, green, pink, etc.), no neon, no bloom/glow |
| Contrast | Light blue on white fails text contrast. Readable text must meet WCAG AA, so use light blue for shapes, lines, fills and 3D, and black (or white on black) for text |
| 3D | The site must use real 3D that is tied to the content, not decoration |
| Scroll | Scroll-driven animations and smooth transitions at Framer-level polish |
| Content | Section list (§4), project facts (`docs/PROJECT_CONTENT.md`), honesty rules (§9) |
| Quality | Performance, fallbacks, accessibility, responsiveness (§8) |

### Free (the agent decides, using its own taste)
Visual concept and metaphor, layout and composition, typography, spacing, shapes, how 3D is staged and what it depicts, scroll choreography, hover/focus behaviour, transitions, how the three projects are staged, and section order within the constraints of §4.

### Design references
`design/stitch-exports/` contains Google Stitch output (a design-system file, an HTML/Three.js animation, and the original brief). Use them as **inspiration only**:
- They are dark-themed with extra accent colors; the palette above overrides them.
- `code.html` loads Three.js r125 from a CDN with imperative code. Do not reuse it as production code; rebuild with the specified stack.
- Do not reproduce invented system metadata from them (for example latency, "SYS: ACTIVE" or production-status readouts).
- Do not clone any reference website or template.

---

## 2.1 Project order (provisional)
1. BATU University Portal
2. PAYNGO Smart Cart Interface (status: unpublished, see §7)
3. BATU Projects Hub

The three projects must feel like **three distinct experiences**, not a repeated card grid. The agent chooses how.

---

## 3. Sitemap

```
/                       Home (single scrolling experience)
/work/[slug]            Case study, statically generated from src/data/projects.ts
   /work/batu-university-portal
   /work/payngo-smart-cart
   /work/batu-projects-hub
not-found               Branded 404
metadata                sitemap.xml, robots.txt, Open Graph image, favicon
resume.pdf              Only if Ahmed approves a CV download
```

Navigation must be understandable with 3D disabled: conventional links, a visible "Skip to work" path, and keyboard access.

---

## 4. Home page content inventory (in this order)

1. **Hero:** name (Ahmed Kamel), a short role line, supporting line, two actions (Explore selected work, Get in touch), navigation.
   - Draft headline: "I build digital systems that connect ideas to real experiences."
   - Draft supporting line: "Software developer focused on web experiences, interactive applications, and connected systems."
   - Both are drafts; keep claims grounded in the supplied content.
2. **Selected work:** the three projects (§2.1), each with title, one-line value proposition, role/context (when supplied), technologies, and its real actions.
3. **Capabilities:** Web Experiences; Interactive Applications; Embedded/Connected Systems, **only where supported** by approved project details (see `docs/PROJECT_CONTENT.md`; Ahmed's own role in the embedded side must be confirmed before this group appears).
4. **Technical toolkit:** grouped skills, separating "Used in projects" from "Currently learning" (the latter only if supplied). No proficiency percentages, no logo wall.
5. **Journey:** training, freelance and teaching/program experience from the CV with checked dates. If no real data is supplied, **omit this section**.
6. **Contact:** email, GitHub, LinkedIn, optional approved CV download. Hide any empty value. No phone number. No contact form in v1.
7. **Footer.**

Case-study page content: cover/title, overview, problem and context, key workflows, implementation highlights, technology list, real screenshot gallery, honesty note, actions (only verified), next project.

---

## 5. Data model (all copy lives in data files, never in components)

```ts
type Status = "live" | "unverified" | "unpublished";

interface Project {
  slug: string;                 // batu-university-portal | payngo-smart-cart | batu-projects-hub
  title: string;
  tagline: string;
  cardDescription: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  implementationHighlights: string[];
  honestyNote?: string;
  status: Status;
  demo?: { url: string; verifiedOn: string };   // absent unless verified
  repo?: { url: string };                       // absent unless real
  demoNote?: string;                            // shown only when demo exists
  role?: string;                                // hidden until supplied
  media: { src: string; alt: string; kind: "cover" | "screenshot" | "video" }[];
}
```
Also: `src/data/skills.ts`, `src/data/journey.ts`, `src/data/site.ts` (name, title, contact links). Empty typed structures are acceptable; sections must render gracefully when empty.

An action button renders **only** when its URL exists and the status allows it.

---

## 6. Folder structure

Project folders already created on disk (do not delete):

```
<project-root>/
  docs/                       PROJECT_CONTENT.md, PERSONAL_INFO.md, MISSING_ASSETS.md
    content/                  CV and text supplied by Ahmed
  design/
    stitch-exports/           Stitch output (reference only)
    references/               other visual references
  public/
    images/
      brand/                  favicon, monogram, Open Graph image
      profile/                optional photo
      projects/
        batu-university-portal/   cover.* and shots/
        batu-projects-hub/        cover.* and shots/
        payngo-smart-cart/        cover.* and shots/
    fonts/                    only if local fonts are needed
    models/                   normally empty (no downloaded 3D models)
```

Source layout (adapt to framework defaults; avoid unnecessary abstraction):

```
src/
  app/            layout.tsx, page.tsx, globals.css, not-found.tsx, work/[slug]/page.tsx
  components/     layout/, sections/, projects/, scene/ (3D, lazy-loaded), ui/
  data/           projects.ts, skills.ts, journey.ts, site.ts
  lib/            motion.ts, utils.ts
```

Image convention: cover at `public/images/projects/<slug>/cover.webp` (or png/jpg), screenshots in `.../shots/`.

---

## 7. Live demo verification

Checked 2026-10-11 by fetching each page. This confirms each page loads; it does not test every sub-page.

| Project | URL | Result | Status |
|---|---|---|---|
| BATU University Portal | https://kameloex.github.io/BATU/ | Loaded (Arabic/English home page) | `live` |
| BATU Projects Hub | https://kameloex.github.io/Batu-projects/ | Loaded (projects, news, events, knowledge pages) | `live` |
| PAYNGO Smart Cart Interface | none supplied | not applicable | **`unpublished`** |

Rules:
- PAYNGO shows a clear "Demo Coming Soon" state until a real URL is supplied. No demo button, no repo link, no placeholder URL. When published, show beside the demo action: "Demo tip: Sign up with any account to explore the demo."
- Re-check all links before release.
- Text, phone numbers, emails, news and social links on the BATU demo sites belong to the university; do **not** reuse them as Ahmed's own content.

---

## 8. Technical requirements

**Stack:** Next.js App Router + React + TypeScript; Tailwind CSS; Motion for React (`motion/react`) for transitions and scroll animation; Three.js through React Three Fiber + Drei, lazy-loaded; Lucide icons sparingly. Smooth-scroll helper (for example Lenis) is allowed. Not allowed unless justified and approved: GSAP, physics libraries, post-processing, downloaded 3D model libraries. No backend or database in v1. Git for version control; deploy to Vercel at the end.

**Performance**
- 3D loaded with dynamic import (`ssr: false`) after first paint; Three.js never in the initial bundle.
- Reserve the 3D area's size (no layout shift). DPR capped (about 1.5). Pause or unmount 3D when off-screen or the tab is hidden. Avoid heavy models, particle floods, large videos and long fake loading screens.
- LCP should be real content (text), not the canvas.

**Fallbacks**
- A 2D/static presentation when WebGL is unavailable, `prefers-reduced-motion` is set, `saveData` is on, or the device is weak, plus a visible "Simple view" toggle.
- `prefers-reduced-motion`: replace scroll-linked motion with instant state changes or crossfades.
- Nothing essential depends on hover, 3D or scroll alone. Interactions have button/keyboard equivalents.

**Accessibility and SEO:** semantic landmarks, one `h1`, skip link, visible focus ring, keyboard-usable navigation, `aria-hidden` canvases with text equivalents, real alt text from the actual screenshots, metadata and Open Graph, `lang="en"`.

**Responsive:** about 360px to large desktop, no horizontal overflow. Mobile is designed deliberately (not a squeezed desktop). Touch uses taps and native scroll, no pointer tracking.

**Language:** English only for v1. No bilingual toggle.

---

## 9. Content rules (non-negotiable)

- Do not invent project data, links, statistics, job titles, years of experience, clients, metrics, awards, testimonials, screenshots, or skill percentages.
- Do not display a graduation year or describe Ahmed as a graduate.
- No phone number. Default contact: email, GitHub, LinkedIn.
- Fee payment (Portal) and payment/balance/rewards (PAYNGO) are always described as **simulated/local demo logic**. Never imply a real bank or payment gateway.
- The Projects Hub is a **front-end showcase/information platform**. Do not claim a production backend or real uploads.
- Separate "Used in projects" from "Currently learning". Do not claim expert-level skill in every technology.
- Figures (40+ pages; 82+ projects in 2023; 52 projects at the first IT exhibition): use only as stated in `docs/PROJECT_CONTENT.md`, attributed to the supplied project brief or the department. Never present them as Ahmed's own achievements.
- Use only real screenshots/recordings supplied by Ahmed. Missing images become clearly labelled placeholders listed in `docs/MISSING_ASSETS.md`. No stock or AI-generated substitutes.
- Ahmed's own role (individual vs team) is shown only once he confirms it.
- University name spelling is unresolved (see §11): use "Borg El Arab" with a TODO until confirmed.

---

## 10. Build phases (stop for review after each)

| Phase | Output |
|---|---|
| 1 | (done) Plan, link verification, missing-asset list |
| 2 | Foundation: Next.js setup, tokens, fonts, layout, navigation, data files. Works with no WebGL |
| 3 | Full 2D baseline with real copy, all sections, case-study route, graceful empty states |
| 4 | 3D experience and project presentations, capability gating, fallbacks |
| 5 | Scroll animation, transitions, reduced-motion pass, mobile polish |
| 6 | Real assets and confirmed role details dropped in; link check |
| 7 | QA: lint, type-check, build, console, hydration, links, overflow, accessibility, performance |
| 8 | Publish repository, deploy to Vercel, verify the public site and every link |

At the end of every phase: run lint, type-check and `next build`, report honestly, state what could not be verified, commit.

---

## 11. Open questions for Ahmed

1. University spelling: "Borg El Arab" (long description, live hub) or "Burg Al Arab" (blueprint tagline, live portal)?
2. Ahmed's role on each project: individual or team, and what exactly?
3. Does Ahmed have hands-on embedded/connected-systems work? (Needed for the third capability.)
4. Email, GitHub URL, LinkedIn URL; is a CV download approved?
5. CV entries for Journey (training, freelance, teaching/program) with dates.
6. "Used in projects" and "Currently learning" skill lists.
7. PAYNGO: publish the repo/demo, or ship with genuine screenshots/video and "Demo Coming Soon"?
8. Hub categories "Smart Home, Smart Car, Smart Drone, CNC" appear in the Stitch brief; the live Hub shows counts for smart homes, drones, smart cars and other projects but CNC was not seen. Confirm CNC before it is shown.
