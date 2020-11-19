import React, { useRef, FormEvent, useLayoutEffect } from "react";

import style from "./solver.module.css";

interface SolverProps {
  words: [string, string];
  hide: () => void;
  solve: () => void;
  solved: boolean;
  wrong: () => void;
}

const Solver: React.FC<SolverProps> = ({
  hide,
  solve,
  solved = false,
  words: [first, second],
  wrong,
}) => {
  const solutionElement = useRef<HTMLInputElement>(null);
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    verifySolution();
  };
  const verifySolution = () => {
    const split =
      solutionElement.current &&
      solutionElement.current.value.trim().split(/\s+/);
    const correct = split && split[0] === first && split[1] === second;
    if (correct) {
      solve();
    } else {
      wrong();
    }
  };
  const focusSolutionElement = () => {
    if (solutionElement.current) {
      solutionElement.current.focus();
    }
  };
  useLayoutEffect(focusSolutionElement);
  return (
    <div className={style.root} onClick={hide}>
      <form onSubmit={onSubmit}>
        <div className={style.form}>
          <h2>Enter your solution</h2>
          <p>So you think you know what word combination we look for?</p>
          <div className={`${style.input} ${solved ? style.solved : ""}`}>
            <input ref={solutionElement} type="text" />
            <button
              // Submitting with 'enter' causes a click on the submit button,
              // which propagates up to the `hide` onClick listener. We prevent
              // this with the `stopPropagation` call on click.
              onClick={(e) => e.stopPropagation()}
              type="submit"
            >
              {solved ? "Solved!" : "Solve!"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Solver;
