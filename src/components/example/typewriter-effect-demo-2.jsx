"use client";
import { TypewriterEffect, TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function TypewriterEffectDemo() {
  const words = [
    {
      text: "Unlock",
    },

    {
      text: "the",
    },
    {
      text: "value",
    },
    {
      text: "of",
    },
    {
      text: "Your",
    },
    {
      text: "Data",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    (<div className="flex flex-col items-center justify-center ">
     
      <TypewriterEffect words={words} />
      
    </div>)
  );
}
