import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewer Pump Repair | Crystal Drain & Plumbing Wyoming",
  description: "Fast, professional sewer pump repair from Crystal Drain & Plumbing. We diagnose and repair all types of sewage and ejector pump issues across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Sewer Pump Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Fast, professional sewer pump repair from Crystal Drain & Plumbing. We diagnose and repair all types of sewage and ejector pump issues across Wyoming."
      sections={[
        {
          heading: "Common Sewer Pump Problems We Repair",
          items: ["Float switch failure causing pump to run continuously or not at all", "Clogged impeller from debris or foreign objects", "Burned-out motor from overheating or power surges", "Broken or disconnected discharge pipe", "Check valve failure causing backflow", "Electrical wiring and control panel issues"],
        },
        {
          heading: "Our Repair Process",
          items: ["Inspect and test the pump, float switch, and electrical connections", "Clear any blockages in the pump or discharge line", "Replace worn or failed components (impeller, float switch, check valve)", "Test the repaired system through multiple cycles", "Advise on preventive maintenance to extend pump life"],
        },
        {
          heading: "Why Choose Crystal Drain & Plumbing",
          paragraphs: ["Crystal Drain & Plumbing has the experience and equipment to repair sewer pump systems quickly and correctly. We carry common replacement parts on our service vehicles to minimize downtime and complete most repairs in a single visit."],
        }
      ]}
      faqs={[
        { q: "What causes a sewage ejector pump to fail?", a: "The most common causes are float switch failure, clogged impellers from flushing wipes or other debris, motor burnout from running dry, and normal wear after 7-10 years of use. Regular maintenance can prevent many of these failures." },
        { q: "Can I prevent sewer pump problems?", a: "Yes. Only flush toilet paper — never wipes, feminine hygiene products, or other non-flushable items. Have your pump inspected annually, and consider a battery backup system to keep it running during power outages." },
      ]}
    />
  );
}
