"use client";;
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { BackgroundGradient } from "../../../components/ui/background-gradient";
import Image from "next/image";
import tasks from "../../../data/assets/tasks.svg"
import SetRole from "./SetRoleButton";
export default function GradientCard({connected}) {
  return (
    (<div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
        <Image
          src={tasks}
          alt="jordans"
          height="200"
          width="400"
          className="object-contain h-[200px]" />
        <p
          className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
          Create Tasks
        </p>

        <p className="text-sm  text-neutral-400">
        Human intelligence through an API. Access a global, on-demand, 24/7 workforce.
        </p>
       {connected ?<SetRole role={"requester"}/>:<WalletMultiButton  style={{
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
