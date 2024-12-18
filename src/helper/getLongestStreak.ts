import { getStreak } from "./getStreak";

export const getLongestStreak = (habits) => {
  return Math.max(...habits?.map(getStreak), 0);
};
