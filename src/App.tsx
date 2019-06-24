import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import FullscreenGrid from "./component/FullscreenGrid";
import pairGenerator from "./lib/pair-generator";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <FullscreenGrid words={pairGenerator()} />
      </DndProvider>
    </div>
  );
};

export default App;
