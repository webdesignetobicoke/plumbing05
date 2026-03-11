import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drain Camera Inspection | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing uses state-of-the-art drain inspection cameras to see inside your pipes — diagnosing clogs, cracks, root intrusions, and more without guesswork.",
};

export default function Page() {
  return (
    <ServicePage
      title="Drain Camera Inspection"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc60527e63e518b54d530a_5JKBvvkzdnftw898EYnCe-ociU_9dVciNPgO3HvOt3Y.jpeg"
      parentCategory={{ label: "Clogged Drains", href: "/service-type/clogged-drains" }}
      tagline="Crystal Drain & Plumbing uses state-of-the-art drain inspection cameras to see inside your pipes — diagnosing clogs, cracks, root intrusions, and more without guesswork."
      sections={[
        {
          heading: "What Is a Drain Camera Inspection?",
          paragraphs: ["A drain camera inspection involves inserting a flexible rod with a high-resolution waterproof camera into your drain or sewer line. The camera transmits real-time video to a monitor, allowing our technicians to see exactly what's happening inside your pipes — cracks, blockages, root intrusions, pipe offset, or corrosion — without any excavation."],
        },
        {
          heading: "Our Camera Inspection Capability",
          items: ["High-resolution color cameras with LED lighting", "Can inspect up to 200 feet of drain or sewer line", "Real-time video displayed on monitor", "Recording capabilities for insurance documentation", "Pipe locating technology to mark problem areas on the ground surface", "Available for drain lines 2\" to 8\" in diameter"],
        },
        {
          heading: "When You Need a Camera Inspection",
          items: ["Recurring clogs that keep coming back", "Pre-purchase inspection of a home's sewer system", "Locating a lost item or jewelry", "Verifying a repair was completed correctly", "Identifying the cause of slow drains before committing to a repair", "After a hydro jetting service to verify results"],
        }
      ]}
      faqs={[
        { q: "How long does a drain camera inspection take?", a: "Most residential drain camera inspections take 30-60 minutes depending on the length and accessibility of the line being inspected. We'll provide a verbal description of findings and can supply recorded video for your records." },
        { q: "Do I need a camera inspection for a simple clog?", a: "Not always. If you have a straightforward clog that clears easily with a snake, a camera inspection may not be necessary. However, if clogs are recurring, we strongly recommend a camera inspection to identify the underlying cause rather than repeatedly treating symptoms." },
      ]}
    />
  );
}
