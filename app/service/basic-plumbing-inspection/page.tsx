import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic Plumbing Inspection | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing's basic plumbing inspection helps Toronto area homeowners identify potential problems before they become costly emergencies. Included free with Gold Leaf Club membership.",
};

export default function Page() {
  return (
    <ServicePage
      title="Basic Plumbing Inspection"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5fc55d1f6ff2fb2d151a_zt4RBYV2V3aR0Mnh6IYnGEQYkdg7YP3mH8kP4_CCSc0.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Crystal Drain & Plumbing's basic plumbing inspection helps Toronto area homeowners identify potential problems before they become costly emergencies. Included free with Gold Leaf Club membership."
      sections={[
        {
          heading: "What's Included in a Basic Plumbing Inspection",
          items: ["Inspect all accessible water supply lines for leaks or corrosion", "Check all drain lines for slow drains or signs of blockage", "Inspect water heater for leaks, corrosion, and proper operation", "Test water pressure at key fixtures", "Check all faucets and toilets for leaks and proper function", "Inspect garbage disposal operation", "Check under-sink shut-off valves for corrosion and function", "Inspect washing machine hoses and connections", "Check exterior hose bibs for leaks and proper winter prep"],
        },
        {
          heading: "Why Annual Inspections Matter",
          paragraphs: ["Toronto's hard water, freeze-thaw cycles, and extreme temperature swings are tough on plumbing systems. An annual inspection by Crystal Drain & Plumbing catches minor issues — a corroding supply line, a slow drain, a weakening washing machine hose — before they turn into flooding emergencies.", "Gold Leaf Club members receive a yearly plumbing inspection as part of their $36.99/month membership, along with 15% off all services and priority scheduling."],
        },
        {
          heading: "Home Buyers and Sellers",
          paragraphs: ["A plumbing inspection is an excellent investment before buying a home or listing a property for sale. Understanding the condition of the plumbing system gives buyers confidence and helps sellers address issues before they become negotiating points."],
        }
      ]}
      faqs={[
        { q: "How long does a plumbing inspection take?", a: "A basic plumbing inspection of a standard single-family home typically takes 45-90 minutes. Larger homes or homes with complex plumbing systems may take longer. We'll provide a written summary of our findings and recommendations." },
        { q: "Is a plumbing inspection included with the Gold Leaf Club?", a: "Yes! Gold Leaf Club members at $36.99/month receive an annual plumbing inspection, water heater tank flush, 15% off all services, priority scheduling, and more. It's one of the best ways to protect your home's plumbing system year-round." },
      ]}
    />
  );
}
