import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Burlington, ON | Crystal Drain & Plumbing",
  description: "Expert drain cleaning and plumbing services in Burlington, ON (L7R). Crystal Drain & Plumbing serves Burlington with emergency plumbing, sewer repair, and comprehensive drainage solutions.",
};

export default function Page() {
  return (
    <LocationPage
      city="Burlington"
      state="ON"
      slug="burlington-on"
      county="Halton Region"
      countySlug="halton-region"
      phone="(647) 686-4566"
      heroImg="/locations/burlington.jpg"
      diagnosticFee="$95"
      rating="4.8"
      reviewCount="267"
      tagline="Crystal Drain & Plumbing serves Burlington and Halton Region with professional plumbing and drain cleaning services. Trust our experienced team for all your residential plumbing needs."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Professional drain cleaning throughout Burlington using advanced hydro-jetting and camera inspection." },
        { title: "Sewer Repair & Replacement", description: "Expert sewer line services for Burlington properties with professional diagnosis and repair." },
        { title: "Main Drain Services", description: "Comprehensive main drain services to ensure your Burlington home's plumbing system works." },
        { title: "Emergency Plumbing", description: "Available 24/7 for emergency plumbing service throughout Burlington and surrounding areas." },
        { title: "Bathroom Plumbing", description: "Professional bathroom plumbing services in Burlington for all your repair needs." },
        { title: "Kitchen Plumbing", description: "Expert kitchen plumbing services throughout Burlington to meet all your residential needs." },
        { title: "Water Heater Services", description: "Reliable water heater services in Burlington for repairs, maintenance, and installations." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing provides comprehensive commercial plumbing solutions for Burlington businesses." },
      ]}
    />
  );
}
