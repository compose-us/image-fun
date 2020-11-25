import React, { useMemo } from "react";

import getHintFromWords from "../../lib/get-hint-from-words";
import Dialog from "../dialog";
import HintDisplay from "../hint-display/hint-display";

export interface HintProps {
  words: [string, string];
  onClose: () => void;
}

const Hint: React.FC<HintProps> = ({
  onClose: callback,
  words: [first, second],
}) => {
  const hint = useMemo(() => getHintFromWords(first, second), [first, second]);
  return (
    <Dialog
      close={callback}
      title="It has something to do with"
      message={<HintDisplay secrets={hint} />}
    />
  );
};

export default Hint;
