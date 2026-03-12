import CountyPage from "@/components/CountyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing & HVAC Services Sweetwater County | Strong Plumbing Inc",
  description: "Expert plumbing and HVAC services throughout Sweetwater County. Strong Plumbing Inc serves all cities and communities in Sweetwater County, Wyoming.",
};

export default function Page() {
  return (
    <CountyPage
      county="Sweetwater County"
      state="Wyoming"
      tagline="Choose your city in Sweetwater County, and call Strong Plumbing Inc."
      cities={[
        { name: "Rock Springs, WY", slug: "rock-springs-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09f7853aa505134208b9_mKzZ_6D9n16sk4BXKmQVAppfkg8Sh7qER_mwaL3kC2M.webp" },
        { name: "Green River, WY", slug: "green-river-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09c36e4e6e883728a9b6_EfkQ_vwq9ioYKwDlMCRM9HOzXwxrX75_ftCbWTePF44.webp" },
        { name: "Reliance, WY", slug: "reliance-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09f0db3ef3d37ea5c4ff_H88c_oyYCKsS2MsTYGeh7-sNWWd0NVWaE7mwJSeO60o.webp" },
        { name: "Farson, WY", slug: "farson-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09b117d6d35491c6b1b6_AnKzJfRRuh-g9ZAtF1Crbxn5JODd0qtZt65eXIBIQao.webp" },
        { name: "Superior, WY", slug: "superior-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09fada13f9ade4499567_gVxNr-5rxute0muyWpXaN1dFwP2ijWJgAi9fBNKvIcA.webp" },
        { name: "Eden, WY", slug: "eden-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09aacbdfabda680d4894_WFnkT8CBK59IJTUaMeyEZve4vCXNxD-Lu8kxFoh6_ZQ.webp" },
        { name: "Jamestown, WY", slug: "jamestown-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09c58cb81c23472218db_9gjcgLXK3_xuD2AePlcR866AHYZKMFMW7wBvZ1TqUiE.webp" },
        { name: "Wamsutter, WY", slug: "wamsutter-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09fecbdfabda680d9ebe_lHmmyMuy7QXPn4uUQX_WUlJMSSb-buFuT1H7ox7BYuo.webp" },
        { name: "Point of Rocks, WY", slug: "point-of-rocks-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09e8e171f51614868c59_OySMnT6j0Ua-BiLtHwUmBnlmatdSFYSpqMo2cTSBv-g.webp" },
        { name: "Granger, WY", slug: "granger-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09c0cbdfabda680d5a10_Wme6j9kn88EuqeXhJUYjlLnblIrXGjzeOe7epadF9XI.webp" },
        { name: "McKinnon, WY", slug: "mckinnon-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09dba777d5ef4e7002ca_1Bet0xKHn-jFpczZJYxDXAWmiQ8b0CsgDBhrJUCs7P0.webp" },
      ]}
    />
  );
}
