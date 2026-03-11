import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumber Services Big Piney, WY | Crystal Drain & Plumbing",
  description: "Expert plumbing and HVAC services in Big Piney, WY. Crystal Drain & Plumbing serves Big Piney with residential plumbing, water heaters, drain cleaning, and more.",
};

export default function Page() {
  return (
    <LocationPage
      city="Big Piney"
      state="WY"
      slug="big-piney-wy"
      county="Sublette County"
      countySlug="sublette-county"
      phone="(307) 276-3490"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09922c5d5b4e2c1e7be5_MdphtEAqzZYkjgPQ1eqVr0K3I2C0BRbXy-tBGx6-I3c.webp"
      diagnosticFee="$110"
      rating="4.7"
      reviewCount="89"
      tagline="Big Piney residents trust Crystal Drain & Plumbing for reliable plumbing and HVAC services in Sublette County. Our technicians are experienced with the unique demands of high-altitude Wyoming homes."
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
