

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OptionalNotificationBanner from "./components/OptionalNotificationBanner";
import MainLogoBanner from "./components/MainLogoBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import TanstackProvider from "./utils/TanstackProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JTSilversmiths | B-C Silversmiths | JTS",
  description: "Vintage Western Silver Show Horse bits, mouthpieces, snaffles and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="emerald">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <TanstackProvider>
            <OptionalNotificationBanner></OptionalNotificationBanner>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </TanstackProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
