import { createAction } from "@reduxjs/toolkit";

const updateEventLimit = createAction<{
  index: number;
  limit: number;
}>("UPDATE_EVENT_LIMIT");

export { updateEventLimit };
