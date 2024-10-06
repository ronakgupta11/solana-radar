import React from "react";
import { MacbookScroll } from "../../ui/macbook-scroll";
import Link from "next/link";
import YouTubeEmbed from "./DemoVideo";

export default function MacbookDemo() {
  return (
    (<div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Watch the Demo.
          </span>
        }
        badge={
          <Link href="https://youtube.com">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        ChildComponent={YouTubeEmbed}
        showGradient={false} />
    </div>)
  );
}
// youtube logo
const Badge = ({
  className
}) => {
  return (
    <svg
    height="40px"
    width="40px"
    viewBox="0 0 461.001 461.001"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="title"
  >
    <title id="title">Play Button</title>
    <g>
      <path
        fill="#F61C0D"
        d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
           c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
           C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
           c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
      />
    </g>
  </svg>
  );
};