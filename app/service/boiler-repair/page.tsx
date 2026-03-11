import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boiler Repair | Crystal Drain & Plumbing Toronto",
  description: "Emergency boiler repair service to restore your heating comfort quickly.",
};

export default function Page() {
  return (
    <ServicePage
      title="Boiler Repair"
      heroImg="https://images.pexels.com/photos/5081621/pexels-photo-5081621.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Home Heating", href: "/service-type/home-heating" }}
      tagline="Emergency boiler repair service to restore your heating comfort quickly."
      sections={[
        {
          heading: "Common Boiler Issues We Fix",
          items: ["No heat - Boiler won't ignite or produce heat", "Weak heating - Insufficient heat reaching radiators or zones", "Leaking water - Dripping from seals, pipes, or valves", "Strange noises - Banging, rumbling, or kettling sounds", "Radiators not heating - Individual or multiple zones cold", "Pressure problems - Low or high pressure readings", "Thermostat issues - Temperature control not responding", "Pilot light problems - Won't light or keeps going out", "Pump failure - Water not circulating through system", "Control malfunctions - Reset codes or error messages"],
        },
        {
          heading: "Our Boiler Repair Service",
          items: ["Expert diagnostics to identify the problem", "Inspection of all boiler components", "Testing of safety controls and pressure systems", "Repair or replacement of faulty parts", "System balancing and pressure adjustment", "Bleeding air from pipes and radiators", "Efficiency optimization and testing", "24/7 emergency service availability", "Warranty coverage on parts and labor"],
        },
        {
          heading: "Emergency Response",
          paragraphs: ["We understand that boiler problems often occur during the coldest months when you need heat most. Our emergency repair service is available 24/7 to get your heating system back online quickly. Call anytime for immediate assistance with your boiler emergency."],
        }
      ]}
      faqs={[
        { q: "Why is my boiler making banging noises?", a: "Banging (kettling) is usually caused by mineral buildup or sediment in the boiler causing water to overheat. We can flush and treat the system." },
        { q: "What does boiler pressure error mean?", a: "If pressure is too low, the system may not heat properly. High pressure can indicate a failed expansion tank. Our technicians can diagnose and fix the issue." },
        { q: "How long do boiler repairs typically take?", a: "Many repairs can be completed on the same day. More complex issues may require ordering parts, but we'll provide a timeline." },
        { q: "When should I repair vs. replace my boiler?", a: "If your boiler is over 15 years old or repairs cost 50%+ of a new system, replacement may be more economical. We'll advise you." },
      ]}
    />
  );
}
