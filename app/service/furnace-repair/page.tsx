import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furnace Repair | Crystal Drain & Plumbing Toronto",
  description: "Emergency furnace repair services for Toronto and the GTA. Fast response times and expert diagnostics.",
};

export default function Page() {
  return (
    <ServicePage
      title="Furnace Repair"
      heroImg="https://images.pexels.com/photos/5632634/pexels-photo-5632634.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Home Heating", href: "/service-type/home-heating" }}
      tagline="Emergency furnace repair services for Toronto and the GTA with fast response times."
      sections={[
        {
          heading: "Common Furnace Issues We Fix",
          items: ["Furnace won't start - No heat or ignition problems", "Weak heating - Insufficient warmth throughout your home", "Short cycling - Furnace turns on and off too frequently", "Strange noises - Banging, rattling, or squealing sounds", "Thermostat not responding - Temperature control problems", "Blower motor issues - Poor air circulation or continuous running", "Cracked heat exchanger - Dangerous condition requiring professional attention", "Pilot light problems - Won't light or keeps going out", "Gas valve malfunctions - Fuel delivery issues", "Clogged filters - Reducing efficiency and air quality"],
        },
        {
          heading: "Our Repair Process",
          items: ["Complete system inspection and diagnostics", "Identification of the root cause of the problem", "Explanation of repair options and costs", "Expert repair using quality replacement parts", "Testing to verify proper operation and safety", "Cleaning and maintenance recommendations", "Documentation of all work performed", "Warranty coverage on parts and labor"],
        },
        {
          heading: "Emergency Service Available",
          paragraphs: ["We understand that furnace breakdowns happen at the worst times. Our emergency repair service is available 24/7 to get your heating system back up and running. Call us anytime - day or night, weekends or holidays - for immediate assistance with your furnace emergency."],
        }
      ]}
      faqs={[
        { q: "Why is my furnace making noise?", a: "Common furnace noises include rattling (loose parts), banging (thermal expansion), or squealing (belt issues). Our technicians can diagnose the source and recommend repairs." },
        { q: "How much does furnace repair cost?", a: "Repair costs vary based on the specific problem and parts needed. We charge a diagnostic fee to identify the issue, then provide repair estimates before proceeding." },
        { q: "Can I get a furnace repaired the same day?", a: "Yes, many furnace repairs can be completed same-day, especially if we have the necessary parts in stock. We'll confirm availability during your service call." },
        { q: "When should I replace vs. repair my furnace?", a: "If your furnace is over 15 years old or repairs cost more than 50% of a new system, replacement may be more economical. We'll advise you based on your specific situation." },
      ]}
    />
  );
}
