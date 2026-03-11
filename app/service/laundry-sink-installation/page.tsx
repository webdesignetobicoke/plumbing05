import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laundry Sink Installation | Crystal Drain & Plumbing Toronto",
  description: "Professional laundry sink installation for laundry rooms across Toronto. Deep basin sinks perfect for hand washing.",
};

export default function Page() {
  return (
    <ServicePage
      title="Laundry Sink Installation"
      heroImg="https://images.pexels.com/photos/220612/pexels-photo-220612.jpeg"
      parentCategory={{ label: "Plumbing Services", href: "/service-type/general-plumbing" }}
      tagline="Professional laundry sink installation for laundry rooms across Toronto. Deep basin sinks perfect for hand washing."
      sections={[
        {
          heading: "Types of Laundry Sinks We Install",
          items: ["Single basin laundry sinks - Deep bowl for soaking and hand washing", "Double basin sinks - Two compartments for separate tasks", "Freestanding pedestals - Decorative standalone options", "Wall-mounted sinks - Space-saving installations", "Cabinet mount sinks - Sink with storage beneath", "Slop sinks - Larger commercial-style three or four compartment options", "Utility sink stations - Sink with work counter space", "Integrated systems - Sink with attached washer feed and drain hookups"],
        },
        {
          heading: "Professional Installation Includes",
          items: ["Assessment of laundry room plumbing layout", "Hot and cold water supply connections", "Drain line installation with proper slope", "Trap and vent line connections", "Secure mounting and leveling of sink", "Caulking and sealing around edges", "Washing machine hookup connections if needed", "Testing for leaks and proper operation"],
        },
        {
          heading: "Perfect for Laundry Rooms",
          paragraphs: ["Laundry sinks provide a dedicated space for hand-washing delicate items, soaking clothes, or cleaning. Deep basins are perfect for filling with water. Our team installs your laundry sink with proper plumbing connections to both hot and cold water, ensuring you have the flexibility and convenience you need. We can also integrate washing machine hookups if you plan to add or replace your washer."],
        }
      ]}
      faqs={[
        { q: "Should my laundry sink have hot and cold water?", a: "Yes, both hot and cold water are beneficial. Hot water is great for soaking and sanitizing, while cold water is used for regular washing. Most modern laundry sinks have both connections." },
        { q: "Can you connect a washing machine drain to the laundry sink?", a: "Yes, we can tie the washer drain into the laundry sink plumbing system, which drains to the main sewer or septic. This saves space compared to a separate drain line." },
        { q: "What's the best location for a laundry sink?", a: "Laundry sinks work best next to or within reach of the washer. Close proximity to existing plumbing lines makes installation easier and more affordable." },
      ]}
    />
  );
}
