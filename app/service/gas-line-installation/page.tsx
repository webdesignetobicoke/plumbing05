import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Line Installation | Crystal Drain & Plumbing Wyoming",
  description: "Adding a gas appliance, outdoor grill, or fire pit? Crystal Drain & Plumbing provides professional gas line installation services across Wyoming. Safety and compliance are always our priority.",
};

export default function Page() {
  return (
    <ServicePage
      title="Gas Line Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc601eb032af360f102653_IrOLlxn1lLZxyS1Av8BNOvIP_Z4bO3OiAmHI2n06NIA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Adding a gas appliance, outdoor grill, or fire pit? Crystal Drain & Plumbing provides professional gas line installation services across Wyoming. Safety and compliance are always our priority."
      sections={[
        {
          heading: "Common Gas Line Installation Projects",
          items: ["New gas range or oven installation", "Gas dryer connection", "Tankless water heater gas line upgrade", "Outdoor natural gas grill or fire pit", "Gas fireplace installation", "Whole-house standby generator connection", "New home construction gas rough-in"],
        },
        {
          heading: "Ensuring Safety and Compliance",
          paragraphs: ["All gas line installations by Crystal Drain & Plumbing are performed by licensed technicians and fully pressure-tested before service. We obtain all required permits and ensure every installation meets Toronto's gas piping codes, including proper bonding of CSST systems.", "Gas line work done by unlicensed individuals is dangerous and can void your homeowner's insurance. Always use a licensed plumber for any gas piping work."],
        },
        {
          heading: "The Installation Process",
          items: ["Plan the route from the gas meter to the new appliance location", "Size the new gas line for proper BTU delivery", "Install black iron or CSST piping with all required fittings and shutoffs", "Pressure test the completed installation", "Connect and test the new appliance", "Final inspection by the municipality where required"],
        }
      ]}
      faqs={[
        { q: "Do I need a permit for a new gas line?", a: "Yes, virtually all new gas line installations require a permit and inspection. Crystal Drain & Plumbing handles the permitting process as part of our installation service. Permitted work protects your investment and ensures your homeowner's insurance remains valid." },
        { q: "How long does a new gas line installation take?", a: "Most residential gas line installations take 2-6 hours depending on the complexity of the route and whether the installation is above or below grade. We'll provide a time estimate as part of your project quote." },
      ]}
    />
  );
}
