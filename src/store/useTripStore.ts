import { getTripData } from "@/lib/dummy-data";
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
  wishlist: number[];
  startTrip: (id: number) => void;
  toggleWishlist: (id: number) => void;
}

export const useTripStore = create<TripState>()(
  persist(
    (set) => ({
      trips: getTripData(),
      startedTrips: [],
      wishlist: [],
      startTrip: (id: number) =>
        set((state) => ({
          startedTrips: state.startedTrips.includes(id)
            ? state.startedTrips
            : [...state.startedTrips, id],
        })),
      toggleWishlist: (id: number) =>
        set((state) => ({
          wishlist: state.wishlist.includes(id)
            ? state.wishlist.filter((tid) => tid !== id)
            : [...state.wishlist, id],
        })),
    }),
    {
      name: "trip-storage",
      storage: createJSONStorage(() => {
        if (typeof window !== "undefined") return localStorage;
        return {
          getItem: async () => null,
          setItem: async () => {},
          removeItem: async () => {},
        };
      }),
      partialize: (state) => ({
        startedTrips: state.startedTrips,
        wishlist: state.wishlist,
      }),
    }
  )
);
