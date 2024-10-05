"use client"
import Image from "next/image";
import TopDescription from "../components/app/landingPage/TopDescription";
import MidDescription from "../components/app/landingPage/MidDescription";
import LowerDescription from "../components/app/landingPage/LowerDescription";
import {FooterPage} from "../components/app/landingPage/FooterPage";
import HeroScrollDemo from "@/components/example/container-scroll-animation-demo";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Navbar from "@/components/app/Navbar";
import TeamSection from "@/components/app/Team/TeamSection";
import FAQSection from "@/components/app/FaqSection";
import MacbookScrollDemo from "@/components/example/macbook-scroll-demo";
import MacbookDemo from "@/components/app/Demo/MacbookDemo";

export default function Home() {
  return (
    <>
    <div className="min-h-screen ">
      <Navbar/>
     <TopDescription/> 
     <MidDescription/>
<HeroScrollDemo/>
     <LowerDescription/>
     <TeamSection/>
     <FAQSection/>
     <MacbookDemo/>
     <TextHoverEffect text={"Labelize"}/>
    </div>
     <FooterPage/>
    </>
  );
}
