import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hydro Jetting | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing uses high-pressure hydro jetting to blast through the toughest drain and sewer clogs — grease, scale, roots, and more — across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Hydro Jetting"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc6005f413258b329ae7d7_k86O_G7TNFDdC_ma5WVjNVqlfiSIZD4rqlVM.jpeg"
      parentCategory={{ label: "Clogged Drains", href: "/service-type/clogged-drains" }}
      tagline="Crystal Drain & Plumbing uses high-pressure hydro jetting to blast through the toughest drain and sewer clogs — grease, scale, roots, and more — across Wyoming."
      sections={[
        {
          heading: "What Is Hydro Jetting?",
          paragraphs: ["Hydro jetting uses highly pressurized water — up to 3,500 PSI — delivered through a specialized nozzle inside your drain or sewer line. The water scours the pipe interior 360 degrees, breaking up and flushing out grease accumulations, mineral scale, root masses, and other buildup that a standard snake cannot remove."],
        },
        {
          heading: "When Hydro Jetting Is the Right Solution",
          items: ["Heavy grease buildup in kitchen drain lines", "Mature root intrusion in sewer lines", "Mineral scale (hard water deposits) reducing pipe capacity", "Stubborn recurring blockages that snake treatments only temporarily clear", "Pre-lining pipe preparation to ensure a clean surface for CIPP lining", "Commercial drain maintenance programs"],
        },
        {
          heading: "Safe for Most Pipe Types",
          paragraphs: ["Hydro jetting is safe for PVC, ABS, copper, cast iron, and clay sewer pipe when the pipe is in good structural condition. We always perform a camera inspection before hydro jetting to confirm the pipe can withstand the pressure. We do not hydro jet compromised, cracked, or severely corroded pipe."],
        }
      ]}
      faqs={[
        { q: "Is hydro jetting better than snaking?", a: "For simple hair or food clogs, a snake is often sufficient and faster. But for grease buildup, root intrusion, scale, or recurring clogs that snaking only temporarily clears, hydro jetting is far more effective because it cleans the entire pipe interior rather than just punching a hole through the blockage." },
        { q: "How often should I have my drains hydro jetted?", a: "For residential drain maintenance, every 1-2 years is typically sufficient. Commercial kitchens with heavy grease production may benefit from quarterly or annual jetting. Homes with trees over the sewer line may need annual root cutting and jetting." },
      ]}
    />
  );
}
