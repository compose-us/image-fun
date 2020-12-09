import React from "react";

import style from "./dialog.module.css";

interface DialogProps {
  title: string;
  message: string | React.ReactNode; // TODO: where is this being used a string?
  close: () => void;
}

const Dialog: React.FC<DialogProps> = ({ close, message, title }) => {
  return (
    <div
      className={style.root}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          close();
        }
      }}
    >
      <div className={style.content}>
        <h3>{title}</h3>
        {typeof message === "string" ? <h4>{message}</h4> : message}
        <br />
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Dialog;
