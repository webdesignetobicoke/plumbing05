import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faucet Repair | Crystal Drain & Plumbing Wyoming",
  description: "That dripping faucet is wasting water and money. Crystal Drain & Plumbing provides fast, affordable faucet repair services for all types of faucets across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Faucet Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="That dripping faucet is wasting water and money. Crystal Drain & Plumbing provides fast, affordable faucet repair services for all types of faucets across Wyoming."
      sections={[
        {
          heading: "Common Faucet Problems We Repair",
          items: ["Dripping or leaking faucet — typically worn washers, O-rings, or cartridges", "Low water pressure from a clogged aerator or corroded valve", "Handle that is hard to turn or turns without affecting flow", "Hot/cold mixing problems — faulty cartridge or diverter", "Water spraying or sputtering — clogged aerator or damaged spout", "Leaking under the sink from supply line connections"],
        },
        {
          heading: "Types of Faucets We Repair",
          items: ["Compression faucets (traditional two-handle)", "Ball faucets (single-lever with a rotating ball)", "Cartridge faucets (single or double handle)", "Ceramic disc faucets (long-lasting, premium type)", "Touchless and electronic faucets"],
        },
        {
          heading: "Brands We Service",
          items: ["Moen", "Delta", "Kohler", "American Standard", "Pfister", "Grohe", "Price Pfister", "Symmons"],
        }
      ]}
      faqs={[
        { q: "Is it worth repairing a dripping faucet?", a: "Absolutely. A faucet dripping once per second wastes over 3,000 gallons of water per year. Most faucet repairs cost far less than the water waste they prevent. Crystal Drain & Plumbing can repair or rebuild most faucets quickly and affordably." },
        { q: "My faucet keeps dripping after I replaced the washer — why?", a: "If replacing the washer didn't stop the drip, the valve seat (the metal surface the washer presses against) may be corroded or pitted. This requires dressing the seat with a special tool or replacing the cartridge/valve assembly entirely. Our technicians will identify the correct fix." },
      ]}
    />
  );
}
