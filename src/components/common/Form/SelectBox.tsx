import React from "react";

export default function SelectBox({
  title,
  value,
  values,
  error_message,
  placehoder,
  onChange,
}: {
  title: string;
  value: string;
  placehoder: string;
  error_message?: string;
  values: { label: string; value: string }[];
  onChange?: any;
}) {
  return (
    <>
      <label
        htmlFor={title}
        className="block text-sm font-semibold dark:text-white "
      >
        {title}
      </label>
      <div className="w-full mt-4 border dark:border-[#32313A]">
        <select
          onChange={onChange}
          value={value}
          className="w-full p-3 text-sm border-gray-300 rounded-md dark:bg-[#201F25] dark:text-white outline-none"
        >
          <option value={""}>{placehoder}</option>
          {Array.isArray(values) &&
            values.map((item) => {
              return (
                <option key={item?.label} value={item?.value}>
                  {item?.label}
                </option>
              );
            })}
        </select>
        {error_message ? <p className="text-red-600">{error_message}</p> : null}
      </div>
    </>
  );
}
