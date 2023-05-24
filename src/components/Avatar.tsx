"use client";

import Image from "next/image";

import { image } from "@/assets";

interface AvatarProps {
  src: string | null | undefined;
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <Image
      className="rounded-full"
      src={src || image.placeholder}
      alt="Avatar"
      width={30}
      height={30}
    />
  );
}
