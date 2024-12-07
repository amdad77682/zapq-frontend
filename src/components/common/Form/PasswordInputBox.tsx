import React from "react";

export default function PasswordInputBox({
  title,
  placeholder,
  error_message,
  ...rest
}: {
  title: string;
  placeholder: string;
  error_message?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
}) {
  return (
    <div className="space-y-2 flex-1">
      <div className="w-full pt-1">
        <label
          htmlFor="title"
          className="block text-sm font-semibold dark:text-white"
        >
          {title}
        </label>
      </div>
      <div className="flex-1 w-full">
        <input
          type="password"
          placeholder={placeholder}
          className="w-full text-sm border outline-none p-3 dark:bg-[#9a89f3] border-[#32313A] dark:text-white rounded-md"
          {...rest}
        />
        {error_message ? <p className="text-red-600">{error_message}</p> : null}
      </div>
    </div>
  );
}
