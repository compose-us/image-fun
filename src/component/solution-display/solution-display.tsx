import React from "react";
import CompoundWordInput from "../compound-word-input/compound-word-input";
import captureInput from "../../lib/capture-input/capture-input";
import ValidationDialog from "../validation-dialog/validation-dialog";
import { useHistory } from "react-router-dom";

interface SolutionDisplayProps {
  solution: string[];
}

const SolutionDisplay: React.FC<SolutionDisplayProps> = ({ solution }) => {
  const history = useHistory();
  const [firstWord, setFirstWord] = React.useState<string>("");
  const [secondWord, setSecondWord] = React.useState<string>("");
  const [validate, setValidation] = React.useState<boolean>(false);

  const changeHandler = (value: string, index: number) => {
    if (index < solution[0].length) {
      setFirstWord((state) => captureInput(state, value, index));
    }
    if (index >= solution[0].length) {
      setSecondWord((state) =>
        captureInput(state, value, index - solution[0].length)
      );
    }
  };

  const verifyInput = () => {
    return solution.join("") === [firstWord, secondWord].join("");
  };

  const closeValidationDialog = () => {
    history.go(0);
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <CompoundWordInput
          name="word1"
          word={solution[0]}
          startIndex={0}
          onChange={changeHandler}
          focusIndex={0}
        />
        <CompoundWordInput
          name="word2"
          word={solution[1]}
          startIndex={solution[0].length}
          onChange={changeHandler}
          focusIndex={-1}
        />
      </div>
      <br />
      <button
        onClick={() => setValidation(true)}
        aria-label="Verify your answer"
      >
        Solve
      </button>
      <ValidationDialog
        active={validate}
        solved={verifyInput()}
        onClose={closeValidationDialog}
      />
    </React.Fragment>
  );
};

export default SolutionDisplay;
