import React from "react";
import Hint from "../hint/hint";
import { useGameState } from "../../context/game-state-context";

const HintWindow: React.FC<any> = () => {
  const { compoundWord, toggleHint, showHint } = useGameState();

  return (
    <React.Fragment>
      <button onClick={toggleHint} disabled={showHint}>
        Hint
      </button>
      {showHint && <Hint words={compoundWord} onClose={toggleHint} />}
    </React.Fragment>
  );
};

export default HintWindow;
