import Image from "next/image";
import React from "react";

export default function Pattern() {
  return (
    <Image
      src="/pattern.svg"
      alt="pattern"
      height={86}
      width={704}
      className="absolute top-0 z-0 selection:bg-inherit"
    />
  );
}
