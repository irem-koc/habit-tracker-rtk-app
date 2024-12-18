import { Container, Typography } from "@mui/material";
import "./App.css";
import AddHabitForm from "./components/AddHabitForm/AddHabitForm";
import HabitList from "./components/HabitList/HabitList";

function App() {
  return (
    <Container>
      <Typography align="center" variant="h2" gutterBottom>
        Habit Tracker
      </Typography>
      <AddHabitForm />
      <HabitList />
    </Container>
  );
}

export default App;
