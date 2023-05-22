import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  lang: string;
}

const initialState: IInitialState = {
  lang: localStorage.getItem("lang") || "ru",
};
const translateSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang(state, { payload }) {
      state.lang = payload;
      localStorage.setItem("lang", payload);
    },
  },
});
export const { setLang } = translateSlice.actions;
export const lang = translateSlice.reducer;
