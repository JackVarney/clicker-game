import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Number from "../components/Number";
import Button from "../components/Button";
import Staff from "./Staff";
import { updateCustomers } from "../store/actions/update-customers";
import { updateScore } from "../store/actions/update-score";

function Main() {
  const dispatch = useDispatch();
  const score = useSelector(state => state.score);
  const customers = useSelector(state => state.customers.count);

  return (
    <div>
      <Number label={"Score"}>{score}</Number>
      <Number label={"Customers"}>{customers}</Number>
      <Button
        onClick={() => {
          if (customers > 0) {
            dispatch(updateCustomers(-1));
            dispatch(updateScore(+5));
          }
        }}
      >
        Serve customer
      </Button>
      <Staff />
    </div>
  );
}

export default Main;
