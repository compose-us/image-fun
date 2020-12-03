import React from "react";
import CompoundWordInput from "../compound-word-input/compound-word-input";

interface SolutionDisplayProps {
  solution: string[];
}
const SolutionDisplay: React.FC<SolutionDisplayProps> = ({ solution }) => (
  <React.Fragment>
    <div style={{ display: "flex" }}>
      <CompoundWordInput word={solution[0]} />
      &nbsp;
      <CompoundWordInput word={solution[1]} />
    </div>
    <button>Solve</button>
  </React.Fragment>
);

export default SolutionDisplay;
