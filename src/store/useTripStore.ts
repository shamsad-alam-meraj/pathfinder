import { tripData } from "@/lib/dummy-data";
import { create } from "zustand";

export interface Trip {
  id: number;
  name: string;
  date: string;
  image: string;
  location: string;
}

interface TripState {
  trips: Trip[];
  addTrip: (trip: Trip) => void;
  removeTrip: (id: number) => void;
}

export const useTripStore = create<TripState>((set) => ({
  trips: tripData,
  addTrip: (trip) => set((state) => ({ trips: [...state.trips, trip] })),
  removeTrip: (id) =>
    set((state) => ({ trips: state.trips.filter((t) => t.id !== id) })),
}));
