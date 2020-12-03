import React from "react";
import Dialog from "../dialog/dialog";
import SolutionDisplay from "../solution-display/solution-display";

export interface SolutionProps {
  solution: CompoundWord;
  onClose: () => void;
}
const Solution: React.FC<SolutionProps> = ({ onClose: callback, solution }) => {
  return (
    <Dialog
      close={callback}
      title="What is the compound word?"
      message={<SolutionDisplay solution={solution} />}
    />
  );
};

export default Solution;
