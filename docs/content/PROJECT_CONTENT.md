# PROJECT_CONTENT.md — confirmed facts for the three projects

Source: `portfolio_blueprint.md` (section 4, "confirmed draft for the initial build"), the Stitch brief (`google-stitch-design.md`), and a check of the two live demos on 2026-10-11.
Use this wording as the source of truth. Do not add features, technologies, numbers or links that are not listed here.

Presentation order (provisional): 1 Portal, 2 PAYNGO, 3 Hub.

---

## 1. BATU University Portal

- **Slug:** `batu-university-portal`
- **Status:** `live`
- **Public title:** BATU University Portal
- **Tagline:** A responsive Arabic/English university website with a student services portal, online fee-payment flow, and a Children's University registration system.
- **Card description:** A multi-page website for Borg El Arab Technological University covering faculties, staff, student projects, news, admissions, and student services, including a simulated fee-payment flow.
- **Long description:** Built for Borg El Arab Technological University, the site brings academic information, admissions, student services, and fee payment into one place. It includes 40+ pages with an RTL-first layout and responsive navigation.
- **Features:**
  - Faculty and department pages
  - Searchable staff directory
  - Filterable graduation-project gallery
  - Data-driven news pages
  - Children's University registration for six programs and age groups 7–10 and 11–15
  - Seven student-service areas
  - Admissions guidance
  - Payment flow with validation, card preview, masked saved-card display, simulated processing, transaction ID, and transaction records
- **Technologies:** HTML5, Tailwind CSS, Bootstrap 5 RTL, vanilla JavaScript, Alpine.js, Swiper.js, AOS, Font Awesome, Google Fonts, localStorage
- **Implementation highlights:** RTL-first UI; reusable/shared navigation behavior; data-driven rendering; form validation; client-side card validation using Luhn; only masked card data stored; IntersectionObserver counter animation
- **Demo:** https://kameloex.github.io/BATU/ (loaded on 2026-10-11)
- **Honesty note:** Fee payment is simulated. No real bank or payment gateway processes transactions.
- **Not Ahmed's content:** the university's news, phone, email, social links and logos on the demo.
- **Role:** not supplied yet (see `docs/PERSONAL_INFO.md`)

---

## 2. PAYNGO Smart Cart Interface

- **Slug:** `payngo-smart-cart`
- **Status:** **`unpublished`**. Not yet published to GitHub according to Ahmed.
- **Public title:** PAYNGO Smart Cart Interface
- **Tagline:** The touchscreen interface of a smart shopping cart: scan products, review the cart, pay, and walk out without a checkout line.
- **Card description:** The web interface for a smart shopping cart, with barcode-based cart updates, offers, profile and loyalty coins, a simulated checkout flow, and an admin dashboard.
- **Long description:** The software interface for a smart-shopping-cart project. The customer workflow includes product scanning, cart management, offers, profile, loyalty coins, and checkout. A separate admin experience manages products and categories. The demo uses a local simulated banking layer rather than a real payment gateway.
- **Features:**
  - Barcode reader input for EAN-13
  - Debounced scan input
  - Repeated scans update quantity
  - Per-user cart
  - Customer and admin experiences
  - Category browsing
  - Offers
  - Editable profile
  - 1 coin per 10 EGP spent
  - Mock card validation and balance deduction
  - Transaction confirmation
  - Admin product and category CRUD
  - Canvas API sales chart
- **Technologies:** HTML5, CSS3, JavaScript ES6, Tailwind CSS, Bootstrap 5, Canvas API, localStorage
- **Demo/repo:** none. Show "Demo Coming Soon". No demo button, no repo link, no placeholder URL.
- **When published:** show the note "Demo tip: Sign up with any account to explore the demo." beside the demo action or on the project detail page, not as a warning on the main card.
- **Honesty note:** Payment, balance, rewards and transaction behaviours are simulated/local demo logic. Not a real bank integration, and the demo does not connect to scanner hardware.
- **Role:** not supplied yet

---

## 3. BATU Projects Hub

- **Slug:** `batu-projects-hub`
- **Status:** `live`
- **Public title:** BATU Projects Hub
- **Tagline:** A showcase platform for student embedded-systems projects, with project pages, events, knowledge guides, and team registration.
- **Card description:** A responsive front-end platform for presenting IT Department embedded-systems projects, exhibitions, event registration, project guidelines, and Arduino/ESP32/Raspberry Pi learning resources.
- **Long description:** Built for the university's Information Technology Department to give student embedded-systems projects a shared place for showcasing, documentation, team information, and evaluation. The supplied project brief states that the department had 82+ projects in 2023 and that the first IT exhibition showcased 52 projects.
- **Features:**
  - Project gallery
  - Team-leader add-project flow
  - Team member entry
  - Upload fields for video, poster, book, presentation and images (front-end only)
  - Event registration modals
  - Exhibition pages and feedback
  - Knowledge section
  - Implementation and board guides
  - Project-book, video and general guidelines
  - Login and change-password screens
  - Arduino, ESP32 and Raspberry Pi learning resources
- **Technologies:** HTML5, CSS3, vanilla JavaScript/DOM manipulation
- **Implementation highlights:** handwritten responsive CSS, 23 media queries, custom image slider, sticky header, slide-out sidebar, click-outside behavior, modals, multi-page information architecture
- **Demo:** https://kameloex.github.io/Batu-projects/ (loaded on 2026-10-11)
- **What the live demo displays** (the university's project counts, as shown on the site): 82+ projects, 4 smart homes, 5 drones, 23+ smart cars, 50+ other projects.
- **Positioning:** a front-end showcase/information platform. No claim of a production backend or real uploads.
- **Unconfirmed:** the Stitch brief lists "CNC" among the showcases; it was not seen on the live home page. Do not show it until confirmed.
- **Not Ahmed's content:** the department's counts, and the university's contact details and logos on the demo.
- **Role:** not supplied yet

---

## Capabilities mapping (only what these projects support)

| Capability group | Supported by | Notes |
|---|---|---|
| Web Experiences | Portal, Hub | Responsive, RTL-first, multi-page, data-driven UI |
| Interactive Applications | Portal, PAYNGO | Validation flows, simulated payments, cart logic, admin CRUD, Canvas chart |
| Embedded/Connected Systems | Hub (content about embedded projects), PAYNGO (interface of a smart cart) | The projects present or interface with such systems. Confirm Ahmed's hands-on embedded work before claiming it |

## Technologies actually used (for the "Used in projects" group)

HTML5, CSS3, JavaScript (ES6, vanilla), Tailwind CSS, Bootstrap 5 (including RTL), Alpine.js, Swiper.js, AOS, Canvas API, localStorage, Font Awesome, Google Fonts.
Grouping and any "Currently learning" items come from Ahmed.
