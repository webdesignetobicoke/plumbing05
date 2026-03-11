import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boiler Installation | Crystal Drain & Plumbing Toronto",
  description: "Professional boiler installation for efficient radiant heating systems across Toronto.",
};

export default function Page() {
  return (
    <ServicePage
      title="Boiler Installation"
      heroImg="https://images.pexels.com/photos/5632632/pexels-photo-5632632.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Home Heating", href: "/service-type/home-heating" }}
      tagline="Professional boiler installation for efficient radiant heating systems."
      sections={[
        {
          heading: "Boiler Types We Install",
          items: ["Gas boilers - Natural gas or propane heating systems", "Oil boilers - For homes using heating oil", "Electric boilers - Electric resistance heating systems", "Condensing boilers - High-efficiency systems recovering heat from exhaust", "Combi boilers - Space-saving units providing heating and hot water", "System boilers - Dedicated heating with separate hot water tank", "Traditional boilers - Separate heating system with tank storage", "Modulating boilers - Variable output systems for maximum efficiency"],
        },
        {
          heading: "Professional Installation Process",
          items: ["Assessment of heating needs and radiator configuration", "Proper boiler sizing for your home's heating demands", "Removal and disposal of old boiler if replacing", "Installation of new boiler on properly prepared foundation/wall mount", "Piping connections to radiators or radiant floor systems", "Thermostatic control valve installation and balancing", "Safety controls and pressure relief valve installation", "Gas line inspection and pressure testing", "Venting system installation to exterior", "Complete system testing and safety certification"],
        },
        {
          heading: "Efficient Radiant Heating",
          paragraphs: ["Boiler systems provide excellent radiant heating comfort for homes with radiators or in-floor heating. Our expert installation ensures efficient operation, proper water circulation, and optimal comfort. We handle all aspects of system setup including controls, venting, and safety components."],
        }
      ]}
      faqs={[
        { q: "How long does boiler installation take?", a: "Installation typically takes 6-10 hours depending on the complexity of your system and existing piping. We'll provide a timeline during the estimate." },
        { q: "What size boiler do I need?", a: "Boiler sizing depends on your radiator surface area, in-floor heating system, and hot water needs. We'll calculate the proper BTU capacity for your home." },
        { q: "Can I install a boiler in my existing home?", a: "Yes, we can retrofit boiler systems into homes with existing radiators or install new radiant floor heating with a boiler system." },
        { q: "Are high-efficiency boilers worth the investment?", a: "Yes, condensing boilers operate 90-98% efficiently compared to 80-85% for standard units. The energy savings typically pay for the upgrade in 5-7 years." },
      ]}
    />
  );
}
