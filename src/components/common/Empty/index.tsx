import Image from "next/image";
import React from "react";

export default function Empty() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center ">
      <Image alt="empty" src={"/images/File.svg"} height={100} width={100} />
      <p className="dark:text-white">No Data found</p>
    </div>
  );
}
