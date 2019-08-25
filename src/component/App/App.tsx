import React, { useState, useCallback } from "react";
import FullscreenGrid from "../FullscreenGrid";
import Solver from "../Solver";
import pairGenerator from "../../lib/pair-generator/pair-generator";

import style from "./App.module.css";
import Dialog from "../Dialog";
import Hint from "../Hint";

const App: React.FC = () => {
  const [showSolve, setShowSolve] = useState(false);
  const [showDialogWindow, setShowDialogWindow] = useState(false);
  const [showHintWindow, setShowHintWindow] = useState(false);
  const [solved, setSolved] = useState(false);
  const [pair, setPair] = useState(() => pairGenerator());
  const showSolver = useCallback(() => setShowSolve(true), []);
  const hideSolver = useCallback(() => setShowSolve(false), []);
  const showDialog = useCallback(() => {
    setShowDialogWindow(true);
  }, []);
  const hideDialog = useCallback(() => {
    setShowDialogWindow(false);
  }, []);
  const reset = () => {
    setShowDialogWindow(false);
    setShowSolve(false);
    setSolved(false);
    setPair(pairGenerator());
  };
  const hideHint = useCallback(() => setShowHintWindow(false), []);
  const showHint = useCallback(() => setShowHintWindow(true), []);

  return (
    <div
      className={`${style.app} ${showSolve ? style.solving : style.general} ${
        solved ? style.solved : ""
      }`}
    >
      <FullscreenGrid onClick={showSolver} solving={showSolve} words={pair} />
      {showSolve && (
        <Solver
          hide={hideSolver}
          solve={() => {
            setSolved(true);
            showDialog();
          }}
          solved={solved}
          wrong={() => {
            setSolved(false);
            showDialog();
          }}
          words={pair}
        />
      )}
      <button className={style.restart} type="button" onClick={reset}>
        Restart
      </button>
      <button className={style.hint} type="button" onClick={showHint}>
        Hint
      </button>
      {showHintWindow && <Hint hide={hideHint} words={pair} />}
      {showDialogWindow && (
        <Dialog
          close={hideDialog}
          title={solved ? "Yesss!" : "Nope..."}
          message={
            solved
              ? "You solved this puzzle!"
              : "Sorry, this is not the correct thing"
          }
        />
      )}
    </div>
  );
};

export default App;
