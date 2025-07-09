import React from "react";

interface ApplicationCardProps {
  arrowSvg: React.ReactNode;
  campusName: string;
  stateCode: string;
  href: string;
}

export default function ApplicationCard({ arrowSvg, campusName, stateCode, href }: ApplicationCardProps) {
  return (
    <a
      href={href}
      className="aspect-square w-full flex flex-col justify-between p-8 border rounded-xl block hover:bg-gray-50 transition-colors"
    >
      {/* Top block: arrow right-aligned */}
      <div className="flex w-full">
        <span className="ml-auto">{arrowSvg}</span>
      </div>
      {/* Bottom block: state code and campus name, both left-aligned */}
      <div className="flex flex-col items-start gap-y-1">
        <h1 className="text-9xl leading-none" style={{ fontFamily: "'Bagel Fat One', cursive" }}>{stateCode}</h1>
        <h4 className="heading-style-h4">{campusName}</h4>
      </div>
    </a>
  );
} 