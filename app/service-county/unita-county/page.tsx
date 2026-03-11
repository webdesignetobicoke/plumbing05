import CountyPage from "@/components/CountyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing & HVAC Services Uinta County | Crystal Drain & Plumbing",
  description: "Expert plumbing and HVAC services throughout Uinta County. Crystal Drain & Plumbing serves all cities and communities in Uinta County, Wyoming.",
};

export default function Page() {
  return (
    <CountyPage
      county="Uinta County"
      state="Wyoming"
      tagline="Choose your city in Uinta County, and call Crystal Drain & Plumbing."
      cities={[
        { name: "Evanston, WY", slug: "evanston-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09afbe0b68b15db1c0a6_HEuqiK2lDABOajJ8ZAaA-52VGQ9MmG8c5u9Eo7EPNR8.webp" },
        { name: "Lyman, WY", slug: "lyman-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09d3a3ae0e01b74b2e11_DdMqYvAMvzqGXGpGST0JNPBJaJwNjwIf9A7sM-k3Xes.webp" },
        { name: "Mountain View, WY", slug: "mountain-view-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09de9d7ab3cff8b0e624_B0OFv73n0kp2BNi58aJ6S7_VnQ2VBWMoQMUgLo0hhbk.webp" },
        { name: "Ft Bridger, WY", slug: "ft-bridger-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09b81e3462cbcdf6de90_Lj8rdcpLAQFlBsVelgxuIlU3UiknBi9FP3yWmDrFuYw.webp" },
        { name: "Lonetree, WY", slug: "lonetree-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09d6a3ae0e01b74b2b0c_HuDpJmWJl8ND6K1YGrr5kC9OsI_Tux2CeEq2oT-DPPM.webp" },
        { name: "Robertson, WY", slug: "robertson-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09f3db3ef3d37ea5c4ca_LH8bLfUZrTR_3OO7O7aBZx7wKQ7l9E8TQIW0TUXXkYo.webp" },
      ]}
    />
  );
}
