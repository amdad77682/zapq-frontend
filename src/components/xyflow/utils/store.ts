import { create } from 'zustand';
import { addEdge, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';

import initialNodes from './nodes';
import initialEdges from './edges';
import { AppState } from './types';
import { nodesType } from './nodesType';

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<AppState>((set, get) => ({
  nodes: initialNodes,
  storyPosition: [],
  branchingPosition: [],
  edges: initialEdges,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  setNodes: (nodes) => {
    set({ nodes });
  },
  setEdges: (edges) => {
    set({ edges });
  },
  createNode: ({ nodeType }: { nodeType: keyof typeof nodesType }) => {
    const lastNodePosition =
      get().nodes.length === 0
        ? { x: 0, y: 0 }
        : get().nodes[get().nodes.length - 1].position;
    set({
      nodes: [
        ...get().nodes,
        {
          id: `${nodeType}_${get().nodes.length}`,
          type: nodeType,
          position: {
            x: lastNodePosition.x + 400,
            y: 200,
          },
          data: {},
        },
      ],
    });
  },
  updateNodeColor: (nodeId, color) => {
    // set({
    //   nodes: get().nodes.map((node) => {
    //     if (node.id === nodeId && isColorChooserNode(node)) {
    //       // it's important to create a new object here, to inform React Flow about the cahnges
    //       return { ...node, data: { ...node.data, color } };
    //     }
    //     return node;
    //   }),
    // });
  },
  switchViewMode: (mode: 'story' | 'branching') => {
    if (mode === 'story') {
      set({
        branchingPosition: get().nodes.map((node) => node.position),
      });
    }
    if (mode === 'branching') {
      set({
        storyPosition: get().nodes.map((node) => node.position),
      });
    }

    const hasNewNodeAdded =
      (mode === 'story' && get().storyPosition.length !== get().nodes.length) ||
      (mode === 'branching' &&
        get().branchingPosition.length !== get().nodes.length);

    const previousPosition = hasNewNodeAdded
      ? get().nodes.map((node) => node.position)
      : mode === 'story' && get().storyPosition.length > 0
      ? get().storyPosition
      : get().branchingPosition.length > 0
      ? get().branchingPosition
      : get().nodes.map((node) => node.position);

    set({
      nodes: get().nodes.map((node, index) => {
        return {
          ...node,
          position: previousPosition[index],
        };
      }),
    });
  },
}));

export default useStore;
