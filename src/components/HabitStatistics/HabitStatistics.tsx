import { CircularProgress, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHabits } from "../../features/habit/habitSlice";
import { getLongestStreak } from "../../helper/getLongestStreak";
import { AppDispatch, RootState } from "../../store/store";

type Props = {};

const HabitStatistics = (props: Props) => {
  const { habits, isLoading, isError } = useSelector<RootState>(
    (state) => state.habit
  );
  const result = getLongestStreak(habits);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchHabits());
  }, []);

  if (isLoading) {
    return <CircularProgress sx={{ p: 2, mt: 10 }} />;
  }
  if (isError) {
    return <Typography color="error">{isError}</Typography>;
  }
  return (
    <Paper elevation={2} sx={{ p: 2, mt: 10 }}>
      <Typography variant="h6" gutterBottom>
        Habit Statistics
      </Typography>
      <Typography variant="body1">Total Habits: {habits.length}</Typography>
      <Typography variant="body1">
        Completed Today:{" "}
        {(habits?.completedDates &&
          habits?.completedDates?.filter(
            (date) => date === new Date().toISOString().split("T")[0]
          ).length) ||
          0}
      </Typography>
      <Typography variant="body1">Longest Streak: {result}</Typography>
    </Paper>
  );
};

export default HabitStatistics;
