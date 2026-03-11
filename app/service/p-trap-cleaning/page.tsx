import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "P-Trap Cleaning | Crystal Drain & Plumbing Wyoming",
  description: "Slow drain or sewer smell? Crystal Drain & Plumbing provides professional P-trap cleaning services for sinks, showers, and floor drains across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="P-Trap Cleaning"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc6005f413258b329ae7d7_k86O_G7TNFDdC_ma5WVjNVqlfiSIZD4rqlVM.jpeg"
      parentCategory={{ label: "Clogged Drains", href: "/service-type/clogged-drains" }}
      tagline="Slow drain or sewer smell? Crystal Drain & Plumbing provides professional P-trap cleaning services for sinks, showers, and floor drains across Wyoming."
      sections={[
        {
          heading: "Why P-Traps Need Cleaning",
          paragraphs: ["P-traps collect hair, grease, soap scum, toothpaste, food particles, and other debris over time. This buildup gradually restricts flow and can harbor bacteria that causes drain odors. Regular P-trap cleaning keeps drains flowing freely and eliminates organic odors before they become persistent."],
        },
        {
          heading: "P-Trap Cleaning Vs. Replacement",
          paragraphs: ["For plastic PVC or ABS P-traps, cleaning is straightforward — we disassemble the P-trap, remove buildup, clean the pipe walls, and reassemble with new washers. For older chrome or brass metal P-traps that are corroded or thin-walled, we typically recommend replacement at the same time to prevent imminent leaks."],
        },
        {
          heading: "Locations We Clean",
          items: ["Bathroom sink P-traps", "Kitchen sink P-traps", "Shower and tub P-traps", "Floor drain P-traps", "Laundry standpipe P-traps"],
        }
      ]}
      faqs={[
        { q: "How often should P-traps be cleaned?", a: "Kitchen P-traps should be inspected and cleaned annually due to grease accumulation. Bathroom P-traps depend on usage and hair generation — typically every 6-12 months. If you notice slowing drains or odors, it's time for a cleaning." },
      ]}
    />
  );
}
