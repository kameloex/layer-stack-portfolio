---
name: The Layer Stack
colors:
  surface: '#f7f9fc'
  surface-dim: '#d8dadd'
  surface-bright: '#f7f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f7'
  surface-container: '#eceef1'
  surface-container-high: '#e6e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#191c1e'
  on-surface-variant: '#45474b'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f4'
  outline: '#76777b'
  outline-variant: '#c6c6cb'
  surface-tint: '#5c5e65'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#191c21'
  on-primary-container: '#81848b'
  inverse-primary: '#c4c6ce'
  secondary: '#00668a'
  on-secondary: '#ffffff'
  secondary-container: '#76cefe'
  on-secondary-container: '#005777'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001e2e'
  on-tertiary-container: '#2a8cc0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e2ea'
  primary-fixed-dim: '#c4c6ce'
  on-primary-fixed: '#191c21'
  on-primary-fixed-variant: '#44474d'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#c8e6ff'
  tertiary-fixed-dim: '#88ceff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6d'
  background: '#f7f9fc'
  on-background: '#191c1e'
  surface-variant: '#e0e3e6'
typography:
  display-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 76px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  code-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an editorial, engineering-driven identity for Ahmed Kamel, a software developer based in Alexandria, Egypt. The visual language bridges architectural precision with Framer-grade kinetic polish. 

### Aesthetic Philosophy
The aesthetic combines structural minimalism with isometric physical metaphors termed "The Layer Stack." Physicality is communicated through matte planar surfaces, crisp technical hairlines, and subtle multi-layered perspective offsets rather than high-gloss skeuomorphism or futuristic neon glows. 

### Core Traits
- **Architectural & Deliberate:** Clear structural hierarchy, visible wireframe lineages, calibrated whitespace, and hairline boundaries.
- **Editorial Typography:** Expressive, tightly kerned display type balanced against utilitarian, highly legible body copy.
- **Tactile Matte Realism:** Translucent cyan panes, muted ambient contact shadows, and mechanical layer stacking evoking frosted drafting film and architectural schematics.
- **Controlled Restraint:** High contrast anchored by ink black (`#080B10`) and clean white (`#FFFFFF`), using tint-based blues strictly as architectural accents, indicators, and spatial planes.

## Colors

The palette relies on stark monochrome contrast softened by cool architectural blue tints. Color is never applied decoratively without functional structural purpose.

### Palette Architecture
- **Ink Primary (`#080B10`):** Pure deep charcoal-black. Applied to all primary typography, structural borders, primary interactive states, and fully inverted anchor sections (e.g., the global footer and contact canvas).
- **Secondary Accent (`#77CFFF`):** Sky-blue accent. Restricted strictly to matte fills, focus indicators, selection states, architectural pane overlays, and highlights. **Never applied to text set on light backgrounds.**
- **Accent Tints:**
  - `Accent Subtle (#D9F2FD)`: Translucent planes, tinted pill backgrounds, active pill markers, and hover backdrops.
  - `Accent Structural (#4FA8DE)`: Technical perimeter borders for isometric layers, active state highlights, and focus rings.
- **Neutrals & Surfaces:**
  - `Base Surface (#FFFFFF)`: Primary canvas background.
  - `Subtle Surface (#F5F7FA)`: Off-white canvas, nested card fills, and secondary module backgrounds.
  - `Text Secondary (`rgba(8, 11, 16, 0.60)` / `#080B1099`)`: Subheadings, meta-annotations, and captions.
  - `Hairline Border (`rgba(8, 11, 16, 0.08)` to `rgba(8, 11, 16, 0.12)` / `#080B1014`)`: All card edges, list dividers, and grid seams.

### Inverted Surface Rules
Inverted containers (such as the contact section) reverse this hierarchy: surface becomes `#080B10`, primary text becomes `#FFFFFF`, secondary text becomes `rgba(255, 255, 255, 0.60)`, and boundaries shift to `rgba(255, 255, 255, 0.12)`.

## Typography

Typographic execution emphasizes high contrast between bold display titles and precise, functional body text.

### Font Roles
- **Display & Headline (`Bricolage Grotesque`):** Characterful, tight, contemporary grotesque. Used in sentence case with snug negative letter-spacing for all visual headers, section leads, and hero titles.
- **Body & Metadata (`Inter`):** Neutral, highly legible modern workhorse. Drives all editorial body copy, UI controls, navigation labels, and meta-tags.

### Editorial Guidelines
- Use sentence case for headlines; avoid aggressive all-caps outside of technical micro-labels or project tags.
- Display scale sizes must collapse gracefully between desktop and mobile break points to preserve editorial weight without awkward line wraps.
- Text links inherit the base font weight but feature an animated 1px underline positioned with a 3px vertical offset.

## Layout & Spacing

Layouts follow an adaptable 12-column grid system paired with strict horizontal rhythm rules.

### Grid & Alignment Structure
- **Desktop (>= 1024px):** 12-column fluid grid, max content width of `1280px`, outer margins of `4rem`, column gutter of `1.5rem`.
- **Tablet (768px - 1023px):** 8-column grid, outer margins of `2rem`, column gutter of `1.25rem`.
- **Mobile (< 768px):** 4-column grid, outer margins of `1rem`, column gutter of `1rem`.

