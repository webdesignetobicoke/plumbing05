import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outdoor Spigot Replacement | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing provides fast outdoor spigot replacement services across Wyoming. We upgrade leaking or damaged hose bibs to frost-free models built for Wyoming winters.",
};

export default function Page() {
  return (
    <ServicePage
      title="Outdoor Spigot Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Crystal Drain & Plumbing provides fast outdoor spigot replacement services across Wyoming. We upgrade leaking or damaged hose bibs to frost-free models built for Wyoming winters."
      sections={[
        {
          heading: "Signs Your Outdoor Spigot Needs Replacement",
          items: ["Visible leaks from the spigot body or handle", "The spigot drips continuously even when fully closed", "Difficulty turning the handle on or off", "Frost damage from a non-frost-free model that was not winterized", "Low water pressure at the outdoor faucet despite good indoor pressure"],
        },
        {
          heading: "Frost-Free Spigot Upgrades",
          paragraphs: ["Wyoming winters demand frost-free hose bibs. A frost-free spigot is designed so the internal shut-off is located 8-12 inches inside the heated wall of your home — preventing the water from freezing in the pipe. Crystal Drain & Plumbing recommends frost-free models for all Wyoming homes.", "When replacing your outdoor spigot, we also install a proper vacuum breaker to prevent contaminated water from siphoning back into your drinking water supply."],
        },
        {
          heading: "Brands We Install",
          items: ["Woodford", "Prier", "Watts", "BrassCraft", "Mueller Industries"],
        }
      ]}
      faqs={[
        { q: "What is a frost-free hose bib?", a: "A frost-free hose bib (also called an anti-siphon or anti-frost spigot) has a long stem that positions the internal valve seat inside the heated envelope of your home, preventing the pipe from freezing. In Toronto's climate, we strongly recommend frost-free models for all outdoor faucets." },
        { q: "Can I replace an outdoor spigot myself?", a: "While it's possible for an experienced DIYer, outdoor spigot replacement requires cutting into water supply lines and working with soldering or press fittings. An improperly installed spigot can leak inside your wall, causing hidden water damage. Crystal Drain & Plumbing can typically complete a replacement in under an hour." },
      ]}
    />
  );
}
