import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Whitby, ON | Crystal Drain & Plumbing",
  description: "Expert drain cleaning and plumbing services in Whitby, ON (L1N). Crystal Drain & Plumbing serves Whitby with emergency plumbing, sewer repair, and comprehensive drainage solutions.",
};

export default function Page() {
  return (
    <LocationPage
      city="Whitby"
      state="ON"
      slug="whitby-on"
      county="Durham Region"
      countySlug="durham-region"
      phone="(647) 686-4566"
      heroImg="/locations/whitby.jpg"
      diagnosticFee="$95"
      rating="4.9"
      reviewCount="189"
      tagline="Crystal Drain & Plumbing serves Whitby and Durham Region with professional plumbing and drain cleaning services. Trust our experienced team for all your residential plumbing needs."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Professional drain cleaning throughout Whitby using advanced hydro-jetting and camera inspection." },
        { title: "Sewer Repair & Replacement", description: "Expert sewer line services for Whitby properties with professional diagnosis and repair." },
        { title: "Main Drain Services", description: "Comprehensive main drain services to ensure your Whitby home's plumbing system works." },
        { title: "Emergency Plumbing", description: "Available 24/7 for emergency plumbing service throughout Whitby and surrounding areas." },
        { title: "Bathroom Plumbing", description: "Professional bathroom plumbing services in Whitby for all your repair needs." },
        { title: "Kitchen Plumbing", description: "Expert kitchen plumbing services throughout Whitby to meet all your residential needs." },
        { title: "Water Heater Services", description: "Reliable water heater services in Whitby for repairs, maintenance, and installations." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing provides comprehensive commercial plumbing solutions for Whitby businesses." },
      ]}
    />
  );
}
