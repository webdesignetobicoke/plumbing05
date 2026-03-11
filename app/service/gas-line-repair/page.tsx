import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Line Repair | Crystal Drain & Plumbing Wyoming",
  description: "If you suspect a gas line issue, call Crystal Drain & Plumbing immediately. Our licensed technicians provide fast, safe gas line repairs across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Gas Line Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5ffb6817589a11693410_CpDu0vKRYhfsZBP9tcocM_4Vk--LtRu4nrUQgpaCqkQ.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="If you suspect a gas line issue, call Crystal Drain & Plumbing immediately. Our licensed technicians provide fast, safe gas line repairs across Wyoming."
      sections={[
        {
          heading: "Gas Leak Warning Signs",
          items: ["Smell of rotten eggs or sulfur (odorant added to natural gas)", "Hissing or whistling sound near gas appliances or pipes", "Dead or discolored vegetation over buried gas lines", "Bubbling in puddles or wet areas of your yard", "Higher-than-normal gas bills without explanation", "Pilot lights that won't stay lit"],
        },
        {
          heading: "IMPORTANT: Gas Leak Emergency Protocol",
          paragraphs: ["If you smell gas in your home, do NOT operate any electrical switches, use your phone inside, or create any spark. Leave immediately, leave the door open, and call your gas utility company from a neighbor's phone or from the street. Once the gas company has secured the situation, call Crystal Drain & Plumbing for repairs."],
        },
        {
          heading: "Our Gas Line Repair Process",
          items: ["Locate the leak using electronic gas detection equipment", "Shut off gas at the affected section", "Repair or replace the damaged pipe fitting or section", "Pressure test the repaired line before restoring gas service", "Relight pilots and test all gas appliances", "Provide documentation for insurance purposes if needed"],
        }
      ]}
      faqs={[
        { q: "Is a gas leak an emergency?", a: "Yes, absolutely. If you smell gas, treat it as an immediate emergency. Evacuate the building, do not operate any electrical devices or switches, and call your gas utility company. Only return when the gas company says it is safe. Then call Crystal Drain & Plumbing at (647) 686-4566 to schedule the repair." },
        { q: "How much does gas line repair cost?", a: "The cost depends on the location and extent of the damage. Minor repairs such as replacing a fitting are relatively inexpensive. Larger repairs involving significant pipe replacement will cost more. We provide transparent, upfront pricing before beginning any work." },
      ]}
    />
  );
}
