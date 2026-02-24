import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Collision SS | Collision Estimate Review & Claim Support",
  description:
    "Independent collision estimate review and claim support. We identify missing operations, OEM procedure requirements, and documentation gaps before repairs begin.",
  openGraph: {
    title: "Collision SS",
    description:
      "Independent collision estimate review and claim support.",
    url: "https://www.collisionss.com",
    siteName: "Collision SS",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
