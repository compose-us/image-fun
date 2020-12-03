import React, { useCallback, useState } from "react";
// import FullscreenGrid from "../fullscreen-grid";
// import Solver from "../solver";
// import pairGenerator from "../../lib/pair-generator/pair-generator";
import style from "./game.module.css";
import GameHintWindow from "../game-hint-window/game-hint-window";
import GameResetWindow from "../game-reset-window/game-reset-window";
import { useGameState } from "../../context/game-state-context";
import GameSolverWindow from "../game-solver-window/game-solver-window";
// import Dialog from "../dialog";
// import Hint from "../hint";
// import GameHintWindow from "../game-hint-window";

const Game: React.FC = () => {
  const { compoundWord } = useGameState();
  const [solved, setSolved] = useState(false);

  /*
  const hideHint = useCallback(() => setShowHintWindow(false), []);
  const showHint = useCallback(() => setShowHintWindow(true), []);
  useEffect(() => {
    const toggleOnKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        if (showDialogWindow) {
          return hideDialog();
        } else if (showHintWindow) {
          return hideHint();
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
          return showHintWindow ? hideHint() : showHint();
        }
      } else if (event.key === "r") {
        if (!showDialogWindow && !showSolveWindow && !showHintWindow) {
          event.preventDefault();
          event.stopPropagation();
          return reset();
        }
      }
    };
    window.addEventListener("keydown", toggleOnKey);
    return () => window.removeEventListener("keydown", toggleOnKey);
  });
*/
  return (
    <React.Fragment>
      {/*<FullscreenGrid*/}
      {/*  onClick={showSolver}*/}
      {/*  solving={showSolveWindow}*/}
      {/*  words={pair}*/}
      {/*/>*/}
      {/*{showSolveWindow && (*/}
      {/*  <Solver*/}
      {/*    hide={hideSolver}*/}
      {/*    solve={() => {*/}
      {/*      setSolved(true);*/}
      {/*      showDialog();*/}
      {/*    }}*/}
      {/*    solved={solved}*/}
      {/*    wrong={() => {*/}
      {/*      setSolved(false);*/}
      {/*      showDialog();*/}
      {/*    }}*/}
      {/*    words={pair}*/}
      {/*  />*/}
      {/*)}*/}
      <h1>{JSON.stringify({ compoundWord })}</h1>
      <GameHintWindow />
      <GameResetWindow />
      <GameSolverWindow />
      {/*{showHintWindow && <Hint hide={hideHint} words={pair} />}*/}
      {/*{showDialogWindow && (*/}
      {/*  <Dialog*/}
      {/*    close={hideDialog}*/}
      {/*    title={solved ? "Yesss!" : "Nope..."}*/}
      {/*    message={*/}
      {/*      solved*/}
      {/*        ? "You solved this puzzle!"*/}
      {/*        : "Sorry, this is not the correct thing"*/}
      {/*    }*/}
      {/*  />*/}
      {/*)}*/}
    </React.Fragment>
  );
};

export default Game;
