import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewer Line Replacement | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing specializes in diagnosing sewer line issues and offering robust replacement solutions, ensuring Wyoming communities enjoy uninterrupted and safe sewage systems.",
};

export default function Page() {
  return (
    <ServicePage
      title="Sewer Line Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5ffb6817589a11693410_CpDu0vKRYhfsZBP9tcocM_4Vk--LtRu4nrUQgpaCqkQ.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Crystal Drain & Plumbing specializes in diagnosing sewer line issues and offering robust replacement solutions, ensuring Wyoming communities enjoy uninterrupted and safe sewage systems."
      sections={[
        {
          heading: "Signs You Need a Sewer Line Replacement",
          items: ["Sewage backups happening in multiple drains simultaneously", "Drain camera inspection reveals collapsed or severely damaged pipe", "The pipe is made of clay, Orangeburg, or old cast iron that has deteriorated", "Root intrusion that has destroyed large sections of the pipe", "Repeated sewer backups despite professional cleaning"],
        },
        {
          heading: "Replacement Methods We Offer",
          items: ["Traditional open-cut excavation and replacement", "Pipe bursting — trenchless replacement that breaks the old pipe as new HDPE pipe is pulled through", "Pipe lining (CIPP) — inserting a new pipe liner inside the existing pipe without excavation", "Spot repair — replacing only the damaged section rather than the entire line"],
        },
        {
          heading: "The Crystal Drain & Plumbing Advantage",
          paragraphs: ["With advanced equipment including drain cameras and trenchless technology, Crystal Drain & Plumbing can often replace your sewer line with minimal disruption to your landscaping and driveway. We'll assess your specific situation and recommend the most cost-effective and least invasive solution."],
        }
      ]}
      faqs={[
        { q: "How long does a sewer line replacement take?", a: "A standard sewer line replacement using traditional excavation typically takes 1-3 days depending on the length of the line and soil conditions. Trenchless methods can often be completed in a single day." },
        { q: "Will you have to dig up my yard?", a: "Not necessarily. Crystal Drain & Plumbing offers trenchless sewer line replacement options including pipe bursting and CIPP lining that require only small access points rather than full excavation. We'll evaluate which method is best suited for your property." },
      ]}
    />
  );
}
