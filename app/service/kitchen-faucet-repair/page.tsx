import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Faucet Repair | Crystal Drain & Plumbing Toronto",
  description: "Fast kitchen faucet repair across Toronto area. From dripping faucets to low water pressure issues, we diagnose and fix all problems.",
};

export default function Page() {
  return (
    <ServicePage
      title="Kitchen Faucet Repair"
      heroImg="https://images.pexels.com/photos/2455119/pexels-photo-2455119.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Kitchen Plumber", href: "/service-type/kitchen-plumber" }}
      tagline="Fast kitchen faucet repair across Toronto area. From dripping faucets to low water pressure issues, we diagnose and fix all problems."
      sections={[
        {
          heading: "Common Kitchen Faucet Problems We Fix",
          items: ["Dripping or leaking faucet (the most common problem)", "Low water pressure from faucet outlet", "Water leaking from the base of the faucet", "Sprayer not working or leaking", "Handle is loose or won't stay in position", "Faucet won't turn on/off properly", "Discolored or sediment-filled water from faucet", "Unusual noises when faucet is used"],
        },
        {
          heading: "Same-Day Faucet Repairs",
          paragraphs: ["Most kitchen faucet repairs can be completed in a single visit. Our technicians carry a wide range of faucet cartridges, washers, supply lines, and other common repair parts. We can often repair your faucet on the spot without needing to replace it. A dripping faucet typically means a $20-100 repair rather than a $300+ replacement."],
        },
        {
          heading: "When We Recommend Replacement",
          paragraphs: ["If your faucet is 15+ years old, has corrosion damage, or requires multiple expensive repairs, we'll recommend replacement instead. Crystal Drain & Plumbing stocks quality faucets at competitive prices and handles the complete removal and installation. We'll help you choose the right faucet for your kitchen and budget."],
        },
      ]}
      faqs={[
        { q: "Why is my kitchen faucet dripping?", a: "Most commonly, a worn-out cartridge or washers inside the faucet valve cause dripping. We can usually fix this with an inexpensive cartridge replacement or seal repair." },
        { q: "Can you fix my faucet sprayer?", a: "Yes. Common sprayer problems include mineral buildup blocking water flow, a faulty check valve, or a leaking spray line. We can clean, repair, or replace as needed." },
        { q: "How much does a faucet repair usually cost?", a: "Simple repairs like cartridge replacement typically run $75-150 for service. More complex repairs may range from $150-300. We provide a free estimate during the service call." },
      ]}
    />
  );
}
