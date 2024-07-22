import type { Metadata } from "next";
import {  Ubuntu } from "next/font/google";
import "./globals.css";

const inter = Ubuntu({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"], 
});

export const metadata: Metadata = {
  title: "fitfabric",
  description: "your fitness club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
