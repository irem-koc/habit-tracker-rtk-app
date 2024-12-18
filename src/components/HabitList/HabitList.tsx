import Box from "@mui/material/Box/Box";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import HabitItem from "../HabitItem/HabitItem";

type Props = {};

const HabitList = (props: Props) => {
  const { habits } = useSelector<RootState>((state) => state.habit);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {habits.map((habit) => (
        <HabitItem key={habit.id} {...habit} />
      ))}
    </Box>
  );
};

export default HabitList;
