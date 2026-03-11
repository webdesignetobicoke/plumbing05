import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Oshawa, ON | Crystal Drain & Plumbing",
  description: "Expert drain cleaning and plumbing services in Oshawa, ON (L1G). Crystal Drain & Plumbing serves Oshawa with emergency plumbing, sewer repair, and comprehensive drainage solutions.",
};

export default function Page() {
  return (
    <LocationPage
      city="Oshawa"
      state="ON"
      slug="oshawa-on"
      county="Durham Region"
      countySlug="durham-region"
      phone="(647) 686-4566"
      heroImg="/locations/oshawa.JPG"
      diagnosticFee="$95"
      rating="4.7"
      reviewCount="223"
      tagline="Crystal Drain & Plumbing serves Oshawa and Durham Region with professional plumbing and drain cleaning services. Our experienced team is ready to help with all your plumbing needs."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Professional drain cleaning services throughout Oshawa with advanced technology and expert techniques." },
        { title: "Sewer Repair & Replacement", description: "Expert sewer line services for Oshawa properties with prompt diagnosis and reliable repair." },
        { title: "Main Drain Services", description: "Comprehensive main drain services to keep your Oshawa home's plumbing functioning." },
        { title: "Emergency Plumbing", description: "Available 24/7, Crystal Drain & Plumbing responds to emergency plumbing in Oshawa immediately." },
        { title: "Bathroom Plumbing", description: "Professional bathroom plumbing services in Oshawa for repairs and installations." },
        { title: "Kitchen Plumbing", description: "Expert kitchen plumbing services throughout Oshawa to meet all your residential needs." },
        { title: "Water Heater Services", description: "Reliable water heater repair, maintenance, and installation services for Oshawa homes." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing provides comprehensive commercial plumbing solutions for Oshawa businesses." },
      ]}
    />
  );
}
