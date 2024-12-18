export interface HabitsState {
  habits: {
    id: string;
    name: string;
    frequency: string;
    completedDates: string[];
    createdAt: string;
  }[];
  isLoading: boolean;
  isError: null | string;
  isSuccess: null | boolean;
}
