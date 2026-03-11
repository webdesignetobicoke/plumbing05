import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services Mississauga, ON | Crystal Drain & Plumbing",
  description: "Expert plumbing and drain cleaning services in Mississauga, ON (L4W). Crystal Drain & Plumbing serves Mississauga with emergency plumbing, sewer repair, and complete drainage solutions.",
};

export default function Page() {
  return (
    <LocationPage
      city="Mississauga"
      state="ON"
      slug="mississauga-on"
      county="Peel Region"
      countySlug="peel-region"
      phone="(647) 686-4566"
      heroImg="/locations/mississauga.jpg"
      diagnosticFee="$95"
      rating="4.8"
      reviewCount="356"
      tagline="Crystal Drain & Plumbing serves Mississauga and Peel Region with professional drain cleaning and plumbing services. Our experienced team provides reliable solutions for all your residential and commercial plumbing needs."
      services={["Drain Cleaning", "Sewer Repair", "Main Drain Services", "Emergency Plumbing", "Bathroom Plumbing", "Kitchen Plumbing", "Water Heater Services", "Commercial Plumbing"]}
      serviceDescriptions={[
        { title: "Drain Cleaning", description: "Crystal Drain & Plumbing offers professional drain cleaning throughout Mississauga. Using hydro-jetting and advanced inspection technology, we clear stubborn blockages quickly and effectively." },
        { title: "Sewer Repair & Replacement", description: "Our Mississauga plumbing team specializes in sewer line diagnosis and repair. We handle everything from minor fixes to complete sewer line replacements with expertise you can trust." },
        { title: "Main Drain Services", description: "Main drain problems can severely impact your home. We provide comprehensive main drain services to keep your Mississauga property's plumbing system flowing smoothly." },
        { title: "Emergency Plumbing", description: "When plumbing emergencies strike in Mississauga, Crystal Drain & Plumbing responds immediately. Our 24/7 team handles burst pipes, flooding, and urgent repairs without delay." },
        { title: "Bathroom Plumbing", description: "From toilet installations to complete bathroom plumbing overhauls, we ensure your Mississauga bathroom functions perfectly and efficiently." },
        { title: "Kitchen Plumbing", description: "We handle all your kitchen plumbing needs in Mississauga, from faucet repairs to sink replacements and dishwasher installations." },
        { title: "Water Heater Services", description: "Get reliable hot water service with our water heater repairs, maintenance, and installation services for both traditional and tankless systems." },
        { title: "Commercial Plumbing", description: "Crystal Drain & Plumbing provides comprehensive commercial plumbing solutions for Mississauga businesses of all sizes." },
      ]}
    />
  );
}
