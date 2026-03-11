import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Leak Detection | Crystal Drain & Plumbing Wyoming",
  description: "Our state-of-the-art leak detection equipment allows Crystal Drain & Plumbing to find hidden leaks quickly and accurately — protecting your home from water damage.",
};

export default function Page() {
  return (
    <ServicePage
      title="Water Leak Detection"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Our state-of-the-art leak detection equipment allows Crystal Drain & Plumbing to find hidden leaks quickly and accurately — protecting your home from water damage."
      sections={[
        {
          heading: "Signs of a Hidden Water Leak",
          items: ["Unexplained spikes in your monthly water bill", "The sound of running water with no fixtures in use", "Wet or discolored patches on walls, floors, or ceilings", "Mold or mildew growth in unusual places", "Low water pressure or a water meter that never stops moving"],
        },
        {
          heading: "Our Leak Detection Technology",
          paragraphs: ["Crystal Drain & Plumbing uses advanced, non-invasive leak detection technology to locate leaks without unnecessary destruction to your property. Our electronic leak detection equipment can pinpoint the precise location of a leak behind walls, under slabs, and underground.", "We also use drain inspection cameras that can inspect up to 200 feet of your drain line, providing a clear view of the inside of your pipes to accurately locate and diagnose issues."],
        },
        {
          heading: "Why Early Detection Matters",
          items: ["Prevents costly water damage to your home's structure", "Stops mold and mildew growth before it becomes a health hazard", "Reduces wasted water and lowers utility bills", "Protects your home's foundation from water intrusion", "Gives you peace of mind knowing your plumbing is sound"],
        }
      ]}
      faqs={[
        { q: "How do you detect a leak without tearing up my walls?", a: "We use electronic leak detection equipment that can identify the sound and location of water movement through walls, floors, and slabs without requiring destructive investigation. This technology allows us to pinpoint leaks accurately and minimize disruption to your home." },
        { q: "How much does leak detection cost?", a: "The cost of leak detection varies depending on the complexity and location of the leak. We offer transparent, upfront pricing before beginning any work. Contact us at (647) 686-4566 for a quote." },
      ]}
    />
  );
}
