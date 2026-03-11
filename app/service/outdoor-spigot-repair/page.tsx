import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outdoor Spigot Repair | Crystal Drain & Plumbing Wyoming",
  description: "Leaking outdoor faucet? Crystal Drain & Plumbing provides fast, affordable outdoor spigot repairs across Wyoming. We fix all types of hose bib issues.",
};

export default function Page() {
  return (
    <ServicePage
      title="Outdoor Spigot Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc604a96a52fddf0c287b5_AEZdW6GAUL3xYlwcCq7SmLX_5_qheRYXpruXnwWSP5Q.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Leaking outdoor faucet? Crystal Drain & Plumbing provides fast, affordable outdoor spigot repairs across Wyoming. We fix all types of hose bib issues."
      sections={[
        {
          heading: "Common Outdoor Spigot Problems We Fix",
          items: ["Dripping or leaking from the spigot when closed", "Handle that turns but does not stop water flow", "Water leaking around the stem packing nut", "Frozen or cracked hose bib from winter freeze", "Low water pressure at the outdoor faucet", "Spigot that will not turn on or off"],
        },
        {
          heading: "Our Repair Process",
          items: ["Diagnose the exact cause of the leak or malfunction", "Replace packing washers, O-rings, or the entire seat washer assembly", "Repair or replace the stem if stripped or broken", "Address any underlying supply line issues causing poor performance", "Test the repaired faucet for proper operation and no leaks"],
        },
        {
          heading: "When to Repair vs. Replace",
          paragraphs: ["Minor repairs like replacing a washer or packing nut are inexpensive and worth doing. However, if your spigot is an older style without backflow prevention, has been damaged by freezing, or has significant corrosion, we typically recommend upgrading to a new frost-free model. Crystal Drain & Plumbing will give you an honest assessment."],
        }
      ]}
      faqs={[
        { q: "Why is my outdoor faucet dripping?", a: "The most common cause is a worn seat washer or O-ring inside the valve. When these rubber components wear out, they no longer form a watertight seal when the handle is closed. This is typically an inexpensive repair." },
        { q: "My outdoor faucet froze and now it leaks — what happened?", a: "When water freezes inside a hose bib, it expands and can crack the brass body or internal components. If you have a standard (non-frost-free) hose bib that was not properly drained before winter, frost damage is common. We can assess whether a repair or full replacement is needed." },
      ]}
    />
  );
}
