import { createSlice } from "@reduxjs/toolkit";
import { getStackRequest } from "../requests/getStack";

export interface IStack {
  src: string;
  name: string;
  link: string;
}

export type IStatus = "init" | "loading" | "loaded" | "error";

interface IInitialState {
  stack: IStack[];
  status: IStatus;
}

const initialState: IInitialState = {
  stack: [],
  status: "init",
};
const stackSlice = createSlice({
  name: "stack",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStackRequest.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getStackRequest.fulfilled, (state, { payload }) => {
      state.stack = payload;
      state.status = "loaded";
    });
    builder.addCase(getStackRequest.rejected, (state) => {
      state.status = "error";
    });
  },
});
// export const {} = translateSlice.actions;
export const stackData = stackSlice.reducer;
