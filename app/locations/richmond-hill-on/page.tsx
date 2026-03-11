import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Richmond Hill, ON | Crystal Drain & Plumbing",
  description: "Expert drain cleaning and plumbing services in Richmond Hill, ON (L4B). Crystal Drain & Plumbing serves Richmond Hill with emergency plumbing, sewer repair, and comprehensive drainage solutions.",
};

export default function Page() {
  return (
    <LocationPage
      city="Richmond Hill"
      state="ON"
      slug="richmond-hill-on"
      county="York Region"
      countySlug="york-region"
      phone="(647) 686-4566"
      heroImg="/locations/richmond hill.jpg"
      diagnosticFee="$95"
      rating="4.8"
      reviewCount="234"
      tagline="Crystal Drain & Plumbing serves Richmond Hill and York Region with professional plumbing and drain cleaning services. Trust our experienced team for all your residential plumbing needs."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Professional drain cleaning throughout Richmond Hill using advanced hydro-jetting and camera inspection." },
        { title: "Sewer Repair & Replacement", description: "Expert sewer line services for Richmond Hill properties with professional diagnosis and repair." },
        { title: "Main Drain Services", description: "Comprehensive main drain services to ensure your Richmond Hill home's plumbing system works." },
        { title: "Emergency Plumbing", description: "Available 24/7 for emergency plumbing service throughout Richmond Hill and surrounding areas." },
        { title: "Bathroom Plumbing", description: "Professional bathroom plumbing services in Richmond Hill for all your repair needs." },
        { title: "Kitchen Plumbing", description: "Expert kitchen plumbing services throughout Richmond Hill to meet all your residential needs." },
        { title: "Water Heater Services", description: "Reliable water heater services in Richmond Hill for repairs, maintenance, and installations." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing provides comprehensive commercial plumbing solutions for Richmond Hill businesses." },
      ]}
    />
  );
}
