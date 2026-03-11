import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Heater Replacement | Crystal Drain & Plumbing Wyoming",
  description: "Since 2013, Crystal Drain & Plumbing has earned the reputation of being the best choice for water heater replacement services in Rock Springs, WY and across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Water Heater Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc60b8a3f368537fbf6344_nvN2b-7n65wA2Y5Jy-VRaC3A7_J3khaONo9OdaQ2Tb8.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Since 2013, Crystal Drain & Plumbing has earned the reputation of being the best choice for water heater replacement services in Rock Springs, WY and across Wyoming."
      sections={[
        {
          heading: "When Should You Replace Your Water Heater?",
          items: ["Your water heater is 8-12+ years old", "Frequent repairs are becoming more costly than a replacement", "Rusty or discolored water coming from your hot water fixtures", "Strange popping, rumbling, or banging noises from the tank", "The tank is visibly leaking or corroded", "You're consistently running out of hot water faster than before"],
        },
        {
          heading: "Our Water Heater Replacement Process",
          paragraphs: ["At Crystal Drain & Plumbing, we take customer service very seriously, and we strive to exceed all of our customers' expectations. When you hire Crystal Drain & Plumbing to replace your water heater, you can count on exemplary service from the initial phone call to your stamp of approval once the installation is complete.", "Our team of highly qualified technicians has been trained to diagnose water heater problems and quickly determine whether or not your hot water heater needs to be replaced or simply repaired. From traditional tanked water heaters to energy-efficient tankless water heaters, Crystal Drain & Plumbing makes sure your water heater replacement meets all of your needs."],
        },
        {
          heading: "Brands We Service",
          items: ["Bradford White", "Rheem", "A.O. Smith", "Navien", "Noritz", "Rinnai", "State Water Heaters", "American Standard"],
        }
      ]}
      faqs={[
        { q: "How long does a water heater replacement take?", a: "Most water heater replacements can be completed in 2-4 hours. Our technicians arrive fully stocked with the most common water heater models, so in many cases we can replace your unit same day." },
        { q: "What size water heater do I need?", a: "The right size depends on your household's hot water demand. For a family of 1-2, a 30-40 gallon tank is typically sufficient. A family of 3-4 usually needs 40-50 gallons, while larger households may require 50-80 gallons or a tankless system. Our technicians will help you choose the right size." },
      ]}
    />
  );
}
