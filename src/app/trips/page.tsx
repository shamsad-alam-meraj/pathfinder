"use client";

import TripCard from "@/components/TripCard";
import { useTripStore } from "@/store/useTripStore";

export default function TripList() {
  const trips = useTripStore((state) => state.trips);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
