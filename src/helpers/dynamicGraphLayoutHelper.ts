import { MarkerType } from "@xyflow/react";
import { getNodesAndEdgesForGraph } from "../models/githubData";
import { ACTION_NODES, getNodePlacements } from "./dagreHelper";

const NORMAL_NODE_STYLE = {
  background: "#7fc29b",
};
const ACTION_NODE_STYLE = {
  borderRadius: "50%",
  width: 50,
  height: 50,
  textAlign: "center",
  background: "#B5EF8A",
};

export function getDynamicNodesAndEdges() {
  const { edges, nodes } = getNodesAndEdgesForGraph();
  const nodeMap = getNodePlacements(nodes, edges);
  const initialNodes = [];
  for (const [key, value] of nodeMap.entries()) {
    const isActionNode = ACTION_NODES.includes(value.label);
    initialNodes.push({
      id: key,
      position: { x: value.x, y: value.y },
      data: { label: value.label },
      style: isActionNode ? ACTION_NODE_STYLE : NORMAL_NODE_STYLE,
    });
  }
  const initialEdges = edges.map((e, i) => {
    return {
      id: `${i}`,
      source: e.source,
      target: e.target,
      markerEnd: {
        type: MarkerType.Arrow,
      },
    };
  });
  return { initialNodes, initialEdges };
}
