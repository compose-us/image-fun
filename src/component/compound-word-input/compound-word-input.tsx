import React from "react";
import styles from "./compound-word-input.module.css";

interface CompoundWordInputProps {
  word: string;
}

const CompoundWordInput: React.FC<CompoundWordInputProps> = ({ word }) => {
  const letters: string[] = word.split("");
  return (
    <div className={styles.root}>
      {letters.map((letter, index) => (
        <input
          type="text"
          maxLength={1}
          className={styles.input}
          value={letter}
          autoFocus={index === 0}
        />
      ))}
    </div>
  );
};

export default CompoundWordInput;
