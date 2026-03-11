import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Flushing Service | Crystal Drain & Plumbing",
  description: "Professional power flushing services to clean and maintain your pipes. High-pressure water flushing removes debris, sediment, and buildup from your plumbing lines.",
};

export default function Page() {
  return (
    <ServicePage
      title="Power Flushing"
      heroImg="/power flushing.png"
      parentCategory={{ label: "Additional Services", href: "/service-type/air-conditioning" }}
      tagline="High-pressure water flushing to clean pipes and remove debris for optimal plumbing performance."
      sections={[
        {
          heading: "What Is Power Flushing?",
          paragraphs: ["Power flushing is a high-pressure water jetting system that cleans the interior walls of your pipes by forcefully removing accumulated debris, sediment, mineral buildup, and other obstructions. This preventative maintenance technique restores your plumbing system's capacity and improves water flow throughout your home or business."],
        },
        {
          heading: "Benefits of Power Flushing",
          items: [
            "Removes years of sediment and mineral buildup",
            "Improves water pressure throughout your home",
            "Extends the lifespan of your pipes",
            "Prevents future clogs and backups",
            "Environmentally friendly solution",
            "More cost-effective than pipe replacement",
            "Improves hot water heating efficiency",
            "Reduces water heater strain",
          ],
        },
        {
          heading: "When You Need Power Flushing",
          items: [
            "Experiencing low water pressure in multiple fixtures",
            "Have older pipes with decades of buildup",
            "Moving into an older home and want to clean the system",
            "Preventative maintenance for commercial properties",
            "After drain cleaning to ensure complete system cleanliness",
            "Noticed discolored or rusty water",
            "Want to maintain optimal heating system performance",
          ],
        },
        {
          heading: "How Our Power Flushing Works",
          paragraphs: [
            "Our technicians connect our specialized equipment to your main water line and systematically flush high-pressure water through your pipes. The force dislodges and removes debris, and collected sediment is flushed out of the system. We work systematically through your entire plumbing network to ensure thorough cleaning.",
          ],
        },
      ]}
      faqs={[
        { q: "Is power flushing safe for my pipes?", a: "Yes, power flushing is safe when performed by trained professionals. We adjust water pressure based on your pipe material and age to ensure no damage occurs. Modern pipes handle this process easily." },
        { q: "How long does power flushing take?", a: "Most residential power flushing jobs take 2-4 hours depending on the size of your system and extent of buildup. We'll provide a time estimate after inspecting your pipes." },
        { q: "Can power flushing fix low water pressure?", a: "In many cases, yes. If low pressure is caused by sediment buildup, power flushing can restore normal water flow. If the issue is from failing pipes or other structural problems, we'll recommend additional solutions." },
        { q: "How often should I have power flushing done?", a: "For most homes, power flushing every 5-10 years is beneficial as preventative maintenance. In areas with hard water or older homes, you may benefit from more frequent flushing." },
      ]}
    />
  );
}
