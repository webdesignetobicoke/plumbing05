import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Etobicoke, ON | Crystal Drain & Plumbing",
  description: "Expert plumbing and drain cleaning services in Etobicoke, ON (M9C). Crystal Drain & Plumbing serves Etobicoke with emergency plumbing, sewer repair, and comprehensive drainage solutions.",
};

export default function Page() {
  return (
    <LocationPage
      city="Etobicoke"
      state="ON"
      slug="etobicoke-on"
      county="Greater Toronto Area"
      countySlug="greater-toronto-area"
      phone="(647) 686-4566"
      heroImg="/locations/etobicoke.jpg"
      diagnosticFee="$95"
      rating="4.8"
      reviewCount="312"
      tagline="Crystal Drain & Plumbing serves Etobicoke with professional drain cleaning and plumbing services. Trust our experienced team for all your residential and commercial plumbing needs in Etobicoke."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Crystal Drain & Plumbing provides fast and effective drain cleaning throughout Etobicoke. We use advanced technology to clear blockages and restore proper drainage." },
        { title: "Sewer Repair & Replacement", description: "Our team in Etobicoke handles sewer line issues with precision. From diagnosis to repair or replacement, we provide reliable solutions for all sewer problems." },
        { title: "Main Drain Services", description: "Main drain issues require immediate attention. We provide comprehensive main drain services to keep your Etobicoke home's plumbing system working properly." },
        { title: "Emergency Plumbing", description: "Plumbing emergencies happen anytime. Crystal Drain & Plumbing is available 24/7 to handle urgent plumbing issues in Etobicoke quickly and professionally." },
        { title: "Bathroom Plumbing", description: "We provide expert bathroom plumbing services in Etobicoke, from repairs to complete renovations and installations." },
        { title: "Kitchen Plumbing", description: "Your Etobicoke kitchen deserves expert plumbing service. We handle all kitchen plumbing needs with professionalism and precision." },
        { title: "Water Heater Services", description: "Get reliable hot water service in Etobicoke with our water heater repair, maintenance, and installation services." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing serves Etobicoke's commercial properties with reliable and efficient plumbing solutions." },
      ]}
    />
  );
}
