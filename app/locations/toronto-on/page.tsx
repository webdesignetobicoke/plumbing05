import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drain Cleaning & Plumbing Services Toronto, ON | Crystal Drain & Plumbing",
  description: "Expert drain cleaning and plumbing services in Toronto, ON (M8X). Crystal Drain & Plumbing serves Toronto with 24/7 emergency plumbing, clogged drains, water heaters, and more.",
};

export default function Page() {
  return (
    <LocationPage
      city="Toronto"
      state="ON"
      slug="toronto-on"
      county="Greater Toronto Area"
      countySlug="greater-toronto-area"
      phone="(647) 686-4566"
      heroImg="/locations/toronto.jpg"
      diagnosticFee="$95"
      rating="4.9"
      reviewCount="428"
      tagline="Crystal Drain & Plumbing serves Toronto and the Greater Toronto Area with comprehensive drain cleaning and plumbing services. As Ontario's largest city, Toronto residents depend on our reliable, professional plumbing team for all their drainage and plumbing needs."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Crystal Drain & Plumbing specializes in comprehensive drain cleaning services throughout Toronto. Using advanced hydro-jetting and camera inspection technology, we swiftly clear blockages and restore your home's drainage system." },
        { title: "Sewer Repair & Replacement", description: "Experiencing sewer issues? Our Toronto-based team diagnoses and repairs sewer line problems with precision. From minor repairs to complete replacements, we ensure your system works flawlessly." },
        { title: "Main Drain Services", description: "The main drain is critical to your home's plumbing system. Crystal Drain & Plumbing's experts handle all main drain issues, ensuring proper water flow and preventing costly backups." },
        { title: "Emergency Plumbing", description: "Plumbing emergencies don't wait, and neither do we. Available 24/7, our emergency response team in Toronto is ready to handle burst pipes, flooding, and urgent plumbing issues." },
        { title: "Bathroom Plumbing", description: "From toilet repairs to complete bathroom remodeling, Crystal Drain & Plumbing ensures your bathroom plumbing is reliable and efficient. We handle everything with professional expertise." },
        { title: "Kitchen Plumbing", description: "Your kitchen deserves expert plumbing care. We handle faucet repairs, sink installations, dishwasher hookups, and all kitchen plumbing needs with precision and professionalism." },
        { title: "Water Heater Services", description: "Enjoy reliable hot water with our water heater services. We repair, maintain, and install both traditional and tankless water heaters for maximum efficiency and comfort." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing serves Toronto's commercial properties with reliable drainage and plumbing solutions designed for business operations." },
      ]}
    />
  );
}
