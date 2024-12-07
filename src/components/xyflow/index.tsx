'use client';
import '@xyflow/react/dist/style.css';
import { useShallow } from 'zustand/react/shallow';
import { Background, Controls, MiniMap, ReactFlow } from '@xyflow/react';
import useStore from './utils/store';
import { nodesType } from './utils/nodesType';

const selector = (state: any) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export function Flow() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    useShallow(selector)
  );
  console.log('here', nodes);
  return (
    <div className="h-[calc(100vh_-_80px)] w-[calc(100vw_-_225px)]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodesType}
        fitView
        style={{}}
      >
        <Background />
        <Controls
          position="bottom-right"
          showFitView
          orientation="horizontal"
        />
        <MiniMap
          style={{
            marginBottom: '50px',
          }}
        />
      </ReactFlow>
    </div>
  );
}
