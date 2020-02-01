import { createAction } from "@reduxjs/toolkit";

const updateScore = createAction<number>("UPDATE_SCORE");

export { updateScore };
