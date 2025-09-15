import { create } from "zustand";

export type Goal = {
  id: number;
  title: string;
  target: number; // e.g. "Visit 5 countries"
  progress: number; // e.g. 2 done
};

type GoalStore = {
  goals: Goal[];
  addGoal: (title: string, target: number, progress: number) => void;
  updateProgress: (id: number, progress: number) => void;
};

export const useGoalStore = create<GoalStore>((set) => ({
  goals: [
    { id: 1, title: "Visit 5 Countries", target: 5, progress: 2 },
    { id: 2, title: "Take 3 Trips This Year", target: 3, progress: 1 },
  ],
  addGoal: (title, target, progress) =>
    set((state) => ({
      goals: [...state.goals, { id: Date.now(), title, target, progress }],
    })),
  updateProgress: (id, progress) =>
    set((state) => ({
      goals: state.goals.map((goal) =>
        goal.id === id ? { ...goal, progress } : goal
      ),
    })),
}));
