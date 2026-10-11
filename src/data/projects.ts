export type Status = "live" | "unverified" | "unpublished";

export interface ProjectMedia {
  src: string;
  alt: string;
  kind: "cover" | "screenshot" | "video";
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  cardDescription: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  implementationHighlights: string[];
  honestyNote?: string;
  status: Status;
  demo?: { url: string; verifiedOn: string };
  repo?: { url: string };
  demoNote?: string;
  role?: string;
  media: ProjectMedia[];
}

export const projects: Project[] = [
  {
    slug: "batu-university-portal",
    title: "BATU University Portal",
    tagline:
      "A responsive Arabic/English university website with a student services portal, online fee-payment flow, and a Children's University registration system.",
    cardDescription:
      "A multi-page website for Borg El Arab Technological University covering faculties, staff, student projects, news, admissions, and student services, including a simulated fee-payment flow.",
    // TODO: Confirm university name spelling: Borg El Arab vs Burg Al Arab
    longDescription:
      "Built for Borg El Arab Technological University, the site brings academic information, admissions, student services, and fee payment into one place. It includes 40+ pages with an RTL-first layout and responsive navigation.",
    features: [
      "Faculty and department pages",
      "Searchable staff directory",
      "Filterable graduation-project gallery",
      "Data-driven news pages",
      "Children's University registration for six programs across age groups 7–10 and 11–15",
      "Seven dedicated student-service areas",
      "Admissions guidance workflows",
      "Payment flow with form validation, interactive card preview, masked saved-card display, simulated processing, transaction ID generation, and transaction records",
    ],
    technologies: [
      "HTML5",
      "Tailwind CSS",
      "Bootstrap 5 RTL",
      "JavaScript (ES6)",
      "Alpine.js",
      "Swiper.js",
      "AOS",
      "Font Awesome",
      "Google Fonts",
      "localStorage",
    ],
    implementationHighlights: [
      "RTL-first UI architecture optimized for Arabic and English typography",
      "Modular, reusable navigation behaviors across 40+ pages",
      "Data-driven client-side rendering",
      "Form validation with client-side card validation using Luhn algorithm",
      "Security-first storage practice: only masked card data stored locally",
      "IntersectionObserver-driven numerical counter animations",
    ],
    honestyNote:
      "Fee payment is simulated. No real bank or payment gateway processes transactions. Department announcements, phone numbers, and external links belong to the institution.",
    status: "live",
    demo: {
      url: "https://kameloex.github.io/BATU/",
      verifiedOn: "2026-10-11",
    },
    role: "Designed and implemented a responsive university portal with front-end and back-end features. Gained recognition from faculty and was invited to collaborate with the department's tech team.",
    media: [
      {
        src: "/images/projects/batu-university-portal/Screenshot 2025-09-07 133359.png",
        alt: "BATU University Portal primary landing page showcasing hero and navigation",
        kind: "cover",
      },
      {
        src: "/images/projects/batu-university-portal/Screenshot 2025-09-07 133409.png",
        alt: "Academic faculties and department overview section",
        kind: "screenshot",
      },
      {
        src: "/images/projects/batu-university-portal/Screenshot 2025-09-07 133430.png",
        alt: "Filterable student project exhibition gallery",
        kind: "screenshot",
      },
      {
        src: "/images/projects/batu-university-portal/Screenshot 2025-09-07 133447.png",
        alt: "Interactive fee payment flow with credit card preview and Luhn validation",
        kind: "screenshot",
      },
      {
        src: "/images/projects/batu-university-portal/Screenshot 2025-09-07 133502.png",
        alt: "Children's University registration portal",
        kind: "screenshot",
      },
    ],
  },
  {
    slug: "payngo-smart-cart",
    title: "PAYNGO Smart Cart Interface",
    tagline:
      "The touchscreen interface of a smart shopping cart: scan products, review the cart, pay, and walk out without a checkout line.",
    cardDescription:
      "The web interface for a smart shopping cart, with barcode-based cart updates, offers, profile and loyalty coins, a simulated checkout flow, and an admin dashboard.",
    longDescription:
      "The software interface for a smart-shopping-cart project. The customer workflow includes product scanning, cart management, offers, profile, loyalty coins, and checkout. A separate admin experience manages products and categories. The demo uses a local simulated banking layer rather than a real payment gateway.",
    features: [
      "Barcode reader input for EAN-13 barcodes",
      "Debounced scan input pipeline",
      "Repeated scans dynamically update item quantity",
      "Per-user local cart persistence",
      "Dedicated customer touchscreen and administrative catalog views",
      "Category browsing and filtered item discovery",
      "Offers and promotional discount application",
      "Editable shopper user profile",
      "Loyalty rewards program: 1 coin earned per 10 EGP spent",
      "Mock card validation and balance deduction sequence",
      "Transaction confirmation receipt screen",
      "Admin product and category CRUD operations",
      "Canvas API sales chart reporting",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "Tailwind CSS",
      "Bootstrap 5",
      "Canvas API",
      "localStorage",
    ],
    implementationHighlights: [
      "Real-time debounced scanner input handling for fast item entry",
      "Pure client-side state machine managing cart items and loyalty coins",
      "Simulated checkout flow with local card verification and balance deduction",
      "Dynamic data visualization utilizing HTML5 Canvas API without external charting libraries",
      "Dual interface design balancing high-contrast touchscreen UX with administrative management",
    ],
    honestyNote:
      "Payment, balance, rewards and transaction behaviours are simulated/local demo logic. Not a real bank integration, and the web demo does not connect directly to physical scanner hardware.",
    status: "unpublished",
    demoNote: "Demo tip: Sign up with any account to explore the demo.",
    role: "Developed a smart cart using Raspberry Pi, sensors, and web integration to detect products and display them in real-time. Emphasized software integration and UI interaction over hardware complexity.",
    media: [
      {
        src: "/images/projects/payngo/the main photo will appear in ui.jpg",
        alt: "PAYNGO Smart Cart primary touchscreen interface view",
        kind: "cover",
      },
      {
        src: "/images/projects/payngo/Screenshot 2026-08-03 124313.png",
        alt: "PAYNGO product scanning catalog view",
        kind: "screenshot",
      },
      {
        src: "/images/projects/payngo/Screenshot 2026-08-03 124410.png",
        alt: "Active shopping cart and total calculation view",
        kind: "screenshot",
      },
      {
        src: "/images/projects/payngo/Screenshot 2026-08-03 124502.png",
        alt: "Simulated checkout and loyalty coin balance deduction",
        kind: "screenshot",
      },
      {
        src: "/images/projects/payngo/Screenshot 2026-08-03 125034.png",
        alt: "Administrative dashboard with Canvas sales visualization",
        kind: "screenshot",
      },
    ],
  },
  {
    slug: "batu-projects-hub",
    title: "BATU Projects Hub",
    tagline:
      "A showcase platform for student embedded-systems projects, with project pages, events, knowledge guides, and team registration.",
    cardDescription:
      "A responsive front-end platform for presenting IT Department embedded-systems projects, exhibitions, event registration, project guidelines, and Arduino/ESP32/Raspberry Pi learning resources.",
    // TODO: Confirm university name spelling: Borg El Arab vs Burg Al Arab
    longDescription:
      "Built for the university's Information Technology Department to give student embedded-systems projects a shared place for showcasing, documentation, team information, and evaluation. The supplied project brief states that the department had 82+ projects in 2023 and that the first IT exhibition showcased 52 projects.",
    features: [
      "Project gallery with multi-category filtering",
      "Team-leader add-project submission flow",
      "Team member roster and attribution entry",
      "Structured front-end upload fields for video, poster, book, presentation, and image assets",
      "Interactive event registration dialogs",
      "Exhibition event pages and peer feedback collection",
      "Knowledge center with technical board documentation",
      "Hardware and implementation guides for Arduino, ESP32, and Raspberry Pi",
      "Project-book, video submission, and academic project guidelines",
      "Authentication flows including login and password management",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "DOM Manipulation",
    ],
    implementationHighlights: [
      "Handwritten responsive CSS structured across 23 custom media queries",
      "Lightweight custom image slider engineered without external libraries",
      "Sticky navigation header paired with smooth slide-out drawer sidebar",
      "Accessible modal overlays with keyboard trap and click-outside dismissal",
      "Comprehensive multi-tier information architecture for department resources",
    ],
    honestyNote:
      "Positioning: A front-end showcase and information platform. No claim of a production backend or real file uploads. Project metrics (82+ projects in 2023, 52 at the first exhibition) reflect department brief records.",
    status: "live",
    demo: {
      url: "https://kameloex.github.io/Batu-projects/",
      verifiedOn: "2026-10-11",
    },
    role: "Front-end engineering of the department showcase platform, establishing responsive layouts, interactive navigation drawers, modal dialogues, and content guides.",
    media: [
      {
        src: "/images/projects/batu-projects-hub/Screenshot 2025-09-07 101402.png",
        alt: "BATU Projects Hub portal header and embedded systems project directory",
        kind: "cover",
      },
      {
        src: "/images/projects/batu-projects-hub/Screenshot 2025-09-07 101536.png",
        alt: "Embedded hardware showcase gallery featuring student projects",
        kind: "screenshot",
      },
      {
        src: "/images/projects/batu-projects-hub/Screenshot 2025-09-07 101600.png",
        alt: "Project submission workflow and team entry form",
        kind: "screenshot",
      },
      {
        src: "/images/projects/batu-projects-hub/Screenshot 2025-09-07 101711.png",
        alt: "Hardware knowledge guide for Arduino, ESP32, and Raspberry Pi",
        kind: "screenshot",
      },
      {
        src: "/images/projects/batu-projects-hub/Screenshot 2025-09-07 101811.png",
        alt: "Exhibition schedule and event registration interface",
        kind: "screenshot",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
