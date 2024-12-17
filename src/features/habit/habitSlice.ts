import { createSlice } from "@reduxjs/toolkit";
import { HabitsState } from "../../types/types";

const initialState: HabitsState = {
  habits: [],
};

export const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addHabit: (state, action) => {},
  },
});

export const { addHabit } = habitSlice.actions;

export default habitSlice.reducer;
