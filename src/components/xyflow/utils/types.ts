import {
  Edge,
  Node,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  XYPosition,
} from '@xyflow/react';
import { nodesType } from './nodesType';

export type AppNode = Node;

export type AppState = {
  nodes: AppNode[];
  storyPosition: XYPosition[];
  branchingPosition: XYPosition[];
  edges: Edge[];
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: AppNode[]) => void;
  setEdges: (edges: Edge[]) => void;
  updateNodeColor: (nodeId: string, color: string) => void;
  createNode: ({ nodeType }: { nodeType: keyof typeof nodesType }) => void;
  switchViewMode: (mode: 'story' | 'branching') => void;
};
