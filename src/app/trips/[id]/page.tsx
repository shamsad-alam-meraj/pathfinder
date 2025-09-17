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
  const id = Number(params.id);

  const trip = useTripStore((state) => state.trips.find((t) => t.id === id));
  const startTrip = useTripStore((state) => state.startTrip);
  const startedTrips = useTripStore((state) => state.startedTrips);
  const toggleWishlist = useTripStore((state) => state.toggleWishlist);
  const isWishlisted = useTripStore((state) =>
    state.wishlist.includes(Number(id))
  );
  const hasStarted = startedTrips.includes(id);

  if (!trip) {
    return (
      <ProtectedRoute>
        <div className="h-[calc(100%)] flex items-center justify-center">
          <h6 className="p-6 text-center text-red-500 text-4xl font-bold">
            Trip not found!
          </h6>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <TripHeader trip={trip} />
        <TripOverview trip={trip} />
        <TripActions
          hasStarted={hasStarted}
          startTrip={startTrip}
          id={id}
          wishlist={isWishlisted}
          toggleWishlist={toggleWishlist}
        />
        <TripHighlights activities={trip.activities} />
      </div>
    </ProtectedRoute>
  );
}
