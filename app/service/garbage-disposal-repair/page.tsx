import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garbage Disposal Repair | Crystal Drain & Plumbing Toronto",
  description: "Garbage disposal not working? Crystal Drain & Plumbing diagnoses and repairs all types of disposal problems across Toronto area. We carry common parts on every service vehicle.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garbage Disposal Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5ff5548041b53d4a054d_PLzMEJcdBCghWc9XKQ-QcUXsXB3-8DT8k-O7hGxYIJE.jpeg"
      parentCategory={{ label: "Kitchen Plumber", href: "/service-type/kitchen-plumber" }}
      tagline="Garbage disposal not working? Crystal Drain & Plumbing diagnoses and repairs all types of disposal problems across Toronto area. We carry common parts on every service vehicle."
      sections={[
        {
          heading: "Common Garbage Disposal Problems We Fix",
          items: ["Disposal hums but doesn't spin (jammed impeller)", "Disposal won't turn on at all (electrical or reset button issue)", "Disposal makes grinding or rattling noise", "Disposal leaks from the bottom, side, or sink flange", "Disposal drains slowly or causes drain backup", "Disposal emits persistent foul odors despite cleaning"],
        },
        {
          heading: "DIY First Steps Before You Call",
          paragraphs: ["If your disposal won't start, check these first: (1) Press the reset button on the bottom of the unit. (2) Check if the circuit breaker has tripped. (3) If the unit hums but won't spin, use the included hex key in the port on the bottom to manually free the impeller. If none of these work, call Crystal Drain & Plumbing."],
        },
        {
          heading: "Repair vs Replace",
          paragraphs: ["We give you an honest assessment. If the repair cost is close to the replacement cost, or if the disposal is 8+ years old, replacement is usually the better investment. We carry InSinkErator units on our vehicles and can often replace a disposal in the same visit."],
        }
      ]}
      faqs={[
        { q: "Why is my garbage disposal leaking from the bottom?", a: "A leak from the bottom of a disposal typically indicates a failed internal seal, usually the motor shaft seal or the internal O-ring. Unfortunately, these seals are not serviceable — a bottom leak almost always requires disposal replacement." },
      ]}
    />
  );
}
