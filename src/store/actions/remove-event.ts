import { createAction } from "@reduxjs/toolkit";

const removeEvent = createAction<string>("REMOVE_EVENT");

export { removeEvent };
