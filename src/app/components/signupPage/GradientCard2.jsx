"use client";;
import React from "react";
import { BackgroundGradient } from "../../../components/ui/background-gradient";
import Image from "next/image";
import moneyIcon from "../../../data/assets/moneyIcon.png"
export default function GradientCard2() {
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
        <button
          className="rounded-full pl-3 pr-2 py-2 text-white flex items-center space-x-1  mt-4 text-xs font-bold bg-zinc-800">
          <span>Sign Up as Worker</span>
          
        </button>
      </BackgroundGradient>
    </div>)
  );
}
