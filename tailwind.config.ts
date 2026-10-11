import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FFFFFF",
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F5F7FA",
          elevated: "#F2F4F7",
        },
        ink: {
          DEFAULT: "#080B10",
          secondary: "rgba(8, 11, 16, 0.65)",
          muted: "rgba(8, 11, 16, 0.45)",
          hairline: "rgba(8, 11, 16, 0.08)",
          border: "rgba(8, 11, 16, 0.12)",
        },
        accent: {
          DEFAULT: "#77CFFF",
          subtle: "#D9F2FD",
          structural: "#4FA8DE",
          dark: "#005777",
          container: "#001E2E",
        },
        inverted: {
          bg: "#080B10",
          text: "#FFFFFF",
          secondary: "rgba(255, 255, 255, 0.65)",
          muted: "rgba(255, 255, 255, 0.40)",
          hairline: "rgba(255, 255, 255, 0.12)",
          border: "rgba(255, 255, 255, 0.18)",
        },
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-inter)", "monospace"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(8, 11, 16, 0.04), 0 6px 16px rgba(8, 11, 16, 0.03)",
        "card-hover": "0 4px 12px rgba(8, 11, 16, 0.06), 0 16px 32px rgba(8, 11, 16, 0.05)",
        floating: "0 8px 24px rgba(8, 11, 16, 0.06)",
        focus: "0 0 0 2px #FFFFFF, 0 0 0 4px #77CFFF",
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
