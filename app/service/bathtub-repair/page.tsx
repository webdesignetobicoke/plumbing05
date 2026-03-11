import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathtub Repair | Crystal Drain & Plumbing Toronto",
  description: "Expert bathtub repair services across Toronto. We fix leaks, refinish surfaces, and repair jet systems.",
};

export default function Page() {
  return (
    <ServicePage
      title="Bathtub Repair"
      heroImg="https://images.pexels.com/photos/1029635/pexels-photo-1029635.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Expert bathtub repair services across Toronto. We fix leaks, refinish surfaces, and repair jet systems."
      sections={[
        {
          heading: "Common Bathtub Problems We Fix",
          items: ["Slow drains - Clogs from hair and soap buildup", "Leaking drains - Water escaping through overflow or drain connection", "Faulty drain stoppers - Pop-ups, flip-flops, and lever stoppers that don't work properly", "Cracked or damaged surfaces - Chips, cracks, and stains in acrylic, porcelain, or cast iron", "Whirlpool jet issues - Jets not spraying or system not functioning", "Faucet leaks - Dripping valves and worn seals", "Torn or damaged liners - In fiberglass tubs", "Mold and mildew - Serious contamination requiring treatment"],
        },
        {
          heading: "Same-Day Repair Services",
          items: ["Drain cleaning and unclogging", "Faucet cartridge replacement", "Drain stopper repair and replacement", "Leak detection and repair", "Surface refinishing for minor damage", "Caulk replacement and resealing", "Whirlpool system diagnostics and repairs", "Professional mold and mildew removal"],
        },
        {
          heading: "When to Repair vs Replace",
          paragraphs: ["Most bathtub issues can be repaired quickly and affordably. We'll assess the damage and recommend the best solution. If your tub is old, severely damaged, or requires extensive repairs, replacement may be more cost-effective. Our team will give you honest advice about whether repair or replacement makes sense for your situation."],
        }
      ]}
      faqs={[
        { q: "Why is my bathtub draining slowly?", a: "Slow drains are usually caused by hair and soap buildup. We can clean the drain using plumbing snakes or hydro-jetting to restore full drainage. If the problem persists, it may indicate a deeper issue in the plumbing line." },
        { q: "Can you repair a leaking bathtub?", a: "Yes, we can repair most leaks. Common causes include cracked drain connections, worn seals, or damaged caulk. We'll identify the source and fix it properly." },
        { q: "How do you refinish a damaged bathtub surface?", a: "Minor chips and cracks can often be repaired with specialized epoxy or acrylic repair kits. For larger damage, we may recommend professional refinishing or tub replacement." },
      ]}
    />
  );
}
