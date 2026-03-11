import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toilet Replacement | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing replaces toilets of all makes and models across Wyoming. We handle removal, disposal, and installation of your new toilet.",
};

export default function Page() {
  return (
    <ServicePage
      title="Toilet Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc60a4bfea45895e574b2b_M78a0zU3TygXwi6M3JXY-LNi_qqWb1n6VgtuQoQNj-w.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Crystal Drain & Plumbing replaces toilets of all makes and models across Wyoming. We handle removal, disposal, and installation of your new toilet."
      sections={[
        {
          heading: "When to Replace Your Toilet",
          items: ["Toilet is 20-25+ years old and repairs are becoming frequent", "Visible cracks in the porcelain tank or bowl", "Toilet uses 3.5-5 gallons per flush (pre-1994 models) — modern toilets use 1.28 gpf", "Toilet no longer matches updated bathroom aesthetics", "Toilet height is uncomfortable — consider ADA comfort height models", "Persistent wobbling or floor damage around the base"],
        },
        {
          heading: "Our Replacement Process",
          items: ["Shut off water supply and remove all water from tank and bowl", "Disconnect water supply line", "Remove old toilet and dispose of it responsibly", "Inspect closet flange and subfloor condition", "Install new wax ring and set new toilet to floor flange", "Connect supply line and adjust fill valve for proper water level", "Test flush and check for leaks at base and supply connection"],
        },
        {
          heading: "Toilets We Recommend",
          items: ["TOTO Drake II — Excellent performance, widely recommended by plumbers", "Kohler Cimarron — Comfort height, powerful flush", "American Standard Champion 4 — Best clog-prevention", "Glacier Bay Dual-Flush — Budget-friendly water savings"],
        }
      ]}
      faqs={[
        { q: "What is a comfort height toilet?", a: "Comfort height (also called ADA or chair height) toilets measure 17-19 inches from floor to seat, compared to standard height at 14-15 inches. Many homeowners find comfort height easier to use, especially adults 6' and taller, those with mobility issues, or anyone with knee or back problems." },
      ]}
    />
  );
}
