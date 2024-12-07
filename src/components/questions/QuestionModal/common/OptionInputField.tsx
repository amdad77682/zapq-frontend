import React, { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

interface OptionInputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: { style: string };
  disabled?: boolean;
  feedbackEnabled: boolean;
  feedbackText?: string;
}

const OptionInputField: React.FC<OptionInputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  style,
  disabled,
  feedbackEnabled,
  feedbackText,
}) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [currentFeedback, setCurrentFeedback] = useState(feedbackText || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  const handleFeedbackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentFeedback(event.target.value);
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
      <div
        className={`peer w-full bg-transparent font-sans font-base outline outline-0 
          transition-all placeholder-shown:border 
          border border-[#E5E7EB] text-black text-sm px-3 py-2.5 rounded-[7px]
          flex flex-col ${
            disabled ? "cursor-not-allowed text-gray-500 border-[#E5E7EB]" : ""
          }`}
      >
        {/* Uploaded Image */}
        {uploadedImage && (
          <div className="flex items-center gap-0.5 mb-2 group">
            <img
              src={uploadedImage}
              alt="uploaded"
              className="relative w-[100px] h-[100px] border rounded-[5px] border-[rgba(0,0,0,0.20)] bg-[#F7F7F7] cursor-pointer object-contain"
              key="uploaded-image"
            />
            <div
              className="absolute top-3 left-[120px] flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100
            bg-[#E5E7EB] border border-gray-300 px-0.5 py-1 rounded-[32px]"
            >
              <IoClose
                onClick={handleRemoveImage}
                className="w-4 h-4 text-gray-500 cursor-pointer"
                title="Delete"
              />
              <div className="border-t border-gray-300 mt-1 pt-1">
                <MdEdit
                  onClick={handleImageIconClick}
                  className="w-4 h-4 text-gray-500 cursor-pointer"
                  title="Edit"
                />
              </div>
            </div>
          </div>
        )}

        <label
          className={`flex w-full bg-white select-none pointer-events-none absolute left-3 font-normal !overflow-visible 
            truncate text-[11px] text-[#6B7280] leading-tight -top-1.5 before:content[' '] before:block before:box-border 
            before:mt-[6.5px] before:mr-1 before:rounded-tl-md before:pointer-events-none before:border-[#E5E7EB] after:content[' '] after:w-3 after:-h-1
            after:flex-grow after:box-border after:mt-[6.5px] after:ml-1 after:border-[#E5E7EB] after:border-t after:rounded-tr-md after:mr-3
            ${disabled ? "text-gray-500" : "text-[#6B7280]"}`}
        >
          {label}
        </label>

        {/* Input Field with Image and Text Options */}
        <div className="flex items-center">
          <input
            name={name}
            type={type}
            className="bg-white outline-none flex-grow text-[#111827] text-sm"
            placeholder=""
            value={value}
            onChange={handleChange}
            disabled={disabled}
          />
          {/* Image and Text Options */}
          <div className="flex items-center gap-2 ml-2">
            <img
              src="https://placehold.co/600x400.png"
              alt="katex-icon"
              className="cursor-pointer"
            />
            <img
              src="https://placehold.co/600x400.png"
              alt="image-add-icon"
              className="cursor-pointer"
              onClick={handleImageIconClick}
            />
          </div>
        </div>

        {/* Feedback Section */}
        {feedbackEnabled && (
          <div
            className={`-mx-3 -my-2.5 mt-2 px-3 py-2.5 text-sm text-gray-600 rounded-b-md border-t border-[#E5E7EB] ${
              currentFeedback.length > 0 ? "bg-[#F5F9FF]" : "bg-white"
            }`}
          >
            <input
              type="text"
              value={currentFeedback}
              onChange={handleFeedbackChange}
              placeholder="+ ফিডব্যাক দিন"
              className="w-full bg-transparent outline-none text-sm text-gray-600"
            />
          </div>
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

export default OptionInputField;
