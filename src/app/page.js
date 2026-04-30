import HeroBanner from "@/Components/Banner";
import Marque from "@/Components/Marquee";
import TopCollection from "@/Components/TopCollection";
import Image from "next/image";

export default function Home() {
  return <div className="">
    <HeroBanner></HeroBanner>
    <Marque></Marque>
    <TopCollection></TopCollection>
  </div>;
}
