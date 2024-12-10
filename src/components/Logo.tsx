import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="logo"
        height={27}
        width={134}
        className="relative z-1 selection:bg-inherit h-[27.5px]"
      />
    </Link>
  );
}
