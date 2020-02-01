import React from "react";
import { addEvent } from "../store/actions/add-event";
import { createServeCustomerAction } from "../game/actions/serve-customer";
import Number from "../components/Number";
import Button from "../components/Button";
import Staff from "./Staff";
import { useSelector, useDispatch } from "../core/typed-react-redux";

function Main() {
  const dispatch = useDispatch();
  const score = useSelector(state => state.game.score);
  const customers = useSelector(state => state.game.customers.count);

  return (
    <div>
      <Number label={"Score"}>{score}</Number>
      <Number label={"Customers"}>{customers}</Number>
      <Button
        onClick={() => {
          dispatch(addEvent(createServeCustomerAction(1)));
        }}
      >
        Serve customer
      </Button>
      <Staff />
    </div>
  );
}

export default Main;
