// app/layout.tsx
import "./globals.css";
import { Sora, DM_Sans } from "next/font/google";
import type { Metadata } from "next";
// import AOSWrapper from "@/components/layout/AOSWrapper";

// Define a secondary font for headings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

// Define a font for your primary body text
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Andrew Anderson | Email Developer Portfolio",
  description:
    "Email Developer specializing in responsive HTML email templates, CRM systems, and campaign troubleshooting. Portfolio featuring real-world email builds and case studies.",
  keywords: [
    "Email Developer",
    "HTML Email",
    "Campaign Monitor",
    "CRM",
    "Frontend Developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body>
        {/*<AOSWrapper /> */}
        {children} {/* no global Header/Footer */}
      </body>
    </html>
  );
}
