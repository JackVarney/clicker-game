import React from "react";
import { addEvent } from "../store/actions/add-event";
import { useDispatch } from "../store";
import { createServeCustomerAction } from "../game/events/serve-customer";
import LoadingButton from "../components/LoadingButton";
import Staff from "./Staff";
import Shop from "./Shop";
import Advertising from "./Advertising";

function Main() {
  const dispatch = useDispatch();

  return (
    <div>
      <Shop></Shop>
      <LoadingButton
        onClick={() => {
          dispatch(addEvent(createServeCustomerAction(1)));
        }}
        disabled
      >
        Serve customer
      </LoadingButton>
      <Staff />
      <Advertising />
    </div>
  );
}

export default Main;
