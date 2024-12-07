"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
interface Itabs {
  name: string;
  value: string;
}
export default function Tabs({
  defaultValue,
  tabs,
}: {
  defaultValue: string;
  tabs: Itabs[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const query: any = useSearchParams();

  return (
    <div className="flex justify-end p-4 sm:justify-between">
      <nav className="items-center flex-1 hidden mx-auto space-x-2 text-sm text-gray-700 sm:flex">
        {tabs.map((item) => {
          const selected =
            query?.get("type") == item?.value ||
            (!query?.get("type") && defaultValue == item?.value);

          return (
            <a
              key={item?.name}
              onClick={() => {
                router.push(`${pathname}?type=${item?.value}`);
              }}
              className={`px-5 py-3 text-[#FFFFFF] rounded-md font-semibold cursor-pointer`}
              style={{
                background: selected ? "#019974" : "#151419",
              }}
            >
              {item?.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
