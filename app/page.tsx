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
    "Western Sterling Silver Show Bits",
    "Western Silver Bits",
    "Silver Bits",
    "Western Sterling Silver Show Spurs",
    "Western Silver Spurs",
    "Silver Spurs",
    "Western Sterling Silver Show Snaffles",
    "Western Silver Snaffles",
    "Silver Snaffles",
    "Vintage Style Silver Bits",
    "Mane Horsehair Mecates",
    "Mane Horse Hair Mecates",
    "Horse Hair Cinches",
    "Horsehair Cinches",
    "Horse Hair Fiador",
    "Horsehair Fiador",
    "Horse Hair Tassles",
    "Horsehair Tassles",
    "Horse Hair Bracelets",
    "Horsehair Bracelets",
    "Horse Hair Hatband",
    "Horsehair Hatband",
    "Rawhide Bosals",
    "Rawhide Romals",
    "Rawhide Reins",
    "Western Cowboy Tack",
    "Silver Conchos & Buckle sets",
    "Western Style Gifts",
    "Western Style Money Clips",
    "Western Style Cowboy Gear",
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
