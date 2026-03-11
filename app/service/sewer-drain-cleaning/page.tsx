import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewer Drain Cleaning | Crystal Drain & Plumbing Toronto",
  description: "Expert sewer drain cleaning and repair services in Toronto. Professional hydro-jetting and root removal for residential and commercial properties.",
};

export default function Page() {
  return (
    <ServicePage
      title="Sewer Drain Cleaning"
      heroImg="https://images.pexels.com/photos/372796/pexels-photo-372796.jpeg"
      parentCategory={{ label: "Clogged Drains", href: "/service-type/clogged-drains" }}
      tagline="Expert sewer drain cleaning and repair services in Toronto. Professional hydro-jetting and root removal for residential and commercial properties."
      sections={[
        {
          heading: "Common Sewer Drain Issues",
          items: ["Sewage backing up into the house", "Foul odors coming from drains or yard", "Slow drainage throughout the property", "Tree roots invading the sewer line", "Grease and mineral buildup in sewer pipes", "Collapsed or damaged sewer sections", "Multiple drain backups at once", "Foundation cracks near the sewer line"],
        },
        {
          heading: "Our Sewer Drain Cleaning Methods",
          items: ["Professional drain camera inspection and mapping", "Heavy-duty hydro-jetting (up to 4000 PSI)", "Root removal and treatment", "Motorized augering for tough blockages", "Complete line flushing and cleaning", "Preventive maintenance programs", "Video reports with detailed findings"],
        },
        {
          heading: "Why Professional Sewer Cleaning Matters",
          paragraphs: ["Your sewer line is a critical component of your home's health and sanitation. When problems develop, they can affect your entire property and neighborhood. Tree roots, grease buildup, mineral deposits, and age-related damage all contribute to sewer line problems. Professional cleaning not only solves immediate issues but prevents costly damage to your pipes and foundation."],
        },
      ]}
      faqs={[
        { q: "What causes Toronto sewer lines to fail?", a: "Toronto's sewer systems face challenges from tree root intrusion, clay soil conditions, hard water minerals, grease accumulation, and aging infrastructure. Spring and fall are particularly demanding seasons for sewer maintenance." },
        { q: "Is sewer cleaning safe for the environment?", a: "Yes. Our methods use only water and mechanical means to clean sewer lines. We don't use harsh chemicals that damage the environment or kill beneficial bacteria in septic systems." },
        { q: "How often should I have my sewer line cleaned?", a: "For most homes, every 18-24 months is ideal, especially if you have trees on your property or an older home. Businesses may need more frequent cleaning depending on usage." },
        { q: "Can you fix a broken sewer line without digging up my yard?", a: "In many cases, yes. We offer trenchless sewer repair using pipe bursting and relining techniques that minimize yard damage while restoring your line to full function." },
      ]}
    />
  );
}
