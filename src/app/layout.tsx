import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClarityProvider } from "@/components/ClarityProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibe Trader Presentation",
  description: "Presentation for Vibe Trader platform",
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
        <ClarityProvider />
        {children}
      </body>
    </html>
  );
}