### Spacing Philosophy
- Stack spacing follows a base unit of 8px (0.5rem).
- Primary page sections require substantial breathing room, maintaining `5rem` to `8rem` vertical separation on desktop, stepping down to `3rem` to `4rem` on mobile.
- Interior component padding uses disciplined steps (`space-sm` for inline controls, `space-md` for items/chips, `space-lg` to `space-xl` for project card insets).

## Elevation & Depth

This design system avoids heavy blurred drop shadows and glossy skeuomorphic effects. Elevation is expressed through **The Layer Stack**: flat spatial displacement, layered matte geometry, and delicate ambient contact occlusions.

### Depth Principles
1. **The Layer Stack Construct:** 3D perspective layers (code abstractions, diagrams, architecture charts) are composed of stacked translucent panes (`#D9F2FD` at 40-70% opacity, `#FFFFFF` at 90% opacity). Each plane is bounded by a crisp 1px hairline border (`#080B101F` or `#4FA8DE`).
2. **Contact Shadows:** Elevated floating elements project crisp, compact, directional ambient shadows:
   - *Resting Card:* `0 1px 3px rgba(8, 11, 16, 0.04), 0 6px 16px rgba(8, 11, 16, 0.03)`
   - *Hover Shift:* `0 4px 12px rgba(8, 11, 16, 0.06), 0 16px 32px rgba(8, 11, 16, 0.05)` accompanied by a `-2px` Y-axis lift.
   - *Floating Pill Nav:* `0 8px 24px rgba(8, 11, 16, 0.06)`
3. **Glass Translucency:** Floating elements (like navigation) use a physical frosted effect via `backdrop-filter: blur(16px)` layered on top of `rgba(255, 255, 255, 0.82)` with a 1px border of `rgba(8, 11, 16, 0.08)`.

## Shapes

The geometric vocabulary balances clean rectangular architecture with soft human touchpoints.

### Corner Radius System
- **Pill Radius (`rounded-full` / `9999px`):** Reserved for floating navigation bars, status badges, contextual chips, and high-emphasis action triggers.
- **Medium Panels (`rounded-xl` / `1rem`):** Project showcase cards, modal windows, and interactive containers.
- **Micro Radii (`rounded-md` / `0.5rem`):** Form input fields, code snippet boxes, and sub-panels.
- **Hairline Borders:** Everywhere a border is deployed, use consistent 1px solid lines. Avoid variable border thicknesses across states.

## Components

### 1. Navigation (Floating Pill Bar)
- **Geometry:** Centered, fixed, `rounded-full`, height 48px to 54px.
- **Surface:** `rgba(255, 255, 255, 0.82)` with `backdrop-filter: blur(16px)` and 1px border `rgba(8, 11, 16, 0.08)`.
- **Items:** Text in `label-md`. Active item marked by a pill backplate of `#F5F7FA` or `#D9F2FD` with `#080B10` text. Inactive items sit at 60% opacity, transitioning to 100% on hover.

### 2. Buttons
- **Primary:** Background `#080B10`, text `#FFFFFF`, radius `rounded-xl` or `rounded-full`. Hover initiates a `-1px` vertical lift and subtle shadow expansion.
- **Secondary:** Surface `#FFFFFF` or `transparent`, 1px border `rgba(8, 11, 16, 0.15)`, text `#080B10`. Hover transitions border to `#080B10` and background to `#F5F7FA`.
- **Tertiary / Ghost:** No border, text `#080B10`, hover background `#D9F2FD` at 50% opacity.
- **Focus State:** Solid 2px outline of `#77CFFF` offset by 2px white ring (`box-shadow: 0 0 0 2px #FFF, 0 0 0 4px #77CFFF`).

### 3. Chips & Badges
- **Specification:** Height 28px, `rounded-full`, padding `0 12px`, typography `code-sm`.
- **Default:** Neutral surface `#F5F7FA`, 1px border `rgba(8, 11, 16, 0.08)`, text `rgba(8, 11, 16, 0.70)`.
- **Active / Accent:** Surface `#D9F2FD`, 1px border `#77CFFF`, text `#080B10`.
- **Dark Inverted:** Surface `rgba(255, 255, 255, 0.10)`, 1px border `rgba(255, 255, 255, 0.15)`, text `#FFFFFF`.

### 4. Cards & Project Modules
- **Surface:** `#FFFFFF` with 1px border `rgba(8, 11, 16, 0.08)`, radius `rounded-xl`, padding `space-lg` to `space-xl`.
- **Interaction:** Smooth micro-transition on cursor enter: `-2px` Y displacement, border shifts to `rgba(8, 11, 16, 0.16)`.
- **The Layer Stack Window:** Contains an isometric pane preview utilizing `#D9F2FD` translucent planes, 1px lines, and subtle structural grid markers.

### 5. Input Fields & Form Controls
- **Inputs:** Height 44px, surface `#FFFFFF`, 1px border `rgba(8, 11, 16, 0.15)`, radius `0.5rem`, padding `0 1rem`.
- **Focus:** 1px border `#4FA8DE`, outer glow ring 3px `#77CFFF40`.
- **Selection Controls:** Checkboxes and radios use a 1px border `#080B10`. Checked state renders solid `#080B10` fill with a white vector mark.

### 6. Inverted Contact Module
- Full viewport-width container set to `#080B10` background.
- Primary headline in `#FFFFFF`, body copy in `rgba(255, 255, 255, 0.60)`.
- Action buttons flip: solid `#FFFFFF` button with `#080B10` text, outline button with `rgba(255, 255, 255, 0.20)` border.