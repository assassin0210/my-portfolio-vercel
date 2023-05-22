import { createSlice } from "@reduxjs/toolkit";
import { getSkillsRequest } from "../requests/getSkillsRequest";
import { IStatus } from "./stackSlice";

export interface ISkill {
  skill: string;
  percent: string;
}

interface IInitialState {
  skills: ISkill[];
  status: IStatus;
}

const initialState: IInitialState = {
  skills: [],
  status: "init",
};
const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSkillsRequest.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getSkillsRequest.fulfilled, (state, { payload }) => {
      state.skills = payload;
      state.status = "loaded";
    });
    builder.addCase(getSkillsRequest.rejected, (state) => {
      state.status = "error";
    });
  },
});
// export const {} = translateSlice.actions;
export const skillsData = skillsSlice.reducer;
