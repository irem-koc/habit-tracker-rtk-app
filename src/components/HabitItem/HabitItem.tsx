import { CheckCircleOutline, DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  Grid2,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeHabit, toggleHabit } from "../../features/habit/habitSlice";
import { getStreak } from "../../helper/getStreak";

type Props = {};
const today = new Date().toISOString().split("T")[0];

const HabitItem = ({ id, name, frequency, completedDates }: Props) => {
  const streak = getStreak({ id, name, frequency, completedDates });

  const dispatch = useDispatch();
  const handleRemoveHabit = () => {
    dispatch(removeHabit(id));
  };
  const handleToggleHabit = () => {
    dispatch(toggleHabit({ id, date: today }));
  };
  return (
    <Paper elevation={2} key={id} sx={{ p: 2 }}>
      <Grid2 container alignItems={"center"}>
        <Grid>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {frequency}
          </Typography>
        </Grid>
      </Grid2>
      <Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button
            color={completedDates.includes(today) ? "success" : "primary"}
            variant="outlined"
            startIcon={<CheckCircleOutline />}
            onClick={handleToggleHabit}
          >
            {completedDates.includes(today) ? "Completed" : "Mark Complete"}
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteOutline />}
            onClick={handleRemoveHabit}
          >
            Remove
          </Button>
        </Box>
      </Grid>
      <Box>
        <Typography variant="caption" color="text.primary">
          Current Streak: {streak} {streak <= 1 ? "day" : "days"}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(streak / 30) * 100}
          sx={{ mt: 1 }}
        />
      </Box>
    </Paper>
  );
};

export default HabitItem;
