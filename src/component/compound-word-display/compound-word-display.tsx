import React from "react";
import styles from "./compound-word-display.module.css";

interface CompoundWordDisplayProps {
  word: string;
}

const CompoundWordDisplay: React.FC<CompoundWordDisplayProps> = ({ word }) => {
  const letters: string[] = word.split("");
  return (
    <div className={styles.root}>
      {letters.map((letter, index) => (
        <input
          key={index}
          tabIndex={-1}
          type="text"
          value={letter}
          className={styles.input}
          disabled={letter === "*"}
          readOnly
        />
      ))}
    </div>
  );
};

export default CompoundWordDisplay;
