import { createAction } from "@reduxjs/toolkit";

const addEvent = createAction<{
  name: string;
  actions: string[];
  limit: number;
}>("ADD_EVENT");

export { addEvent };
