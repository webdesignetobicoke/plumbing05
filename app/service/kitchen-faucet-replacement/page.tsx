import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Faucet Replacement | Crystal Drain & Plumbing Toronto",
  description: "Ready to upgrade your kitchen faucet? Crystal Drain & Plumbing replaces kitchen faucets of all styles across Toronto area with professional, leak-free installation.",
};

export default function Page() {
  return (
    <ServicePage
      title="Kitchen Faucet Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5ff5548041b53d4a054d_PLzMEJcdBCghWc9XKQ-QcUXsXB3-8DT8k-O7hGxYIJE.jpeg"
      parentCategory={{ label: "Kitchen Plumber", href: "/service-type/kitchen-plumber" }}
      tagline="Ready to upgrade your kitchen faucet? Crystal Drain & Plumbing replaces kitchen faucets of all styles across Toronto area with professional, leak-free installation."
      sections={[
        {
          heading: "Types of Kitchen Faucets We Install",
          items: ["Single-handle pull-down faucets", "Pull-out spray faucets", "Two-handle bridge faucets", "Commercial-style high-arc faucets", "Touchless/motion-sensor faucets", "Pot filler faucets", "Bar and prep sink faucets"],
        },
        {
          heading: "Why Professional Installation Matters",
          paragraphs: ["Working under kitchen sinks in tight spaces with often-corroded shut-off valves requires experience. Crystal Drain & Plumbing technicians know how to handle stubborn old connections, corroded supply lines, and difficult mounting nuts without damaging your sink or cabinet. We also replace shut-off valves and supply lines as part of most faucet replacements."],
        },
        {
          heading: "Top Brands We Install",
          items: ["Moen", "Delta", "Kohler", "American Standard", "Grohe", "Kraus", "Rohl", "Brizo"],
        }
      ]}
      faqs={[
        { q: "How long does a kitchen faucet replacement take?", a: "Most kitchen faucet replacements take 45-90 minutes. If the shut-off valves or supply lines also need replacement, add another 30-45 minutes. We typically recommend replacing these items when they are 10+ years old to prevent future failures." },
      ]}
    />
  );
}
