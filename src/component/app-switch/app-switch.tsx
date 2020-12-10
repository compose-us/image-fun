import React from "react";
import { Switch, Route } from "react-router-dom";
import Game from "../game/game";
import HowToPlay from "../how-to-play/how-to-play";
import Splash from "../splash/splash";

const AppSwitch = () => (
  <main>
    <Switch>
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/how-to-play">
        <HowToPlay />
      </Route>
      <Route path="/">
        <Splash />
      </Route>
    </Switch>
  </main>
);

export default AppSwitch;
