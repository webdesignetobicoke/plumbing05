import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Heater Repair | Crystal Drain & Plumbing Wyoming",
  description: "If you are looking for a water heater repair service, look no further than Crystal Drain & Plumbing. We offer fast and affordable repairs to all makes and models of water heaters.",
};

export default function Page() {
  return (
    <ServicePage
      title="Water Heater Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc60b5bab19697665aa3a9_VefWhne6pcX2LyHRYjsNMU3GNm8dKJxDk82v9xoAD_w.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="If you are looking for a water heater repair service, look no further than Crystal Drain & Plumbing. We offer fast and affordable repairs to all makes and models of water heaters."
      sections={[
        {
          heading: "What Usually Needs to Be Repaired in a Water Heater?",
          paragraphs: ["A residential water heater is an essential appliance that provides hot water for various household needs, such as showers, dishwashing, and laundry. It typically consists of a large tank that stores and heats water using either gas or electricity. Common issues that require repair include:"],
          items: ["Leaks from the tank or connections", "Insufficient hot water supply", "Unusual noises (e.g., popping, hissing, or rumbling sounds)", "Rusty or discolored water", "Malfunctioning thermostat or heating elements"],
        },
        {
          heading: "How Crystal Drain & Plumbing Repairs Broken Water Heaters",
          items: ["We start by assessing the issue and determining the cause of the problem", "Depending on the nature of the issue, we may need to replace certain components, such as the thermostat, heating elements, anode rod, or pressure relief valve", "If the tank is leaking or has extensive damage, we may recommend a complete water heater replacement", "Throughout the repair process, we use high-quality parts and adhere to industry best practices to ensure a long-lasting solution"],
        },
        {
          heading: "Trust Crystal Drain & Plumbing to Repair Your Broken Water Heater",
          items: ["Our technicians are licensed, insured, and highly trained in all aspects of water heater repair and maintenance", "We use only top-quality parts and materials to ensure the longevity and efficiency of your water heater", "Our transparent pricing and upfront estimates mean no surprises on your final bill", "We prioritize customer satisfaction and always strive to exceed expectations"],
        }
      ]}
      faqs={[
        { q: "How do I know if my water heater needs repair or replacement?", a: "If your water heater is less than 8 years old and experiencing issues like a faulty thermostat, bad heating element, or minor leaks, a repair is often the most cost-effective option. If it's older or the repair cost exceeds 50% of a new unit's price, replacement is usually recommended." },
        { q: "Can you repair my water heater the same day?", a: "In many cases, yes. Crystal Drain & Plumbing carries common repair parts on our service vehicles. After diagnosing the issue, we'll give you an upfront estimate and — if parts are available — complete the repair the same day." },
      ]}
    />
  );
}
