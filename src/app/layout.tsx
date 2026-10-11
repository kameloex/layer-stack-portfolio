import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { siteConfig } from "@/data/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role} | Alexandria, Egypt`,
  description: `${siteConfig.name} is a ${siteConfig.role} based in Alexandria, Egypt, specializing in responsive web platforms, interactive applications, and connected microcontroller systems.`,
  keywords: [
    "Ahmed Kamel",
    "Software Developer",
    "Full-Stack Developer",
    "Alexandria Egypt",
    "Web Developer",
    "Embedded Systems",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kameloex.github.io",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.supportingLine,
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.supportingLine,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-[#080B10] font-sans antialiased selection:bg-[#D9F2FD] selection:text-[#080B10] flex flex-col">
        <SmoothScroll>
          <Navbar />
          <main id="main-content" className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
