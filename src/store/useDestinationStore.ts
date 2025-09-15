import { create } from "zustand";

export interface Destination {
  id: number;
  name: string;
  type: "Beach" | "Mountains" | "City";
  image: string;
}

interface DestinationState {
  destinations: Destination[];
  filter: "All" | "Beach" | "Mountains" | "City";
  setFilter: (filter: "All" | "Beach" | "Mountains" | "City") => void;
  filteredDestinations: () => Destination[];
}

export const useDestinationStore = create<DestinationState>((set, get) => ({
  filter: "All",
  destinations: [
    {
      id: 1,
      name: "Bali",
      type: "Beach",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 2,
      name: "Swiss Alps",
      type: "Mountains",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      id: 3,
      name: "Paris",
      type: "City",
      image:
        "https://images.unsplash.com/photo-1524396309943-e03f5249f002?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Maldives",
      type: "Beach",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 5,
      name: "Rocky Mountains",
      type: "Mountains",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      id: 6,
      name: "New York",
      type: "City",
      image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // add more destinations...
  ],
  setFilter: (filter) => set({ filter }),
  filteredDestinations: () => {
    const { destinations, filter } = get();
    if (filter === "All") return destinations;
    return destinations.filter((d) => d.type === filter);
  },
  getFilteredDestinations: () => {
    const { destinations, filter } = get();
    if (filter === "All") return destinations;
    return destinations.filter((d) => d.type === filter);
  },
}));
