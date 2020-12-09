import React from "react";
import styles from "../compound-word-display/compound-word-display.module.css";

interface CompoundWordInputProps {
  name: string;
  word: string;
  startIndex: number;
  onChange: (inputValue: string, inputIndex: number) => void;
  focusIndex: number;
}

const CompoundWordInput: React.FC<CompoundWordInputProps> = ({
  name,
  word,
  startIndex,
  onChange,
  focusIndex,
}) => {
  const letters: string[] = word.split("");

  const changeHandler = (inputIndex: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const nextRefIndex = letterRefs.current.indexOf(event.currentTarget);
    const next = letterRefs.current[nextRefIndex + 1];
    if (next) {
      next.focus();
    }
    const { value } = event.currentTarget;
    onChange(value, inputIndex);
  };

  const letterRefs = React.useRef<HTMLInputElement[]>([]);
  letterRefs.current = [];

  const addToRef = (element: any) => {
    if (element && !letterRefs.current.includes(element)) {
      letterRefs.current.push(element);
    }
  };

  return (
    <div className={styles.root}>
      {letters.map((letter, index) => (
        <input
          key={`${name}-${index}`}
          name={`${name}-${index}-${startIndex}`}
          tabIndex={0}
          type="text"
          maxLength={1}
          className={styles.input}
          onChange={changeHandler(startIndex + index)}
          ref={addToRef}
          autoFocus={focusIndex === index}
        />
      ))}
    </div>
  );
};

export default CompoundWordInput;
