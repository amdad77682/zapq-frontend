import React from "react";

export default function RadioBox({ name }: { name: string }) {
  return (
    <div className="flex flex-col">
      <div className="w-full mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-semibold dark:text-white"
        >
          {name}
        </label>
      </div>
      <div className="flex-1 pb-3">
        <div className="flex flex-wrap gap-2">
          {[0, 1, 2].map((item) => {
            return (
              <label
                key={item}
                htmlFor={item + ""}
                className="flex items-center space-x-2 cursor-pointer  border border-[#32313A] p-2"
              >
                <input
                  type="radio"
                  name="accounttype"
                  id={item + ""}
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-sm font-semibold dark:text-white">
                  Companies
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
