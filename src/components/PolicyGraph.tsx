import { GraphCanvas } from "reagraph";
import { getNodesAndEdgesForGraph } from "../models/githubData";

const { edges, nodes } = getNodesAndEdgesForGraph();

export const PolicyGraph = () => (
  <div>
    <h1>Github ReBac</h1>
    <div style={{ position: "fixed", width: "75%", height: "75%" }}>
      <GraphCanvas
        labelType="all"
        labelFontUrl="https://ey2pz3.csb.app/NotoSansSC-Regular.ttf"
        nodes={nodes}
        edges={edges}
      />
    </div>
  </div>
);
