import React, { useMemo } from "react";
import Dialog from "../dialog/dialog";
import HintDisplay from "../hint-display/hint-display";
import getHintFromWords from "../../lib/get-hint-from-words";

export interface HintProps {
  words: CompoundWord;
  onClose: () => void;
}

const HintDialog: React.FC<HintProps> = ({
  onClose: callback,
  words: [first, second],
}) => {
  const hint = useMemo(() => getHintFromWords(first, second), [first, second]);
  return (
    <Dialog
      close={callback}
      title="It has something to do with:"
      message={<HintDisplay secrets={hint} />}
    />
  );
};

export default HintDialog;
