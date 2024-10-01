"use client";
import React from "react";
import GlobeDemo from "@/components/example/globe-demo";
import VortexDemo from "@/components/example/vortex-demo";
import FlipWordsDemo from "@/components/example/flip-words-demo";
const TopDescription = () => {
  return (
    <>
      <div className=" flex justify-between bg-[black] h-screen ">
        <div className="bg-[black] w-full">
          <VortexDemo/>
        </div>
      </div>
    </>
  );
};

export default TopDescription;
