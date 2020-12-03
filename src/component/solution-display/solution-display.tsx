import React from "react";
import CompoundWordDisplay from "../compound-word-display/compound-word-display";

interface SolutionDisplayProps {
  solution: string[];
}
const SolutionDisplay: React.FC<SolutionDisplayProps> = ({ solution }) => (
  <React.Fragment>
    <div style={{ display: "flex" }}>
      {solution.map((word) => (
        <CompoundWordDisplay word={word} />
      ))}
    </div>
    <button>Solve</button>
  </React.Fragment>
);

export default SolutionDisplay;
