import React, { useEffect, useRef, useState } from "react";
import LetterInput from "../letter-input/letter-input";
import ValidationDialog from "../validation-dialog/validation-dialog";
import { useHistory } from "react-router-dom";

interface SolutionDisplayProps {
  solution: string[];
}

const SolutionDisplay: React.FC<SolutionDisplayProps> = ({ solution }) => {
  const history = useHistory();
  const [validate, setValidation] = useState<boolean>(false);

  const verifyInput = () => {
    return solution.join("").toLowerCase() === userInput.join("").toLowerCase();
  };

  const closeValidationDialog = () => {
    history.go(0);
  };

  const letterRefs = useRef<HTMLInputElement[]>([]);

  const addToRef = (element: HTMLInputElement | null) => {
    if (element && !letterRefs.current.includes(element)) {
      letterRefs.current.push(element);
    }
  };

  const defaultUserInput = new Array(
    solution[0].length + solution[1].length
  ).fill(null);
  const [userInput, setUserInput] = useState<(string | null)[]>(
    defaultUserInput
  );

  useEffect(() => {
    if (letterRefs.current.length > 0) {
      letterRefs.current[0].focus();
    }
  }, []);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setValidation(true);
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {defaultUserInput.map((_space, index) => {
          return (
            <LetterInput
              key={index}
              letter={userInput[index]}
              onChange={(letter) => {
                if (letter.length === 1) {
                  setUserInput([
                    ...userInput.slice(0, index),
                    letter,
                    ...userInput.slice(index + 1),
                  ]);
                  const nextChild =
                    letterRefs.current[(index + 1) % letterRefs.current.length];

                  nextChild.focus();
                } else {
                  setUserInput([
                    ...userInput.slice(0, index),
                    null,
                    ...userInput.slice(index + 1),
                  ]);
                }
              }}
              onKeyDown={(event) => {
                if (
                  event.keyCode === 46 /* delete */ ||
                  event.keyCode === 8 /* backspace */
                ) {
                  // focus before
                  event.preventDefault();
                  setUserInput([
                    ...userInput.slice(0, index),
                    null,
                    ...userInput.slice(index + 1),
                  ]);

                  const previousChild =
                    letterRefs.current[
                      (letterRefs.current.length + index - 1) %
                        letterRefs.current.length
                    ];

                  previousChild.focus();
                }
              }}
              ref={addToRef}
            />
          );
        })}
      </div>
      <br />
      <button type="submit" aria-label="Verify your answer">
        Solve
      </button>
      <ValidationDialog
        active={validate}
        solved={verifyInput()}
        onClose={closeValidationDialog}
      />
    </form>
  );
};

export default SolutionDisplay;
