import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";
import { HabitsState } from "../../types/types";

const initialState: HabitsState = {
  habits: [],
};
const fetchHabits = createAsyncThunk("habits/fetchHabits", async () => {});

export const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<HabitsState>) => {
      state.habits.push({
        id: nanoid().toString(),
        name: action.payload.habitName,
        frequency: action.payload.frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      });
    },
    toggleHabit: (
      state,
      action: PayloadAction<{ id: String; date: string }>
    ) => {
      const habit = state.habits.find(
        (habit) => habit.id === action.payload.id
      );
      if (habit) {
        const index = habit.completedDates.indexOf(action.payload.date);
        if (index > -1) {
          habit.completedDates.splice(index, 1);
        } else {
          habit.completedDates.push(action.payload.date);
        }
      }
    },
    removeHabit: (state, action: PayloadAction<String>) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload
      );
    },
  },
});

export const { addHabit, removeHabit, toggleHabit } = habitSlice.actions;

export default habitSlice.reducer;
