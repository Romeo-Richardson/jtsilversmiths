import React from "react";
import SideMenu from "../../components/SideMenu";
import ShopDisplay from "../../components/ShopDisplay";
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
    "Mecates",
    "Horse Mouthpiece",
    "Snaffles",
    "Horse Accessories",
    "Horse Hair",
    "JTSilversmiths",
    "Western Show Bridle with Silver",
    "Silver Western SHow Bits",
    "Spurs",
    "Silver Spurs",
    "Horse Bit Collection",
    "Hundreds of Western Bits",
    "Vintage Spade Bits",
    "Silver Show Bits for sale",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

// export async function generateMeta(){
//   return {
//     title: "JTSilversmiths | B-C Silversmiths | JTS",
//   description:
//     "Vintage Western Silver Show Horse bits, mouthpieces, snaffles, accessories and more",
//   keywords: [
//     "Horse Bits",
//     "Horse Bit",
//     "Shop Horse Bits",
//     "Shop Horse Accessories",
//     "Horse Shop",
//     "Western Silver Show",
//     "Horse Mouthpiece",
//     "Snaffles",
//     "Horse Accessories",
//     "Horse Hair",
//     "JTSilversmiths",
//   ],
//   robots: {
//     index: true,
//     follow: true,
//     nocache: true,
//   },
//   }
// }

const page = (): React.ReactNode => {
  return (
    <div className="min-h-screen flex">
      <SideMenu></SideMenu>
      <ShopDisplay></ShopDisplay>
    </div>
  );
};

export default page;
