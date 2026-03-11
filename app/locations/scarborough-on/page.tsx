import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Scarborough, ON | Crystal Drain & Plumbing",
  description: "Expert drain cleaning and plumbing services in Scarborough, ON (M1G). Crystal Drain & Plumbing serves Scarborough with emergency plumbing, sewer repair, and complete drainage solutions.",
};

export default function Page() {
  return (
    <LocationPage
      city="Scarborough"
      state="ON"
      slug="scarborough-on"
      county="Greater Toronto Area"
      countySlug="greater-toronto-area"
      phone="(647) 686-4566"
      heroImg="/locations/scarborough.jpg"
      diagnosticFee="$95"
      rating="4.7"
      reviewCount="289"
      tagline="Crystal Drain & Plumbing serves Scarborough with professional plumbing and drain cleaning services. Our experienced team provides reliable solutions for all residential and commercial plumbing needs."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Fast and effective drain cleaning throughout Scarborough using advanced hydro-jetting and camera inspection technology." },
        { title: "Sewer Repair & Replacement", description: "Our Scarborough team provides expert sewer line diagnosis, repair, and replacement services with precision and reliability." },
        { title: "Main Drain Services", description: "Comprehensive main drain services for Scarborough properties to ensure optimal plumbing system performance." },
        { title: "Emergency Plumbing", description: "Available 24/7, Crystal Drain & Plumbing responds immediately to plumbing emergencies in Scarborough." },
        { title: "Bathroom Plumbing", description: "Expert bathroom plumbing services in Scarborough for all your repair and installation needs." },
        { title: "Kitchen Plumbing", description: "Professional kitchen plumbing services in Scarborough to keep your kitchen running smoothly." },
        { title: "Water Heater Services", description: "Reliable water heater repair, maintenance, and installation for Scarborough homes and businesses." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing provides comprehensive commercial plumbing solutions for Scarborough businesses." },
      ]}
    />
  );
}
