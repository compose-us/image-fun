import React, { useRef } from "react";

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
        <div className="solver-form">
          <h2>Enter your solution</h2>
          <div>
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
