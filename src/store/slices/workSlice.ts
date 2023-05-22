import { createSlice } from "@reduxjs/toolkit";
import { IStatus } from "./stackSlice";
import { getWorkRequest } from "../requests/getWork";

export interface IWork {
  link: string;
  git: string;
  src: string;
}

interface IInitialState {
  work: IWork[];
  status: IStatus;
}

const initialState: IInitialState = {
  work: [],
  status: "init",
};
const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWorkRequest.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getWorkRequest.fulfilled, (state, { payload }) => {
      state.work = payload;
      state.status = "loaded";
    });
    builder.addCase(getWorkRequest.rejected, (state) => {
      state.status = "error";
    });
  },
});
// export const {} = translateSlice.actions;
export const workData = workSlice.reducer;
