import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furnace Installation | Crystal Drain & Plumbing Toronto",
  description: "Professional furnace installation for new construction and replacement across Toronto and the GTA. Expert heating system setup.",
};

export default function Page() {
  return (
    <ServicePage
      title="Furnace Installation"
      heroImg="https://images.pexels.com/photos/5632635/pexels-photo-5632635.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Home Heating", href: "/service-type/home-heating" }}
      tagline="Professional furnace installation for new construction and replacement across Toronto and the GTA."
      sections={[
        {
          heading: "Furnace Types We Install",
          items: ["Gas furnaces - High-efficiency systems for natural gas heating", "Electric furnaces - Electric-powered heating for properties without gas lines", "Oil furnaces - Reliable systems for homes using heating oil", "High-efficiency furnaces - ENERGY STAR certified systems that reduce utility costs", "Variable-speed furnaces - Modulating systems that adjust heating output as needed", "Modulating furnaces - Advanced units that optimize efficiency throughout the season", "Upflow furnaces - Designed for installation in basements with discharge to upper levels", "Downflow furnaces - Configured for installation in attics with discharge downward"],
        },
        {
          heading: "Our Installation Process",
          items: ["Assessment of heating needs based on home size and insulation", "Proper sizing of furnace for optimal efficiency and comfort", "Removal of old furnace if replacing existing system", "Installation of new furnace with proper venting and ductwork connections", "Connection to thermostat and safety controls", "Gas line connection and pressure testing (for gas furnaces)", "Ductwork sealing and adjustment for balanced air distribution", "Full system testing and safety certification"],
        },
        {
          heading: "Professional Installation Ensures",
          paragraphs: ["A properly installed furnace operates safely, efficiently, and reliably. Our certified technicians follow all building codes and manufacturer specifications to ensure your heating system performs at peak efficiency. We provide complete installation documentation and can help you understand your warranty coverage. Our team takes pride in clean workmanship and minimal disruption to your home."],
        }
      ]}
      faqs={[
        { q: "How long does furnace installation take?", a: "A typical furnace installation takes 4-8 hours depending on the complexity of your system and existing ductwork. We'll provide a timeline during the initial estimate." },
        { q: "What size furnace do I need?", a: "Furnace sizing depends on your home's square footage, insulation, climate zone, and ductwork. Our technicians will calculate the correct BTU capacity to ensure efficient heating." },
        { q: "Is furnace installation covered by warranty?", a: "Yes, our installation work is backed by warranty. Furnaces typically include manufacturer warranties (5-10 years), and we offer extended protection plans." },
        { q: "Can you install a high-efficiency furnace in my existing home?", a: "Yes, we can retrofit high-efficiency furnaces into most existing homes. This may require venting adjustments and ductwork modifications, which we'll discuss during the estimate." },
      ]}
    />
  );
}
