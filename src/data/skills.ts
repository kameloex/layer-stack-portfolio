export interface SkillCategory {
  title: string;
  description: string;
  items: string[];
}

export interface SkillsData {
  usedInProjects: SkillCategory[];
  currentlyLearning: SkillCategory[];
  toolsAndEnvironments: string[];
}

export const skillsData: SkillsData = {
  usedInProjects: [
    {
      title: "Web & Frontend Engineering",
      description: "Production and interactive client-side interfaces, responsive styling, and modular DOM behavior.",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6)",
        "Tailwind CSS",
        "Bootstrap 5 (incl. RTL)",
        "Alpine.js",
        "Swiper.js",
        "AOS",
        "Canvas API",
      ],
    },
    {
      title: "Programming Languages",
      description: "General-purpose, systems, and application programming.",
      items: [
        "C#",
        "Python",
        "Java",
        "C++",
        "C",
        "PHP",
        "Dart",
        "SQL",
      ],
    },
    {
      title: "Hardware & Connected Systems",
      description: "Prototyping, sensor integration, and real-time controller interaction.",
      items: [
        "Raspberry Pi",
        "Arduino",
        "Sensors & Microcontrollers",
      ],
    },
    {
      title: "Data Persistence & Databases",
      description: "Relational schema management, query execution, and security awareness.",
      items: [
        "MySQL",
        "SQL Server",
        "localStorage",
        "SQL Injection Prevention",
      ],
    },
  ],
  currentlyLearning: [
    {
      title: "Modern Full-Stack & Frameworks",
      description: "Expanding architectural capabilities across modern reactive frontends and enterprise backends.",
      items: [
        "React",
        "Node.js",
        "Laravel",
        "ASP.NET Core (.NET DEPI)",
      ],
    },
  ],
  toolsAndEnvironments: [
    "Visual Studio",
    "VS Code",
    "Git",
    "GitHub",
    "Figma",
    "NetBeans",
    "XAMPP",
  ],
};
