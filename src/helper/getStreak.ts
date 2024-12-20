import { HabitsState } from "../types/types";

export const getStreak = (habit: HabitsState): number => {
  if (!habit.completedDates || habit.completedDates.length === 0) return 0;

  const today = new Date().toISOString().split("T")[0];
  const dates = habit.completedDates.map((date) => new Date(date));
  dates.sort((a, b) => b.getTime() - a.getTime());

  let streak = 0;
  let currentDate = new Date(today);

  for (const date of dates) {
    if (
      date.toISOString().split("T")[0] ===
      currentDate.toISOString().split("T")[0]
    ) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else if (date < currentDate) {
      break;
    }
  }

  return streak;
};
