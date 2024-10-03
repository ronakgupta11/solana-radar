"use client";;
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { BackgroundGradient } from "../../../components/ui/background-gradient";
import Image from "next/image";
import moneyIcon from "../../../data/assets/moneyIcon.png"
import SetRole from "./SetRoleButton";
export default function GradientCard2({connected}) {
  
  const handleSignIn = ()=>{
    console.log("sign IN")
  }
  return (
    (<div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
        <Image
          src={moneyIcon}
          alt="jordans"
          height="250"
          width="300"
          className="object-contain h-[200px]" />
        <p
          className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
          Make Money
        </p>
        <p className="text-sm  text-neutral-400">
        Make money in your spare time. Get paid for completing simple tasks.
        </p>
        {connected ? <SetRole role={"worker"}/>: <WalletMultiButton  style={{
    borderRadius: '40px', // Fully rounded
    backgroundColor: '#1f2937', // Dark grey color
    color: '#ffffff', // White text for contrast
    padding: '10px 20px', // Padding for better button size
    border: 'none', // Remove border if any
    cursor: 'pointer', // Pointer cursor to indicate it's clickable
  }} />}
      </BackgroundGradient>
    </div>)
  );
}
