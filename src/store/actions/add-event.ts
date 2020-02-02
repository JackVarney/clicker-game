import { createAction } from "@reduxjs/toolkit";
import { GameEvent } from "../../core/types/GameEvent";

const addEvent = createAction<GameEvent>("ADD_EVENT");

export { addEvent };
