import React from "react";

import style from "./dialog.module.css";

interface DialogProps {
  title: string;
  message: string | React.ReactNode;
  close: () => void;
  animate?: boolean;
}

const Dialog: React.FC<DialogProps> = ({ animate, close, message, title }) => {
  return (
    <div
      className={style.root}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          close();
        }
      }}
    >
      <div className={`${style.content} ${animate ? style.party : ""}`}>
        <h3>{title}</h3>
        {typeof message === "string" ? <h4>{message}</h4> : message}
        <br />
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Dialog;
