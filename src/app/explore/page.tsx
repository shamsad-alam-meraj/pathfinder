/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTripStore } from "@/store/useTripStore";
import { useMemo, useState } from "react";
import ProtectedRoute from "@/components/Shared/ProtectedRoute";
import ExploreBanner from "@/components/Explore/ExploreBanner";
import FilterSection from "@/components/Explore/FilterSection";
import TripCard from "@/components/Explore/TripCard";

export default function ExplorePage() {
  const trips = useTripStore((state) => state.trips);

  const locationTypes = Array.from(new Set(trips.map((t) => t.locationType))).sort();
  const tripTypes = Array.from(new Set(trips.map((t) => t.type))).sort();

  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredTrips = useMemo(() => {
    return trips.filter((t) => {
      const locationMatch = locationFilter === "All" || t.locationType === locationFilter;
      const typeMatch = typeFilter === "All" || t.type === typeFilter;
      return locationMatch && typeMatch;
    });
  }, [trips, locationFilter, typeFilter]);

  return (
    <ProtectedRoute>
      <div className="space-y-10">
        <ExploreBanner />

        <FilterSection
          title="Location"
          options={locationTypes}
          activeFilter={locationFilter}
          onFilterChange={setLocationFilter}
        />

        <FilterSection
          title="Trip Type"
          options={tripTypes}
          activeFilter={typeFilter}
          onFilterChange={setTypeFilter}
        />

        {/* Trips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
