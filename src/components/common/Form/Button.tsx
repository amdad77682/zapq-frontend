import React from 'react';

export default function Button({
  type,
  submitType = 'button',
  children,
  onClick,
  class_name,
  isDisabled,
}: {
  type?: 'outline' | 'primary' | 'secondary' | 'default';
  submitType?: 'submit' | 'button';
  children: React.ReactNode;
  onClick?: any;
  class_name?: string;
  isDisabled?: boolean;
}) {
  if (type == 'outline') {
    return (
      <button
        disabled={isDisabled}
        type={submitType}
        onClick={onClick}
        className={`w-full flex items-center justify-center gap-1 px-4 py-4 space-x-2 text-base font-semibold leading-4 transition-colors duration-300 bg-[#FFF] shadow-[0px_3px_0px_0px_#1CAB55]
           rounded-xl hover:bg-gray-200 text-[#1CAB55] border-[#1CAB55] border-2 border-solid ${class_name}`}
      >
        {children}
      </button>
    );
  } else if (type == 'primary') {
    return (
      <button
        disabled={isDisabled}
        type={submitType}
        onClick={onClick}
        className={`flex items-center gap-1 px-4 py-3 space-x-2 text-sm font-medium leading-4 transition-colors duration-300 bg-[#0A0616] rounded-xl hover:bg-slate-800 text-white ${class_name}`}
      >
        {children}
      </button>
    );
  } else if (type == 'secondary') {
    return (
      <button
        disabled={isDisabled}
        type={submitType}
        onClick={onClick}
        className={`w-full flex items-center justify-center gap-1 px-4 py-4 space-x-2 text-base font-semibold leading-4 transition-colors duration-300 bg-[#1CAB55] shadow-[0px_3.368px_0px_0px_#107036]
           rounded-xl hover:bg-green-800 text-white ${class_name}`}
      >
        {children}
      </button>
    );
  } else if (type == 'default') {
    return (
      <button
        disabled={isDisabled}
        onClick={onClick}
        type={submitType}
        className={`flex items-center gap-1 px-4 py-3 space-x-2 text-sm font-medium leading-4 transition-colors duration-300 ${class_name}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      disabled={isDisabled}
      type={submitType}
      className={`flex px-4 py-3 space-x-2 text-sm font-medium leading-4 text-green transition-colors duration-300 border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 ${class_name}`}
    >
      {children}
    </button>
  );
}
