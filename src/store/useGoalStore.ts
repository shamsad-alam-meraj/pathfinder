import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Goal = {
  id: number;
  title: string;
  target: number;
  progress: number;
};

export type Itinerary = {
  id: number;
  title: string;
  activities: string[];
  completion: number;
};

type GoalStore = {
  goals: Goal[];
  itineraries: Itinerary[];
  addGoal: (title: string, target: number, progress: number) => void;
  updateProgress: (id: number, progress: number) => void;
  removeGoal: (id: number) => void;
  addItinerary: (title: string, activities: string[], completion: number) => void;
  updateItinerary: (id: number, data: Partial<Itinerary>) => void;
  reorderItineraries: (startIndex: number, endIndex: number) => void;
};

export const useGoalStore = create<GoalStore>()(
  persist(
    (set) => ({
      goals: [
        { id: 1, title: "Visit 5 Countries", target: 5, progress: 2 },
        { id: 2, title: "Take 3 Trips This Year", target: 3, progress: 1 },
      ],
      itineraries: [
        {
          id: 101,
          title: "Tokyo Adventure",
          activities: ["Shibuya", "Akihabara", "Senso-ji Temple"],
          completion: 20,
        },
        {
          id: 102,
          title: "Kyoto Highlights",
          activities: ["Fushimi Inari", "Kinkaku-ji", "Gion District"],
          completion: 50,
        },
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
      removeGoal: (id) =>
        set((state) => ({
          goals: state.goals.filter((goal) => goal.id !== id),
        })),
      addItinerary: (title, activities, completion) =>
        set((state) => ({
          itineraries: [
            ...state.itineraries,
            { id: Date.now(), title, activities, completion },
          ],
        })),
      updateItinerary: (id, data) =>
        set((state) => ({
          itineraries: state.itineraries.map((it) =>
            it.id === id ? { ...it, ...data } : it
          ),
        })),
      reorderItineraries: (startIndex, endIndex) =>
        set((state) => {
          const items = Array.from(state.itineraries);
          const [removed] = items.splice(startIndex, 1);
          items.splice(endIndex, 0, removed);
          return { itineraries: items };
        }),
    }),
    {
      name: "goal-storage",
      storage: createJSONStorage(() => {
        if (typeof window !== "undefined") return localStorage;
        return {
          getItem: async () => null,
          setItem: async () => {},
          removeItem: async () => {},
        };
      }),
    }
  )
);
