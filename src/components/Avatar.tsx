"use client";

import Image from "next/image";

import { image } from "@/assets";

export default function Avatar() {
  return (
    <Image
      className="rounded-full"
      src={image.placeholder}
      alt="Avatar"
      width={30}
      height={30}
    />
  );
}
