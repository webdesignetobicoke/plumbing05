import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utility Sink Installation | Crystal Drain & Plumbing Toronto",
  description: "Professional utility sink installation for laundry rooms, basements, and garages across Toronto.",
};

export default function Page() {
  return (
    <ServicePage
      title="Utility Sink Installation"
      heroImg="https://images.pexels.com/photos/3721272/pexels-photo-3721272.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Plumbing Services", href: "/service-type/general-plumbing" }}
      tagline="Professional utility sink installation for laundry rooms, basements, and garages across Toronto."
      sections={[
        {
          heading: "Types of Utility Sinks We Install",
          items: ["Freestanding utility sinks - Portable options on wheels or legs", "Wall-mounted utility sinks - Space-saving designs mounted directly to the wall", "Cabinet utility sinks - Sink with storage underneath for supplies", "Drop-in utility sinks - Sink mounted on a countertop", "Laundry sinks - Deeper basins for hand-washing clothes", "Slop sinks - Large commercial-style sinks for heavy-duty washing", "Multi-basin sinks - Multiple compartments for different uses", "Corner utility sinks - Compact designs for tight spaces"],
        },
        {
          heading: "Professional Installation Includes",
          items: ["Assessment of existing plumbing and location", "Hot and cold water supply line connections", "Drain line installation with proper slope", "Trap and vent line installation", "Secure mounting and leveling of sink", "Caulking and sealing around edges", "Testing for leaks under full water pressure", "Connection to wall cabinet or faucet installation"],
        },
        {
          heading: "Perfect for Laundry Rooms and Basements",
          paragraphs: ["Utility sinks are perfect for laundry rooms, basements, garages, and workshops. They provide a convenient place to hand-wash delicate items, clean tools, or perform maintenance tasks. Our team will install your utility sink with proper plumbing connections and ensure it's ready for years of reliable use. We handle everything from rough-in plumbing to final fixture installation."],
        }
      ]}
      faqs={[
        { q: "How long does utility sink installation take?", a: "Most utility sink installations take 2-4 hours depending on the complexity of the plumbing rough-in. Wall-mounted installations are typically faster than cabinet or freestanding options." },
        { q: "Do I need hot and cold water at my utility sink?", a: "It depends on your needs. Most utility sinks benefit from both hot and cold water connections for flexibility. We can install either or both based on your requirements." },
        { q: "What's the best location for a utility sink?", a: "Utility sinks work best near existing plumbing lines to minimize installation costs. Laundry rooms, basements near main drain lines, and garages are common locations. We'll assess your space and recommend the best option." },
      ]}
    />
  );
}
