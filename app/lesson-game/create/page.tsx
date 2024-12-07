import Sidebar from '@components/Layouts/common/Sidebar';
import { Flow } from '@components/xyflow';
import { ReactFlowProvider } from '@xyflow/react';
import React from 'react';

export default function page() {
  return (
    <div className="flex mt-1 ">
      <ReactFlowProvider>
        <Sidebar />
        <Flow />
      </ReactFlowProvider>
    </div>
  );
}
