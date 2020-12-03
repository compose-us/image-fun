import React from "react";
import { useGameState } from "../../context/game-state-context";

const GameResetWindow: React.FC<any> = () => {
  const { resetCompoundWord } = useGameState();
  return <button onClick={resetCompoundWord}>Reset</button>;
};

export default GameResetWindow;
