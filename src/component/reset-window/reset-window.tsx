import React from "react";
import { useGameState } from "../../context/game-state-context/game-state-context";

const ResetWindow: React.FC<any> = () => {
  const { resetCompoundWord, showHint, showSolver } = useGameState();
  return (
    <button
      tabIndex={!showHint && !showSolver ? 0 : -1}
      onClick={resetCompoundWord}
      aria-label="Reset"
    >
      Reset
    </button>
  );
};

export default ResetWindow;
