import React, { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";

const QuestionField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  style,
  disabled,
}: {
  label: string;
  name: string;
  type?: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: { style: string };
  disabled?: boolean;
}) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={`relative w-full ${style?.style || ""}`}>
      <input
        name={name}
        type={type}
        className={`peer w-full h-full bg-transparent font-sans font-base outline outline-0 
          focus:outline-0 transition-all placeholder-shown:border 
          placeholder-shown:border-[#E5E7EB] placeholder-shown:border-t-[#E5E7EB] border 
          border-[#E5E7EB] text-black text-sm px-3 py-2.5 rounded-[7px] border-t-transparent
          ${
            disabled ? "cursor-not-allowed text-gray-500 border-[#E5E7EB]" : ""
          }`}
        placeholder=" "
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      {/* TODO: katex */}
      {/* <RenderKetex value={value} is_katex={true} /> */}
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
              ? "text-gray-500"
              : "before:border-[#E5E7EB] after:border-[#E5E7EB]"
          }`}
      >
        {label}
      </label>

      {/* Image and Text Options */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-3">
        {/* Display Uploaded Image */}
        <img
          src="https://placehold.co/600x400.png"
          alt="katex-icon"
          className="cursor-pointer"
        />
        {uploadedImage ? (
          <div className="flex items-center gap-0.5">
            <img
              src={uploadedImage}
              alt="uploaded"
              className="w-6 h-6 cursor-pointer border border-gray-300 object-contain"
              onClick={handleRemoveImage}
              key="uploaded-image"
            />
            <IoClose
              onClick={handleRemoveImage}
              className="w-4 h-4 cursor-pointer text-gray-500"
            />
          </div>
        ) : (
          <>
            <img
              src="https://placehold.co/600x400.png"
              alt="image-add-icon"
              className="cursor-pointer"
              onClick={handleImageIconClick}
            />
          </>
        )}
      </div>

      {/* Hidden Image File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default QuestionField;
