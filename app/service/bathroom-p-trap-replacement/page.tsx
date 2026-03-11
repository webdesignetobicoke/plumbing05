import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom P-Trap Replacement | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing provides professional bathroom P-trap replacement services across Wyoming. A faulty P-trap causes sewer odors and drain leaks.",
};

export default function Page() {
  return (
    <ServicePage
      title="Bathroom P-Trap Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5fe57e63e518b54cd005_6-oJMeOF2fIjrFT24x6S6xkhjQZqca-KSmL3Prbc-5w.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Crystal Drain & Plumbing provides professional bathroom P-trap replacement services across Wyoming. A faulty P-trap causes sewer odors and drain leaks."
      sections={[
        {
          heading: "What Is a Bathroom P-Trap?",
          paragraphs: ["The P-trap is the curved pipe section beneath your bathroom sink or shower drain. It holds a small amount of water that blocks sewer gases from entering your home. When a P-trap leaks, cracks, or loses its water seal, foul sewer odors can infiltrate your bathroom."],
        },
        {
          heading: "Signs Your P-Trap Needs Replacement",
          items: ["Persistent sewer odor coming from the drain", "Visible leak under the bathroom sink", "P-trap is cracked, corroded, or physically damaged", "Slow drain caused by a deteriorated P-trap"],
        },
        {
          heading: "Our Replacement Process",
          items: ["Remove the old P-trap assembly", "Clean and inspect the drain pipe connection", "Install a new code-compliant P-trap with proper alignment", "Test for leaks and verify the trap holds a water seal"],
        }
      ]}
      faqs={[
        { q: "Can a P-trap cause sewer smell?", a: "Yes. If the P-trap dries out (from an unused drain) or cracks, sewer gas can enter your home. A replacement or simply running water down the drain can resolve the issue." },
      ]}
    />
  );
}
