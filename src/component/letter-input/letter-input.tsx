import React from "react";
import styles from "./letter-input.module.css";

interface LetterInputProps {
  disabled?: boolean;
  letter: string | null;
  onChange?: (newLetter: string) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const LetterInput = React.forwardRef<HTMLInputElement, LetterInputProps>(
  (
    { disabled = false, letter, onChange = undefined, onKeyDown = undefined },
    ref
  ) => {
    return (
      <div className={styles.root}>
        <input
          className={styles.input}
          disabled={disabled}
          maxLength={1}
          onKeyDown={onKeyDown}
          onChange={
            onChange && ((event) => onChange(event.currentTarget.value))
          }
          onFocus={(event) => {
            event.currentTarget.setSelectionRange(0, 1);
          }}
          readOnly={!onChange}
          ref={ref}
          type="text"
          value={letter || ""}
        />
      </div>
    );
  }
);

export default LetterInput;
