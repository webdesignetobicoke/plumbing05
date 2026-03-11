import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewer Pump Installation | Crystal Drain & Plumbing Wyoming",
  description: "Adding a basement bathroom or utility sink? Crystal Drain & Plumbing installs sewage ejector and grinder pump systems for below-grade plumbing applications across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Sewer Pump Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Adding a basement bathroom or utility sink? Crystal Drain & Plumbing installs sewage ejector and grinder pump systems for below-grade plumbing applications across Wyoming."
      sections={[
        {
          heading: "When Is a Sewer Pump Required?",
          items: ["Adding a bathroom, laundry room, or utility sink below the main sewer line", "New construction homes where the sewer line is above the foundation", "Basement finishing projects that include plumbing fixtures", "Properties on pressure sewer systems requiring a grinder pump"],
        },
        {
          heading: "What We Install",
          items: ["Sewage ejector pump systems with basin and lid", "Grinder pumps for municipal pressure sewer connections", "Simplex and duplex pump systems", "Battery backup systems for power outage protection", "Alarm systems to alert you of pump problems"],
        },
        {
          heading: "Professional Installation Matters",
          paragraphs: ["Improper sewer pump installation can result in sewage backups, odor problems, and costly damage. Crystal Drain & Plumbing ensures every installation is sized correctly for your application, meets local plumbing codes, and includes all proper venting and check valves to prevent backflow and odor intrusion."],
        }
      ]}
      faqs={[
        { q: "How deep does a sewage ejector pit need to be?", a: "Most residential sewage ejector pits are 18-24 inches in diameter and 24-30 inches deep, but the exact size depends on the pump model and the volume of waste it needs to handle. Our technicians will size the system correctly for your application." },
        { q: "Do I need a permit for a sewer pump installation?", a: "Yes, sewer pump installations are plumbing work that requires a permit in most Wyoming municipalities. Crystal Drain & Plumbing handles all necessary permitting as part of our installation service." },
      ]}
    />
  );
}
