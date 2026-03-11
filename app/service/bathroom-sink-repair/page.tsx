import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Sink Repair | Crystal Drain & Plumbing Wyoming",
  description: "Leaking bathroom sink? Crystal Drain & Plumbing provides fast, affordable bathroom sink repair services across Wyoming for all types of sinks and faucets.",
};

export default function Page() {
  return (
    <ServicePage
      title="Bathroom Sink Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5fe57e63e518b54cd005_6-oJMeOF2fIjrFT24x6S6xkhjQZqca-KSmL3Prbc-5w.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Leaking bathroom sink? Crystal Drain & Plumbing provides fast, affordable bathroom sink repair services across Wyoming for all types of sinks and faucets."
      sections={[
        {
          heading: "Common Bathroom Sink Problems We Fix",
          items: ["Dripping or leaking faucet", "Leak under the sink from supply lines or P-trap", "Cracked or chipped sink basin", "Slow or clogged sink drain", "Faulty drain stopper or pop-up assembly", "Low water pressure at the faucet"],
        },
        {
          heading: "Quick Diagnosis, Same-Day Repairs",
          paragraphs: ["Most bathroom sink repairs are completed in a single visit. Our technicians carry common repair parts on their service vehicles, including cartridges, washers, O-rings, P-trap assemblies, and supply lines. We'll diagnose the issue, give you an upfront price, and complete the repair the same day in most cases."],
        },
        {
          heading: "When Repair Turns Into Replacement",
          paragraphs: ["If your sink basin is cracked, severely stained, or structurally compromised, replacement may be more cost-effective than repair. Crystal Drain & Plumbing gives you an honest assessment and will recommend the option that makes the most sense for your budget."],
        }
      ]}
      faqs={[
        { q: "Why does my bathroom sink drain slowly?", a: "Slow bathroom sink drains are most commonly caused by hair and soap scum buildup in the drain or P-trap. We can clear the blockage quickly and restore full flow. If the slow drain persists after cleaning, the issue may be further down the drain line." },
      ]}
    />
  );
}
