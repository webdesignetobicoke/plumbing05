import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Heater Installation | Crystal Drain & Plumbing Wyoming",
  description: "If you are looking for a water heater installation service, look no further than Crystal Drain & Plumbing. We offer fast and affordable installations of all makes and models of water heaters.",
};

export default function Page() {
  return (
    <ServicePage
      title="Water Heater Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc60b104e108d1244cdf37_72Z7jmwniQXZX9hvWyUqPlb680pBo5Fba4DA_YC1ncc.png"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="If you are looking for a water heater installation service, look no further than Crystal Drain & Plumbing. We offer fast and affordable installations of all makes and models of water heaters."
      sections={[
        {
          heading: "What Exactly Is a Residential Water Heater, and What Are the Reasons for Installing a New One?",
          paragraphs: ["A residential water heater is a crucial appliance that supplies hot water for various household needs. While we often repair water heaters, there are situations where installing a new unit is the best course of action:"],
          items: ["The existing water heater is old and has reached the end of its lifespan (typically 8-12 years)", "The cost of repairing the current water heater is close to or exceeds the cost of installing a new one", "The current water heater is not meeting the household's hot water demands due to increased usage or a growing family", "Upgrading to a more energy-efficient model can lead to significant long-term savings on utility bills"],
        },
        {
          heading: "How Does Crystal Drain & Plumbing Handle Water Heater Installations?",
          items: ["We start by assessing your household's hot water needs and recommending the appropriate size and type of water heater", "Our technicians safely disconnect and remove your old water heater, disposing of it in an environmentally friendly manner", "We carefully install the new water heater, ensuring all connections are secure and up to code", "We thoroughly test the new unit to verify proper operation and make any necessary adjustments", "Finally, we provide you with instructions on how to maintain your new water heater for optimal performance"],
        },
        {
          heading: "Water Heater Installation Services Offered",
          items: ["New Water Heater Installations — traditional tanked or energy-efficient tankless", "Water Heater Repairs and Replacements", "Upgrading Existing Systems for improved water quality, pressure, and efficiency"],
        },
        {
          heading: "Benefits of Professional Water Heater Installation",
          items: ["Optimal Performance: Proper installation ensures consistent hot water supply", "Safety Assurance: Expert workmanship reduces the risk of leaks, gas emissions, or electrical issues", "Compliance with Local Codes: We stay up-to-date with Toronto's building codes", "Long-Term Savings: Quality installations reduce maintenance costs and extend the lifespan"],
        }
      ]}
      faqs={[
        { q: "Can I install a water heater myself?", a: "Installing a water heater yourself could lead to serious injuries and potential damage to your home. Water heaters involve complex connections to gas lines, electricity, and water supplies. Professional installation ensures safety and compliance with local plumbing codes. Unless you are a licensed plumber, it's best to leave this job to the experts." },
        { q: "Will Crystal Drain & Plumbing dispose of my old water heater?", a: "Yes, when you call Crystal Drain & Plumbing for a water heater installation, you don't need to worry about anything. We'll take care of removing your old unit, water lines, valves, and connectors. We have the necessary tools to disconnect and remove your old water heater without damaging your home, and we'll dispose of it accordingly." },
        { q: "Do you offer financing options?", a: "Yes, Crystal Drain & Plumbing partners with financing service companies to help you reduce your upfront costs. We understand that plumbing projects can be a significant investment. Please contact us to discuss available financing plans that suit your budget." },
      ]}
    />
  );
}
