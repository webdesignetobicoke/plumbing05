import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Sink Repair | Crystal Drain & Plumbing Toronto",
  description: "Leaking kitchen sink? Crystal Drain & Plumbing provides fast kitchen sink repair services across Toronto area. We fix drain leaks, supply line issues, and more.",
};

export default function Page() {
  return (
    <ServicePage
      title="Kitchen Sink Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5ff5548041b53d4a054d_PLzMEJcdBCghWc9XKQ-QcUXsXB3-8DT8k-O7hGxYIJE.jpeg"
      parentCategory={{ label: "Kitchen Plumber", href: "/service-type/kitchen-plumber" }}
      tagline="Leaking kitchen sink? Crystal Drain & Plumbing provides fast kitchen sink repair services across Toronto area. We fix drain leaks, supply line issues, and more."
      sections={[
        {
          heading: "Common Kitchen Sink Problems We Fix",
          items: ["Dripping kitchen faucet", "Leak under the sink from supply lines, P-trap, or basket strainer", "Cracked or chipped sink basin", "Slow or clogged kitchen drain", "Garbage disposal leak or failure", "Low water pressure at the kitchen faucet", "Loose or leaking basket strainer seal"],
        },
        {
          heading: "Same-Day Repairs",
          paragraphs: ["Most kitchen sink repairs can be completed in a single visit. Our technicians arrive with the most common repair parts stocked on their vehicle — faucet cartridges, supply lines, basket strainers, P-trap assemblies, and more — to minimize the chance of a return visit."],
        },
        {
          heading: "Prevent Future Leaks",
          paragraphs: ["We always inspect the complete under-sink plumbing assembly during repair visits and will proactively identify any components that are showing signs of wear — corroded shut-off valves, aging supply lines, or a dripping drain — to prevent the next service call."],
        }
      ]}
      faqs={[
        { q: "Why is there water under my kitchen sink?", a: "The most common causes are a leaking P-trap connection, a failed basket strainer seal, a leaking supply line or shut-off valve, or a garbage disposal leak. Crystal Drain & Plumbing will identify the exact source and make the repair." },
      ]}
    />
  );
}
