import React from "react";
import { Switch, Route } from "react-router-dom";
import Game from "../game";

const AppSwitch = () => (
  <main>
    <Switch>
      <Route path="/guide">
        <h1>guide</h1>
      </Route>
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/">
        <h1>default route</h1>
      </Route>
    </Switch>
  </main>
);

export default AppSwitch;
