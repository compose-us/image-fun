import React, { useState, useCallback } from "react";
import FullscreenGrid from "../FullscreenGrid";
import Solver from "../Solver";
import pairGenerator from "../../lib/pair-generator/pair-generator";

import style from "./App.module.css";

const App: React.FC = () => {
  const [showSolve, setShowSolve] = useState(false);
  const [solved, setSolved] = useState(false);
  const [pair, setPair] = useState(() => pairGenerator());
  const showSolver = useCallback(() => setShowSolve(true), []);
  const hideSolver = useCallback(() => setShowSolve(false), []);
  const reset = () => {
    setShowSolve(false);
    setSolved(false);
    setPair(pairGenerator());
  };

  return (
    <div
      className={`${style.app} ${showSolve ? style.solving : style.general} ${
        solved ? style.solved : ""
      }`}
    >
      <FullscreenGrid onClick={showSolver} solving={showSolve} words={pair} />
      <button className={style.restart} type="button" onClick={reset}>
        Restart
      </button>
      {showSolve && (
        <Solver
          hide={hideSolver}
          solve={() => {
            window.alert("solved!");
            setSolved(true);
          }}
          solved={solved}
          wrong={() => window.alert("wrong!")}
          words={pair}
        />
      )}
    </div>
  );
};

export default App;
