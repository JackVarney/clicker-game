import React from "react";
import "./App.css";
import Main from "./container/Main";
import { createGame } from "./core/game";

function App() {
  createGame();

  return (
    <div class="App">
      <Main />
    </div>
  );
}

export default App;
