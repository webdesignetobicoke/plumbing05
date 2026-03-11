import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shower Head Replacement | Crystal Drain & Plumbing Toronto",
  description: "Professional shower head replacement across Toronto. Upgrade to modern shower heads with better flow and features.",
};

export default function Page() {
  return (
    <ServicePage
      title="Shower Head Replacement"
      heroImg="https://images.pexels.com/photos/2569839/pexels-photo-2569839.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Professional shower head replacement across Toronto. Upgrade to modern shower heads with better flow and features."
      sections={[
        {
          heading: "Types of Shower Heads We Install",
          items: ["Fixed shower heads - Traditional wall-mounted styles", "Rain shower heads - Large 8-12 inch overhead heads for rainfall effect", "Hand-held shower heads - Flexible wands for targeted cleaning and accessibility", "Combo systems - Fixed head plus hand-held option", "Adjustable shower heads - Multiple spray patterns (mist, massage, rainfall)", "Low-flow shower heads - Water-saving designs for efficiency", "Filtered shower heads - Built-in filters for water quality", "Thermostatic shower heads - Temperature control right at the shower head"],
        },
        {
          heading: "Professional Installation Includes",
          items: ["Removal of old shower head and trim ring", "Inspection and cleaning of shower arm connection", "Thread seal tape application for leak prevention", "Installation of new shower head at correct angle", "Testing for proper spray pattern and even flow", "Verification of water pressure through new head", "Seal and caulk around trim ring if needed"],
        },
        {
          heading: "Upgrade to Modern Shower Heads",
          paragraphs: ["If your shower head is old, leaking, or spraying unevenly, replacement is quick and affordable. Modern shower heads offer better water pressure distribution, multiple spray patterns, and many include water-saving features that reduce your water bill. We install quality shower heads from brands like Moen, Delta, Kohler, and Shower Masters that provide years of reliable performance."],
        }
      ]}
      faqs={[
        { q: "How long does shower head replacement take?", a: "Shower head replacement typically takes less than 30 minutes. It's one of the quickest plumbing upgrades you can make." },
        { q: "Will a new shower head increase water pressure?", a: "A new shower head can improve the feel of your shower pressure by distributing water more evenly. However, actual water pressure depends on your home's plumbing system. If you have low water pressure overall, we can discuss options like pressure-boosting systems." },
        { q: "Do I need a plumber to replace a shower head?", a: "Most shower heads are simple enough for DIY replacement. However, if there are leaks, corrosion, or difficulty removing old hardware, we can handle it quickly and ensure a proper installation." },
      ]}
    />
  );
}
