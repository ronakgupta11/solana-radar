import React from "react";
import { Vortex } from "../ui/vortex";
import TypewriterEffectDemo from "./typewriter-effect-demo-2";
import Link from "next/link";
export default function VortexDemoSecond() {
  return (
    (<div
      className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
        <TypewriterEffectDemo/>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        Transform raw datasets into powerful insights. Upload your data and let our marketplace of expert labelers prepare it for AI training
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <Link href={"/signup"}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span
              className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span
              className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Join Now !
            </span>
          </Link>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div>
      </Vortex>
    </div>)
  );
}
