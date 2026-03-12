import CountyPage from "@/components/CountyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing & HVAC Services Laramie County | Strong Plumbing Inc",
  description: "Expert plumbing and HVAC services throughout Laramie County. Strong Plumbing Inc serves all cities and communities in Laramie County, Wyoming.",
};

export default function Page() {
  return (
    <CountyPage
      county="Laramie County"
      state="Wyoming"
      tagline="Choose your city in Laramie County, and call Strong Plumbing Inc."
      cities={[
        { name: "Cheyenne, WY", slug: "cheyenne-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09a5be0b68b15db1a6e8_lYuqBOK9fRuPmNE3FaHxT52sMQFzXnVQAHLPGDXYEAs.webp" },
        { name: "Pine Bluffs, WY", slug: "pine-bluffs-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09e5be0b68b15db1fe3c_FWh_1SQYjyU5ckCQv9cWRGJ9bV2TpkQFn8iMIbVBR9A.webp" },
      ]}
    />
  );
}
