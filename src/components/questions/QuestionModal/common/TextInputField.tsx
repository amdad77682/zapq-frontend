import React from 'react';

interface OptionInputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: { style: string };
  disabled?: boolean;
}

const TextInputField: React.FC<OptionInputFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  style,
  disabled,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={`relative w-full ${style?.style || ''}`}>
      <input
        name={name}
        type={type}
        className={`peer w-full h-full bg-transparent font-sans font-base outline outline-0 
          focus:outline-0 transition-all placeholder-shown:border 
          placeholder-shown:border-[#E5E7EB] placeholder-shown:border-t-[#E5E7EB] border 
          border-[#E5E7EB] text-black text-sm px-3 py-2.5 rounded-[7px] border-t-transparent
          ${
            disabled ? 'cursor-not-allowed text-gray-500 border-[#E5E7EB]' : ''
          }`}
        placeholder=" "
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      <label
        className={`flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible 
          truncate text-[#6B7280] peer-placeholder-shown:text-[#6B7280] leading-tight peer-focus:leading-tight 
          transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] 
          peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
          peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-1 before:border-l 
          peer-focus:before:border-l-1 before:pointer-events-none before:transition-all 
          after:content[' '] after:block after:flex-grow after:box-border after:w-1.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent 
          after:rounded-tr-md after:border-t peer-focus:after:border-t-1 after:border-r peer-focus:after:border-r-1 after:pointer-events-none after:transition-all 
          peer-placeholder-shown:leading-[3.75] ${
            disabled
              ? 'text-gray-500'
              : 'before:border-[#E5E7EB] after:border-[#E5E7EB]'
          }`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextInputField;
