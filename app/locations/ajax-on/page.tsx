import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Ajax, ON | Crystal Drain & Plumbing",
  description: "Expert drain cleaning and plumbing services in Ajax, ON (L1S). Crystal Drain & Plumbing serves Ajax with emergency plumbing, sewer repair, and comprehensive drainage solutions.",
};

export default function Page() {
  return (
    <LocationPage
      city="Ajax"
      state="ON"
      slug="ajax-on"
      county="Durham Region"
      countySlug="durham-region"
      phone="(647) 686-4566"
      heroImg="/locations/ajax.jpg"
      diagnosticFee="$95"
      rating="4.8"
      reviewCount="198"
      tagline="Crystal Drain & Plumbing serves Ajax and Durham Region with professional plumbing and drain cleaning services. Our experienced team is ready to help with all your plumbing needs."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Professional drain cleaning services throughout Ajax with advanced technology and expert service." },
        { title: "Sewer Repair & Replacement", description: "Expert sewer line services for Ajax properties with professional diagnosis and repair solutions." },
        { title: "Main Drain Services", description: "Comprehensive main drain services to ensure your Ajax home's plumbing works optimally." },
        { title: "Emergency Plumbing", description: "Available 24/7, Crystal Drain & Plumbing responds to emergency plumbing in Ajax immediately." },
        { title: "Bathroom Plumbing", description: "Professional bathroom plumbing services in Ajax for all your repair and installation needs." },
        { title: "Kitchen Plumbing", description: "Expert kitchen plumbing services throughout Ajax to meet all your residential needs." },
        { title: "Water Heater Services", description: "Reliable water heater services in Ajax for repairs, maintenance, and installations." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing provides comprehensive commercial plumbing solutions for Ajax businesses." },
      ]}
    />
  );
}
