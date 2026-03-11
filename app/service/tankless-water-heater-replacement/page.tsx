import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tankless Water Heater Replacement | Crystal Drain & Plumbing Wyoming",
  description: "Experience the luxury of instant hot water with our tankless water heater replacement services. Crystal Drain & Plumbing's expertise ensures you enjoy energy efficiency and never-ending warm water.",
};

export default function Page() {
  return (
    <ServicePage
      title="Tankless Water Heater Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Experience the luxury of instant hot water with our tankless water heater replacement services. Crystal Drain & Plumbing's expertise ensures you enjoy energy efficiency and never-ending warm water."
      sections={[
        {
          heading: "Signs Your Tankless Water Heater Needs Replacement",
          items: ["Unit is 15-20+ years old", "Frequent error codes or shutdowns", "Significant scale buildup that cleaning cannot resolve", "Declining hot water output despite regular maintenance", "Repair costs are approaching or exceeding replacement cost"],
        },
        {
          heading: "Benefits of Upgrading Your Tankless Water Heater",
          items: ["Up to 40% more energy-efficient than traditional tank models", "Unlimited hot water on demand — no running out", "Space-saving design — mounts on the wall", "Longer lifespan than tank water heaters (20+ years)", "Eligible for energy efficiency rebates in Wyoming"],
        },
        {
          heading: "Our Replacement Process",
          paragraphs: ["Crystal Drain & Plumbing handles the complete replacement process — from safely disconnecting and removing your old unit to installing, testing, and commissioning your new tankless water heater. We ensure all gas, water, and electrical connections meet current code requirements."],
        }
      ]}
      faqs={[
        { q: "Is a tankless water heater worth it?", a: "For most Toronto area homeowners, yes. Tankless water heaters use significantly less energy than tank models because they only heat water on demand. Over the lifespan of the unit, the energy savings typically offset the higher upfront cost. Plus, you'll never run out of hot water." },
        { q: "Do you need to upgrade gas lines for a tankless water heater?", a: "Tankless water heaters require a larger gas supply than traditional tank heaters. In many cases, we'll need to upgrade the gas line and meter to accommodate the higher BTU demand. Our technicians will assess this during the estimate process." },
      ]}
    />
  );
}
