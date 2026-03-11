import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toilet Installation | Crystal Drain & Plumbing Wyoming",
  description: "If you are looking to have a licensed professional plumber install a toilet, look no further. Crystal Drain & Plumbing has been providing toilet installation services since 2013.",
};

export default function Page() {
  return (
    <ServicePage
      title="Toilet Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc60a4bfea45895e574b2b_M78a0zU3TygXwi6M3JXY-LNi_qqWb1n6VgtuQoQNj-w.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="If you are looking to have a licensed professional plumber install a toilet, look no further. Crystal Drain & Plumbing has been providing toilet installation services since 2013."
      sections={[
        {
          heading: "Top Rated Toilet Installation Company in Wyoming",
          paragraphs: ["Crystal Drain & Plumbing is a top-rated Wyoming plumbing service company specializing in residential toilet installations. With more than ten years of experience and thousands of satisfied customers, we have the toilet installation services in Rock Springs, WY, that you can count on. Our experts are experienced with all types of toilets."],
        },
        {
          heading: "Is It Time For A New Toilet?",
          paragraphs: ["Replacing your old toilet with a new toilet requires plumbing expertise and the right tools for the job. The experts at Crystal Drain & Plumbing will carefully remove the nuts and bolts holding down the old toilet before performing a safe installation. We want to make sure you take care of yours in the utmost comfort."],
        },
        {
          heading: "Three Signs Your Toilet Needs Replacement",
          items: ["Your toilet runs constantly", "Your toilet leaks or has a weak flush", "Your toilet is aged or has discoloration"],
        },
        {
          heading: "Types of Toilets We Install",
          items: ["Two-piece toilets (standard)", "One-piece toilets", "Wall-hung toilets", "Comfort height (ADA) toilets", "Dual-flush and water-saving models", "TOTO Washlet and bidet toilet seats"],
        }
      ]}
      faqs={[
        { q: "How long does toilet installation take?", a: "A standard toilet replacement takes 1-2 hours. This includes removing the old toilet, inspecting and replacing the wax ring and flange bolts, installing the new toilet, and testing for leaks and proper flush performance." },
        { q: "Do you offer same-day toilet installation?", a: "In most cases, yes. Crystal Drain & Plumbing offers same-day service when a toilet completely fails. Contact us at (647) 686-4566 and we'll do our best to have a plumber at your home the same day." },
      ]}
    />
  );
}
