import React from "react";

export default function Status({ bg, name }: { bg: string; name: string }) {
  return (
    <div className="flex items-center justify-start gap-1 capitalize ">
      <span
        className={`h-[8px] w-[8px] rounded-full`}
        style={{
          background: bg,
        }}
      ></span>
      {name}
    </div>
  );
}
