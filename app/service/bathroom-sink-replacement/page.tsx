import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Sink Replacement | Crystal Drain & Plumbing Wyoming",
  description: "Ready for a new bathroom sink? Crystal Drain & Plumbing replaces bathroom sinks of all styles and sizes across Wyoming with professional, leak-free installation.",
};

export default function Page() {
  return (
    <ServicePage
      title="Bathroom Sink Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5fe57e63e518b54cd005_6-oJMeOF2fIjrFT24x6S6xkhjQZqca-KSmL3Prbc-5w.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Ready for a new bathroom sink? Crystal Drain & Plumbing replaces bathroom sinks of all styles and sizes across Wyoming with professional, leak-free installation."
      sections={[
        {
          heading: "When to Replace Your Bathroom Sink",
          items: ["Cracked, chipped, or severely stained sink that cannot be repaired", "Updating the bathroom with a new vanity or countertop", "Switching sink styles (e.g., drop-in to undermount)", "Old sink with persistent odors from worn enamel", "Complete bathroom remodel requiring new fixtures"],
        },
        {
          heading: "Our Replacement Process",
          items: ["Shut off water supply and disconnect existing faucet and drain", "Remove the old sink and clean the cabinet or vanity surface", "Install new sink with appropriate mounting hardware", "Connect supply lines, drain, and P-trap assembly", "Test for leaks and proper drain flow", "Caulk sink perimeter for a watertight, professional finish"],
        },
        {
          heading: "Brands We Install",
          items: ["TOTO", "Kohler", "American Standard", "Moen", "Pfister", "Delta", "Kraus", "Elkay"],
        }
      ]}
      faqs={[
        { q: "Can I replace just the sink without replacing the vanity?", a: "Yes, in most cases. As long as the new sink's mounting requirements match your existing vanity or countertop, the sink can be replaced independently. Our technicians will assess compatibility during their service visit." },
      ]}
    />
  );
}
