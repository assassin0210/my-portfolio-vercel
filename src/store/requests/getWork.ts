import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./baseRequest";
import { IWork } from "../slices/workSlice";

export const getWorkRequest = createAsyncThunk("data/work", async function (_) {
  const response = await instance.get<IWork[]>("/data/work.json");
  return response.data;
});
