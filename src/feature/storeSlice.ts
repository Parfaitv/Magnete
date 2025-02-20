import { initialState } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
});

export const { reducer } = storeSlice;
