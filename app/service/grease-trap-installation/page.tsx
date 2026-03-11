import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grease Trap Installation | Crystal Drain & Plumbing Toronto",
  description: "Professional grease trap installation for commercial kitchens and restaurants across Toronto.",
};

export default function Page() {
  return (
    <ServicePage
      title="Grease Trap Installation"
      heroImg="https://images.pexels.com/photos/4440227/pexels-photo-4440227.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Commercial Plumbing", href: "/service-type/commercial-plumbing" }}
      tagline="Professional grease trap installation for commercial kitchens and restaurants across Toronto."
      sections={[
        {
          heading: "Types of Grease Traps We Install",
          items: ["Underground grease traps - Large capacity for busy restaurants", "Passive in-line grease traps - Single appliance installations", "Automatic grease recovery systems - Self-cleaning designs", "Stainless steel traps - Durable and professional-grade", "Baffle box grease traps - Simple but effective designs", "3-compartment systems - Multiple stage filtration", "Interceptor systems - Heavy-duty commercial solutions", "Compliant designs - Meet Toronto environmental regulations"],
        },
        {
          heading: "Professional Installation Includes",
          items: ["Site assessment and determination of trap size needed", "Proper location selection for easy access and cleaning", "Drainage line modifications and connections", "Vent line installation per code requirements", "Integration with existing kitchen plumbing", "Grease and water line separation", "Proper slope and flow design", "Final inspection for regulatory compliance"],
        },
        {
          heading: "Code-Compliant Installation",
          paragraphs: ["Grease trap installation must meet Toronto plumbing code and environmental regulations. Our team ensures your new system is sized appropriately for your kitchen volume, properly installed, and compliant with all local requirements. We handle permitting and inspections so your kitchen operates legally and efficiently."],
        }
      ]}
      faqs={[
        { q: "What size grease trap do I need?", a: "Sizing depends on your kitchen volume and daily usage. A busy restaurant may need a 1000+ gallon trap, while smaller kitchens work with smaller systems. We assess your operation and recommend appropriate sizing." },
        { q: "Is a grease trap permit required?", a: "Yes, grease trap installation requires city permits and inspection. We handle the permitting process and ensure your system passes inspection." },
        { q: "Can you install a grease trap in an existing kitchen?", a: "Yes, we can retrofit grease traps into existing kitchens. This may require kitchen reconfiguration depending on current plumbing layout." },
      ]}
    />
  );
}
