import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Plumbing Services | Crystal Drain & Plumbing",
  description: "Professional commercial drain and plumbing services for businesses across the GTA. We service offices, restaurants, retail and industrial properties.",
};

export default function Page() {
  return (
    <ServicePage
      title="Commercial Services"
      heroImg="/commercial plumbing.jpeg"
      parentCategory={{ label: "Additional Services", href: "/service-type/air-conditioning" }}
      tagline="Professional drain and plumbing services designed specifically for commercial properties and businesses."
      sections={[
        {
          heading: "Commercial Plumbing Expertise",
          paragraphs: ["Crystal Drain & Plumbing offers comprehensive commercial plumbing solutions tailored to the unique demands of business properties. From restaurants and offices to retail locations and industrial facilities, we understand the critical importance of keeping your plumbing systems running smoothly to maintain business operations."],
        },
        {
          heading: "Commercial Services We Provide",
          items: [
            "Emergency plumbing repairs and rapid response",
            "Drain cleaning and maintenance for commercial lines",
            "Grease trap cleaning and installation",
            "Sewer line inspection and repair",
            "Water heater installation and maintenance",
            "Backflow prevention system installation and testing",
            "Bathroom fixture installation and repair",
            "Kitchen equipment plumbing setup",
            "Commercial HVAC services",
            "Preventative maintenance programs",
            "24/7 emergency service availability",
          ],
        },
        {
          heading: "Why Choose Us for Commercial Plumbing",
          items: [
            "Experienced with diverse commercial property types",
            "Minimal business disruption — we accommodate your schedule",
            "Licensed and insured for all commercial work",
            "Rapid response times to emergency situations",
            "Preventative maintenance plans available",
            "Transparent pricing with no hidden fees",
            "Professional crew trained in commercial standards",
            "Local expertise in the Greater Toronto Area",
          ],
        },
        {
          heading: "Industries We Service",
          paragraphs: [
            "We work with restaurants, cafes, bars, offices, corporate buildings, retail shops, schools, medical facilities, fitness centers, hotels, and industrial properties. Whatever your commercial plumbing needs, we have the experience and expertise to keep your business running.",
          ],
        },
      ]}
      faqs={[
        { q: "Do you offer emergency commercial plumbing?", a: "Absolutely. We provide 24/7 emergency plumbing services for commercial properties. Call us anytime for urgent issues — we prioritize getting your business back to normal operations as quickly as possible." },
        { q: "Can you set up preventative maintenance for our business?", a: "Yes. We recommend regular preventative maintenance for commercial properties to avoid costly downtime. We can create a customized maintenance schedule based on your property's needs." },
        { q: "What is a backflow prevention system and why does my business need one?", a: "A backflow prevention system prevents contaminated water from flowing backward into clean water supplies. Many municipalities require these for commercial properties, especially restaurants and industrial facilities. We can install and test these systems." },
        { q: "How do you handle plumbing work without disrupting our business?", a: "We work around your business hours whenever possible and keep disruption to a minimum. For larger projects, we'll plan scheduling with you in advance to ensure minimal impact on your operations." },
      ]}
    />
  );
}
