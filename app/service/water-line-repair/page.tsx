import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Line Repair | Crystal Drain & Plumbing Wyoming",
  description: "If you are looking for a water line repair service, look no further than Crystal Drain & Plumbing. We offer fast and affordable water line repairs across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Water Line Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc60c2ed2ebb4449487ec3_8jHmVLV1UdvMEu-AvyEPqXEma0_7BTXixnuJynlu2is.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="If you are looking for a water line repair service, look no further than Crystal Drain & Plumbing. We offer fast and affordable water line repairs across Wyoming."
      sections={[
        {
          heading: "Signs You Need Water Line Repair",
          items: ["Low water pressure throughout the home", "Unexplained increases in water bills", "Wet or soggy spots in your yard", "Discolored or foul-smelling water", "Sounds of running water when no fixtures are in use"],
        },
        {
          heading: "How Crystal Drain & Plumbing Handles Water Line Repairs",
          items: ["We inspect and diagnose the issue using advanced leak detection equipment", "We identify the exact location of the break or damage", "We repair or replace the affected section of pipe", "We test the line after repair to ensure proper water flow and pressure", "We restore any landscaping disturbed during the repair process"],
        },
        {
          heading: "Why Trust Crystal Drain & Plumbing",
          paragraphs: ["Crystal Drain & Plumbing has been serving Toronto area homeowners since 2013. Our licensed technicians are experienced in diagnosing and repairing all types of water line issues, from minor leaks to full line replacements. We use only high-quality materials and adhere to all local plumbing codes to ensure a long-lasting repair.", "We understand that a damaged water line is a serious problem that can affect your home's foundation, landscaping, and water quality. That's why we prioritize prompt response times and transparent pricing on every water line repair job."],
        }
      ]}
      faqs={[
        { q: "How do I know if my water line is broken?", a: "Common signs include low water pressure, high water bills, wet spots in your yard, discolored water, or the sound of running water when no fixtures are in use. If you notice any of these signs, call Crystal Drain & Plumbing immediately." },
        { q: "How long does a water line repair take?", a: "Most water line repairs can be completed in a single day. The exact duration depends on the extent of the damage and accessibility of the line. Our technicians will provide a time estimate before beginning work." },
      ]}
    />
  );
}
