import "@xyflow/react/dist/style.css";
import DerivedFlowVisualization from "./components/DerivedFlowVisualization";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <h1 className="text text-center mt-2">Github Rebac Visualization</h1>
      <DerivedFlowVisualization />
    </div>
  );
}
