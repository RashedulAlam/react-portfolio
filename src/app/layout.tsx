import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { NAV_ITEMS } from "@/config/navItems";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar navItems={NAV_ITEMS} />
        {children}
      </body>
    </html>
  );
}
