import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Sink Replacement | Crystal Drain & Plumbing Toronto",
  description: "Ready for a new kitchen sink? Crystal Drain & Plumbing replaces kitchen sinks of all types and sizes across Toronto area with professional installation.",
};

export default function Page() {
  return (
    <ServicePage
      title="Kitchen Sink Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5ff5548041b53d4a054d_PLzMEJcdBCghWc9XKQ-QcUXsXB3-8DT8k-O7hGxYIJE.jpeg"
      parentCategory={{ label: "Kitchen Plumber", href: "/service-type/kitchen-plumber" }}
      tagline="Ready for a new kitchen sink? Crystal Drain & Plumbing replaces kitchen sinks of all types and sizes across Toronto area with professional installation."
      sections={[
        {
          heading: "When to Replace Your Kitchen Sink",
          items: ["Cracked, chipped, or severely stained sink", "Rusting stainless steel that cannot be restored", "Upgrading from drop-in to undermount style", "Kitchen remodel requiring a new sink to match new countertop", "Switching to a deeper or larger sink for more utility"],
        },
        {
          heading: "Our Replacement Process",
          items: ["Shut off water and disconnect faucet, spray head, and disposal", "Remove the old sink and clean the countertop surface", "Install new sink with appropriate mounting hardware and clips", "Re-install or install new faucet", "Connect drain, P-trap, and garbage disposal", "Test for leaks and proper drain flow", "Caulk perimeter for a watertight, clean finish"],
        },
        {
          heading: "Brands We Install",
          items: ["Kohler", "Moen", "Blanco", "Kraus", "Elkay", "Ruvati", "American Standard", "Franke"],
        }
      ]}
      faqs={[
        { q: "Do I need a new faucet when I replace my kitchen sink?", a: "Not necessarily, but it's a good time to upgrade if your faucet is old. Some faucets will not fit the hole configuration of a new sink, so we always check compatibility. If you're switching from a 3-hole to a 1-hole sink, a new single-hole faucet will be required." },
      ]}
    />
  );
}
