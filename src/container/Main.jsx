import React from "react";
import Number from "../components/Number";
import { useSelector } from "react-redux";

function Main() {
  const score = useSelector(state => state.score);
  const customers = useSelector(state => state.customers.count);

  return (
    <div>
      <Number label={"Score"}>{score}</Number>
      <Number label={"Customers"}>{customers}</Number>
    </div>
  );
}

export default Main;
