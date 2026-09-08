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
    "Horse Hair Mecates",
    "Horsehair Mecates",
    "Horsehair Ropes",
    "Horse Hair Ropes",
    "Horse Hair Mecates for sale",
    "Horsehair Mecates for Sale",
    "Mecate Reins",
    "Mecate Rope",
    "Mecate Reins for Bosal",
    "Mecates Reins with Slobber Straps",
    "Mecates Reins with Rawhide Rein Connectors",
    "Mecate Reins with Snaps",
    "Custom Mecates",
    "Hackamores",
    "Horse Hair Split Reins with Snaps",
    "Horsehair Split Reins with Snaps",
    "Horsehair Split Reins with Rawhide Rein Connectors",
    "Horse Hair Split Reins with Rawhide Rein Connectors",
    "Horsehair Roping Reins with Rawhide Rein Connectors",
    "Horse Hair Roping Reins with Rawhide Rein Connectors",
    "Horse Hair Get Down Ropes",
    "Horsehair Get Down Ropes",
    "Horsehair Cinches",
    "Horse Hair Cinches",
    "Horsehair Tassels",
    "Horse Hair Tassels",
    "Horse Hair Shoefly Tassels",
    "Whole sale",
    "Horse Hair Tassels and keychains",
    "Horse Hair Hat Bands",
    "Horse Hair Bracelets",
    "Horse Hair Earrings",
    "Silver Spurs",
    "Silver Snaffels",
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
