import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Winterization Service | Crystal Drain & Plumbing Wyoming",
  description: "Protect your home from frozen pipes this winter. Crystal Drain & Plumbing offers comprehensive plumbing winterization services for Wyoming homes and vacation properties.",
};

export default function Page() {
  return (
    <ServicePage
      title="Plumbing Winterization Service"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Protect your home from frozen pipes this winter. Crystal Drain & Plumbing offers comprehensive plumbing winterization services for Wyoming homes and vacation properties."
      sections={[
        {
          heading: "What Is Plumbing Winterization?",
          paragraphs: ["Plumbing winterization is the process of protecting your home's water supply system from freezing temperatures. This is especially critical in Wyoming, where temperatures can drop well below zero. Frozen pipes can burst, causing catastrophic water damage that costs thousands of dollars to repair."],
        },
        {
          heading: "Our Winterization Process",
          items: ["Shut off the main water supply", "Drain all water from pipes, water heaters, and appliances", "Blow out remaining water with compressed air", "Add RV antifreeze to drain traps and toilet tanks", "Insulate exposed pipes in unheated spaces", "Disconnect and drain outdoor hose bibs and irrigation systems", "Document and label shutoffs for easy spring startup"],
        },
        {
          heading: "Seasonal Properties and Vacation Homes",
          paragraphs: ["Crystal Drain & Plumbing specializes in winterizing vacation homes and seasonal properties across Wyoming. We provide a comprehensive checklist of all work completed so you can leave for the season with complete confidence your home is protected."],
        }
      ]}
      faqs={[
        { q: "When should I winterize my plumbing?", a: "We recommend scheduling winterization before the first hard freeze of the season — typically October in Toronto's high desert and mountain areas. Don't wait until temperatures have already dropped, as pipes can freeze quickly during cold snaps." },
        { q: "What happens if I don't winterize?", a: "Unprotected pipes in unheated spaces can freeze and burst when temperatures drop. When ice in a burst pipe thaws, it can release hundreds of gallons of water into your home in a very short time, causing extensive structural damage and mold growth." },
      ]}
    />
  );
}
