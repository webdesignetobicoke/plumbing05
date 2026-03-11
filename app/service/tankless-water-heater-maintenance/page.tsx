import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tankless Water Heater Maintenance | Crystal Drain & Plumbing Wyoming",
  description: "Regular maintenance keeps your tankless water heater running efficiently for 20+ years. Crystal Drain & Plumbing offers comprehensive annual service visits across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Tankless Water Heater Maintenance"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Regular maintenance keeps your tankless water heater running efficiently for 20+ years. Crystal Drain & Plumbing offers comprehensive annual service visits across Wyoming."
      sections={[
        {
          heading: "What's Included in Our Tankless Maintenance Service",
          items: ["Descaling / flushing the heat exchanger", "Cleaning the inlet filter screen", "Inspecting the burner and igniter assembly", "Checking gas pressure and connections", "Inspecting the venting system for blockages", "Testing the temperature and pressure relief valve", "Checking flow rate and activation threshold", "Updating firmware on smart units if applicable"],
        },
        {
          heading: "Why Annual Maintenance Matters in Wyoming",
          paragraphs: ["Toronto's water is notoriously hard, containing high levels of calcium and magnesium that deposit scale inside your tankless water heater's heat exchanger over time. Left untreated, this scale reduces efficiency, restricts flow, and can ultimately destroy the heat exchanger — costing thousands to replace.", "An annual descaling service typically takes 1-2 hours and costs a fraction of a heat exchanger replacement. Gold Leaf Club members receive $100 off their annual tankless water heater maintenance service."],
        },
        {
          heading: "Gold Leaf Club Members Save $100",
          items: ["Gold Leaf Club members receive $100 off their annual tankless water heater maintenance", "Includes priority scheduling — no waiting weeks for an appointment", "Backed by our doubled labor warranty"],
        }
      ]}
      faqs={[
        { q: "How do I know if my tankless water heater needs to be descaled?", a: "Signs of heavy scale buildup include reduced hot water output, longer wait times for hot water, error codes, and a noticeable decrease in energy efficiency. If you've never had your unit serviced and have lived in Wyoming for over a year, it's time to schedule a maintenance visit." },
        { q: "Can I descale my tankless water heater myself?", a: "While it's possible to DIY with a descaling kit, improper procedures can damage components. Crystal Drain & Plumbing's technicians are trained to service all major brands safely and thoroughly, and can identify other developing issues during the service visit." },
      ]}
    />
  );
}
