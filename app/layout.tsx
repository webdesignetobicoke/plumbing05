import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strong Plumbing Inc - Toronto Drain & Plumbing Services",
  description: "Strong Plumbing Inc provides expert drain cleaning, sewer repair, and emergency plumbing services to Toronto and the Greater Toronto Area. Call (647) 686-4566 today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}
