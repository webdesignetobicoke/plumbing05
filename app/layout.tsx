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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
