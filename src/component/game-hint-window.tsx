import React from "react";
import Hint from "./hint";
import { useGameState } from "../context/game-state-context";

const GameHintWindow: React.FC<any> = () => {
  const { compoundWord, toggleHint, showHint } = useGameState();

  return (
    <React.Fragment>
      <button onClick={toggleHint} disabled={!showHint}>
        show hint
      </button>
      <Hint words={compoundWord} onClose={toggleHint} />
    </React.Fragment>
  );
};

export default GameHintWindow;
