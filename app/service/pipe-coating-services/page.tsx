import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipe Coating Services | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing offers advanced pipe coating and lining services — a trenchless solution for rehabilitating aging or deteriorating pipes without excavation.",
};

export default function Page() {
  return (
    <ServicePage
      title="Pipe Coating Services"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc60527e63e518b54d530a_5JKBvvkzdnftw898EYnCe-ociU_9dVciNPgO3HvOt3Y.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Crystal Drain & Plumbing offers advanced pipe coating and lining services — a trenchless solution for rehabilitating aging or deteriorating pipes without excavation."
      sections={[
        {
          heading: "What Is Pipe Coating (CIPP Lining)?",
          paragraphs: ["Cured-In-Place Pipe (CIPP) lining is a trenchless technology that creates a new pipe inside an existing damaged pipe. A flexible liner saturated with resin is inserted into the damaged pipe, inflated, and then cured using UV light or hot water/steam. The result is a smooth, jointless new pipe inside the old one.", "Crystal Drain & Plumbing has invested in the Lightray LR3 LED UV system — one of the most advanced UV cure-and-replace pipe lining technologies available — specifically to serve Southwest Toronto area homeowners."],
        },
        {
          heading: "Benefits of Pipe Coating",
          items: ["No excavation required — protects landscaping, driveways, and flooring", "Completed in hours rather than days", "Extends pipe life by 50+ years", "Creates a seamless, joint-free interior surface resistant to root intrusion", "Cost-effective compared to traditional dig-and-replace", "Available for drain pipes, sewer lines, and water service lines"],
        },
        {
          heading: "Applications",
          items: ["Cracked or broken drain pipes", "Root-infested sewer lines", "Corroded or deteriorated cast iron pipes", "Leaking water service lines", "Pipes in hard-to-access locations like under slabs or in walls"],
        }
      ]}
      faqs={[
        { q: "How long does pipe lining last?", a: "CIPP lining has an expected service life of 50+ years. The smooth interior of the cured liner actually improves flow compared to corroded original pipe, and its seamless construction makes it highly resistant to future root intrusion." },
        { q: "Will pipe lining reduce the diameter of my pipe?", a: "The liner adds approximately 1/4\" to the interior wall, slightly reducing the internal diameter. However, because the liner creates a much smoother surface than the old corroded pipe, flow capacity is typically maintained or even improved." },
      ]}
    />
  );
}
