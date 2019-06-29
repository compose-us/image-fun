import React, { useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import FullscreenGrid from "./component/FullscreenGrid";
import Solver from "./component/Solver";
import pairGenerator from "./lib/pair-generator";

import "./App.css";

const App: React.FC = () => {
  const [showSolve, setShowSolve] = useState(false);
  const [solved, setSolved] = useState(false);
  const [pair, setPair] = useState(() => pairGenerator());
  const showSolver = useCallback(() => setShowSolve(true), []);
  const hideSolver = useCallback(() => setShowSolve(false), []);
  const reset = () => {
    setSolved(false);
    setPair(pairGenerator());
  };

  return (
    <div
      className={`App ${showSolve ? "solving" : "general"} ${
        solved ? "solved" : ""
      }`}
    >
      <DndProvider backend={HTML5Backend}>
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
            wrong={() => window.alert("wrong!")}
            words={pair}
          />
        )}
      </DndProvider>
    </div>
  );
};

export default App;
