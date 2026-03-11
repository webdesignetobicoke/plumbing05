import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathtub Faucet Repair | Crystal Drain & Plumbing Wyoming",
  description: "Dripping bathtub faucet? Crystal Drain & Plumbing repairs all types of bathtub faucets and shower valves across Wyoming quickly and affordably.",
};

export default function Page() {
  return (
    <ServicePage
      title="Bathtub Faucet Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5fe57e63e518b54cd005_6-oJMeOF2fIjrFT24x6S6xkhjQZqca-KSmL3Prbc-5w.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Dripping bathtub faucet? Crystal Drain & Plumbing repairs all types of bathtub faucets and shower valves across Wyoming quickly and affordably."
      sections={[
        {
          heading: "Common Bathtub Faucet Problems We Fix",
          items: ["Dripping faucet when the handle is in the off position", "Handle that is hard to turn or spins freely without stopping flow", "Hot/cold water mixing issues", "Diverter that won't redirect water to the showerhead", "Low water pressure at the tub spout", "Leaking behind the wall from a failed shower valve"],
        },
        {
          heading: "Types of Bathtub Faucets We Repair",
          items: ["Two-handle tub and shower valves", "Single-handle pressure-balancing valves", "Thermostatic shower systems", "Roman tub faucets", "Freestanding tub fillers", "Clawfoot tub supply lines"],
        },
        {
          heading: "Brands We Service",
          items: ["Moen", "Delta", "Kohler", "American Standard", "Grohe", "Hansgrohe", "Price Pfister", "Rohl"],
        }
      ]}
      faqs={[
        { q: "My bathtub faucet drips only when the shower is running — why?", a: "This is typically a diverter valve problem. The diverter diverts water flow between the tub spout and showerhead. When it wears out, it doesn't fully seal, allowing water to bypass to the tub spout. Crystal Drain & Plumbing can replace the diverter quickly." },
      ]}
    />
  );
}
