import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Plumbing Remodeling | Crystal Drain & Plumbing Toronto",
  description: "Crystal Drain & Plumbing handles all plumbing aspects of kitchen remodels — from relocating sink drains to new dishwasher connections and pot filler installations.",
};

export default function Page() {
  return (
    <ServicePage
      title="Kitchen Plumbing Remodeling"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5ff5548041b53d4a054d_PLzMEJcdBCghWc9XKQ-QcUXsXB3-8DT8k-O7hGxYIJE.jpeg"
      parentCategory={{ label: "Kitchen Plumber", href: "/service-type/kitchen-plumber" }}
      tagline="Crystal Drain & Plumbing handles all plumbing aspects of kitchen remodels — from relocating sink drains to new dishwasher connections and pot filler installations."
      sections={[
        {
          heading: "Kitchen Plumbing Remodel Services",
          items: ["Sink relocation — moving drain and supply lines to new sink location", "Island sink plumbing — running drain and supply to a kitchen island", "Pot filler installation above the range", "Dishwasher connection for first-time installation", "Garbage disposal upgrade or new installation", "Ice maker water line installation", "Whole-house water filtration system installation", "Gas line installation for gas ranges or cooktops"],
        },
        {
          heading: "Plan the Plumbing First",
          paragraphs: ["The most cost-effective time to move plumbing is before cabinets and flooring are installed. Crystal Drain & Plumbing works with your kitchen designer or general contractor to plan rough-in locations that minimize cost while achieving your desired kitchen layout."],
        },
        {
          heading: "Coordination with Your Remodel Team",
          paragraphs: ["We're experienced working alongside kitchen designers, cabinet installers, and general contractors. We communicate proactively about rough-in locations, access requirements, and scheduling to keep your remodel on track."],
        }
      ]}
      faqs={[
        { q: "How much does it cost to move a kitchen sink?", a: "Moving a kitchen sink involves rerouting the drain line, vent, and supply lines — the cost varies significantly based on how far it's being moved and whether it's moving across the room or just a few inches. Contact Crystal Drain & Plumbing for a free estimate based on your specific kitchen layout." },
      ]}
    />
  );
}
