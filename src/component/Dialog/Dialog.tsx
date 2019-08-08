import React from "react";

import style from "./Dialog.module.css";

interface DialogProps {
  title: string;
  message: string;
  close: () => void;
}

const Dialog: React.FC<DialogProps> = ({ close, message, title }) => {
  return (
    <div className={style.root}>
      <button onClick={close}>Close</button>
      <h2>{title}</h2>
      <div>{message}</div>
    </div>
  );
};

export default Dialog;
