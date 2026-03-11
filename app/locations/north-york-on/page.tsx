import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services North York, ON | Crystal Drain & Plumbing",
  description: "Expert drain cleaning and plumbing services in North York, ON (M3J). Crystal Drain & Plumbing serves North York with emergency plumbing, sewer repair, and comprehensive drainage solutions.",
};

export default function Page() {
  return (
    <LocationPage
      city="North York"
      state="ON"
      slug="north-york-on"
      county="Greater Toronto Area"
      countySlug="greater-toronto-area"
      phone="(647) 686-4566"
      heroImg="/locations/north york.jpg"
      diagnosticFee="$95"
      rating="4.8"
      reviewCount="298"
      tagline="Crystal Drain & Plumbing serves North York with professional plumbing and drain cleaning services. Our experienced team provides reliable solutions for all residential and commercial plumbing needs."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Professional drain cleaning throughout North York using state-of-the-art technology and expert techniques." },
        { title: "Sewer Repair & Replacement", description: "Comprehensive sewer line services for North York properties with expert diagnosis and repair solutions." },
        { title: "Main Drain Services", description: "Expert main drain services to keep your North York property's plumbing system functioning optimally." },
        { title: "Emergency Plumbing", description: "Crystal Drain & Plumbing is available 24/7 for emergency plumbing services throughout North York." },
        { title: "Bathroom Plumbing", description: "Professional bathroom plumbing services in North York for repairs, installations, and renovations." },
        { title: "Kitchen Plumbing", description: "Expert kitchen plumbing services throughout North York to meet all your residential and commercial needs." },
        { title: "Water Heater Services", description: "Reliable water heater services in North York for both traditional and tankless systems." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing provides comprehensive commercial plumbing solutions for North York businesses." },
      ]}
    />
  );
}
