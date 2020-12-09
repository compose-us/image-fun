import React from "react";
import HintDialog from "../hint-dialog/hint-dialog";
import { useGameState } from "../../context/game-state-context/game-state-context";

const HintButton: React.FC<any> = () => {
  const { compoundWord, toggleHint, showHint, showSolver } = useGameState();

  return (
    <React.Fragment>
      <button
        tabIndex={showHint || !showSolver ? 0 : -1}
        onClick={toggleHint}
        disabled={showHint}
        aria-label="Hint"
      >
        Hint
      </button>
      {showHint && <HintDialog words={compoundWord} onClose={toggleHint} />}
    </React.Fragment>
  );
};

export default HintButton;
