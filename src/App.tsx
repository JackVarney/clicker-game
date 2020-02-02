import React from "react";
import "./App.css";
import Main from "./container/Main";
import { createGame } from "./game/game";

function App() {
  createGame();

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
