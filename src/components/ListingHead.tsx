"use client";

import Image from "next/image";

import { useCountries } from "@/hooks";
import { SafeUser } from "@/types";
import Heading from "./Heading";
import HeartButton from "./HeartButton";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}

export default function ListingHead({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}: ListingHeadProps) {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="relative w-full h-[60vh] overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt="Image"
          className="object-cover w-full"
          fill
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
}
