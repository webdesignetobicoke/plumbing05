import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Combi Boiler Repair | Crystal Drain & Plumbing Wyoming",
  description: "Combi boiler not working? Crystal Drain & Plumbing repairs all makes and models of combination boilers across Wyoming. Fast, reliable service from certified technicians.",
};

export default function Page() {
  return (
    <ServicePage
      title="Combi Boiler Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc601eb032af360f102653_IrOLlxn1lLZxyS1Av8BNOvIP_Z4bO3OiAmHI2n06NIA.jpeg"
      parentCategory={{ label: "Home Heating", href: "/service-type/home-heating" }}
      tagline="Combi boiler not working? Crystal Drain & Plumbing repairs all makes and models of combination boilers across Wyoming. Fast, reliable service from certified technicians."
      sections={[
        {
          heading: "What Is a Combi Boiler?",
          paragraphs: ["A combination (combi) boiler is a single, compact unit that provides both central heating and instantaneous domestic hot water without the need for a separate hot water tank or cylinder. Combi boilers are energy-efficient and popular in modern Wyoming homes."],
        },
        {
          heading: "Common Combi Boiler Problems We Fix",
          items: ["No hot water or heating", "Error codes on the display panel", "Pressure too high or too low", "Diverter valve failure (heat but no hot water, or vice versa)", "Frozen condensate pipe (common in Wyoming winters)", "Ignition failures", "PCB (circuit board) faults", "Heat exchanger issues"],
        },
        {
          heading: "Brands We Service",
          items: ["Navien", "Noritz", "Bosch", "Weil-McLain", "Burnham", "Slant/Fin", "Buderus", "Viessman"],
        }
      ]}
      faqs={[
        { q: "My combi boiler shows error code E1/F1/etc — what does it mean?", a: "Error codes vary by manufacturer. Common codes indicate ignition failure, low pressure, sensor faults, or overheating. Our technicians carry diagnostic equipment and manufacturer service manuals to interpret and resolve error codes for all major brands." },
        { q: "Why does my combi boiler have heat but no hot water?", a: "This is almost always a faulty diverter valve. The diverter valve switches the boiler's output between the central heating circuit and the domestic hot water circuit. When it sticks in the heating position, hot water is not produced. We can replace this valve quickly." },
      ]}
    />
  );
}
