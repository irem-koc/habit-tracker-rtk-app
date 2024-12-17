import { Button, Container, TextField, Typography } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Container>
      <Typography align="center" variant="h2" gutterBottom>
        Habit Tracker
      </Typography>
      <TextField
        sx={{ marginBottom: "20px" }}
        fullWidth
        id="habitName"
        label="Habit Name"
        variant="outlined"
      />
      <TextField
        sx={{ marginBottom: "20px" }}
        fullWidth
        id="frequency"
        label="Frequency"
        variant="outlined"
      />
      <Button fullWidth variant="contained">
        Add Habit
      </Button>
    </Container>
  );
}

export default App;
