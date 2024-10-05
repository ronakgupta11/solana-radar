"use client";
import React from "react";
import VortexDemo from "@/components/example/vortex-demo";
import VortexDemoSecond from "@/components/example/vortex-demo-2";
const TopDescription = () => {
  return (
    <>
      <div className=" flex justify-between bg-[black]  ">
        <div className="bg-[black] w-full">
          <VortexDemo/>
          {/* <VortexDemoSecond/> */}
        </div>
      </div>
    </>
  );
};

export default TopDescription;
