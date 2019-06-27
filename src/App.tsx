import React, { useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import FullscreenGrid from "./component/FullscreenGrid";
import Solver from "./component/Solver";
import pairGenerator from "./lib/pair-generator";

import "./App.css";

const App: React.FC = () => {
  const [showSolve, setShowSolve] = useState(false);
  const [pair, setPair] = useState(() => pairGenerator());
  const showSolver = useCallback(() => setShowSolve(true), []);
  const hideSolver = useCallback(() => setShowSolve(false), []);
  const reset = () => {
    setPair(pairGenerator());
  };

  return (
    <div className={`App ${showSolve ? "solving" : ""}`}>
      <DndProvider backend={HTML5Backend}>
        <FullscreenGrid onClick={showSolver} words={pair} />
        <button className="restart" type="button" onClick={reset}>
          Restart
        </button>
        {showSolve && (
          <Solver
            hide={hideSolver}
            solve={() => window.alert("solved!")}
            wrong={() => window.alert("wrong!")}
            words={pair}
          />
        )}
      </DndProvider>
    </div>
  );
};

export default App;
