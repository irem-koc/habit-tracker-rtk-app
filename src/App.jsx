import { Container, Typography } from "@mui/material";
import "./App.css";
import AddHabitForm from "./components/AddHabitForm/AddHabitForm";
import HabitList from "./components/HabitList/HabitList";
import HabitStatistics from "./components/HabitStatistics/HabitStatistics";

function App() {
  return (
    <Container>
      <Typography align="center" variant="h2" gutterBottom>
        Habit Tracker
      </Typography>
      <AddHabitForm />
      <HabitList />
      <HabitStatistics />
    </Container>
  );
}

export default App;
