import React from "react";
import { addEvent } from "../store/actions/add-event";
import { useDispatch } from "../store";
import { createServeCustomerAction } from "../game/events/serve-customer";
import Button from "../components/Button";
import Staff from "./Staff";
import Shop from "./Shop";

function Main() {
  const dispatch = useDispatch();

  return (
    <div>
      <Shop></Shop>
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
