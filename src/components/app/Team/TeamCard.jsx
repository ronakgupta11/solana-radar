"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import Link from "next/link";
import { TwitterIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";


export function TeamCard({twitter,github,name,desc,image}) {
  return (
    (<CardContainer className="inter-var max-w-80">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"

          className="text-xl font-bold text-neutral-600 dark:text-white">
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
         {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={twitter}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            <TwitterIcon className="h-5 w-5"/>
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={github}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            <GithubIcon className="h-5 w-5"/>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>)
  );
}
