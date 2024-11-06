import * as dagre from "dagre";
import { GraphEdge, GraphNode } from "reagraph";

export const ACTION_NODES = ["create", "update", "read", "delete"];
const ACTION_NODE_WIDTH = 20;
const ACTION_NODE_HEIGHT = 20;

const NORMAL_NODE_WIDTH = 150;
const NORMAL_NODE_HEIGHT = 50;

export function getNodePlacements(nodes: GraphNode[], edges: GraphEdge[]) {
  const g = new dagre.graphlib.Graph();
  // Set an object for the graph label
  g.setGraph({});

  // Default to assigning a new object as a label for each new edge.
  g.setDefaultEdgeLabel(function () {
    return {};
  });

  // add nodes
  for (const node of nodes) {
    const isActionNode = ACTION_NODES.includes(node.label ?? "");
    g.setNode(node.id, {
      label: node.label,
      width: isActionNode ? ACTION_NODE_WIDTH : NORMAL_NODE_WIDTH,
      height: isActionNode ? ACTION_NODE_HEIGHT : NORMAL_NODE_HEIGHT,
    });
  }
  // add edges
  for (const edge of edges) {
    g.setEdge(edge.source, edge.target);
  }
  dagre.layout(g);
  const nodeMap = new Map();
  g.nodes().forEach(function (v: unknown) {
    nodeMap.set(v, g.node(v));
  });
  return nodeMap;
}
