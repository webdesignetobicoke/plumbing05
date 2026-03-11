import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Pickering, ON | Crystal Drain & Plumbing",
  description: "Expert drain cleaning and plumbing services in Pickering, ON (L1V). Crystal Drain & Plumbing serves Pickering with emergency plumbing, sewer repair, and comprehensive drainage solutions.",
};

export default function Page() {
  return (
    <LocationPage
      city="Pickering"
      state="ON"
      slug="pickering-on"
      county="Durham Region"
      countySlug="durham-region"
      phone="(647) 686-4566"
      heroImg="/locations/pickering.png"
      diagnosticFee="$95"
      rating="4.8"
      reviewCount="212"
      tagline="Crystal Drain & Plumbing serves Pickering and Durham Region with professional plumbing and drain cleaning services. Trust our experienced team for all your plumbing needs."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Fast and effective drain cleaning throughout Pickering using advanced hydro-jetting technology." },
        { title: "Sewer Repair & Replacement", description: "Expert sewer line services for Pickering properties with professional diagnosis and repair." },
        { title: "Main Drain Services", description: "Comprehensive main drain services to keep your Pickering home's plumbing system optimal." },
        { title: "Emergency Plumbing", description: "Available 24/7 for emergency plumbing service throughout Pickering and surrounding areas." },
        { title: "Bathroom Plumbing", description: "Professional bathroom plumbing services in Pickering for repairs and renovations." },
        { title: "Kitchen Plumbing", description: "Expert kitchen plumbing services throughout Pickering to meet all your residential needs." },
        { title: "Water Heater Services", description: "Reliable water heater services in Pickering for all types of systems." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing provides comprehensive commercial plumbing solutions for Pickering businesses." },
      ]}
    />
  );
}
