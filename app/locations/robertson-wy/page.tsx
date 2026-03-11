import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumber Services Robertson, WY | Crystal Drain & Plumbing",
  description: "Expert plumbing and HVAC services in Robertson, WY. Crystal Drain & Plumbing serves Robertson with residential plumbing, water heaters, drain cleaning, and more.",
};

export default function Page() {
  return (
    <LocationPage
      city="Robertson"
      state="WY"
      slug="robertson-wy"
      county="Uinta County"
      countySlug="unita-county"
      phone="(647) 686-4566"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09f3db3ef3d37ea5c4ca_LH8bLfUZrTR_3OO7O7aBZx7wKQ7l9E8TQIW0TUXXkYo.webp"
      diagnosticFee="$110"
      rating="4.7"
      reviewCount="372"
      tagline="Crystal Drain & Plumbing serves Robertson and the surrounding Uinta County area with professional residential plumbing services. No Wyoming community is too small to receive our Gold Leaf Standard."
      services={["Drain Cleaning", "Bathroom Plumbing", "Water Heater Services", "Kitchen Plumbing", "Sewer Line Services", "Residential Plumbing", "Water Filtration Systems", "Gas Line Services"]}
      serviceDescriptions={[
        { title: "Residential Plumbing", description: "Crystal Drain & Plumbing stands as a beacon of excellence in providing top-tier residential plumbing services. With our deep understanding of Wyoming's unique plumbing challenges, we ensure every home enjoys a seamless and efficient plumbing system." },
        { title: "Clogged Drains", description: "A clogged drain can disrupt your daily life. Leveraging specialized techniques, Crystal Drain & Plumbing swiftly addresses and resolves drain blockages, reinstating your home's harmony and ensuring uninterrupted water flow." },
        { title: "Kitchen Plumbing", description: "The kitchen, the heart of every home, deserves an impeccable plumbing system. From fixing leaky faucets to installing state-of-the-art fixtures, our expert team ensures your kitchen plumbing runs flawlessly." },
        { title: "Bathroom Plumbing", description: "Crystal Drain & Plumbing recognizes the importance of a fully functional bathroom. Whether it's a dripping showerhead or a toilet overhaul, our professional touch ensures your bathroom remains a sanctuary of relaxation and efficiency." },
        { title: "Sewer Line Replacements", description: "With age and wear, sewer lines can falter. Crystal Drain & Plumbing specializes in diagnosing sewer line issues and offering robust replacement solutions, ensuring communities enjoy uninterrupted and environmentally safe sewage systems." },
        { title: "Tankless Water Heaters", description: "Experience the luxury of instant hot water with our tankless water heater services. Crystal Drain & Plumbing's expertise ensures you enjoy energy efficiency and never-ending warm water, all while reducing utility bills." },
        { title: "Water Filtration Systems", description: "Clean water is a necessity, not a luxury. With Crystal Drain & Plumbing's water filtration services, households are guaranteed pure and contaminant-free water, directly from their taps." },
        { title: "Gas Line Services", description: "Our licensed technicians safely install, repair, and replace gas lines for all your home's gas appliances. Safety and compliance with Wyoming's gas piping codes are always our top priority." },
      ]}
    />
  );
}
