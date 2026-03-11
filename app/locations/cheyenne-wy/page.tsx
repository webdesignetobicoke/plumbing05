import LocationPage from "@/components/LocationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumber Services Cheyenne, WY | Crystal Drain & Plumbing",
  description: "Expert plumbing and HVAC services in Cheyenne, WY. Crystal Drain & Plumbing serves Cheyenne with residential plumbing, water heaters, drain cleaning, and more.",
};

export default function Page() {
  return (
    <LocationPage
      city="Cheyenne"
      state="WY"
      slug="cheyenne-wy"
      county="Laramie County"
      countySlug="laramie-county"
      phone="(307) 632-4000"
      heroImg="https://images.pexels.com/photos/2279822/pexels-photo-2279822.jpeg?auto=compress&cs=tinysrgb&w=1600"
      diagnosticFee="$110"
      rating="5.0"
      reviewCount="89"
      tagline="Crystal Drain & Plumbing Cheyenne brings Wyoming's Gold Leaf Standard to the capital city. Under franchisee Travis James, we provide expert plumbing and HVAC services throughout Cheyenne and Laramie County."
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
