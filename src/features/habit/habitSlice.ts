import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";
import { HabitsState } from "../../types/types";

const initialState: HabitsState = {
  habits: [],
  isLoading: false,
  isError: null,
  isSuccess: null,
};
export const fetchHabits = createAsyncThunk("habit/fetchHabits", async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const mockData = [
    {
      id: "1",
      name: "irem",
      frequency: "kc",
      completedDates: [],
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      name: "tugba",
      frequency: "kc",
      completedDates: [],
      createdAt: new Date().toISOString(),
    },
  ];
  return mockData;
});

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
  extraReducers(builder) {
    builder
      .addCase(fetchHabits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHabits.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message || "Failed to fetch";
      })
      .addCase(fetchHabits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.habits = action.payload;
      });
  },
});

export const { addHabit, removeHabit, toggleHabit } = habitSlice.actions;

export default habitSlice.reducer;
