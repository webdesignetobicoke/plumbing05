import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Line Installation | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing provides professional water line installation services for new construction, home additions, and full line replacements across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Water Line Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5ffb6817589a11693410_CpDu0vKRYhfsZBP9tcocM_4Vk--LtRu4nrUQgpaCqkQ.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Crystal Drain & Plumbing provides professional water line installation services for new construction, home additions, and full line replacements across Wyoming."
      sections={[
        {
          heading: "When Do You Need a New Water Line?",
          items: ["Building a new home or addition that requires water service", "Your existing water line is old, corroded, or frequently leaking", "You're upgrading from galvanized steel to modern copper or PEX piping", "Increasing household size requires a larger diameter water line", "Your water pressure has progressively declined over the years"],
        },
        {
          heading: "Our Water Line Installation Process",
          items: ["Assessment of your property and existing plumbing infrastructure", "Selection of the appropriate pipe material (copper, PEX, or CPVC)", "Excavation of the trench from the water main to your home", "Installation of the new water line with proper fittings and connections", "Pressure testing to ensure no leaks before backfilling", "Final inspection and restoration of disturbed areas"],
        },
        {
          heading: "The Crystal Drain & Plumbing Difference",
          paragraphs: ["When it comes to water line installation, quality workmanship and materials make all the difference. At Crystal Drain & Plumbing, we use only industry-leading pipe materials that are rated to withstand Toronto's freeze-thaw cycles and varying ground conditions.", "Our team of licensed plumbers ensures every installation meets or exceeds local building codes, giving you complete confidence in your new water line for years to come."],
        }
      ]}
      faqs={[
        { q: "What type of pipe material do you use for water line installations?", a: "We use copper, PEX, and CPVC depending on the application and your preferences. Each material has its advantages — PEX is highly flexible and freeze-resistant, while copper is extremely durable and long-lasting. We'll recommend the best option for your specific situation." },
        { q: "Do I need a permit for water line installation?", a: "Yes, water line installations typically require a permit from your local municipality. Crystal Drain & Plumbing handles all necessary permitting as part of our installation service, so you don't have to worry about the paperwork." },
      ]}
    />
  );
}
