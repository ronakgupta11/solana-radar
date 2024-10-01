"use client"
import Image from "next/image";
import TopDescription from "./components/landingPage/TopDescription";
import MidDescription from "./components/landingPage/MidDescription";
import LowerDescription from "./components/landingPage/LowerDescription";
import {FooterPage} from "./components/landingPage/FooterPage";
export default function Home() {
  return (
    <>
    <div className="min-h-screen ">
     <TopDescription/> 
     <MidDescription/>
     <LowerDescription/>
    </div>
     <FooterPage/>
    </>
  );
}
