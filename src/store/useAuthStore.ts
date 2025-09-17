import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { useTripStore } from "./useTripStore";
import { useGoalStore } from "./useGoalStore";
import { useSettingsStore } from "./useSettingsStore";

interface User {
  name: string;
  email: string;
  image?: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => {
        // Reset all other stores in memory
        useTripStore.setState({ trips: [], startedTrips: [], wishlist: [] });
        useGoalStore.setState({ goals: [] });
        useSettingsStore.setState({
          darkMode: false,
          notifications: false,
          locationAccess: false,
          privacyMode: false,
          language: "English",
        });

        // Clear persisted storage for each store individually
        if (typeof window !== "undefined") {
          localStorage.removeItem("trip-storage");
          localStorage.removeItem("goal-storage");
          localStorage.removeItem("settings-storage");
          localStorage.removeItem("auth-storage"); // auth itself
        }

        // Reset auth store in memory
        set({ user: null });
      },
    }),
    {
      name: "auth-storage",
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
