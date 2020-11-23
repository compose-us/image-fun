import React from "react";
import styles from "./hint-display.module.css";

interface HintDisplayProps {
  secrets: string[];
}

const HintDisplay: React.FC<HintDisplayProps> = ({ secrets }) => (
  <div style={{ display: "flex" }}>
    {secrets.map((secret) => (
      <HintDisplayWord word={secret} />
    ))}
  </div>
);

interface HintDisplayWordProps {
  word: string;
}

const HintDisplayWord: React.FC<HintDisplayWordProps> = ({ word }) => {
  const letters: string[] = word.split("");
  return (
    <div className={styles.root}>
      {letters.map((letter) => (
        <input
          type="text"
          value={letter}
          className={styles.input}
          disabled={letter === "*"}
        />
      ))}
    </div>
  );
};

export default HintDisplay;
