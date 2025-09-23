import { getTripData } from "@/lib/dummy-data";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import i18n from "@/lib/i18n";

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
  completedTrips: number[];
  refreshTrips: () => void;
  startTrip: (id: number) => void;
  toggleWishlist: (id: number) => void;
  completeTrip: (id: number) => void;
}

export const useTripStore = create<TripState>()(
  persist(
    (set) => {
      // init store
      const initialTrips = getTripData();

      // subscribe to language change
      i18n.on("languageChanged", () => {
        set({ trips: getTripData() });
      });

      return {
        trips: initialTrips,
        startedTrips: [],
        wishlist: [],
        completedTrips: [],
        refreshTrips: () => set({ trips: getTripData() }),
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
        completeTrip: (id: number) =>
          set((state) => ({
            completedTrips: state.completedTrips.includes(id)
              ? state.completedTrips
              : [...state.completedTrips, id],
            startedTrips: state.startedTrips.filter((tid) => tid !== id),
          })),
      };
    },
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
        completedTrips: state.completedTrips,
      }),
    }
  )
);
