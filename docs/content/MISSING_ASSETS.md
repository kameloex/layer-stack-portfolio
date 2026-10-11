# MISSING_ASSETS.md — what Ahmed must supply, and where it goes

Status as of 2026-10-11: **no project images, contact links or CV data have been supplied yet.**
Until an item is supplied, the site shows a clearly labelled placeholder (never a fake screenshot) and the related content stays hidden. The agent updates the Status column as assets arrive.

Paths are relative to the project root.

## Project images

| # | Asset | Put it in | Notes | Status |
|---|---|---|---|---|
| 1 | BATU University Portal cover | `public/images/projects/batu-university-portal/cover.*` | Wide image (about 16:10), real capture of the live demo | Missing |
| 2 | Portal screenshots | `public/images/projects/batu-university-portal/shots/` | Faculties/departments, staff directory, graduation-project gallery, news, student services, admissions, Children's University registration, payment flow (card preview, confirmation, transaction records). English and Arabic captures if both should appear | Missing |
| 3 | BATU Projects Hub cover | `public/images/projects/batu-projects-hub/cover.*` | Real capture of the live demo | Missing |
| 4 | Hub screenshots | `public/images/projects/batu-projects-hub/shots/` | Home, project gallery, project detail, add-project flow, events/registration, exhibition page, Knowledge section, guidelines | Missing |
| 5 | PAYNGO cover | `public/images/projects/payngo-smart-cart/cover.*` | Real capture of the running interface | Missing |
| 6 | PAYNGO screenshots or short recording | `public/images/projects/payngo-smart-cart/shots/` | Customer scan/cart view, offers, profile and coins, simulated checkout, admin dashboard, Canvas sales chart | Missing |

Image guidance: use real captures only. Prefer WebP/AVIF or high-quality PNG/JPG; the site optimises them. Keep file names lowercase with hyphens (for example `staff-directory.png`).

## Brand and personal

| # | Asset | Put it in | Status |
|---|---|---|---|
| 7 | Favicon or monogram (or approval to generate a simple one) | `public/images/brand/` | Missing |
| 8 | Open Graph image (or approval to generate one) | `public/images/brand/` | Missing |
| 9 | Optional photo of Ahmed | `public/images/profile/` | Not requested yet |
| 10 | Optional CV PDF | `public/resume.pdf` | Only if approved |

## Content

| # | Item | Where | Status |
|---|---|---|---|
| 11 | Email, GitHub URL, LinkedIn URL | `docs/PERSONAL_INFO.md` section 2 | Missing |
| 12 | Role on each project | `docs/PERSONAL_INFO.md` section 3 | Missing |
| 13 | Embedded/connected-systems experience (or "none") | `docs/PERSONAL_INFO.md` section 4 | Missing |
| 14 | Skills: used vs currently learning | `docs/PERSONAL_INFO.md` section 5 | Partly pre-filled |
| 15 | Journey entries with dates | `docs/PERSONAL_INFO.md` section 6 | Missing |
| 16 | University spelling and figure approvals | `docs/PERSONAL_INFO.md` section 7 | Missing |
| 17 | PAYNGO repo and demo URL (or decision to ship without) | `docs/PERSONAL_INFO.md` section 7 | Not available |
| 18 | Any CV text in `docs/content/` | `docs/content/` | Missing |

## Behaviour while assets are missing
- Project media: labelled placeholder frame ("Cover image needed"), listed here.
- Contact rows, Journey, "Currently learning": hidden when empty.
- PAYNGO: "Demo Coming Soon", no demo or repo buttons.
- No invented screenshots, stock photos or AI-generated substitutes.
