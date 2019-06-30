import React, { useRef, FormEvent, useLayoutEffect } from "react";

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
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    verifySolution();
  };
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
  const focusSolutionElement = () => {
    if (solutionElement.current) {
      solutionElement.current.focus();
    }
  };
  useLayoutEffect(() => focusSolutionElement());
  return (
    <div className="solver" onClick={focusSolutionElement}>
      <form onSubmit={onSubmit}>
        <div className="solver-form">
          <h2>Enter your solution</h2>
          <p>So you think you know what word combination we look for?</p>
          <div className="solver-input">
            <input ref={solutionElement} type="text" />
            <button type="submit">Solve!</button>
          </div>
          <button type="button" onClick={() => hide()}>
            Look at pictures again
          </button>
        </div>
      </form>
    </div>
  );
};

export default Solver;
