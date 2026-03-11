import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Brampton, ON | Crystal Drain & Plumbing",
  description: "Expert drain cleaning and plumbing services in Brampton, ON (L6V). Crystal Drain & Plumbing serves Brampton with emergency plumbing, sewer repair, and comprehensive drainage solutions.",
};

export default function Page() {
  return (
    <LocationPage
      city="Brampton"
      state="ON"
      slug="brampton-on"
      county="Peel Region"
      countySlug="peel-region"
      phone="(647) 686-4566"
      heroImg="/locations/brampton.jpg"
      diagnosticFee="$95"
      rating="4.8"
      reviewCount="301"
      tagline="Crystal Drain & Plumbing serves Brampton and Peel Region with professional plumbing and drain cleaning services. Our experienced team provides reliable solutions for all your plumbing needs."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Fast and effective drain cleaning throughout Brampton using advanced technology and expert techniques." },
        { title: "Sewer Repair & Replacement", description: "Expert sewer line services for Brampton properties with professional diagnosis and repair." },
        { title: "Main Drain Services", description: "Comprehensive main drain services to keep your Brampton home's plumbing system optimal." },
        { title: "Emergency Plumbing", description: "Available 24/7, Crystal Drain & Plumbing handles emergency plumbing in Brampton immediately." },
        { title: "Bathroom Plumbing", description: "Professional bathroom plumbing services in Brampton for repairs and renovations." },
        { title: "Kitchen Plumbing", description: "Expert kitchen plumbing services throughout Brampton to meet all your needs." },
        { title: "Water Heater Services", description: "Reliable water heater services in Brampton for all types of systems and repairs." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing provides comprehensive commercial plumbing solutions for Brampton businesses." },
      ]}
    />
  );
}
