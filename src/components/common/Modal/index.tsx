import React from "react";
import { useOutsideHandler } from "../hooks/useOutsideHandler";

export default function Modal({
  title,
  isOpen,
  closeModal,
  children,
}: {
  title: string;
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}) {
  const ref = React.useRef(null);
  useOutsideHandler(ref, () => {
    closeModal();
  });
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-30 flex items-start justify-between p-4 pt-20 md:items-center md:pt-0">
      <div
        ref={ref}
        className="relative z-50 w-full max-w-2xl pt-1 mx-auto bg-white dark:bg-[#32313A] rounded border dark:border-[#32313A]"
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-6 ">
          <div className="relative flex items-center space-x-2">
            <h2 className="text-base font-semibold dark:text-white">{title}</h2>
          </div>
        </div>

        <div className="relative h-full px-2 py-4 md:px-2 md:py-6 ">
          {children}
        </div>
      </div>
    </div>
  );
}
