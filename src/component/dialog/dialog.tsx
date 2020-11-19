import React from "react";

import style from "./dialog.module.css";

interface DialogProps {
  title: string;
  message: string;
  close: () => void;
}

const Dialog: React.FC<DialogProps> = ({ close, message, title }) => {
  return (
    <div className={style.root} onClick={close}>
      <div className={style.content}>
        <h2>{title}</h2>
        <h4>{message}</h4>
      </div>
    </div>
  );
};

export default Dialog;
