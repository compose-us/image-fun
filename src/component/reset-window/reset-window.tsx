import React from "react";
import { useGameState } from "../../context/game-state-context";

const ResetWindow: React.FC<any> = () => {
  const { resetCompoundWord } = useGameState();
  return <button onClick={resetCompoundWord}>Reset</button>;
};

export default ResetWindow;
