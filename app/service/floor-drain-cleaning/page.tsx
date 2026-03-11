import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Floor Drain Cleaning | Crystal Drain & Plumbing Wyoming",
  description: "Slow or blocked floor drain? Crystal Drain & Plumbing clears floor drains in basements, utility rooms, garages, and commercial spaces quickly and thoroughly across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Floor Drain Cleaning"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc6005f413258b329ae7d7_k86O_G7TNFDdC_ma5WVjNVqlfiSIZD4rqlVM.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Slow or blocked floor drain? Crystal Drain & Plumbing clears floor drains in basements, utility rooms, garages, and commercial spaces quickly and thoroughly across Wyoming."
      sections={[
        {
          heading: "Common Floor Drain Problems",
          items: ["Slow draining or standing water", "Sewer odors rising from the drain", "Drain completely blocked by sediment, debris, or roots", "Dried-out P-trap allowing sewer gas into the home", "Cracked or broken drain components"],
        },
        {
          heading: "Our Floor Drain Cleaning Process",
          items: ["Camera inspection to identify the blockage and its location", "Electric snake or hydro jetting to clear the obstruction", "Flush and test to verify full flow is restored", "Inspect the trap seal and add water if the P-trap has dried out", "Recommend a trap primer installation for drains that dry out frequently"],
        },
        {
          heading: "Prevent Sewer Gas with a Trap Primer",
          paragraphs: ["Floor drain P-traps can dry out in infrequently used drains, allowing sewer gas to enter your home. Crystal Drain & Plumbing can install an automatic trap primer that periodically adds water to your floor drain P-trap, maintaining the seal and preventing sewer odors."],
        }
      ]}
      faqs={[
        { q: "Why does my floor drain smell like sewer?", a: "The most common cause is a dried-out P-trap. The trap holds water to block sewer gas, but if the drain isn't used regularly, the water evaporates. Simply pouring a gallon of water down the drain can solve the problem. If the odor persists, there may be a crack in the drain or a blockage creating a gas path." },
        { q: "How do I keep my floor drain from getting clogged?", a: "Keep floor drain covers in place to prevent large debris from entering the drain. Periodically run water down the drain to maintain the P-trap seal. For garage floor drains, be mindful of allowing grease, paint, or chemicals to enter the drain, as these can cause serious blockages." },
      ]}
    />
  );
}
