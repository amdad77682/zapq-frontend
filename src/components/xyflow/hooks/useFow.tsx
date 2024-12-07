import { getOutgoers, useReactFlow, type OnNodeDrag } from "@xyflow/react";
import { useCallback } from "react";

export default function useFow() {
  const { getNodes, getEdges } = useReactFlow();
  const onNodeDrag: OnNodeDrag = (_, node) => {
    console.log("drag event", node);
  };
  const isValidConnection = useCallback(
    (connection: any) => {
      // we are using getNodes and getEdges helpers here
      // to make sure we create isValidConnection function only once
      const nodes = getNodes();
      const edges = getEdges();
      const target = nodes.find((node) => node.id === connection.target);
      const hasCycle = (node: any, visited = new Set()) => {
        if (visited.has(node.id)) return false;

        visited.add(node.id);

        for (const outgoer of getOutgoers(node, nodes, edges)) {
          if (outgoer.id === connection.source) return true;
          if (hasCycle(outgoer, visited)) return true;
        }
      };

      if (target?.id === connection.source) return false;
      return !hasCycle(target);
    },
    [getNodes, getEdges]
  );
  return {
    isValidConnection,
    onNodeDrag,
  };
}
