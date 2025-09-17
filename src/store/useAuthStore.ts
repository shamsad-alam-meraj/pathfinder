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
        // Clear all other stores
        useTripStore.persist.clearStorage?.();
        useGoalStore.persist.clearStorage?.();
        useSettingsStore.persist.clearStorage?.();

        // Reset stores in memory
        useTripStore.setState({ trips: useTripStore.getState().trips, startedTrips: [], wishlist: [] });
        useGoalStore.setState({ goals: [] });
        useSettingsStore.setState({
          darkMode: false,
          notifications: false,
          locationAccess: false,
          privacyMode: false,
          language: "English",
        });

        //  Clear auth itself
        set({ user: null });

        // clear entire localStorage
        if (typeof window !== "undefined") localStorage.clear();
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
