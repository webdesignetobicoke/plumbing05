import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furnace Maintenance | Crystal Drain & Plumbing Toronto",
  description: "Regular furnace maintenance to keep your heating system running efficiently and reliably.",
};

export default function Page() {
  return (
    <ServicePage
      title="Furnace Maintenance"
      heroImg="https://images.pexels.com/photos/5632633/pexels-photo-5632633.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Home Heating", href: "/service-type/home-heating" }}
      tagline="Annual furnace maintenance to keep your heating system running efficiently and reliably."
      sections={[
        {
          heading: "Maintenance Services Included",
          items: ["Air filter inspection and replacement", "Burner inspection and cleaning", "Heat exchanger inspection and safety check", "Blower motor and fan blade cleaning", "Thermostat calibration and testing", "Gas pressure and ignition system check", "Ventilation system inspection", "Overall system performance verification", "Lubrication of moving parts", "Complete system documentation and report"],
        },
        {
          heading: "Benefits of Regular Maintenance",
          items: ["Improved energy efficiency - Lower heating bills", "Extended furnace lifespan - Thousands of additional operating hours", "Reduced repair costs - Catch small issues before they become expensive", "Better indoor air quality - Clean filters and components", "Increased reliability - Fewer unexpected breakdowns", "Warranty compliance - Many warranties require annual maintenance", "Safer operation - Annual safety inspections prevent hazards", "Consistent comfort - Optimal heating performance year-round"],
        },
        {
          heading: "Professional Maintenance Plan",
          paragraphs: ["Regular furnace maintenance is the key to reliable, efficient heating. We recommend annual maintenance before the heating season begins. Our comprehensive tune-up service includes inspection, cleaning, and testing of all furnace components. This preventive approach can extend your furnace's life by many years and help you avoid costly emergency repairs during the coldest months."],
        }
      ]}
      faqs={[
        { q: "How often should I have my furnace maintained?", a: "We recommend annual furnace maintenance before the heating season - ideally in fall. This ensures your system is ready and operating at peak efficiency." },
        { q: "What if I skip maintenance?", a: "Skipping maintenance can lead to reduced efficiency, higher energy bills, and a shortened furnace lifespan. You may also void the warranty on some units." },
        { q: "Can I do basic furnace maintenance myself?", a: "You can change air filters monthly, but professional maintenance should be done by certified technicians to ensure safety and proper operation." },
        { q: "Does maintenance really save money?", a: "Yes, a well-maintained furnace operates 15-20% more efficiently, reducing heating costs. Maintenance also prevents expensive repairs and extends furnace life." },
      ]}
    />
  );
}
