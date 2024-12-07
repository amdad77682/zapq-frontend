import React, { useEffect, useState } from "react";

export default function ComboBox({
  title,
  defaultValue,
  placeholder,
  data = [],
  onChangeSearch,
  onSelectValue,
}: {
  title: string;
  defaultValue?: string;
  placeholder?: string;
  data?: any;
  onChangeSearch?: (value: string) => void;
  onSelectValue?: (value: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (defaultValue) {
      setSearch(defaultValue);
    }
  }, [defaultValue]);
  return (
    <div key={title} className="">
      <div className="w-full pt-1 mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-semibold dark:text-white"
        >
          {title}
        </label>
      </div>
      <div className="">
        <input
          key={title}
          className="w-full text-sm border outline-none p-3 dark:bg-[#201F25] border-[#32313A] dark:text-white rounded-md"
          type="text"
          value={search}
          placeholder={placeholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const v = e.target.value;
            setSearch(v);
            setOpen(v.length > 0 ? true : false);
            onChangeSearch && onChangeSearch(v);
          }}
        />

        <div
          key={title}
          className="absolute z-50 w-full max-h-72 p-1 dark:bg-[#201F25] border border-[#32313A] rounded-lg overflow-hidden overflow-y-auto"
          style={{ display: open ? "block" : "none" }}
        >
          {Array.isArray(data) && data?.length > 0 ? (
            data.map((item: any) => {
              return (
                <div
                  key={item?.value}
                  onClick={() => {
                    setSearch(item?.title);
                    onSelectValue && onSelectValue(item?.value);
                    setOpen(false);
                  }}
                  className="cursor-pointer py-2 px-4 w-full text-sm  rounded-lg focus:outline-none"
                >
                  <span className="dark:text-white">{item?.title}</span>
                </div>
              );
            })
          ) : (
            <p className="p-4 dark:text-white">No data found</p>
          )}
        </div>
      </div>
    </div>
  );
}
