"use client"
import Image from "next/image";
import TopDescription from "../components/app/landingPage/TopDescription";
import MidDescription from "../components/app/landingPage/MidDescription";
import LowerDescription from "../components/app/landingPage/LowerDescription";
import {FooterPage} from "../components/app/landingPage/FooterPage";
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
