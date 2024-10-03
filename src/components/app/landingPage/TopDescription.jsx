"use client";
import React from "react";
import GlobeDemo from "@/components/example/globe-demo";
import VortexDemo from "@/components/example/vortex-demo-2";
import FlipWordsDemo from "@/components/example/flip-words-demo";
import VortexDemoSecond from "@/components/example/vortex-demo-2";
const TopDescription = () => {
  return (
    <>
      <div className=" flex justify-between bg-[black]  ">
        <div className="bg-[black] w-full">
          {/* <VortexDemo/> */}
          <VortexDemoSecond/>
        </div>
      </div>
    </>
  );
};

export default TopDescription;
