import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Oakville, ON | Crystal Drain & Plumbing",
  description: "Expert drain cleaning and plumbing services in Oakville, ON (L6H). Crystal Drain & Plumbing serves Oakville with emergency plumbing, sewer repair, and comprehensive drainage solutions.",
};

export default function Page() {
  return (
    <LocationPage
      city="Oakville"
      state="ON"
      slug="oakville-on"
      county="Halton Region"
      countySlug="halton-region"
      phone="(647) 686-4566"
      heroImg="/locations/oakville.jpg"
      diagnosticFee="$95"
      rating="4.9"
      reviewCount="267"
      tagline="Crystal Drain & Plumbing serves Oakville and Halton Region with professional plumbing and drain cleaning services. Trust our experienced team for all your residential plumbing needs."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Professional drain cleaning services throughout Oakville with advanced hydro-jetting technology and expert service." },
        { title: "Sewer Repair & Replacement", description: "Expert sewer line services for Oakville properties including diagnosis, repair, and replacement." },
        { title: "Main Drain Services", description: "Comprehensive main drain services to ensure your Oakville home's plumbing system works perfectly." },
        { title: "Emergency Plumbing", description: "Available 24/7 for emergency plumbing service in Oakville when you need it most." },
        { title: "Bathroom Plumbing", description: "Professional bathroom plumbing services in Oakville for all your repair and renovation needs." },
        { title: "Kitchen Plumbing", description: "Expert kitchen plumbing services throughout Oakville to keep your kitchen functioning optimally." },
        { title: "Water Heater Services", description: "Reliable water heater repair, maintenance, and installation services for Oakville homes." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing provides comprehensive commercial plumbing solutions for Oakville businesses." },
      ]}
    />
  );
}
