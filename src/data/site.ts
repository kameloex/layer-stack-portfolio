export interface NavLink {
  label: string;
  href: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  shortSummary: string;
  description: string;
  supportingProjects: string[];
  keyHighlights: string[];
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  headline: string;
  supportingLine: string;
  bio: string[];
  email: string;
  github: string;
  linkedin: string;
  navLinks: NavLink[];
  capabilities: CapabilityItem[];
}

export const siteConfig: SiteConfig = {
  name: "Ahmed Kamel",
  role: "Software Developer",
  location: "Alexandria, Egypt",
  headline: "I build digital systems that connect ideas to real experiences.",
  supportingLine:
    "Software developer focused on web experiences, interactive applications, and connected systems.",
  bio: [
    "Software developer based in Alexandria, Egypt, combining academic rigor in Information & Communication Technology with hands-on project execution.",
    "Experienced in engineering responsive web platforms, simulated transactional interfaces, and embedded microcontroller systems.",
  ],
  email: "ahmeeeeed699@gmail.com",
  github: "https://github.com/kameloex",
  linkedin: "https://www.linkedin.com/in/ahmed-kamel-81062b2a7/",
  navLinks: [
    { label: "Selected Work", href: "#work" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ],
  capabilities: [
    {
      id: "web-experiences",
      title: "Web Experiences",
      shortSummary: "Responsive, RTL-first, multi-page platforms with data-driven architecture.",
      description:
        "Building large-scale responsive web portals with custom layout systems, bilingual/RTL support, and clean DOM manipulation without unnecessary runtime overhead.",
      supportingProjects: ["batu-university-portal", "batu-projects-hub"],
      keyHighlights: [
        "40+ page information architecture and navigation",
        "RTL-first CSS layout and typography engineering",
        "Data-driven client-side rendering with zero framework bloat",
      ],
    },
    {
      id: "interactive-applications",
      title: "Interactive Applications",
      shortSummary: "Client-side validation pipelines, state machines, and simulated commerce flows.",
      description:
        "Engineering dynamic transactional interfaces with debounced inputs, local storage persistence, Luhn algorithm card validation, and custom Canvas data visualisations.",
      supportingProjects: ["batu-university-portal", "payngo-smart-cart"],
      keyHighlights: [
        "Debounced barcode scanning & real-time cart state management",
        "Client-side payment verification and masked storage",
        "Custom Canvas API sales visualisations",
      ],
    },
    {
      id: "connected-systems",
      title: "Connected & Embedded Systems",
      shortSummary: "Hardware prototyping, Raspberry Pi sensor integration, and physical-digital bridges.",
      description:
        "Bridging physical sensors and microcontrollers with interactive software interfaces, prototyping smart systems that react to real-world stimuli.",
      supportingProjects: ["payngo-smart-cart", "batu-projects-hub"],
      keyHighlights: [
        "Raspberry Pi & Arduino sensor integration",
        "Physical product detection communicating with touchscreen UI",
        "Documentation and guides for microcontroller boards (Arduino, ESP32, Raspberry Pi)",
      ],
    },
  ],
};
