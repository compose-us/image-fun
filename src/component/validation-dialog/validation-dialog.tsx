import React from "react";
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
}) => (
  <React.Fragment>
    {active && (
      <Dialog
        title={solved ? "Yesss!" : "Nope..."}
        message={
          solved
            ? "You solved this puzzle!"
            : "Sorry, this is not the correct thing"
        }
        close={onClose}
      />
    )}
  </React.Fragment>
);

export default ValidationDialog;
