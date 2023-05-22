import { combineReducers } from "@reduxjs/toolkit";
import { lang } from "./slices/translateSlice";
import { stackData } from "./slices/stackSlice";
import { workData } from "./slices/workSlice";
import { skillsData } from "./slices/skillsSlice";

export const rootReducer = combineReducers({
  lang,
  stackData,
  workData,
  skillsData,
});
export type RootStateType = ReturnType<typeof rootReducer>;
