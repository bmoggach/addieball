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
  description: "#35 • Barrie Royals • U12 Rep Basketball • The Journey Starts Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen font-[family-name:var(--font-inter)] antialiased" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
        <CustomCursor />
        <ScanLines />
        <ParticleField count={20} />
        <Nav />
        {children}
      </body>
    </html>
  );
}
