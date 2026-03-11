import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utility Sink Repair | Crystal Drain & Plumbing Toronto",
  description: "Professional utility sink repair services across Toronto. Fix leaks, clogs, and damaged utility sinks.",
};

export default function Page() {
  return (
    <ServicePage
      title="Utility Sink Repair"
      heroImg="https://images.pexels.com/photos/2310904/pexels-photo-2310904.jpeg"
      parentCategory={{ label: "Plumbing Services", href: "/service-type/general-plumbing" }}
      tagline="Professional utility sink repair services across Toronto. Fix leaks, clogs, and damaged utility sinks."
      sections={[
        {
          heading: "Common Utility Sink Problems We Fix",
          items: ["Slow or clogged drains - Buildup from lint, debris, and sediment", "Leaking drain connections - Water pooling under or around the sink", "Leaking faucets - Dripping or running water at the spout", "Rust or corrosion - Surface damage on metal sinks", "Cracked basin - Damage from impact or age", "Weak water pressure - Reduced flow from supply lines", "Damaged trap or vent line - Plumbing issues affecting drainage", "Loose or wobbly sink - Problem with mounting or structure"],
        },
        {
          heading: "Same-Day Repair Solutions",
          items: ["Drain cleaning and unclogging", "Faucet repair or cartridge replacement", "Leak detection and repair", "Trap replacement and sealing", "Supply line repair or replacement", "Caulk removal and resealing", "P-trap cleaning and maintenance", "Structural reinforcement and re-mounting"],
        },
        {
          heading: "Quick and Affordable Repairs",
          paragraphs: ["Utility sink issues can usually be diagnosed and fixed quickly. Whether it's a simple faucet repair or a more complex drainage problem, our team will get your utility sink working properly again. Most repairs are completed on the same day, minimizing disruption to your home."],
        }
      ]}
      faqs={[
        { q: "Why is my utility sink draining slowly?", a: "Utility sink drains commonly accumulate lint, soap residue, and debris. We can clean the drain using professional tools. If cleaning doesn't solve it, the issue may be deeper in the plumbing line." },
        { q: "How do you fix a leaking utility sink joint?", a: "We locate the source of the leak, remove and clean the connection, apply fresh plumber's tape and sealant, and reassemble the joint. Most leaks are easily repairable." },
        { q: "Can you repair the faucet or do I need a new one?", a: "Many faucet issues can be fixed by replacing the cartridge or seals. If the faucet body is damaged or leaking internally, replacement may be more cost-effective." },
      ]}
    />
  );
}
