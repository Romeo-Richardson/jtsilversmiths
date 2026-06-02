import Image from "next/image";
import MainLogoBanner from "./components/MainLogoBanner";
import OptionalNotificationBanner from "./components/OptionalNotificationBanner";
import Navbar from "./components/Navbar";
import MainHeader from "./components/MainHeader";
import BestSellers from "./components/BestSellers";
import WhatsNew from "./components/WhatsNew";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JTSilversmiths | B-C Silversmiths | JTS",
  description:
    "Vintage Western Silver Show Horse bits, mouthpieces, snaffles, accessories and more",
  keywords: [
    "Horse Bits",
    "Horse Bit",
    "Western Silver Show",
    "Horse Mouthpiece",
    "Snaffles",
    "Horse Accessories",
    "Horse Hair",
    "JTSilversmiths",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader name="Featured Items"></MainHeader>
      <BestSellers></BestSellers>
      <MainHeader name="What's New"></MainHeader>
      <WhatsNew></WhatsNew>
    </div>
  );
}
