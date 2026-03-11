import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garbage Disposal Replacement | Crystal Drain & Plumbing Toronto",
  description: "Keep your kitchen clean and odor-free. Crystal Drain & Plumbing provides fast garbage disposal replacement and installation services across Toronto area.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garbage Disposal Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5feb0f037871fd01b440_ujTpC3J8qFnfl8t_FCHhU0g5dAUfNf_aAsoZq2EEduA.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Keep your kitchen clean and odor-free. Crystal Drain & Plumbing provides fast garbage disposal replacement and installation services across Toronto area."
      sections={[
        {
          heading: "Signs Your Garbage Disposal Needs Replacement",
          items: ["Persistent humming with no grinding action (jammed or seized motor)", "Frequent resets required to get the unit running", "Unusual grinding, rattling, or squealing noises", "Leaking from the bottom of the unit (seal failure)", "Unit is 8-12+ years old and performing poorly", "Persistent odors despite regular cleaning"],
        },
        {
          heading: "Brands We Install",
          items: ["InSinkErator (including Evolution and Badger series)", "Waste King / Moen", "KitchenAid", "GE", "Whirlpool", "Frigidaire"],
        },
        {
          heading: "Our Replacement Process",
          items: ["Disconnect and remove the existing unit safely", "Install the new disposal using the existing sink mounting assembly or a new mount if required", "Connect drain lines and dishwasher drain (if applicable)", "Verify electrical connection and wiring", "Test the new unit through several cycles", "Provide tips for extending the life of your new disposal"],
        }
      ]}
      faqs={[
        { q: "How long do garbage disposals last?", a: "Most residential garbage disposals last 8-12 years with normal use. Higher-quality units with more powerful motors and stainless steel grinding components tend to last longer. If yours is in this age range and requiring frequent resets or repairs, replacement is the most cost-effective option." },
        { q: "What should I not put down a garbage disposal?", a: "Avoid putting grease, oil, fibrous vegetables (celery, artichokes), starchy foods (pasta, potato peels), coffee grounds, bones, fruit pits, or expandable foods (rice, bread) down your disposal. These can cause clogs, jam the grinding plates, or damage the drain line." },
      ]}
    />
  );
}
