import React from "react";

import style from "./Dialog.module.css";

interface DialogProps {
  title: string;
  party: Boolean;
  message: string;
  close: () => void;
}

const Dialog: React.FC<DialogProps> = ({ close, message, party, title }) => {
  return (
    <div
      className={`${style.root} ${party ? style.party : ""}`}
      onClick={close}
    >
      <div className={style.content}>
        <h2>{title}</h2>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default Dialog;
