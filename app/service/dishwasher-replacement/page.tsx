import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dishwasher Replacement | Crystal Drain & Plumbing Toronto",
  description: "Crystal Drain & Plumbing handles the plumbing aspects of dishwasher replacement — ensuring proper water supply, drain connection, and no leaks under your kitchen sink.",
};

export default function Page() {
  return (
    <ServicePage
      title="Dishwasher Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5ff5548041b53d4a054d_PLzMEJcdBCghWc9XKQ-QcUXsXB3-8DT8k-O7hGxYIJE.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Crystal Drain & Plumbing handles the plumbing aspects of dishwasher replacement — ensuring proper water supply, drain connection, and no leaks under your kitchen sink."
      sections={[
        {
          heading: "Signs It's Time to Replace Your Dishwasher",
          items: ["Dishes are coming out dirty despite normal cycles", "Water is pooling at the bottom after cycles complete", "The unit is cracked, rusting, or has a damaged door seal", "Dishwasher is 9-10+ years old", "Repair costs exceed 50% of a new unit's price", "Abnormal noises during operation"],
        },
        {
          heading: "Our Role in Dishwasher Replacement",
          paragraphs: ["Crystal Drain & Plumbing focuses on the plumbing connections involved in your dishwasher replacement: shutting off and disconnecting the existing water supply, removing the old drain connection at the disposal or drain, installing new braided supply lines, and making a proper high-loop or air gap drain connection for the new unit.", "We work alongside appliance installers or can coordinate the complete replacement including appliance delivery."],
        },
        {
          heading: "Proper Drain Installation Matters",
          items: ["High-loop drain installation prevents backflow from disposal into dishwasher", "Air gap installation (required in some Wyoming municipalities) provides backflow protection", "Proper drain hose routing prevents kinked lines and poor drainage", "We also inspect and replace the dishwasher supply shut-off valve if needed"],
        }
      ]}
      faqs={[
        { q: "Does the dishwasher need to drain into the garbage disposal?", a: "In most residential installations, the dishwasher drain connects to the garbage disposal inlet. If you don't have a disposal, it connects directly to the drain tailpiece under the sink. In either case, a high loop or air gap is required to prevent contaminated water from siphoning back into the dishwasher." },
        { q: "Can Crystal Drain & Plumbing replace the dishwasher itself?", a: "We handle all the plumbing connections. For the appliance itself, we recommend purchasing from an appliance retailer and coordinating delivery and physical installation with them. We're happy to schedule our plumbing work around the appliance delivery." },
      ]}
    />
  );
}
