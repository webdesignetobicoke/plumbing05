import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Filtration Installation | Crystal Drain & Plumbing Wyoming",
  description: "Clean water is a necessity, not a luxury. With Crystal Drain & Plumbing's water filtration services, households are guaranteed pure and contaminant-free water directly from their taps.",
};

export default function Page() {
  return (
    <ServicePage
      title="Water Filtration Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc60ad04e108d1244cdb90_p9FZR8IpmffzP67MZiW_Hv6A786x0MuCHDHMZEnr48Y.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Clean water is a necessity, not a luxury. With Crystal Drain & Plumbing's water filtration services, households are guaranteed pure and contaminant-free water directly from their taps."
      sections={[
        {
          heading: "Why Install a Water Filtration System?",
          items: ["Remove chlorine, sediment, and other contaminants from your tap water", "Improve the taste and odor of your drinking water", "Protect your plumbing fixtures and appliances from mineral buildup", "Reduce dependence on bottled water — better for the environment and your wallet", "Toronto's hard water can be particularly harsh on pipes and water heaters"],
        },
        {
          heading: "Types of Water Filtration Systems We Install",
          items: ["Whole-House Water Filtration Systems — filter every tap in your home", "Under-Sink Filtration Units — targeted filtration at your kitchen sink", "Water Softeners — combat Toronto's famously hard water", "Reverse Osmosis Systems — advanced purification for drinking water", "UV Purification Systems — eliminate bacteria and viruses"],
        },
        {
          heading: "The Installation Process",
          paragraphs: ["Our certified plumbers will assess your water quality and recommend the most effective filtration solution for your home. We handle all aspects of installation, from plumbing connections to system startup and testing. After installation, we walk you through how to maintain your system for peak performance."],
        }
      ]}
      faqs={[
        { q: "How do I know if I need a water filtration system?", a: "If your water has an unusual taste, odor, or color, or if you have hard water causing scale buildup on fixtures, a filtration or softening system can help. We recommend having your water tested first — Crystal Drain & Plumbing can advise on the best solution based on your specific water quality." },
        { q: "How often do water filters need to be replaced?", a: "Filter replacement frequency depends on the type of system and your water usage. Most whole-house filters need replacement every 3-6 months, while reverse osmosis membranes last 2-3 years. We'll provide a maintenance schedule specific to your system at time of installation." },
      ]}
    />
  );
}
