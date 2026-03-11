import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shower Drain Cleaning | Crystal Drain & Plumbing Wyoming",
  description: "Slow shower drain? Crystal Drain & Plumbing clears shower drains quickly and thoroughly across Wyoming using professional drain cleaning equipment.",
};

export default function Page() {
  return (
    <ServicePage
      title="Shower Drain Cleaning"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc6005f413258b329ae7d7_k86O_G7TNFDdC_ma5WVjNVqlfiSIZD4rqlVM.jpeg"
      parentCategory={{ label: "Clogged Drains", href: "/service-type/clogged-drains" }}
      tagline="Slow shower drain? Crystal Drain & Plumbing clears shower drains quickly and thoroughly across Wyoming using professional drain cleaning equipment."
      sections={[
        {
          heading: "Why Shower Drains Get Clogged",
          paragraphs: ["Shower drains are the most frequently clogged drains in any home. Hair is the primary culprit — it binds with soap scum and body oils to form tough clogs in the drain strainer, P-trap, and drain line. Even with a hair catcher in place, some hair will bypass the strainer and accumulate in the drain over time."],
        },
        {
          heading: "Our Shower Drain Cleaning Process",
          items: ["Remove and clean the drain cover and strainer", "Manually remove accessible hair and debris", "Use a drain snake to break up and remove deeper clogs", "Hydro jet for stubborn soap scum and grease buildup", "Camera inspect for recurring clogs to find underlying cause", "Flush and test to confirm full flow"],
        },
        {
          heading: "DIY Prevention Tips",
          items: ["Use a quality hair catcher over your shower drain", "Clean the drain cover and strainer monthly", "Pour boiling water down the drain weekly to dissolve soap buildup", "Avoid letting large amounts of shaving cream or heavy conditioner go down the drain"],
        }
      ]}
      faqs={[
        { q: "Why does my shower drain gurgle?", a: "Gurgling from a shower drain typically indicates a partial blockage, a dried-out P-trap (in an infrequently used shower), or a venting problem. Crystal Drain & Plumbing can diagnose whether it's a blockage or a vent issue." },
      ]}
    />
  );
}
