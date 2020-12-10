import React from "react";
import { useGameState } from "../../context/game-state-context/game-state-context";
import SolutionDialog from "../solution-dialog/solution-dialog";

const SolutionButton: React.FC<any> = () => {
  const { compoundWord, toggleSolver, showHint, showSolver } = useGameState();
  return (
    <React.Fragment>
      <button
        tabIndex={!showHint || showSolver ? 0 : -1}
        onClick={toggleSolver}
        disabled={showSolver}
        aria-label="Solve"
      >
        Solve
      </button>
      {showSolver && (
        <SolutionDialog onClose={toggleSolver} solution={compoundWord} />
      )}
    </React.Fragment>
  );
};

export default SolutionButton;
