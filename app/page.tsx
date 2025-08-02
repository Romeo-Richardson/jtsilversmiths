import Image from "next/image";
import MainLogoBanner from "./components/MainLogoBanner";
import OptionalNotificationBanner from "./components/OptionalNotificationBanner";
import Navbar from "./components/Navbar";
import MainHeader from "./components/MainHeader";
import BestSellers from "./components/BestSellers";
import WhatsNew from "./components/WhatsNew";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader name="Best Sellers"></MainHeader>
      <BestSellers></BestSellers>
      <MainHeader name="What's New"></MainHeader>
      <WhatsNew></WhatsNew>
    </div>
  );
}
