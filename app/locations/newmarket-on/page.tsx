import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Newmarket, ON | Crystal Drain & Plumbing",
  description: "Expert drain cleaning and plumbing services in Newmarket, ON (L3Y). Crystal Drain & Plumbing serves Newmarket with emergency plumbing, sewer repair, and comprehensive drainage solutions.",
};

export default function Page() {
  return (
    <LocationPage
      city="Newmarket"
      state="ON"
      slug="newmarket-on"
      county="York Region"
      countySlug="york-region"
      phone="(647) 686-4566"
      heroImg="/locations/new market.jpg"
      diagnosticFee="$95"
      rating="4.7"
      reviewCount="198"
      tagline="Crystal Drain & Plumbing serves Newmarket and York Region with professional plumbing and drain cleaning services. Trust our experienced team for all your residential plumbing needs."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Professional drain cleaning throughout Newmarket using advanced hydro-jetting and camera inspection." },
        { title: "Sewer Repair & Replacement", description: "Expert sewer line services for Newmarket properties with professional diagnosis and repair." },
        { title: "Main Drain Services", description: "Comprehensive main drain services to ensure your Newmarket home's plumbing system works." },
        { title: "Emergency Plumbing", description: "Available 24/7 for emergency plumbing service throughout Newmarket and surrounding areas." },
        { title: "Bathroom Plumbing", description: "Professional bathroom plumbing services in Newmarket for all your repair needs." },
        { title: "Kitchen Plumbing", description: "Expert kitchen plumbing services throughout Newmarket to meet all your residential needs." },
        { title: "Water Heater Services", description: "Reliable water heater services in Newmarket for repairs, maintenance, and installations." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing provides comprehensive commercial plumbing solutions for Newmarket businesses." },
      ]}
    />
  );
}
