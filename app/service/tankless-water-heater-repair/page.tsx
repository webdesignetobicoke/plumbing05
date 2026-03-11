import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tankless Water Heater Repair | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing offers fast and reliable tankless water heater repair services across Wyoming. Our certified technicians diagnose and fix all makes and models.",
};

export default function Page() {
  return (
    <ServicePage
      title="Tankless Water Heater Repair"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Crystal Drain & Plumbing offers fast and reliable tankless water heater repair services across Wyoming. Our certified technicians diagnose and fix all makes and models."
      sections={[
        {
          heading: "Common Tankless Water Heater Problems We Fix",
          items: ["Ignition failure — unit won't light", "Error codes on the display panel", "Fluctuating water temperatures", "Mineral scale buildup restricting flow", "Venting issues causing shutdowns", "Cold water sandwiching between hot water bursts", "Low flow rate triggering unit shutdown"],
        },
        {
          heading: "Our Diagnostic and Repair Process",
          items: ["Read and interpret error codes from the unit's control board", "Inspect burner, igniter, and flame sensor components", "Check gas pressure and supply line", "Inspect the heat exchanger for scale or damage", "Test flow rate and minimum activation threshold", "Clean or descale the unit as needed", "Test all safety systems before returning to service"],
        },
        {
          heading: "Brands We Repair",
          items: ["Navien", "Noritz", "Rinnai", "Rheem", "Bosch", "Bradford White", "EcoSmart", "Takagi"],
        }
      ]}
      faqs={[
        { q: "Why does my tankless water heater keep shutting off?", a: "The most common causes are inadequate gas supply, a dirty air intake or exhaust vent, a faulty flow sensor, or mineral scale buildup in the heat exchanger. Our technicians can quickly diagnose the cause and get your unit running reliably again." },
        { q: "How often should a tankless water heater be serviced?", a: "We recommend annual maintenance for tankless water heaters in Wyoming, where hard water can accelerate mineral scale buildup. Regular descaling extends the life of your unit and maintains efficiency. Gold Leaf Club members receive this service as part of their membership." },
      ]}
    />
  );
}
