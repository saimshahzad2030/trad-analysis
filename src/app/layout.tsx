import type { Metadata } from "next";
import "./globals.css";
import { inter, poppins } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Trading App",
  description: "A trading app built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
