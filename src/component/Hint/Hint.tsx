import React, { useMemo } from "react";

import getHintFromWords from "../../lib/get-hint-from-words";
import Dialog from "../Dialog";

interface HintProps {
  words: [string, string];
  hide: () => void;
}

const Hint: React.FC<HintProps> = ({ hide, words: [first, second] }) => {
  const hint = useMemo(() => getHintFromWords(first, second), [first, second]);
  return (
    <Dialog
      close={hide}
      title="Here is a hint for you"
      message={`It has something to do with ${hint}`}
    />
  );
};

export default Hint;
