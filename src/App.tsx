import { useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  type Edge,
  type Node,
  MarkerType,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

export default function App() {
  const initialNodes: Node[] = [
    // Resource Nodes
    {
      id: "Repository",
      position: { x: 200, y: 200 },
      data: { label: "Repository" },
    },
    {
      id: "PR",
      position: { x: 200, y: 400 },
      data: { label: "PR" },
    },
    // Repository Roles
    {
      id: "Repository-Owner",
      position: { x: 360, y: 50 },
      data: { label: "Owner" },
      style: {
        borderRadius: "50%",
        width: 50,
        height: 50,
        textAlign: "center",
      },
    },
    {
      id: "Repository-Editor",
      position: { x: 240, y: 50 },
      data: { label: "Editor" },
      style: {
        borderRadius: "50%",
        width: 50,
        height: 50,
        textAlign: "center",
      },
    },
    {
      id: "Repository-Viewer",
      position: { x: 120, y: 50 },
      data: { label: "Viewer" },
      style: {
        borderRadius: "50%",
        width: 50,
        height: 50,
        textAlign: "center",
        background: "red",
      },
    },
    // PR Roles
    {
      id: "PR-Creator",
      position: { x: 340, y: 300 },
      data: { label: "Creator" },
      style: {
        borderRadius: "50%",
        width: 50,
        height: 50,
        textAlign: "center",
      },
    },
    {
      id: "PR-Approver",
      position: { x: 450, y: 300 },
      data: { label: "Approver" },
      style: {
        borderRadius: "50%",
        width: 50,
        height: 50,
        textAlign: "center",
      },
    },
    {
      id: "PR-Viewer",
      position: { x: 120, y: 300 },
      data: { label: "Viewer" },
      style: {
        borderRadius: "50%",
        width: 50,
        height: 50,
        textAlign: "center",
        background: "red",
      },
    },
  ];
  const initialEdges: Edge[] = [
    {
      id: "1",
      source: "Repository",
      target: "PR",
      label: "is Parent of",
      markerEnd: {
        type: MarkerType.Arrow,
      },
    },
    // Repository role edges
    {
      id: "2",
      source: "Repository-Owner",
      target: "Repository",
      markerEnd: {
        type: MarkerType.Arrow,
      },
    },
    {
      id: "3",
      source: "Repository-Editor",
      target: "Repository",
      markerEnd: {
        type: MarkerType.Arrow,
      },
    },
    {
      id: "4",
      source: "Repository-Viewer",
      target: "Repository",
      markerEnd: {
        type: MarkerType.Arrow,
      },
    },
    // PR role edges
    {
      id: "5",
      source: "PR-Viewer",
      target: "PR",
      markerEnd: {
        type: MarkerType.Arrow,
      },
    },
    {
      id: "6",
      source: "PR-Approver",
      target: "PR",
      markerEnd: {
        type: MarkerType.Arrow,
      },
    },
    {
      id: "7",
      source: "PR-Creator",
      target: "PR",
      markerEnd: {
        type: MarkerType.Arrow,
      },
    },
    // Role Derivation Edges
    {
      id: "8",
      target: "PR-Viewer",
      source: "Repository-Viewer",
      label: "inherits",
      markerStart: {
        type: MarkerType.Arrow,
      },
    },
    {
      id: "9",
      source: "Repository-Editor",
      target: "PR-Approver",
      label: "inherits",
      markerStart: {
        type: MarkerType.Arrow,
      },
    },
    {
      id: "10",
      source: "Repository-Owner",
      target: "PR-Approver",
      label: "inherits",
      markerStart: {
        type: MarkerType.Arrow,
      },
    },
  ];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const onConnect = useCallback(
    (params) => {
      console.log("got params", params);
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
      </ReactFlow>
    </div>
  );
}
