import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Repiping Service | Crystal Drain & Plumbing Wyoming",
  description: "If your bathroom's pipes are old, corroded, or frequently leaking, a full bathroom repipe from Crystal Drain & Plumbing is the long-term solution.",
};

export default function Page() {
  return (
    <ServicePage
      title="Bathroom Repiping Service"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5fe57e63e518b54cd005_6-oJMeOF2fIjrFT24x6S6xkhjQZqca-KSmL3Prbc-5w.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="If your bathroom's pipes are old, corroded, or frequently leaking, a full bathroom repipe from Crystal Drain & Plumbing is the long-term solution."
      sections={[
        {
          heading: "Signs Your Bathroom Needs Repiping",
          items: ["Discolored or rusty water from bathroom fixtures", "Frequent leaks or pinhole failures in older copper or galvanized pipes", "Low and declining water pressure", "Pipes that are more than 40-50 years old", "Visible corrosion on exposed supply lines"],
        },
        {
          heading: "Our Repiping Materials",
          paragraphs: ["Crystal Drain & Plumbing primarily uses PEX (cross-linked polyethylene) tubing for repiping projects. PEX is highly flexible, freeze-resistant — critical in Toronto's climate — and significantly faster to install than copper, reducing labor costs. We also install copper where required by code or homeowner preference."],
        },
        {
          heading: "The Repiping Process",
          items: ["Inspect existing pipes to identify scope of replacement needed", "Shut off water and protect flooring and cabinets", "Run new supply lines to all bathroom fixtures", "Connect to existing shut-off valves or install new ones", "Test all connections under pressure before wall repair", "Patch drywall openings if required"],
        }
      ]}
      faqs={[
        { q: "How long does bathroom repiping take?", a: "A single bathroom repipe typically takes 4-8 hours depending on the complexity and accessibility of the pipes. We minimize drywall cutting and work efficiently to reduce disruption to your home." },
      ]}
    />
  );
}
