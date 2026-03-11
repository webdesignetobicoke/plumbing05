import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main Line Drain Cleaning | Crystal Drain & Plumbing Toronto",
  description: "Professional main line drain cleaning across Toronto. Emergency sewer line repairs and root removal services available 24/7.",
};

export default function Page() {
  return (
    <ServicePage
      title="Main Line Drain Cleaning"
      heroImg="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg"
      parentCategory={{ label: "Clogged Drains", href: "/service-type/clogged-drains" }}
      tagline="Professional main line drain cleaning across Toronto area. Emergency sewer line repairs and root removal services available 24/7."
      sections={[
        {
          heading: "Common Main Line Drain Problems",
          items: ["Multiple drains backing up throughout the house", "Sewage backing up into toilets or shower", "Gurgling sounds from drains and toilets", "Raw sewage smell in your yard or basement", "Wet patches or soft spots in your lawn", "Tree roots penetrating the main line", "Collapsed or broken sewer pipes", "Slow drainage affecting the entire home"],
        },
        {
          heading: "Our Main Line Drain Cleaning Methods",
          items: ["Heavy-duty motorized auger for deep clogs", "Hydro-jetting to remove tree roots and buildup", "Drain camera inspection to locate blockages and damage", "Root removal and extraction from main sewer lines", "Professional video inspection reports", "Trenchless pipe repair options when available"],
        },
        {
          heading: "Why Main Lines Need Professional Care",
          paragraphs: ["The main sewer line is the central drainage system for your entire home. When it clogs or fails, every drain in the house is affected. Common causes include tree root intrusion (especially in spring and fall), mineral buildup, grease accumulation, and aging pipes. These problems require professional equipment and expertise to resolve safely and effectively."],
        },
      ]}
      faqs={[
        { q: "How do I know if my main line is clogged?", a: "Signs include multiple drains backing up simultaneously, sewage smell in your yard, wet patches on your lawn, gurgling toilets and drains, and raw sewage in your basement. If you notice any of these, contact us immediately for a diagnosis." },
        { q: "Can tree roots really damage a sewer line?", a: "Yes. Tree roots are attracted to moisture and can penetrate even small cracks in sewer pipes. Once inside, they grow and expand, causing blockages and pipe damage. Toronto's spring and fall growth seasons are peak times for root-related problems." },
        { q: "What's the difference between hydro-jetting and a snake for the main line?", a: "A motorized snake breaks through the immediate clog but may not remove all buildup. Hydro-jetting uses high-pressure water (up to 4000 PSI) to completely clear the line, removing roots, grease, mineral deposits, and debris. It's the most thorough cleaning available." },
        { q: "How much does main line cleaning cost?", a: "Costs depend on the clog location, severity, and required equipment. A camera inspection helps us provide an accurate estimate. Emergency service fees apply for after-hours calls." },
      ]}
    />
  );
}
