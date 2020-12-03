import React from "react";
import { useGameState } from "../../context/game-state-context";
import Solution from "../solution/solution";

const SolutionWindow: React.FC<any> = () => {
  const { compoundWord, toggleSolver, showSolver } = useGameState();
  return (
    <React.Fragment>
      <button onClick={toggleSolver} disabled={showSolver}>
        Solve
      </button>
      {showSolver && (
        <Solution onClose={toggleSolver} solution={compoundWord} />
      )}
    </React.Fragment>
  );
};

export default SolutionWindow;
