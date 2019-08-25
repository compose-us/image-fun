import React, { useCallback, useEffect } from "react";

import style from "./Dialog.module.css";

interface DialogProps {
  title: string;
  message: string;
  close: () => void;
}

const Dialog: React.FC<DialogProps> = ({ close, message, title }) => {
  const closeOnEnter = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        close();
      }
    },
    [close]
  );
  useEffect(() => {
    const oldKeypress = window.onkeypress;
    window.onkeypress = closeOnEnter;
    return () => {
      window.onkeypress = oldKeypress;
    };
  }, [closeOnEnter]);
  return (
    <div className={style.root} onClick={close}>
      <div className={style.content}>
        <h2>{title}</h2>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default Dialog;
