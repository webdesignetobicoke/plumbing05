import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewer Cleaning | Crystal Drain & Plumbing Wyoming",
  description: "Professional sewer cleaning services from Crystal Drain & Plumbing. We use advanced hydro jetting and electric snaking equipment to clear blockages and restore full flow.",
};

export default function Page() {
  return (
    <ServicePage
      title="Sewer Cleaning"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Professional sewer cleaning services from Crystal Drain & Plumbing. We use advanced hydro jetting and electric snaking equipment to clear blockages and restore full flow."
      sections={[
        {
          heading: "Signs Your Sewer Line Needs Cleaning",
          items: ["Multiple slow drains throughout the home", "Gurgling sounds from toilets or floor drains", "Sewage odors inside the home", "Frequent drain backups in lower-level fixtures", "Water backing up into tubs or showers when other drains are used"],
        },
        {
          heading: "Sewer Cleaning Methods We Use",
          items: ["Electric drain snaking — effective for most household blockages", "Hydro jetting — 3,500+ PSI water pressure blasts away grease, scale, and roots", "Root cutting — specialized blades clear root intrusion", "Camera inspection — before and after cleaning to verify results"],
        },
        {
          heading: "Preventive Sewer Maintenance",
          paragraphs: ["Annual sewer cleaning is one of the best investments Toronto area homeowners can make. Toronto's older neighborhoods have clay and cast iron sewer lines that are particularly susceptible to root intrusion and scale buildup. Regular cleaning prevents emergency backups and extends the life of your sewer system."],
        }
      ]}
      faqs={[
        { q: "How often should I have my sewer cleaned?", a: "For most homes, every 18-24 months is sufficient. Homes with large trees near the sewer line, older clay pipe systems, or a history of backups should consider annual cleaning. Ask about our Gold Leaf Club maintenance plan which includes annual plumbing inspections." },
        { q: "What is hydro jetting and is it safe for my pipes?", a: "Hydro jetting uses highly pressurized water (up to 3,500 PSI) to scour the inside of sewer pipes, removing grease, scale, and root intrusions. It is safe for most pipe materials including PVC, ABS, and cast iron, but we always camera inspect first to ensure the pipe is in suitable condition." },
      ]}
    />
  );
}
