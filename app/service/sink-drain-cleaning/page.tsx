import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sink Drain Cleaning | Crystal Drain & Plumbing Wyoming",
  description: "Slow sink drain? Crystal Drain & Plumbing clears kitchen and bathroom sink drains quickly across Wyoming. Same-day service available.",
};

export default function Page() {
  return (
    <ServicePage
      title="Sink Drain Cleaning"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc6005f413258b329ae7d7_k86O_G7TNFDdC_ma5WVjNVqlfiSIZD4rqlVM.jpeg"
      parentCategory={{ label: "Clogged Drains", href: "/service-type/clogged-drains" }}
      tagline="Slow sink drain? Crystal Drain & Plumbing clears kitchen and bathroom sink drains quickly across Wyoming. Same-day service available."
      sections={[
        {
          heading: "Common Causes of Sink Drain Clogs",
          items: ["Bathroom sinks: Hair, soap scum, and toothpaste buildup", "Kitchen sinks: Grease, food particles, and soap accumulation", "Laundry sinks: Lint and detergent buildup", "All sinks: Mineral scale from Toronto's hard water narrowing pipe interior"],
        },
        {
          heading: "Our Sink Drain Cleaning Methods",
          items: ["Manual P-trap cleaning for accessible blockages", "Electric drain snake for blockages deeper in the drain line", "Hydro jetting for stubborn grease and scale", "Camera inspection for recurring sink drain clogs"],
        },
        {
          heading: "Same-Day Service",
          paragraphs: ["A slow or blocked sink drain is a daily inconvenience. Crystal Drain & Plumbing prioritizes drain cleaning calls and offers same-day service across our Wyoming service area. Most sink drain clogs are resolved in under an hour."],
        }
      ]}
      faqs={[
        { q: "Can I use chemical drain cleaners?", a: "We advise against regular use of chemical drain cleaners. While they can temporarily clear organic clogs, they are corrosive to older metal pipes, can damage PVC pipe joints over time, and are harmful to septic systems. Professional drain cleaning removes the entire clog and is safer for your plumbing system." },
      ]}
    />
  );
}
