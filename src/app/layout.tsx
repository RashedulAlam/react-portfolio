import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar, { INavbarProps } from "@/components/Navbar/Navbar";
import { NAV_ITEMS } from "@/config/navItems";
import Footer from "@/components/Footer/Footer";
import { HERO_SUMMARY } from "@/config/hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rashedul Alam",
  description: "Portfolio of Rashedul Alam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationProps: INavbarProps = {
    heroEmail: HERO_SUMMARY.email,
    navItems: NAV_ITEMS,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} py-2 px-2 md:px-24 lg:px-24 md:py-5 lg:py-5`}
      >
        <Navbar {...navigationProps} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
