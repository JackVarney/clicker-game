import React from "react";
import Score from "../components/Score";
import { useSelector } from "react-redux";

function Main() {
  const score = useSelector(state => state.score.score);

  return (
    <div>
      <Score score={score} />
    </div>
  );
}

export default Main;
