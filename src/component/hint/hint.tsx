import React, { useMemo } from "react";

import getHintFromWords from "../../lib/get-hint-from-words";
import Dialog from "../dialog";
import HintDisplay from "../hint-display/hint-display";

interface HintProps {
  words: [string, string];
  hide: () => void;
}

const Hint: React.FC<HintProps> = ({ hide, words: [first, second] }) => {
  const hint = useMemo(() => getHintFromWords(first, second), [first, second]);
  return (
    <Dialog
      close={hide}
      title="It has something to do with"
      message={<HintDisplay secrets={hint} />}
    />
  );
};

export default Hint;
