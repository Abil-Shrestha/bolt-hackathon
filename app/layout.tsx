import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const STKserif = localfont({
  src: [
    {
      path: "../public/fonts/STF-serif.woff",
      weight: "400",

    },
  ],
  variable: "--font-stk-serif",
});

export const metadata: Metadata = {
  title: "Bolt.new hackathon",
  description: "Biggest hackathon in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${STKserif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
