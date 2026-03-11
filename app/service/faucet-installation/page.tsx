import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faucet Installation | Crystal Drain & Plumbing Wyoming",
  description: "Upgrade your kitchen or bathroom with a new faucet installed by Crystal Drain & Plumbing. We install all styles and brands of faucets across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Faucet Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Upgrade your kitchen or bathroom with a new faucet installed by Crystal Drain & Plumbing. We install all styles and brands of faucets across Wyoming."
      sections={[
        {
          heading: "Why Have a Professional Install Your Faucet?",
          paragraphs: ["While faucet replacement appears straightforward, working in confined sink cabinet spaces, dealing with corroded supply shut-offs, and making watertight connections requires experience. An improperly installed faucet can leak at the supply connections or under the deck, causing hidden water damage to your cabinet and subfloor.", "Crystal Drain & Plumbing installs faucets correctly the first time, and we'll also inspect and replace shut-off valves and supply lines if they show any signs of age or corrosion."],
        },
        {
          heading: "What We Install",
          items: ["Kitchen sink faucets — single handle, double handle, pull-down, pull-out", "Bathroom lavatory faucets — widespread, centerset, single hole", "Bar and prep sink faucets", "Pot filler faucets", "Touchless and smart faucets", "Outdoor and laundry faucets"],
        },
        {
          heading: "Supply Your Own Faucet or Let Us Help",
          paragraphs: ["You can purchase the faucet of your choice and we'll install it, or we can recommend high-quality options in your price range. We install all major brands including Moen, Delta, Kohler, American Standard, Grohe, and more."],
        }
      ]}
      faqs={[
        { q: "How long does faucet installation take?", a: "A standard kitchen or bathroom faucet replacement typically takes 30-60 minutes. If the existing shut-off valves or supply lines need to be replaced at the same time, add another 30-45 minutes. We'll give you an accurate time estimate when scheduling." },
        { q: "Should I replace the shut-off valves when I replace my faucet?", a: "We strongly recommend it if your valves are more than 10 years old or show any signs of corrosion. Old shut-off valves can fail to close completely when you need them most, or can leak after being operated for the first time in years. Replacing them during a faucet installation is inexpensive and prevents future problems." },
      ]}
    />
  );
}
