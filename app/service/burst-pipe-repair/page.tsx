import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burst Pipe Repair | Crystal Drain & Plumbing Wyoming",
  description: "A burst pipe is a plumbing emergency. Call Crystal Drain & Plumbing immediately at (647) 686-4566. We respond fast to minimize water damage to your Wyoming home.",
};

export default function Page() {
  return (
    <ServicePage
      title="Burst Pipe Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5fe57e63e518b54cd005_6-oJMeOF2fIjrFT24x6S6xkhjQZqca-KSmL3Prbc-5w.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="A burst pipe is a plumbing emergency. Call Crystal Drain & Plumbing immediately at (647) 686-4566. We respond fast to minimize water damage to your Wyoming home."
      sections={[
        {
          heading: "What to Do When a Pipe Bursts",
          items: ["Immediately shut off the main water supply to stop water flow", "Turn off electricity to areas affected by water — electrocution risk", "Call Crystal Drain & Plumbing at (647) 686-4566", "Open all faucets to drain remaining water from the system", "Document the damage with photos for your insurance claim", "Begin removing standing water and wet materials to limit mold growth"],
        },
        {
          heading: "Common Causes of Burst Pipes in Wyoming",
          items: ["Frozen pipes — the #1 cause in Wyoming winters", "Age and corrosion in older galvanized or copper pipes", "High water pressure causing fatigue in pipe walls", "Physical damage from construction, digging, or tree roots", "Poor quality installation or improper pipe support"],
        },
        {
          heading: "Our Emergency Response",
          paragraphs: ["Crystal Drain & Plumbing treats burst pipe calls as emergencies. Our technicians arrive quickly, locate and isolate the burst pipe, and restore your water service as fast as possible. We use a variety of repair techniques depending on the pipe material and location — from soldered copper sections to press-fit connectors for fast, reliable repairs with minimal disruption."],
        }
      ]}
      faqs={[
        { q: "How do I prevent pipes from freezing in Wyoming winters?", a: "Keep your home heated to at least 55°F even when away. Open cabinet doors under sinks on exterior walls. Let faucets trickle during extreme cold snaps. Insulate exposed pipes in unheated spaces like garages and crawl spaces. Disconnect and drain garden hoses before winter. Consider pipe heating cable for vulnerable pipes." },
        { q: "How much does burst pipe repair cost?", a: "The cost depends on the location and extent of the damage. Repairing a single burst pipe is typically far less expensive than the water damage it can cause if not addressed quickly. Crystal Drain & Plumbing provides transparent, upfront pricing before beginning repairs." },
      ]}
    />
  );
}
