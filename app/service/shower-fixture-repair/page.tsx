import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shower Fixture Repair | Crystal Drain & Plumbing Wyoming",
  description: "Dripping shower or inconsistent water temperature? Crystal Drain & Plumbing repairs all types of shower valves and fixtures across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Shower Fixture Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc6044dd3e3e68f4250c67_b4IKK17jSs5yOiVuLUERFcJ74cmy3sG73GaB7x_gvRI.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Dripping shower or inconsistent water temperature? Crystal Drain & Plumbing repairs all types of shower valves and fixtures across Wyoming."
      sections={[
        {
          heading: "Common Shower Fixture Problems We Fix",
          items: ["Dripping showerhead or tub spout", "Shower valve that's hard to turn or imprecise temperature control", "Inconsistent hot water — temperature fluctuates during shower", "Showerhead with low pressure or uneven spray", "Diverter that won't redirect flow to showerhead", "Leaking shower valve behind the wall (damp drywall behind shower controls)", "Steam generator not producing steam"],
        },
        {
          heading: "Repair Without Tile Damage",
          paragraphs: ["Crystal Drain & Plumbing uses valve repair techniques that minimize the need to cut into tile. In most cases, the cartridge or internal valve components can be replaced through the trim opening without opening the wall. We'll assess your specific valve and advise if wall access is required before beginning work."],
        },
        {
          heading: "Brands We Repair",
          items: ["Moen", "Delta", "Kohler", "American Standard", "Grohe", "Price Pfister", "Symmons", "Hansgrohe"],
        }
      ]}
      faqs={[
        { q: "Can you fix a shower valve without removing tile?", a: "In most cases, yes. The internal cartridge or valve mechanism can be accessed through the valve trim opening. We replace the worn cartridge, O-rings, or seats without disturbing the surrounding tile. However, if the valve body itself is failed or corroded, wall access may be required." },
      ]}
    />
  );
}
