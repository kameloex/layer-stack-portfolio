import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ToolkitSection } from "@/components/sections/ToolkitSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <WorkSection />
      <CapabilitiesSection />
      <ToolkitSection />
      <JourneySection />
      <ContactSection />
    </div>
  );
}
