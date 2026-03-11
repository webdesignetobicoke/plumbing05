import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toilet Drain Cleaning | Crystal Drain & Plumbing Wyoming",
  description: "Clogged toilet that won't clear with a plunger? Crystal Drain & Plumbing clears toilet drain blockages quickly across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Toilet Drain Cleaning"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc6005f413258b329ae7d7_k86O_G7TNFDdC_ma5WVjNVqlfiSIZD4rqlVM.jpeg"
      parentCategory={{ label: "Clogged Drains", href: "/service-type/clogged-drains" }}
      tagline="Clogged toilet that won't clear with a plunger? Crystal Drain & Plumbing clears toilet drain blockages quickly across Wyoming."
      sections={[
        {
          heading: "When to Call a Plumber for a Clogged Toilet",
          paragraphs: ["If your toilet is overflowing, has been plunged multiple times without success, or if multiple drains in your home are slow simultaneously (indicating a main line blockage), it's time to call Crystal Drain & Plumbing rather than attempting further DIY solutions."],
        },
        {
          heading: "Tools We Use",
          items: ["Toilet auger (closet snake) — specifically designed for toilet drain clearing", "Electric drain machine for blockages in the drain line beyond the toilet", "Hydro jetting for main sewer line root intrusion causing toilet backup", "Camera inspection to identify foreign objects or structural problems"],
        },
        {
          heading: "Recurring Toilet Clogs",
          paragraphs: ["If your toilet clogs repeatedly, the problem is usually a low-flow toilet with insufficient flushing power, a partial blockage in the drain or vent line, or an item lodged in the trap that a plunger can't dislodge. A camera inspection can identify the root cause."],
        }
      ]}
      faqs={[
        { q: "Why does my toilet keep clogging?", a: "Recurring toilet clogs are most commonly caused by: (1) Low-flow toilets from the 1990s that lack sufficient flushing power, (2) Flushing non-flushable items (wipes, paper towels, feminine products), (3) A partial blockage in the drain line that allows most waste through but catches anything extra, or (4) A venting problem reducing drain suction." },
      ]}
    />
  );
}
