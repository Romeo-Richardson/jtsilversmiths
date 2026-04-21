import React from "react";
import SideMenu from "../components/SideMenu";
import ShopDisplay from "../components/ShopDisplay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JTSilversmiths | B-C Silversmiths | JTS",
  description:
    "Vintage Western Silver Show Horse bits, mouthpieces, snaffles, accessories and more",
  keywords: [
    "Horse Bits",
    "Horse Bit",
    "Shop Horse Bits",
    "Shop Horse Accessories",
    "Horse Shop",
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

const page = (): React.ReactNode => {
  return (
    <div className="min-h-screen flex">
      <SideMenu></SideMenu>
      <ShopDisplay></ShopDisplay>
    </div>
  );
};

export default page;
