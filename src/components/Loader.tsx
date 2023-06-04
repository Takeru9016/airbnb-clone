"use client";

import { PuffLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <PuffLoader color="#FF385C" size={100} />
    </div>
  );
}