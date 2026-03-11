import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Hamilton, ON | Crystal Drain & Plumbing",
  description: "Expert drain cleaning and plumbing services in Hamilton, ON (L8H). Crystal Drain & Plumbing serves Hamilton with emergency plumbing, sewer repair, and comprehensive drainage solutions.",
};

export default function Page() {
  return (
    <LocationPage
      city="Hamilton"
      state="ON"
      slug="hamilton-on"
      county="Hamilton Region"
      countySlug="hamilton-region"
      phone="(647) 686-4566"
      heroImg="/locations/hamilton.jpg"
      diagnosticFee="$95"
      rating="4.7"
      reviewCount="245"
      tagline="Crystal Drain & Plumbing serves Hamilton with professional plumbing and drain cleaning services. Trust our experienced team for all your residential and commercial plumbing needs in Hamilton."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Professional drain cleaning throughout Hamilton using advanced hydro-jetting and camera inspection." },
        { title: "Sewer Repair & Replacement", description: "Expert sewer line services for Hamilton properties with prompt diagnosis and reliable repair." },
        { title: "Main Drain Services", description: "Comprehensive main drain services to keep your Hamilton home's plumbing system functioning." },
        { title: "Emergency Plumbing", description: "Available 24/7 for emergency plumbing service throughout Hamilton and surrounding areas." },
        { title: "Bathroom Plumbing", description: "Professional bathroom plumbing services in Hamilton for repairs, installations, and renovations." },
        { title: "Kitchen Plumbing", description: "Expert kitchen plumbing services throughout Hamilton to meet all your residential needs." },
        { title: "Water Heater Services", description: "Reliable water heater repair, maintenance, and installation for Hamilton homes and businesses." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing provides comprehensive commercial plumbing solutions for Hamilton businesses." },
      ]}
    />
  );
}
