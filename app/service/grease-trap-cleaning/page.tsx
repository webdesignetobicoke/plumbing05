import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grease Trap Cleaning | Crystal Drain & Plumbing Toronto",
  description: "Professional grease trap cleaning and maintenance for restaurants and commercial properties across Toronto.",
};

export default function Page() {
  return (
    <ServicePage
      title="Grease Trap Cleaning"
      heroImg="https://images.pexels.com/photos/2815899/pexels-photo-2815899.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Commercial Plumbing", href: "/service-type/commercial-plumbing" }}
      tagline="Professional grease trap cleaning and maintenance for restaurants and commercial properties across Toronto."
      sections={[
        {
          heading: "Why Grease Trap Cleaning is Essential",
          items: ["Prevents drain clogs and backups from accumulated grease", "Maintains compliance with Toronto environmental regulations", "Reduces foul odors from decomposing grease", "Extends the life of your plumbing system", "Protects municipal sewer lines from blockages", "Prevents costly drain cleaning emergencies", "Reduces pest problems attracted to grease buildup", "Improves overall kitchen sanitation"],
        },
        {
          heading: "Professional Grease Trap Service",
          items: ["Complete trap pumping and removal of accumulated grease", "Basin and interior wall cleaning", "Drain line flushing and blockage removal", "Bacteria enzyme treatment for ongoing maintenance", "Disposal of waste according to environmental regulations", "Documentation for regulatory compliance", "Inspection for damage or corrosion", "Maintenance scheduling recommendations"],
        },
        {
          heading: "Regular Maintenance Schedule",
          paragraphs: ["Most commercial kitchens require grease trap cleaning every 1-3 months depending on volume. High-volume restaurants may need monthly service. Our team provides regular pumping and maintains your trap according to Toronto environmental standards, ensuring your kitchen stays clean and drain lines stay clear. We handle everything properly and document service for compliance records."],
        }
      ]}
      faqs={[
        { q: "How often should my grease trap be cleaned?", a: "Most commercial kitchens need cleaning every 1-3 months. We evaluate your usage and recommend a schedule. High-volume establishments may need monthly service." },
        { q: "What happens if a grease trap isn't cleaned?", a: "Grease accumulates and hardens, causing drain backups, clogs, and backflow into the kitchen. This creates sanitation problems and can result in regulatory violations." },
        { q: "Is grease trap cleaning required by law?", a: "Yes, Toronto regulations require commercial establishments with food service to maintain grease traps. Proper maintenance is both a legal requirement and essential for kitchen operations." },
      ]}
    />
  );
}
