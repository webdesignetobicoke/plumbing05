import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Line Replacement | Crystal Drain & Plumbing Wyoming",
  description: "Gas line replacement is not a DIY project. Crystal Drain & Plumbing's licensed technicians safely replace aging or damaged gas lines to protect your home and family.",
};

export default function Page() {
  return (
    <ServicePage
      title="Gas Line Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Gas line replacement is not a DIY project. Crystal Drain & Plumbing's licensed technicians safely replace aging or damaged gas lines to protect your home and family."
      sections={[
        {
          heading: "When Does a Gas Line Need to Be Replaced?",
          items: ["Old steel or black iron pipe that has corroded or developed leaks", "Adding new gas appliances that require larger capacity lines", "Upgrading from standard to flexible CSST piping", "Damage from excavation or construction activities", "Failed pressure test during a home inspection or appliance installation"],
        },
        {
          heading: "Safety First — Why Hire a Professional",
          paragraphs: ["Gas line work is inherently dangerous and requires a licensed plumber or gas fitter. Improper gas line connections can result in gas leaks, fire, or explosion. Crystal Drain & Plumbing's technicians are fully licensed, insured, and trained in gas piping systems. All work is pressure-tested and inspected before being put back into service.", "Never attempt to repair or replace a gas line yourself. If you smell gas, leave the building immediately and call your gas company before calling a plumber."],
        },
        {
          heading: "The Replacement Process",
          items: ["Shut off gas supply at the meter", "Remove existing pipe safely", "Install new gas-rated pipe (CSST or black iron)", "Pressure test the entire system before reconnecting appliances", "Reconnect and test all gas appliances", "Municipal inspection where required"],
        }
      ]}
      faqs={[
        { q: "How do I know if my gas line is leaking?", a: "Natural gas has a distinctive rotten egg odor added specifically so you can detect leaks. Other signs include a hissing sound near gas appliances, dead vegetation over buried gas lines, and bubbling in standing water. If you suspect a gas leak, leave immediately and call your gas utility." },
        { q: "What type of pipe is used for gas lines?", a: "Crystal Drain & Plumbing uses either black iron pipe (traditional, very durable) or CSST (Corrugated Stainless Steel Tubing, flexible and easier to route) depending on the application and your preference. Both are approved gas line materials when properly installed and bonded." },
      ]}
    />
  );
}
