"use client";

import React, { useState } from "react";
import { useTripStore } from "@/store/useTripStore";
import ProtectedRoute from "@/components/Shared/ProtectedRoute";
import TripHeader from "@/components/TripDetails/TripHeader";
import TripOverview from "@/components/TripDetails/TripOverview";
import TripActions from "@/components/TripDetails/TripActions";
import TripHighlights from "@/components/TripDetails/TripHighlights";

export default function TripDetails({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = React.use(paramsPromise);
  const id = params.id;

  const trip = useTripStore((state) =>
    state.trips.find((t) => t.id === Number(id))
  );
  const startTrip = useTripStore((state) => state.startTrip);
  const startedTrips = useTripStore((state) => state.startedTrips);

  const [wishlist, setWishlist] = useState(false);

  // if (!trip)
  //   return <p className="p-6 text-center text-red-500">Trip not found!</p>;
  const hasStarted = startedTrips.includes(Number(id));

  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <TripHeader trip={trip} />
        <TripOverview trip={trip} />
        <TripActions
          wishlist={wishlist}
          setWishlist={setWishlist}
          startTrip={startTrip}
          hasStarted={hasStarted}
          id={Number(id)}
        />
        <TripHighlights activities={trip.activities} />
      </div>
    </ProtectedRoute>
  );
}
