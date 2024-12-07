import React from 'react';

interface InputBoxProps extends React.HTMLProps<HTMLInputElement> {
  title: string;
  placeholder: string;
  error_message?: string;
}

export default function InputBox({
  title,
  placeholder,
  error_message,
  ...rest
}: InputBoxProps) {
  return (
    <div className="space-y-2 flex-1">
      {title && (
        <div className="w-full pt-1">
          <label
            htmlFor={title.toLowerCase()}
            className="block text-sm font-semibold dark:text-white"
          >
            {title}
          </label>
        </div>
      )}
      <div className="flex-1 w-full">
        <input
          id={title.toLowerCase()}
          type="text"
          placeholder={placeholder}
          className={`w-full h-12 px-5 py-2 rounded-xl border border-solid ${
            error_message ? 'border-red-600' : 'border-[#9CA3AF]'
          } focus:border-[#306BF4] focus:outline-none text-base text-black`}
          {...rest}
        />
        {error_message && (
          <p className="text-red-600 mt-1 text-xs italic">{error_message}</p>
        )}
      </div>
    </div>
  );
}
