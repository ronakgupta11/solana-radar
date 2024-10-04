"use client"
import Image from "next/image";
import TopDescription from "../components/app/landingPage/TopDescription";
import MidDescription from "../components/app/landingPage/MidDescription";
import LowerDescription from "../components/app/landingPage/LowerDescription";
import {FooterPage} from "../components/app/landingPage/FooterPage";
import MacbookScrollDemo from "@/components/example/macbook-scroll-demo";
import HeroScrollDemo from "@/components/example/container-scroll-animation-demo";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import TextHoverEffectDemo from "@/components/example/text-hover-effect-demo";
export default function Home() {
  return (
    <>
    <div className="min-h-screen ">
     <TopDescription/> 
     <MidDescription/>
<HeroScrollDemo/>
     <LowerDescription/>
     {/* <TextHoverEffectDemo/> */}
     <TextHoverEffect text={"Labelize"}/>
    </div>
     <FooterPage/>
    </>
  );
}
