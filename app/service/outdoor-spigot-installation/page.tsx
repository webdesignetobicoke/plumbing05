import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outdoor Spigot Installation | Crystal Drain & Plumbing Wyoming",
  description: "Need a new outdoor water spigot installed? Crystal Drain & Plumbing installs frost-free hose bibs in the ideal locations for your yard and landscaping needs across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Outdoor Spigot Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Need a new outdoor water spigot installed? Crystal Drain & Plumbing installs frost-free hose bibs in the ideal locations for your yard and landscaping needs across Wyoming."
      sections={[
        {
          heading: "Why Add an Outdoor Spigot?",
          items: ["Convenient access to water for garden hoses and lawn irrigation", "Reduce the length of hose runs across your property", "Add a spigot to the back yard, side yard, or garage", "Install a utility spigot for a workshop or outbuilding"],
        },
        {
          heading: "What to Expect During Installation",
          items: ["We tap into the nearest cold water supply line inside your home", "Core drill or carefully cut through the exterior wall at the correct height", "Install a frost-free hose bib with a built-in vacuum breaker", "Solder or press-fit the connection inside the wall", "Seal around the escutcheon plate on the exterior for weatherproofing", "Test for proper operation and no leaks"],
        },
        {
          heading: "Code Requirements",
          paragraphs: ["All outdoor hose bibs installed by Crystal Drain & Plumbing include an anti-siphon (vacuum breaker) device as required by the Wyoming Plumbing Code to prevent contaminated water from back-siphoning into your drinking water supply."],
        }
      ]}
      faqs={[
        { q: "Where is the best place to install an outdoor spigot?", a: "We recommend placing outdoor spigots on each side of your home to minimize hose run lengths. A height of 12-18 inches above grade is standard, allowing easy bucket filling while keeping the faucet clear of snow. We'll help you choose the optimal location during our site visit." },
        { q: "How long does outdoor spigot installation take?", a: "Most new outdoor spigot installations take 1-2 hours depending on the accessibility of the supply line and wall construction. We handle everything from the supply tap to the exterior finish." },
      ]}
    />
  );
}
