import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Drain Cleaning | Crystal Drain & Plumbing Toronto",
  description: "Professional kitchen drain cleaning across Toronto area. From slow drains to complete backups, we clear clogs using safe, effective methods.",
};

export default function Page() {
  return (
    <ServicePage
      title="Kitchen Drain Cleaning"
      heroImg="https://images.pexels.com/photos/87299/pexels-photo-87299.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Professional kitchen drain cleaning across Toronto area. From slow drains to complete backups, we clear clogs using safe, effective methods."
      sections={[
        {
          heading: "Common Kitchen Drain Problems",
          items: ["Slow kitchen sink drainage", "Complete backup where water won't drain at all", "Garbage disposal clog or backup", "Foul odors coming from the drain", "Water backing up into the other sink (double sink)", "Drain overflows when garbage disposal runs", "Recurring clogs even after cleaning"],
        },
        {
          heading: "Our Kitchen Drain Cleaning Methods",
          items: ["Hand-operated plumbing snake for minor clogs", "Heavy-duty motorized auger for tough blockages", "Hydro-jetting to blast through buildup (grease, soap scum, mineral deposits)", "Drain camera inspection to identify the clog location and cause", "Removal of foreign objects (toys, rings, utensils)"],
        },
        {
          heading: "Why Kitchen Drains Clog",
          paragraphs: ["Toronto area hard water minerals, grease buildup, food debris, soap scum, and scale from dishes create layers inside pipes. Unlike bathroom drains, kitchen drains handle grease and food particles that accumulate over time. We don't just clear the clog — we identify what's causing it so you can take preventive steps."],
        },
      ]}
      faqs={[
        { q: "What's causing my kitchen drain to smell bad?", a: "Foul odors usually indicate a buildup of decomposing food debris, grease, and bacteria in the pipe. A thorough drain cleaning removes the buildup and eliminates the odor. We may also recommend periodic enzyme treatments to prevent future odor problems." },
        { q: "Is your drain cleaning safe for my pipes?", a: "Yes. We use tried-and-true methods appropriate for your specific pipes. Hydro-jetting is safe for most modern pipes and is actually gentler than harsh chemical drain cleaners. We inspect your pipes first if there are any concerns." },
        { q: "Can you clean my drain without removing the garbage disposal?", a: "Usually yes. However, if the clog is within the disposal itself or immediately below it, removal for cleaning might be necessary to do the job properly." },
      ]}
    />
  );
}
