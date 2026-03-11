import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tankless Water Heater Installation | Crystal Drain & Plumbing Wyoming",
  description: "Experience the luxury of endless hot water with a tankless water heater installed by Crystal Drain & Plumbing. Energy-efficient, space-saving, and long-lasting.",
};

export default function Page() {
  return (
    <ServicePage
      title="Tankless Water Heater Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Experience the luxury of endless hot water with a tankless water heater installed by Crystal Drain & Plumbing. Energy-efficient, space-saving, and long-lasting."
      sections={[
        {
          heading: "Why Choose a Tankless Water Heater?",
          items: ["Never run out of hot water — heats on demand, continuously", "Up to 40% more energy-efficient than traditional tank water heaters", "Compact wall-mounted design saves space", "Lifespan of 20+ years vs 8-12 for tank models", "May qualify for energy efficiency rebates from Dominion Energy in Wyoming"],
        },
        {
          heading: "Our Tankless Installation Process",
          items: ["Site assessment and sizing calculation for your household's demand", "Gas line upgrade if required (tankless units need more BTU capacity)", "Wall mounting and securing the unit", "Water line connections with isolation valves for easy maintenance", "Gas connections and pressure testing", "Venting installation — direct vent or power vent depending on location", "System startup, testing, and homeowner walkthrough"],
        },
        {
          heading: "Brands We Install",
          items: ["Navien — our top recommendation for Wyoming homes", "Noritz", "Rinnai", "Rheem Performance Platinum", "Bradford White", "Bosch"],
        }
      ]}
      faqs={[
        { q: "How much does tankless water heater installation cost?", a: "Tankless water heater installation costs vary based on the unit selected and whether gas line upgrades are needed. Contact Crystal Drain & Plumbing at (647) 686-4566 for a free, upfront estimate. We also offer financing options to help manage the upfront cost." },
        { q: "Can I replace my tank water heater with a tankless unit?", a: "Yes, and we recommend it for most homeowners. However, transitioning from a tank to a tankless unit often requires gas line upgrades and new venting. Our technicians will assess your home and provide a complete picture of what's involved before you commit." },
      ]}
    />
  );
}
