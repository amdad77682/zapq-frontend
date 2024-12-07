"use client";
import React from "react";
interface Itabs {
  name: string;
  value: string;
}
export default function CustomTab({
  selectedTab,
  tabs,
  onSwitchTab,
}: {
  selectedTab: string;
  tabs: Itabs[];
  onSwitchTab: any;
}) {
  return (
    <div className="flex justify-end p-1 sm:justify-between bg-[#F3F4F6] rounded-md">
      <nav className="items-center flex-1 mx-auto space-x-2 text-sm  sm:flex">
        {tabs.map((item) => {
          const selected = selectedTab == item?.value;
          return (
            <a
              key={item?.name}
              onClick={() => {
                onSwitchTab(item?.value);
              }}
              className={`px-6 py-1.5 bg-[#F3F4F6] text-sm cursor-pointer rounded-md whitespace-nowrap`}
              style={{
                background: selected ? "#FFFFFF" : "",
                boxShadow: selected ? "0px 1px 4px 0px #00000040" : "",
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
