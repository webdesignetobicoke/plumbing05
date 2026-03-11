import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Sink Installation | Crystal Drain & Plumbing Toronto",
  description: "New kitchen sink? Crystal Drain & Plumbing installs all types of kitchen sinks — undermount, drop-in, farmhouse, and more — across Toronto area.",
};

export default function Page() {
  return (
    <ServicePage
      title="Kitchen Sink Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5ff5548041b53d4a054d_PLzMEJcdBCghWc9XKQ-QcUXsXB3-8DT8k-O7hGxYIJE.jpeg"
      parentCategory={{ label: "Kitchen Plumber", href: "/service-type/kitchen-plumber" }}
      tagline="New kitchen sink? Crystal Drain & Plumbing installs all types of kitchen sinks — undermount, drop-in, farmhouse, and more — across Toronto area."
      sections={[
        {
          heading: "Types of Kitchen Sinks We Install",
          items: ["Drop-in (self-rimming) sinks", "Undermount sinks", "Farmhouse (apron-front) sinks", "Single and double-bowl configurations", "Bar and prep sinks", "Stainless steel, cast iron, fireclay, and composite sinks"],
        },
        {
          heading: "Professional Installation Includes",
          items: ["Secure sink mounting appropriate to sink type", "Proper faucet hole drilling if required (undermount sinks)", "Drain basket installation with watertight seal", "P-trap and supply line connections", "Garbage disposal connection if applicable", "Dishwasher drain connection", "Perimeter caulking for a professional finish"],
        },
        {
          heading: "Farmhouse Sink Considerations",
          paragraphs: ["Farmhouse (apron-front) sinks require cabinet modification to accommodate the front apron. Crystal Drain & Plumbing works with your cabinet maker or can coordinate the cabinet modification ourselves. These sinks also require front-mount faucet drilling since they don't have the deck space of standard sinks."],
        }
      ]}
      faqs={[
        { q: "How long does kitchen sink installation take?", a: "A standard kitchen sink replacement takes 1-2 hours. Installing a farmhouse sink as part of a remodel with cabinet modifications may take 3-4 hours depending on the cabinet work required." },
      ]}
    />
  );
}
