import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewer Line Installation | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing installs new sewer lines for new construction, home additions, and full sewer system replacements across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Sewer Line Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Crystal Drain & Plumbing installs new sewer lines for new construction, home additions, and full sewer system replacements across Wyoming."
      sections={[
        {
          heading: "When Is New Sewer Line Installation Required?",
          items: ["New home construction requiring connection to the municipal sewer system", "Home additions or ADUs (accessory dwelling units) requiring sewer extension", "Complete replacement of a failed or deteriorated sewer system", "Connecting a previously septic-served property to municipal sewer service"],
        },
        {
          heading: "Our Installation Standards",
          items: ["Proper slope (1/4\" per foot minimum) for gravity-fed waste flow", "Correct pipe sizing based on fixture unit calculations", "Use of schedule 40 PVC or ABS pipe for durability", "Cleanout installations at required intervals for future maintenance access", "All work to local municipality and plumbing code specifications"],
        },
        {
          heading: "From Permit to Final Inspection",
          paragraphs: ["Crystal Drain & Plumbing manages the entire sewer line installation process from permit application through final municipal inspection. Our licensed plumbers ensure every installation meets Toronto's plumbing codes and is built to last for decades."],
        }
      ]}
      faqs={[
        { q: "How deep does a sewer line need to be buried?", a: "In Wyoming, sewer lines must be buried below the frost line to prevent freezing — typically 36-48 inches depending on your location. Our technicians are experienced with Toronto's soil and frost conditions and will install your sewer line at the correct depth." },
        { q: "How long does sewer line installation take?", a: "Most residential sewer line installations take 2-5 days, depending on the length of the line, soil conditions, and whether rock excavation is required. We'll provide a detailed timeline as part of your project estimate." },
      ]}
    />
  );
}
