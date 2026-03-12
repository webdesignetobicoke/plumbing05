import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Plumbing Remodeling | Strong Plumbing Inc Toronto",
  description: "Strong Plumbing Inc handles all plumbing aspects of bathroom remodels — from relocating drain lines to installing new fixtures and supply lines.",
};

export default function Page() {
  return (
    <ServicePage
      title="Bathroom Plumbing Remodeling"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5fe57e63e518b54cd005_6-oJMeOF2fIjrFT24x6S6xkhjQZqca-KSmL3Prbc-5w.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Strong Plumbing Inc handles all plumbing aspects of bathroom remodels — from relocating drain lines to installing new fixtures and supply lines."
      sections={[
        {
          heading: "What's Included in Bathroom Plumbing Remodeling",
          items: ["Rough-in plumbing for new fixture locations", "Drain line relocation or addition", "New water supply line installation", "Shower valve and fixture installation", "Freestanding tub connections", "Toilet rough-in and installation", "Custom shower systems and body sprays"],
        },
        {
          heading: "Plan Before You Build",
          paragraphs: ["Moving plumbing is one of the most significant costs in a bathroom remodel. Strong Plumbing Inc works closely with your contractor or directly with you to plan the plumbing layout before walls are opened, ensuring efficient routing and code-compliant installation."],
        },
        {
          heading: "Why Choose Strong Plumbing Inc for Your Remodel",
          items: ["Licensed Toronto plumbers familiar with local code requirements", "Experience with all fixture types and custom shower systems", "Coordination with general contractors and tile setters", "Transparent pricing and detailed scope of work before work begins"],
        }
      ]}
      faqs={[
        { q: "When in a remodel should the plumber be scheduled?", a: "Rough-in plumbing (moving and adding pipes) is done before walls are closed. Trim-out (installing fixtures and trim) is done after tile and drywall are complete. We coordinate both phases to match your remodel timeline." },
      ]}
    />
  );
}
