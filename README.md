# Ahmed Kamel — The Layer Stack Portfolio

A high-performance, interactive 3D portfolio website for **Ahmed Kamel**, a software developer based in Alexandria, Egypt. Built with the **Layer Stack** architectural aesthetic: structured planar depth, tactile system schematics, Framer-grade kinetic transitions, and content-tied 3D models.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router, React 19, TypeScript)
- **Styling & Design Tokens:** Tailwind CSS v3, PostCSS, Autoprefixer
- **Typography:** Bricolage Grotesque (display/headlines) & Inter (body/metadata/mono) via `next/font/google`
- **Interactive 3D:** Three.js + React Three Fiber (`@react-three/fiber`) + Drei (`@react-three/drei`)
- **Kinetic Animations:** Motion for React (`motion/react`)
- **Smooth Scrolling:** Lenis (smoothing only, zero scroll-hijacking)
- **Icons:** Lucide React & custom SVG brand icons

---

## 🎨 Design Philosophy: "The Layer Stack"

Software engineering is the composition of invisible layers: low-level silicon buses, application state machines, and responsive human interfaces. 

This portfolio makes that stack visible and tactile:
1. **L3 // Web Platform Layer:** 40+ page responsive architectures, RTL-first styling, and data-driven client rendering.
2. **L2 // Application & State Layer:** Debounced scan pipelines, client-side Luhn verification, simulated transactions, and Canvas API charts.
3. **L1 // Connected Systems & Data:** Raspberry Pi, Arduino microcontrollers, hardware sensor loops, and relational persistence.

### Color Constraints
Strictly constrained three-color palette meeting **WCAG AA** contrast:
- **Canvas:** `#FFFFFF` (subtle surfaces `#F5F7FA`)
- **Ink Primary:** `#080B10` (text & dark inverted contact section)
- **Light Architectural Blue:** `#77CFFF` (structural tints `#D9F2FD`, `#4FA8DE`, `#005777` — strictly for shapes, fills, lines, and 3D planes)

---

## 🚀 Key Features

- **Three Distinct Project Staging Experiences:**
  - **BATU University Portal:** Architectural system index, tabbed workflows, verified live demo.
  - **PAYNGO Smart Cart Interface:** Tactile embedded touchscreen console, debounced scan pipeline, loyalty coins, Canvas charts, with a verified "Demo Coming Soon" state.
  - **BATU Projects Hub:** Department hardware repository, exhibition archives (82+ projects in 2023), board guides for Arduino/ESP32/Raspberry Pi.
- **Dynamic Case Study Routes (`/work/[slug]`):** Pre-rendered static case studies with full specifications, honesty notes, and real screenshot galleries.
- **Procedural 3D Model with Zero-CLS Fallback:**
  - DPR capped at 1.5, paused when off-screen or tab hidden.
  - Excluded from initial critical bundle (`next/dynamic` with `ssr: false`).
  - Seamless 2D architectural schematic fallback on low-power devices, data-saver mode, reduced motion, or when the user toggles **"Simple view"**.
- **Complete Accessibility:** Single `h1`, keyboard skip link ("Skip to work"), high-contrast focus rings, `aria-hidden` canvas with semantic DOM equivalents.

---

## 💻 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+ (tested on Node v22.18.0)
- npm 9+

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### Quality Verification & Production Build
```bash
# Type check with TypeScript compiler
npm run type-check

# Run Next.js linter
npm run lint

# Compile optimized static production build
npm run build

# Start local production preview
npm run start
```

---

## 🌐 Deployment to Vercel

### Option 1: Via GitHub & Vercel Dashboard (Recommended)
1. Create a new repository on your GitHub account (`https://github.com/kameloex/layer-stack-portfolio`).
2. Push this local repository to GitHub:
   ```bash
   git remote add origin https://github.com/kameloex/layer-stack-portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Visit [vercel.com](https://vercel.com) and click **"Add New Project"**.
4. Import your `layer-stack-portfolio` repository. Next.js App Router defaults will be automatically detected.
5. Click **Deploy**.

### Option 2: Via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompt to link your Vercel account and deploy.

---

## 📄 License & Content Honesty
All copy and facts in this repository are strictly verified and grounded in supplied project briefs and CV records. No artificial metrics or fake testimonials are used.
