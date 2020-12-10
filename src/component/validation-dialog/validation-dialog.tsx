import React from "react";
import { useGameState } from "../../context/game-state-context/game-state-context";
import Dialog from "../dialog/dialog";

interface ValidationDialogProps {
  active: boolean;
  solved: boolean;
  onClose: () => void;
}

const ValidationDialog: React.FC<ValidationDialogProps> = ({
  active,
  solved,
  onClose,
}) => {
  const { compoundWord } = useGameState();
  return (
    <React.Fragment>
      {active && (
        <Dialog
          animate={solved}
          title={solved ? "Yesss!" : "Nope..."}
          message={
            solved
              ? "You solved this puzzle!"
              : `Sorry, the correct answer was: ${compoundWord.join(" ")}`
          }
          close={onClose}
        />
      )}
    </React.Fragment>
  );
};

export default ValidationDialog;
