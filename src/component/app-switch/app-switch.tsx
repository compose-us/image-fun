import React from "react";
import { Switch, Route } from "react-router-dom";
import Game from "../game";
import Splash from "../splash/splash";

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
        <Splash />
      </Route>
    </Switch>
  </main>
);

export default AppSwitch;
