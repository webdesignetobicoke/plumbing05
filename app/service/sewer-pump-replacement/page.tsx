import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewer Pump Replacement | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing provides professional sewer pump replacement services to keep your home's waste removal system running reliably across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Sewer Pump Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Crystal Drain & Plumbing provides professional sewer pump replacement services to keep your home's waste removal system running reliably across Wyoming."
      sections={[
        {
          heading: "Signs Your Sewer Pump Needs Replacement",
          items: ["Sewage backup in lower-level drains or toilets", "Gurgling sounds from drains when not in use", "Foul sewer odors inside the home", "Pump running continuously or not running at all", "Pump is 7-10+ years old and failing frequently"],
        },
        {
          heading: "Types of Sewer Pumps We Replace",
          items: ["Sewage ejector pumps for below-grade bathrooms", "Grinder pumps for pressure sewer systems", "Lift station pumps", "Effluent pumps for septic systems"],
        },
        {
          heading: "Our Replacement Process",
          paragraphs: ["Our technicians will inspect your existing pump system, recommend the appropriate replacement unit, and handle the complete installation including electrical connections and float switch testing. We test the system thoroughly before leaving to ensure proper operation."],
        }
      ]}
      faqs={[
        { q: "How long does a sewer pump last?", a: "Most residential sewage ejector pumps last 7-10 years with proper maintenance. Grinder pumps can last 10-15 years. If your pump is approaching this age range or experiencing issues, replacement is often more cost-effective than continued repairs." },
        { q: "Is sewage pump replacement an emergency service?", a: "Yes — a failed sewer pump can quickly lead to sewage backup and serious health hazards. Crystal Drain & Plumbing treats sewer pump failures as urgent service calls. Contact us immediately at (647) 686-4566." },
      ]}
    />
  );
}
