import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Drain Cleaning | Crystal Drain & Plumbing Toronto",
  description: "Professional bathroom drain cleaning services across Toronto. We handle slow drains, hair clogs, and complete backups in sinks, showers, and tubs.",
};

export default function Page() {
  return (
    <ServicePage
      title="Bathroom Drain Cleaning"
      heroImg="https://images.pexels.com/photos/220612/pexels-photo-220612.jpeg"
      parentCategory={{ label: "Clogged Drains", href: "/service-type/clogged-drains" }}
      tagline="Professional bathroom drain cleaning services across Toronto. We handle slow drains, hair clogs, and complete backups in sinks, showers, and tubs."
      sections={[
        {
          heading: "Common Bathroom Drain Problems",
          items: ["Slow draining sink, shower, or tub", "Water backing up and pooling", "Recurring clogs that return every few weeks", "Hair and soap buildup in drain pipes", "Foul odors coming from drains", "Complete drain blockage", "Gurgling sounds from drains", "P-trap or under-sink issues"],
        },
        {
          heading: "Our Bathroom Drain Cleaning Methods",
          items: ["Hand-operated drain snake for minor blockages", "Motorized auger for tougher clogs", "Hydro-jetting to remove buildup and residue", "Drain camera inspection to identify problem areas", "Hair trap installation and maintenance", "P-trap cleaning and repair", "Chemical-free cleaning methods"],
        },
        {
          heading: "Why Bathroom Drains Clog",
          paragraphs: ["Bathroom drains are particularly prone to clogging because of hair, soap residue, shampoo buildup, and mineral deposits from hard water. Unlike kitchen drains, bathroom drains receive a constant supply of these materials. Hair is the biggest culprit — it wraps around pipe roughness and creates a net that catches other debris. We don't just clear the clog; we clean the entire pipe so you get long-lasting results."],
        },
      ]}
      faqs={[
        { q: "Why does my shower drain back up even after I just cleared it?", a: "This usually means the clog wasn't completely removed or buildup is still present deeper in the line. Hair wraps around pipe imperfections and creates new blockages. Professional hydro-jetting removes all buildup, not just the immediate clog." },
        { q: "Can I prevent bathroom drain clogs?", a: "Yes. Use drain screens to catch hair, avoid pouring grease down drains, and clean traps regularly. We can also install better hair traps and recommend periodic maintenance cleaning." },
        { q: "Is it safe to use chemical drain cleaners?", a: "We don't recommend them. Chemical cleaners are harsh on pipes, especially old ones, and they're harmful to the environment. Our mechanical methods are more effective and safer for your plumbing." },
        { q: "What if the clog is in the P-trap under the sink?", a: "We can usually clear this without removing the trap, but sometimes removal and thorough cleaning is necessary for complete results. We'll always explain options before proceeding." },
      ]}
    />
  );
}
