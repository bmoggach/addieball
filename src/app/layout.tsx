import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";
import ParticleField from "@/components/ParticleField";
import ScanLines from "@/components/ScanLines";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Addie Moggach #35",
  description: "The Journey Starts Here — Season Two 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-[#030308] text-white font-[family-name:var(--font-inter)] antialiased">
        <CustomCursor />
        <ScanLines />
        <ParticleField count={20} />
        <Nav />
        {children}
      </body>
    </html>
  );
}
