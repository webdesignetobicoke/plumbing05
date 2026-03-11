import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shower Remodeling | Crystal Drain & Plumbing Toronto",
  description: "Professional shower remodeling and renovation services across Toronto. Full bathroom shower upgrades.",
};

export default function Page() {
  return (
    <ServicePage
      title="Shower Remodeling"
      heroImg="https://images.pexels.com/photos/2310904/pexels-photo-2310904.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Professional shower remodeling and renovation services across Toronto. Full bathroom shower upgrades."
      sections={[
        {
          heading: "Shower Remodeling Options",
          items: ["Tub to shower conversion - Remove bathtub, install standalone shower", "Shower enclosure upgrade - New glass doors and frameless design", "Modern valve system - Upgrade to thermostatic or pressure-balance controls", "Rain shower head installation - Large overhead heads for luxury look", "Body spray addition - Multiple jets for massage functionality", "Tile or surround replacement - New walls and finishes", "Accessibility modifications - Grab bars, seating, walk-in accessibility", "Steam shower integration - Add sauna-like steam features"],
        },
        {
          heading: "Full Remodeling Includes",
          items: ["Plumbing design and layout planning", "Water supply rough-in or upgrades", "Drain and vent line modifications", "Valve body installation and testing", "Fixture and trim installation", "Waterproofing and moisture protection", "Coordination with tile contractors", "Final testing and inspection"],
        },
        {
          heading: "Transform Your Bathroom",
          paragraphs: ["A shower remodel can completely transform your bathroom experience. Whether you want a luxurious spa-like shower with rainfall heads and body jets, or a simple practical upgrade from an old bathtub, our team handles all the plumbing aspects. We work with other trades like tile setters to ensure a seamless renovation that meets code and performs perfectly."],
        }
      ]}
      faqs={[
        { q: "How long does a shower remodeling project take?", a: "Most shower remodels take 3-5 days for plumbing work, depending on the scope. If structural changes or extensive tiling is needed, the full project may take 1-2 weeks." },
        { q: "Can you convert a bathtub to a shower?", a: "Yes! We can remove a tub and install a shower with proper slope, drainage, and waterproofing. This is a popular upgrade that increases bathroom functionality." },
        { q: "Do I need a special valve for a steam shower?", a: "Yes, steam showers require commercial-grade valves and plumbing designed to handle high temperatures and moisture. We ensure proper installation to prevent damage." },
      ]}
    />
  );
}
