import { ReactFlow } from "@xyflow/react";
import { getDynamicNodesAndEdges } from "../helpers/dynamicGraphLayoutHelper";

export const DynamicGraphLayout = () => {
  const { initialEdges, initialNodes } = getDynamicNodesAndEdges();
  return <ReactFlow nodes={initialNodes} edges={initialEdges}></ReactFlow>;
};
