import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathtub Drain Cleaning | Crystal Drain & Plumbing Wyoming",
  description: "Slow or completely blocked bathtub drain? Crystal Drain & Plumbing clears bathtub drains quickly and thoroughly across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Bathtub Drain Cleaning"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc6005f413258b329ae7d7_k86O_G7TNFDdC_ma5WVjNVqlfiSIZD4rqlVM.jpeg"
      parentCategory={{ label: "Clogged Drains", href: "/service-type/clogged-drains" }}
      tagline="Slow or completely blocked bathtub drain? Crystal Drain & Plumbing clears bathtub drains quickly and thoroughly across Wyoming."
      sections={[
        {
          heading: "Why Bathtub Drains Get Clogged",
          paragraphs: ["Bathtub drains are among the most commonly clogged drains in any home. Hair, soap scum, and body oils accumulate over time in the drain strainer, pop-up stopper, and P-trap. Without regular maintenance, these buildups can cause slow drains and eventually complete blockages."],
        },
        {
          heading: "Our Bathtub Drain Cleaning Methods",
          items: ["Manual removal of hair and debris from the stopper and strainer", "Electric drain snaking to break up blockages in the drain line", "Hydro jetting for stubborn grease and soap scum buildup", "Camera inspection for recurring clogs to identify underlying issues"],
        },
        {
          heading: "Prevent Future Clogs",
          items: ["Install a hair catcher strainer over the drain", "Remove and clean the pop-up stopper monthly", "Pour boiling water down the drain weekly to dissolve soap buildup", "Avoid using soap bars that leave heavy scum residue"],
        }
      ]}
      faqs={[
        { q: "Why does my bathtub drain gurgle?", a: "Gurgling from a bathtub drain usually indicates a partial blockage or a venting problem. When water drains, it pulls air through the partial clog or around improper vent connections, creating the gurgling sound. Crystal Drain & Plumbing can diagnose and resolve the issue quickly." },
      ]}
    />
  );
}
