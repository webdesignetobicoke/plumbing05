import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewer Line Repair | Crystal Drain & Plumbing Wyoming",
  description: "Fast and reliable sewer line repair from Crystal Drain & Plumbing. We use advanced camera inspection and trenchless technology to fix sewer problems with minimal disruption.",
};

export default function Page() {
  return (
    <ServicePage
      title="Sewer Line Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc60632a25483e73144e03_Vtj_zf9dKOckJBSkLx80ugMHN5ru9_dPtK8oQRW-wxQ.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Fast and reliable sewer line repair from Crystal Drain & Plumbing. We use advanced camera inspection and trenchless technology to fix sewer problems with minimal disruption."
      sections={[
        {
          heading: "Common Sewer Line Problems We Repair",
          items: ["Root intrusion from trees and shrubs", "Pipe cracks or breaks from ground shifting or age", "Offset pipe joints from soil settling", "Grease buildup and blockages", "Corrosion in older cast iron or clay pipes", "Damaged pipe from construction or excavation activities"],
        },
        {
          heading: "Our Sewer Line Repair Process",
          items: ["Camera inspection to locate and assess the damage", "Hydro jetting to clear blockages and clean the pipe before repair", "Spot repair via excavation for localized damage", "CIPP (Cured-In-Place Pipe) lining for longer damaged sections", "Post-repair camera inspection to verify the repair"],
        },
        {
          heading: "Game-Changing Technology",
          paragraphs: ["Crystal Drain & Plumbing has invested in the Lightray LR3 LED UV system — one of the most advanced UV cure-and-replace drain pipe technologies available. This allows us to repair broken drain pipes from the inside, without excavation, in a fraction of the time of traditional repairs. This game-changing technology is available to Southwest Toronto area homeowners."],
        }
      ]}
      faqs={[
        { q: "How do you know where the sewer line is damaged?", a: "We use high-resolution drain inspection cameras that provide a real-time view inside your sewer line. This allows us to precisely locate cracks, root intrusions, blockages, and collapsed sections without any guesswork or unnecessary excavation." },
        { q: "Can tree roots grow back after sewer line repair?", a: "Yes, roots can regrow into repaired lines over time. CIPP lining creates a seamless pipe inside the old one, which is more resistant to root intrusion than jointed pipe. We also recommend periodic hydro jetting maintenance to remove root growth before it becomes a problem." },
      ]}
    />
  );
}
