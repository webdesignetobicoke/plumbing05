import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leak Detection Service | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing uses advanced electronic leak detection equipment to locate hidden leaks behind walls, under slabs, and underground — without unnecessary destruction.",
};

export default function Page() {
  return (
    <ServicePage
      title="Leak Detection Service"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc6044dd3e3e68f4250c67_b4IKK17jSs5yOiVuLUERFcJ74cmy3sG73GaB7x_gvRI.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Crystal Drain & Plumbing uses advanced electronic leak detection equipment to locate hidden leaks behind walls, under slabs, and underground — without unnecessary destruction."
      sections={[
        {
          heading: "Types of Leaks We Detect",
          items: ["Slab leaks beneath concrete foundations", "Hidden pipe leaks inside walls and ceilings", "Underground water line leaks", "Pool and spa leaks", "Gas line leaks (using specialized gas detection equipment)", "Irrigation system leaks"],
        },
        {
          heading: "Our Leak Detection Technology",
          paragraphs: ["We use electronic amplification equipment and thermal imaging to detect the sound and heat signature of water escaping from pipes. This technology allows us to locate leaks with precision, often to within a few inches, minimizing the amount of wall or slab that needs to be opened for repair.", "We also have state-of-the-art drain inspection cameras that can inspect up to 200 feet of pipe, providing a real-time visual of any cracks, breaks, or problem areas."],
        },
        {
          heading: "Early Detection Saves Money",
          items: ["A pinhole leak can waste thousands of gallons of water per month", "Hidden moisture leads to mold, mildew, and structural damage", "Slab leaks left unaddressed can undermine your home's foundation", "Early detection keeps repair costs manageable"],
        }
      ]}
      faqs={[
        { q: "How much does leak detection cost?", a: "Leak detection pricing varies based on the complexity and suspected location of the leak. We provide a transparent quote before beginning any work. In most cases, the cost of professional detection is quickly recovered by stopping water waste and avoiding expensive water damage repairs." },
        { q: "Can you detect a slab leak without breaking the concrete?", a: "Yes. Our electronic leak detection equipment can pinpoint the location of a slab leak with great precision before any concrete work begins. In many cases we can limit the concrete cutting to a very small area — often just a few square feet — to access and repair the leak." },
      ]}
    />
  );
}
