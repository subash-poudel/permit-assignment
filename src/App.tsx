import "@xyflow/react/dist/style.css";
import { DynamicGraphLayout } from "./components/NewDynamicVisualization";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <h1 className="text text-center mt-2">Github Rebac Visualization</h1>
      <DynamicGraphLayout />
    </div>
  );
}
