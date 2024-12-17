export interface HabitsState {
  habits: {
    id: string;
    name: string;
    frequency: string;
    completedDates: string[];
    createdAt: string;
  }[];
}
