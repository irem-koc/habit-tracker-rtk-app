import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../../features/habit/habitSlice";
import { AppDispatch } from "../../store/store";

interface Props {}
const AddHabitForm: React.FC<Props> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [habit, setHabit] = useState({
    habitName: "",
    frequency: "daily",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    setHabit((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHabit(habit));
    setHabit({ habitName: "", frequency: "daily" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          margin: "0 auto",
        }}
      >
        <FormControl fullWidth>
          <TextField
            name="habitName"
            onChange={handleChange}
            value={habit.habitName}
            id="habitName"
            label="Habit Name"
            variant="outlined"
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="frequency-label">Frequency</InputLabel>
          <Select
            labelId="frequency-label"
            id="frequency"
            name="frequency"
            onChange={handleChange}
            value={habit.frequency}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <Button
            sx={{ marginBottom: "15px" }}
            type="submit"
            disabled={!habit.frequency || !habit.habitName}
            variant="contained"
          >
            Add Habit
          </Button>
        </FormControl>
      </Box>
    </form>
  );
};

export default AddHabitForm;
