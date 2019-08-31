import React, { useState, useCallback, useEffect } from "react";
import FullscreenGrid from "../FullscreenGrid";
import Solver from "../Solver";
import pairGenerator from "../../lib/pair-generator/pair-generator";

import style from "./App.module.css";
import Dialog from "../Dialog";
import Hint from "../Hint";

const App: React.FC = () => {
  const [showSolveWindow, setShowSolveWindow] = useState(false);
  const [showDialogWindow, setShowDialogWindow] = useState(false);
  const [showHintWindow, setShowHintWindow] = useState(false);
  const [solved, setSolved] = useState(false);
  const [pair, setPair] = useState(() => pairGenerator());
  const showSolver = useCallback(() => setShowSolveWindow(true), []);
  const hideSolver = useCallback(() => setShowSolveWindow(false), []);
  const showDialog = useCallback(() => {
    setShowDialogWindow(true);
  }, []);
  const hideDialog = useCallback(() => {
    setShowDialogWindow(false);
  }, []);
  const reset = () => {
    setShowDialogWindow(false);
    setShowSolveWindow(false);
    setSolved(false);
    setPair(pairGenerator());
  };
  const hideHint = useCallback(() => setShowHintWindow(false), []);
  const showHint = useCallback(() => setShowHintWindow(true), []);

  useEffect(() => {
    const toggleOnKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        if (showDialogWindow) {
          return hideDialog();
        } else if (showSolveWindow) {
          return hideSolver();
        } else {
          return showSolver();
        }
      } else if (event.key === "Enter") {
        if (!showDialogWindow && !showSolveWindow) {
          event.preventDefault();
          event.stopPropagation();
          return showSolver();
        }
      } else if (event.key === "h") {
        if (!showDialogWindow && !showSolveWindow) {
          event.preventDefault();
          event.stopPropagation();
          return showHint();
        }
      }
    };
    window.addEventListener("keydown", toggleOnKey);
    return () => window.removeEventListener("keydown", toggleOnKey);
  });

  return (
    <div
      className={`${style.app} ${
        showSolveWindow ? style.solving : style.general
      } ${solved ? style.solved : ""}`}
    >
      <FullscreenGrid
        onClick={showSolver}
        solving={showSolveWindow}
        words={pair}
      />
      {showSolveWindow && (
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
