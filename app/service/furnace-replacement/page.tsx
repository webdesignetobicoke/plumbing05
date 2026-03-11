import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furnace Replacement | Crystal Drain & Plumbing Wyoming",
  description: "Time for a new furnace? Crystal Drain & Plumbing installs high-efficiency furnaces across Wyoming. We'll help you choose the right unit and handle the complete installation.",
};

export default function Page() {
  return (
    <ServicePage
      title="Furnace Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc601b8280398b5c21ca58_LikN3wctQ46akbJ511RBPSLeH2_KshqCDgI3FK_fFqM.jpeg"
      parentCategory={{ label: "Home Heating", href: "/service-type/home-heating" }}
      tagline="Time for a new furnace? Crystal Drain & Plumbing installs high-efficiency furnaces across Wyoming. We'll help you choose the right unit and handle the complete installation."
      sections={[
        {
          heading: "When to Replace Your Furnace",
          items: ["Furnace is 15-20+ years old", "Repair costs exceed 50% of the cost of a new unit", "Heating bills have been steadily increasing", "Frequent repairs in the past 2 years", "Uneven heat distribution throughout the home", "AFUE rating below 80% — modern units reach 96%+"],
        },
        {
          heading: "High-Efficiency Furnace Benefits",
          items: ["96-98% AFUE ratings vs. 60-80% for older units", "Two-stage and variable-speed technology for better comfort", "Quieter operation", "Eligible for utility rebates (check Dominion Energy Wyoming)", "Improved air filtration options", "Smart thermostat compatibility"],
        },
        {
          heading: "Our Installation Process",
          items: ["Remove and dispose of old furnace", "Install new unit with proper sizing for your home's square footage", "Connect gas line, flue venting, and electrical", "Install or upgrade thermostat", "Commission and test the system", "Walk you through operation and maintenance"],
        }
      ]}
      faqs={[
        { q: "What size furnace do I need?", a: "Furnace sizing is calculated based on your home's square footage, insulation levels, window area, and Toronto's climate zone. An oversized furnace will short-cycle (turn on and off rapidly), wasting energy and causing temperature swings. Our technicians perform a proper Manual J load calculation to size your new furnace correctly." },
        { q: "Do you offer financing for furnace replacement?", a: "Yes, Crystal Drain & Plumbing partners with financing companies to offer low-interest monthly payment options for furnace replacements. Contact us at (647) 686-4566 to discuss financing options." },
      ]}
    />
  );
}
