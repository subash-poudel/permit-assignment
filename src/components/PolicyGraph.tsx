import { GraphCanvas } from "reagraph";
import { getNodesAndEdgesForGraph } from "../models/githubData";

const { edges, nodes } = getNodesAndEdgesForGraph();

export const PolicyGraph = () => (
  <GraphCanvas
    labelType="all"
    labelFontUrl="https://ey2pz3.csb.app/NotoSansSC-Regular.ttf"
    nodes={nodes}
    edges={edges}
  />
);
