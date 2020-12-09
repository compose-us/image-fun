import React from "react";
import styles from "./compound-word-display.module.css";

interface CompoundWordDisplayProps {
  word: string;
}

const CompoundWordDisplay: React.FC<CompoundWordDisplayProps> = ({ word }) => {
  const letters: string[] = word.split("");
  return (
      <div className={styles.root}>
      {letters.map((letter) => (
        <input
            tabIndex={-1}
          type="text"
          value={letter}
          className={styles.input}
          disabled={letter === "*"}
        />
      ))}
    </div>
  );
};

export default CompoundWordDisplay;
