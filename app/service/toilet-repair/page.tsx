import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toilet Repair | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing provides fast, affordable toilet repairs across Wyoming. We fix running toilets, leaks, weak flushes, and more.",
};

export default function Page() {
  return (
    <ServicePage
      title="Toilet Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc60a4bfea45895e574b2b_M78a0zU3TygXwi6M3JXY-LNi_qqWb1n6VgtuQoQNj-w.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Crystal Drain & Plumbing provides fast, affordable toilet repairs across Wyoming. We fix running toilets, leaks, weak flushes, and more."
      sections={[
        {
          heading: "Common Toilet Problems We Fix",
          items: ["Running toilet — wasting hundreds of gallons per day", "Toilet leaking at the base — failed wax ring", "Weak or incomplete flush — flapper, flush valve, or fill valve issue", "Toilet rocking — loose floor bolts or failed wax ring", "Toilet won't flush — handle, chain, or flapper problem", "Phantom flushing — toilet refills randomly", "Condensation on tank (common in Toronto's dry climate)"],
        },
        {
          heading: "Simple Repairs Done Right",
          paragraphs: ["Most toilet repairs involve replacing inexpensive tank components — flappers, fill valves, flush valves, and trip levers. These parts cost $10-30 but require knowing which component is causing the problem. Crystal Drain & Plumbing technicians diagnose the correct issue on the first visit and complete the repair the same day."],
        },
        {
          heading: "A Running Toilet Is Costing You Money",
          paragraphs: ["A continuously running toilet can waste 200+ gallons of water per day — translating to $50-100 per month in wasted water costs depending on your local water rates. Crystal Drain & Plumbing can fix most running toilets in under an hour."],
        }
      ]}
      faqs={[
        { q: "How do I know if my toilet is leaking at the wax ring?", a: "Signs of a failed wax ring include water pooling at the base of the toilet after flushing, soft flooring around the toilet base, or sewer odor. If you push on the toilet and it rocks, the flange bolts may be loose or the wax ring may have failed. Call Crystal Drain & Plumbing to inspect and replace the wax ring before subfloor damage occurs." },
      ]}
    />
  );
}
