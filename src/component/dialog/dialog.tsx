import React from "react";

import style from "./dialog.module.css";

interface DialogProps {
  title: string;
  message: string | React.ReactNode;
  close: () => void;
}

const Dialog: React.FC<DialogProps> = ({ close, message, title }) => {
  return (
    <div className={style.root} onClick={close}>
      <div className={style.content}>
        <h2>{title}</h2>
        {typeof message === "string" ? <h4>{message}</h4> : message}
      </div>
    </div>
  );
};

export default Dialog;
