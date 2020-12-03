import React from "react";
import { useGameState } from "../../context/game-state-context";

const GameSolverWindow: React.FC<any> = () => {
  const { showSolver, toggleSolver } = useGameState();
  return (
    <React.Fragment>
      <button onClick={toggleSolver} disabled={showSolver}>
        Solve
      </button>
      {showSolver && (
        <React.Fragment>
          WIP:
          <input type="text" />
          <button onClick={toggleSolver}>Solve</button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default GameSolverWindow;
