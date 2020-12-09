import React from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import { ContextProviders } from "./context/context-providers";
import { BrowserRouter } from "react-router-dom";
import AppSwitch from "./component/app-switch/app-switch";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ContextProviders>
      <BrowserRouter>
        <AppSwitch />
      </BrowserRouter>
    </ContextProviders>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your game to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
