import { tripData } from "@/lib/dummy-data";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface Trip {
  id: number;
  name: string;
  date: string;
  image: string;
  location: string;
  type: string;
  locationType: string;
  description: string;
  recommendedGear: string[];
  activities: string[];
  bestTravelTime: string;
  duration: string;
}

interface TripState {
  trips: Trip[];
  startedTrips: number[];
  startTrip: (id: number) => void;
}

export const useTripStore = create<TripState>()(
  persist(
    (set) => ({
      trips: tripData,
      startedTrips: [],
      startTrip: (id: number) =>
        set((state) => ({
          startedTrips: state.startedTrips.includes(id)
            ? state.startedTrips
            : [...state.startedTrips, id],
        })),
    }),
    {
      name: "trip-storage",
      storage: createJSONStorage(() => {
        if (typeof window !== "undefined") return localStorage;
        // Dummy storage for SSR
        return {
          getItem: async () => null,
          setItem: async () => {},
          removeItem: async () => {},
        };
      }),
      partialize: (state) => ({ startedTrips: state.startedTrips }),
    }
  )
);
