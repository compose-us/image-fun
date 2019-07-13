import React, { useState, useCallback } from "react";
import FullscreenGrid from "../FullscreenGrid";
import Solver from "../Solver";
import pairGenerator from "../../lib/pair-generator";

import "./App.css";

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
      className={`App ${showSolve ? "solving" : "general"} ${
        solved ? "solved" : ""
      }`}
    >
      <FullscreenGrid onClick={showSolver} words={pair} />
      <button className="restart" type="button" onClick={reset}>
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
