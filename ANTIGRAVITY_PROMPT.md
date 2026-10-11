# Antigravity prompt: Ahmed Kamel portfolio

Put these in the project folder before sending: `SITE_PLAN.md` (root), `docs/PROJECT_CONTENT.md`, `docs/PERSONAL_INFO.md`, `docs/MISSING_ASSETS.md`, and the Stitch files in `design/stitch-exports/`. Paste everything below the line.

---

You are a senior creative developer and designer. Build a premium, original, interactive 3D portfolio website for Ahmed Kamel, a software developer based in Alexandria, Egypt.

## Read first (in this order)
1. `SITE_PLAN.md`: structure, required content, technical requirements, rules, phases.
2. `docs/PROJECT_CONTENT.md`: the confirmed facts for the three projects.
3. `docs/PERSONAL_INFO.md`: what is known about Ahmed (many fields are still empty).
4. `docs/MISSING_ASSETS.md`: what has not been supplied yet and where it goes.
5. `design/stitch-exports/`: Stitch output, reference only (see below).
Inspect the project folders and any files that exist before writing code.

## Your creative freedom
The visual design is yours. Decide the concept, layout, composition, typography, shapes, how 3D is used and what it depicts, scroll choreography, transitions and how the three projects are staged. Use your own taste and judgment. The goal is a site that feels like a polished, award-level Framer site made by a senior designer: confident, original, not a template, not a clone of any website, and not a generic "dark cyber" portfolio.

Before building, write a short `DESIGN_CONCEPT.md` (one page maximum): your idea, why it suits a software developer, how the page is organised, and how 3D and scroll serve that idea.

## Stitch files are inspiration only
`design/stitch-exports/` holds a Stitch design-system file, an HTML/Three.js animation and the original brief. Take ideas from them if you like, but you are free to depart from them. They do **not** set the palette: they are dark with extra accent colors. Do not reuse `code.html` as production code (it is imperative Three.js r125 from a CDN); rebuild properly with the stack below. Do not reproduce the invented system metadata in them (latency, "SYS: ACTIVE", production status readouts).

## Hard constraints (the only fixed design rules)
- **White background** (`#FFFFFF`; `#F5F7FA` allowed for subtle surfaces).
- **Only three colors:** white, light blue (`#77CFFF`, with tints and shades of the same blue), and black (`#080B10`). You decide how to distribute them. No other hues, no neon, no bloom/glow, no gradients that introduce new colors. Define them as CSS variables.
- **Contrast:** light blue on white fails text contrast, so use it for shapes, lines, fills and 3D, and use black (or white on black) for text. Meet WCAG AA.
- **Real 3D tied to the content** (not decoration), **scroll-driven animations** and smooth transitions at Framer-level polish.
- The three projects must feel like three distinct experiences, not a repeated card grid.
- Navigation and project details must stay usable without 3D, hover or scroll alone.

## Stack
Next.js App Router, React, TypeScript, Tailwind CSS, Motion for React (`motion/react`) for transitions and scroll animation, Three.js through React Three Fiber + Drei (lazy-loaded with `next/dynamic`, `ssr: false`), Lucide icons sparingly. A smooth-scroll helper such as Lenis is allowed (smoothing only, no scroll hijacking). No GSAP, physics libraries, post-processing, or downloaded 3D models unless you justify it and I approve. No backend in v1. Use the source layout in `SITE_PLAN.md` section 6. Keep all copy in `src/data/*.ts` (projects, skills, journey, site); components contain no hard-coded project text.

## Content rules (non-negotiable, see SITE_PLAN.md section 9)
- Use the project wording in `docs/PROJECT_CONTENT.md`. Invent nothing: no data, links, statistics, job titles, years of experience, clients, metrics, awards, testimonials, screenshots or skill percentages.
- No graduation year, no "graduate" wording, no phone number.
- Fee payment (Portal) and payment/balance/rewards (PAYNGO) are always described as simulated/local demo logic. The Projects Hub is a front-end showcase platform: no claim of a production backend or real uploads.
- Link status: BATU University Portal and BATU Projects Hub are `live` (both loaded on 2026-10-11). **PAYNGO is `unpublished`**: show a clear "Demo Coming Soon" state, with no demo button, no repo link and no placeholder URL. Action buttons render only when a verified URL exists.
- Do not reuse the university's text, phone, email, news or social links as Ahmed's content.
- Figures (40+ pages; 82+ projects in 2023; 52 at the first IT exhibition) only as stated in `docs/PROJECT_CONTENT.md`, attributed to the brief/department, never as Ahmed's achievements. "CNC" stays hidden until confirmed.
- Missing images: clearly labelled placeholders, listed in `docs/MISSING_ASSETS.md`. Never stock, AI-generated or invented screenshots.
- Empty contact, Journey or "Currently learning" data: hide that content gracefully. Show Ahmed's role on a project only when supplied.
- Use "Borg El Arab" with a TODO comment until the spelling is confirmed.

## Performance, fallbacks, accessibility
- Load 3D after first paint; Three.js never in the initial bundle; reserve the 3D area's size (no layout shift); cap DPR (about 1.5); pause or unmount 3D when off-screen or the tab is hidden; no heavy models, particle floods, large videos or long fake loading screens. The LCP element should be real text.
- 2D/static fallback when WebGL is unavailable, `prefers-reduced-motion` is set, `saveData` is on, or the device is weak. Add a visible "Simple view" toggle. Reduced motion means instant state changes or crossfades.
- Semantic landmarks, one `h1`, "Skip to work" link, visible focus ring, keyboard-usable controls, `aria-hidden` canvases with text equivalents, real alt text, metadata and Open Graph, `lang="en"`. English only.
- Responsive from about 360px to large desktop with no horizontal overflow. Mobile is designed deliberately, not a squeezed desktop. Touch uses taps and native scroll, no pointer tracking.

## Process (stop for my review after each phase)
- **Phase 2:** write `DESIGN_CONCEPT.md`, then the foundation: project setup, tokens, fonts, layout, navigation, data files. It must work without WebGL. Stop.
- **Phase 3:** the full 2D baseline with real copy, every section, the `/work/[slug]` route, graceful empty states and placeholders. Stop and tell me how to run it.
- **Phase 4:** the 3D experience and the three project presentations, with capability gating and fallbacks. Stop.
- **Phase 5:** scroll animation, transitions, reduced-motion pass, mobile polish. Stop.
- **Phase 6:** real assets and confirmed details, link check. **Phase 7:** QA. **Phase 8:** deploy.

At the end of every phase run lint, type-check and `next build` and report results honestly, including anything you could not verify. Commit at each phase boundary. Start now with Phase 2 only.
