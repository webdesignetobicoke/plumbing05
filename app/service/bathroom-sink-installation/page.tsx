import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Sink Installation | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing installs all types of bathroom sinks — undermount, drop-in, vessel, and pedestal — with professional plumbing connections across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Bathroom Sink Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5fe57e63e518b54cd005_6-oJMeOF2fIjrFT24x6S6xkhjQZqca-KSmL3Prbc-5w.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Crystal Drain & Plumbing installs all types of bathroom sinks — undermount, drop-in, vessel, and pedestal — with professional plumbing connections across Wyoming."
      sections={[
        {
          heading: "Types of Bathroom Sinks We Install",
          items: ["Drop-in (self-rimming) sinks", "Undermount sinks", "Vessel sinks", "Pedestal sinks", "Wall-mounted sinks", "Integrated vanity top sinks"],
        },
        {
          heading: "Professional Installation Matters",
          paragraphs: ["Proper sink installation requires correctly sized drain and supply connections, a leak-free P-trap assembly, and secure mounting to prevent movement. Crystal Drain & Plumbing ensures every bathroom sink installation is watertight, level, and correctly vented."],
        },
        {
          heading: "Supply Your Sink or Let Us Help",
          paragraphs: ["You can purchase the sink of your choice and we'll handle the plumbing installation, or we can recommend quality options from our trusted supplier network including Kohler, American Standard, TOTO, and Moen."],
        }
      ]}
      faqs={[
        { q: "How long does bathroom sink installation take?", a: "A standard bathroom sink installation or replacement takes 1-2 hours. If a new vanity or countertop is involved, additional time may be needed for countertop fabrication and mounting." },
      ]}
    />
  );
}
