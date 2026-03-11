import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dishwasher Installation | Crystal Drain & Plumbing Toronto",
  description: "Professional dishwasher installation across Toronto area. We handle plumbing connections, drain hookup, and ensure leak-free operation.",
};

export default function Page() {
  return (
    <ServicePage
      title="Dishwasher Installation"
      heroImg="https://images.pexels.com/photos/2238808/pexels-photo-2238808.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Kitchen Plumber", href: "/service-type/kitchen-plumber" }}
      tagline="Professional dishwasher installation across Toronto area. We handle plumbing connections, drain hookup, and ensure leak-free operation."
      sections={[
        {
          heading: "When You Need Dishwasher Installation",
          items: ["Installing a dishwasher in a kitchen that doesn't currently have one", "Replacing an existing built-in dishwasher", "Building or remodeling your kitchen", "First-time dishwasher addition to an older home", "Upgrading to a larger or premium model"],
        },
        {
          heading: "Our Dishwasher Installation Service",
          items: ["Hot water supply line connection (usually from under the sink)", "Drain connection to kitchen sink drain or disposal", "Secure mounting under the counter", "Electrical connection (we coordinate with electrician if a new circuit is needed)", "Testing for leaks and proper operation", "Demonstration of operation and care"],
        },
        {
          heading: "First-Time Dishwasher Installation",
          paragraphs: ["Adding a dishwasher to a Toronto kitchen that doesn't have one requires running new water supply and drain lines. We'll assess your kitchen layout and install the most efficient routing. Most first-time installations can be completed in one visit, though cabinet modifications may add an extra day if needed."],
        },
      ]}
      faqs={[
        { q: "How long does dishwasher installation take?", a: "Standard dishwasher replacement typically takes 1-2 hours. First-time installations for kitchens without existing dishwasher connections may take 2-3 hours depending on routing requirements." },
        { q: "Do I need new water lines for a new dishwasher?", a: "If you already have a dishwasher, we usually use the existing water line. For first-time installations, we'll run new supply lines from your main water supply (usually from under the kitchen sink). Drain lines connect to your sink drain or disposal." },
        { q: "Can you install an over-the-range or portable dishwasher?", a: "Yes, we install portable (countertop) models which only need water and drain connections. Over-the-range models are also possible with proper plumbing routing. Ask us about options for your space." },
      ]}
    />
  );
}
