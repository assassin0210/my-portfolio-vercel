import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./baseRequest";
import { IStack } from "../slices/stackSlice";

export const getStackRequest = createAsyncThunk(
  "data/stack",
  async function (_) {
    const response = await instance.get<IStack[]>("/data/stack.json");
    return response.data;
  }
);
