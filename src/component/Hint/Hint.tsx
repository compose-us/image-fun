import React, { useMemo } from "react";

import Dialog from "../Dialog";

interface HintProps {
  words: [string, string];
  hide: () => void;
}

const Hint: React.FC<HintProps> = ({ hide, words: [first, second] }) => {
  const hint = useMemo(() => {
    const word = Math.random() < 0.5 ? first : second;
    const chars = word.split("");
    const amountOfHintChars = Math.ceil(chars.length / 3);
    return `${chars.slice(0, amountOfHintChars).join("")}${Array.from({
      length: chars.length - amountOfHintChars
    })
      .map(() => ".")
      .join("")}`;
  }, [first, second]);
  return (
    <Dialog
      close={hide}
      title="Here is a hint for you"
      message={`It has something to do with ${hint}`}
    />
  );
};

export default Hint;
