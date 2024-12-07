"use client";
import Sidebar from "@components/Layouts/common/Sidebar";
import { Flow } from "@components/xyflow";
import { ReactFlowProvider } from "@xyflow/react";

export default function Page() {
  return (
    <div className="flex mt-1 ">
      <ReactFlowProvider>
        <Sidebar />
        <Flow />
      </ReactFlowProvider>
    </div>
  );
}
