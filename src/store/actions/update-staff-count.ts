import { createAction } from "@reduxjs/toolkit";

const updateStaffCount = createAction<number>("UPDATE_STAFF_COUNT");

export { updateStaffCount };
