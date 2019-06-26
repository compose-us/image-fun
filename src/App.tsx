import React, { useRef, useState } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import FullscreenGrid from "./component/FullscreenGrid";
import pairGenerator from "./lib/pair-generator";

import "./App.css";

interface SolverProps {
  words: [string, string];
  hide: () => void;
  solve: () => void;
  wrong: () => void;
}

const Solver: React.FC<SolverProps> = ({
  hide,
  solve,
  words: [first, second],
  wrong
}) => {
  const solutionElement = useRef<HTMLInputElement>(null);
  const verifySolution = () => {
    const split =
      solutionElement.current && solutionElement.current.value.split(/\s+/);
    const correct = split && split[0] === first && split[1] === second;
    if (correct) {
      solve();
    } else {
      wrong();
    }
  };
  return (
    <div className="solver">
      <form onSubmit={verifySolution}>
        <h2>This will be the solver</h2>
        <input ref={solutionElement} type="text" />
        <button type="button" onClick={() => hide()}>
          Look at pictures again
        </button>
      </form>
    </div>
  );
};

const App: React.FC = () => {
  const [showSolve, setShowSolve] = useState(false);
  const [pair, setPair] = useState(pairGenerator());
  const reset = () => {
    setPair(pairGenerator());
  };

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <FullscreenGrid onClick={() => setShowSolve(true)} words={pair} />
        <button type="button" onClick={reset}>
          Restart
        </button>
        {showSolve && (
          <Solver
            hide={() => setShowSolve(false)}
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
