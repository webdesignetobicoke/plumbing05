import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Clogged Drain Services | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing provides professional commercial drain cleaning services across Wyoming for restaurants, office buildings, retail spaces, and other commercial properties.",
};

export default function Page() {
  return (
    <ServicePage
      title="Commercial Clogged Drain Services"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc6005f413258b329ae7d7_k86O_G7TNFDdC_ma5WVjNVqlfiSIZD4rqlVM.jpeg"
      parentCategory={{ label: "Clogged Drains", href: "/service-type/clogged-drains" }}
      tagline="Crystal Drain & Plumbing provides professional commercial drain cleaning services across Wyoming for restaurants, office buildings, retail spaces, and other commercial properties."
      sections={[
        {
          heading: "Commercial Drain Problems We Solve",
          items: ["Grease trap cleaning and maintenance", "Floor drain blockages in commercial kitchens", "Sewer line backups in multi-unit buildings", "Slow floor drains in restrooms or laundry facilities", "Root intrusion in commercial sewer systems", "Emergency drain service for businesses that cannot close"],
        },
        {
          heading: "Commercial-Grade Equipment",
          paragraphs: ["Commercial drain systems often require more powerful equipment than residential snakes can provide. Crystal Drain & Plumbing uses commercial-grade hydro jetting systems capable of 3,500+ PSI water pressure to blast through grease accumulations, root intrusions, and heavy scale buildups common in commercial drain systems."],
        },
        {
          heading: "Minimize Downtime for Your Business",
          paragraphs: ["We understand that drain problems in a commercial setting can halt operations and cost your business money. Crystal Drain & Plumbing responds quickly to commercial drain calls and works efficiently to restore your drains to full function with minimal disruption to your business operations."],
        }
      ]}
      faqs={[
        { q: "How often should commercial grease traps be cleaned?", a: "The frequency depends on the volume of cooking and grease your business produces. Most commercial kitchens require grease trap cleaning every 1-3 months. Neglected grease traps can overflow, creating health hazards and potentially backing up your drain system." },
      ]}
    />
  );
}
