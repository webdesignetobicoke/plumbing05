import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radiant Heating Repair | Crystal Drain & Plumbing Wyoming",
  description: "Radiant floor or baseboard heating system not working? Crystal Drain & Plumbing provides expert radiant heating repair services across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Radiant Heating Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc601eb032af360f102653_IrOLlxn1lLZxyS1Av8BNOvIP_Z4bO3OiAmHI2n06NIA.jpeg"
      parentCategory={{ label: "Home Heating", href: "/service-type/home-heating" }}
      tagline="Radiant floor or baseboard heating system not working? Crystal Drain & Plumbing provides expert radiant heating repair services across Wyoming."
      sections={[
        {
          heading: "Types of Radiant Heating We Repair",
          items: ["Hydronic radiant floor heating (hot water tubing in floor)", "Electric radiant floor heating systems", "Hot water baseboard heaters", "Radiant wall panels", "Snow melt systems for driveways and walkways"],
        },
        {
          heading: "Common Radiant Heating Problems",
          items: ["Zones not heating — thermostat, zone valve, or pump issues", "System losing pressure — leak in the radiant tubing", "Boiler or heat source not providing hot water to the system", "Radiators or baseboards heating unevenly", "Air locks preventing circulation", "Corroded or leaking manifold connections"],
        },
        {
          heading: "The Advantage of Radiant Heat in Wyoming",
          paragraphs: ["Radiant heating is an excellent choice for Toronto's cold winters. Unlike forced air systems, radiant heat warms objects and people directly rather than heating air, resulting in more even, comfortable warmth and greater energy efficiency. Crystal Drain & Plumbing has the expertise to keep your radiant system operating at peak performance."],
        }
      ]}
      faqs={[
        { q: "Why is my radiant floor warm in some areas but not others?", a: "Uneven heating in a radiant floor system is typically caused by air locks in the tubing, a stuck zone valve, an imbalanced manifold flow setting, or a circulation pump problem. Our technicians can diagnose and resolve zoning and flow issues." },
      ]}
    />
  );
}
