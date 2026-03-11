import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Heating Tune-Up | Crystal Drain & Plumbing Toronto",
  description: "Professional annual heating system tune-up before the cold season.",
};

export default function Page() {
  return (
    <ServicePage
      title="Annual Heating Tune-Up"
      heroImg="https://images.pexels.com/photos/5632630/pexels-photo-5632630.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Home Heating", href: "/service-type/home-heating" }}
      tagline="Professional annual heating system tune-up to prepare for the cold season."
      sections={[
        {
          heading: "Complete Heating System Tune-Up",
          items: ["Furnace or boiler inspection and cleaning", "Burner inspection and adjustment", "Heat exchanger examination for cracks or damage", "Air filter replacement and airflow testing", "Thermostat calibration and system check", "Blower motor inspection and cleaning", "Ductwork sealing and airflow balancing", "Ventilation system inspection and blockage check", "Safety control verification", "Complete system performance testing"],
        },
        {
          heading: "Extended Tune-Up Services",
          items: ["Heat pump defrost cycle testing and optimization", "Radiant floor system pressure and temperature balancing", "Zone valve operation and balancing", "Humidifier integration and maintenance", "Air quality filter maintenance", "UV system inspection (if applicable)", "Smart thermostat programming optimization", "Energy efficiency recommendations"],
        },
        {
          heading: "Why Schedule Before Winter",
          paragraphs: ["Scheduling your heating tune-up in fall ensures your system is ready when cold weather arrives. We catch potential problems before they become emergencies, improve efficiency to lower your heating bills, and give you peace of mind knowing your system will perform reliably all season. Don't wait until the first cold snap - book your tune-up today!"],
        }
      ]}
      faqs={[
        { q: "When should I schedule my heating tune-up?", a: "We recommend September or October, before heating season begins. This ensures your system is ready and operating efficiently when cold weather arrives." },
        { q: "What if I skip the annual tune-up?", a: "Skipping maintenance reduces efficiency, increases heating costs, and increases the risk of unexpected breakdowns during winter." },
        { q: "How much can I save with an annual tune-up?", a: "A properly tuned system operates 10-15% more efficiently, potentially saving $100-300+ per season depending on your system and usage." },
        { q: "Does the tune-up include repairs?", a: "The tune-up identifies issues and recommends solutions. Additional repairs are quoted and performed only with your approval." },
      ]}
    />
  );
}
