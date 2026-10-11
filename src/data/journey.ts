export type JourneyType = "training" | "freelance" | "education" | "experience";

export interface JourneyMilestone {
  type: JourneyType;
  title: string;
  organization: string;
  period: string;
  location?: string;
  highlights: string[];
}

export const journeyData: JourneyMilestone[] = [
  {
    type: "training",
    title: ".NET Full-Stack Development Intern",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Jun 2025 – Present",
    highlights: [
      "Selected for intensive full-stack development training focusing on C#, ASP.NET, and modern application architectures.",
      "Developing professional software engineering skills and remote collaboration practices.",
    ],
  },
  {
    type: "experience",
    title: "Technical Educator (Children's University)",
    organization: "Children's University Tech Program",
    period: "2025 – Present",
    highlights: [
      "Teaching programming fundamentals and technology concepts to school-aged children.",
      "Contributing to national educational initiatives and foundational digital literacy.",
    ],
  },
  {
    type: "experience",
    title: "Corporate IT Intern",
    organization: "Alexandria Petroleum Company",
    period: "Aug 2024",
    location: "Alexandria, Egypt",
    highlights: [
      "Completed a 2-week intensive internship in a production corporate IT environment.",
      "Earned an Excellent performance evaluation for hands-on technical contribution.",
    ],
  },
  {
    type: "freelance",
    title: "Freelance Web Developer",
    organization: "Remote / Freelance Platforms",
    period: "Jul 2024",
    highlights: [
      "Completed small paid projects through freelance platforms with a focus on web development.",
      "Delivered responsive web interfaces using HTML, CSS, JavaScript, PHP, MySQL, and Vue.js.",
    ],
  },
  {
    type: "education",
    title: "Undergraduate in Information & Communication Technology",
    organization: "Borg El Arab Technological University",
    // TODO: Confirm university name spelling: Borg El Arab vs Burg Al Arab
    period: "Oct 2023 – Present",
    location: "Alexandria, Egypt",
    highlights: [
      "Faculty of Information and Communication Technology, third-year undergraduate student.",
      "Consistently achieved Grade: A (Excellent) across all academic years.",
      "Core coursework in Software Engineering, Web Development, Programming, Database Systems, and Cybersecurity.",
    ],
  },
];
