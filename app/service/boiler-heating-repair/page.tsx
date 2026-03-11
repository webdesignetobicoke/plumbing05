import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boiler Heating Repair | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing provides professional boiler repair services across Wyoming. Our certified technicians diagnose and fix all types of residential boiler systems.",
};

export default function Page() {
  return (
    <ServicePage
      title="Boiler Heating Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc601eb032af360f102653_IrOLlxn1lLZxyS1Av8BNOvIP_Z4bO3OiAmHI2n06NIA.jpeg"
      parentCategory={{ label: "Home Heating", href: "/service-type/home-heating" }}
      tagline="Crystal Drain & Plumbing provides professional boiler repair services across Wyoming. Our certified technicians diagnose and fix all types of residential boiler systems."
      sections={[
        {
          heading: "Common Boiler Problems We Repair",
          items: ["No heat or insufficient heat output", "Boiler making banging, whistling, or kettling noises", "Pressure loss — low boiler pressure", "Leaking water from the boiler or radiator connections", "Pilot light or ignition failures", "Radiators not heating evenly (air locks)", "Frozen condensate pipe in Wyoming winters"],
        },
        {
          heading: "Types of Boilers We Service",
          items: ["Gas-fired hot water boilers", "Oil-fired boilers", "Electric boilers", "Combi boilers", "System boilers", "High-efficiency condensing boilers"],
        },
        {
          heading: "Why Choose Crystal Drain & Plumbing",
          paragraphs: ["Crystal Drain & Plumbing is now certified to work on all types of home heating and cooling units. Our team of skilled technicians has undergone extensive training to diagnose, repair, and maintain a wide range of heating systems including boilers. *HVAC services not available in Albany County & Laramie County."],
        }
      ]}
      faqs={[
        { q: "Why is my boiler losing pressure?", a: "Pressure loss in a boiler is typically caused by a water leak in the system, a faulty pressure relief valve, or a bleeding radiator that was not re-pressurized. Our technicians will diagnose the cause and repair or replace the faulty component." },
        { q: "What is the kettling noise my boiler makes?", a: "Kettling (a rumbling, bubbling sound) is usually caused by limescale buildup on the heat exchanger, which causes localized overheating and steam formation. Toronto's hard water accelerates this process. A power flush or descaling service can resolve the issue." },
      ]}
    />
  );
}
