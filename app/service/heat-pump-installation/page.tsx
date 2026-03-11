import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heat Pump Installation | Crystal Drain & Plumbing Toronto",
  description: "Professional heat pump installation for efficient year-round heating and cooling.",
};

export default function Page() {
  return (
    <ServicePage
      title="Heat Pump Installation"
      heroImg="https://images.pexels.com/photos/5081620/pexels-photo-5081620.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Home Heating", href: "/service-type/home-heating" }}
      tagline="Professional heat pump installation for efficient year-round heating and cooling."
      sections={[
        {
          heading: "Heat Pump Types We Install",
          items: ["Air-source heat pumps - Most common systems for heating and cooling", "Ductless mini-split heat pumps - Zone-based comfort with individual controls", "Ducted heat pumps - Work with existing ductwork for whole-home comfort", "Variable-refrigerant flow (VRF) systems - Advanced units for large homes", "Cold-climate heat pumps - Efficient heating even in severe winter weather", "Ground-source heat pumps - Ultra-efficient systems using geothermal energy", "Hybrid heat pumps - Combined gas and electric systems for maximum efficiency"],
        },
        {
          heading: "Heat Pump Installation Includes",
          items: ["Site assessment and system sizing calculation", "Removal of existing heating/cooling system if applicable", "Outdoor unit placement and installation", "Indoor unit or coil installation and connection", "Refrigerant charge and system pressure testing", "Electrical connections and safety breaker installation", "Thermostat programming and smart control setup", "Ductwork sealing and modifications as needed", "System startup and performance verification"],
        },
        {
          heading: "Year-Round Comfort",
          paragraphs: ["Heat pumps provide efficient heating in winter and cooling in summer, eliminating the need for separate systems. They're ideal for reducing energy consumption and environmental impact. Our expert installation ensures optimal performance and reliability for your home."],
        }
      ]}
      faqs={[
        { q: "Do heat pumps work in cold climates?", a: "Yes, modern cold-climate heat pumps are highly efficient even in temperatures well below freezing. They work well in Toronto and throughout the GTA." },
        { q: "How much can I save with a heat pump?", a: "Heat pumps typically reduce heating/cooling costs by 30-50% compared to traditional systems. Actual savings depend on your home and usage patterns." },
        { q: "What's the lifespan of a heat pump?", a: "Quality heat pumps typically last 15-20 years with proper maintenance. We offer service plans to keep your system running reliably." },
        { q: "Can heat pumps replace my current system?", a: "Yes, heat pumps can replace furnaces, air conditioners, or both. We'll assess your home to determine the best solution." },
      ]}
    />
  );
}
