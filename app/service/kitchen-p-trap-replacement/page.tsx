import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen P-Trap Replacement | Crystal Drain & Plumbing Toronto",
  description: "Leaking or smelly kitchen drain? Crystal Drain & Plumbing provides fast kitchen P-trap replacement services across Toronto area.",
};

export default function Page() {
  return (
    <ServicePage
      title="Kitchen P-Trap Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5ff5548041b53d4a054d_PLzMEJcdBCghWc9XKQ-QcUXsXB3-8DT8k-O7hGxYIJE.jpeg"
      parentCategory={{ label: "Kitchen Plumber", href: "/service-type/kitchen-plumber" }}
      tagline="Leaking or smelly kitchen drain? Crystal Drain & Plumbing provides fast kitchen P-trap replacement services across Toronto area."
      sections={[
        {
          heading: "What Does the Kitchen P-Trap Do?",
          paragraphs: ["The P-trap is the curved pipe section beneath your kitchen sink. It holds a small amount of water that acts as a seal to prevent sewer gases from rising up through the drain into your home. It also catches debris and small items that might fall down the drain."],
        },
        {
          heading: "Signs Your Kitchen P-Trap Needs Replacement",
          items: ["Sewer odor coming from under the kitchen sink", "Visible leak from the curved section of drain pipe", "P-trap is cracked, corroded, or physically damaged", "Chronic clogs in the P-trap area caused by deterioration"],
        },
        {
          heading: "Quick, Affordable Fix",
          paragraphs: ["Kitchen P-trap replacement is one of the most straightforward plumbing repairs. Crystal Drain & Plumbing can typically complete the replacement in under an hour. We use PVC or ABS P-trap assemblies that are durable and long-lasting, and we verify proper slope and connections to prevent future leaks."],
        }
      ]}
      faqs={[
        { q: "Can I replace a P-trap myself?", a: "P-trap replacement is one of the more DIY-friendly plumbing tasks if the connections are accessible and not corroded. However, if connections are old metal threads that are stuck or corroded, or if the drain line configuration is complex, professional help is advisable to avoid damaging the drain rough-in." },
      ]}
    />
  );
}
