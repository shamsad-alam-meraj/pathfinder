/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTripStore, Trip } from "@/store/useTripStore";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Link from "next/link";

export default function ExplorePage() {
  const trips = useTripStore((state) => state.trips);

  // Extract dynamic filters from trips
  const locationTypes = Array.from(
    new Set(trips.map((t) => t.locationType))
  ).sort();
  const tripTypes = Array.from(new Set(trips.map((t) => t.type))).sort();

  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  // Featured trips (IDs 10–16)
  const featuredTrips = useMemo(
    () => trips.filter((t) => t.id >= 10 && t.id <= 16),
    [trips]
  );

  // Filtered trips
  const filteredTrips = useMemo(() => {
    return trips.filter((t) => {
      const locationMatch =
        locationFilter === "All" || t.locationType === locationFilter;
      const typeMatch = typeFilter === "All" || t.type === typeFilter;
      return locationMatch && typeMatch;
    });
  }, [trips, locationFilter, typeFilter]);

  // Interactive Filter Button Component
  const FilterButton = ({ active, onClick, children }: any) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border font-semibold transition-all ${
        active
          ? "bg-blue-700 text-white border-blue-700 shadow-lg"
          : " text-blue-700 border hover:bg-blue-100"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="space-y-10">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-2">Explore Your Next Adventure</h1>
        <p className="text-lg">
          Filter destinations by type or location to plan your dream trip.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <span className="font-semibold">Location:</span>
        <FilterButton
          active={locationFilter === "All"}
          onClick={() => setLocationFilter("All")}
        >
          All
        </FilterButton>
        {locationTypes.map((loc) => (
          <FilterButton
            key={loc}
            active={locationFilter === loc}
            onClick={() => setLocationFilter(loc)}
          >
            {loc}
          </FilterButton>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <span className="font-semibold">Trip Type:</span>
        <FilterButton
          active={typeFilter === "All"}
          onClick={() => setTypeFilter("All")}
        >
          All
        </FilterButton>
        {tripTypes.map((type) => (
          <FilterButton
            key={type}
            active={typeFilter === type}
            onClick={() => setTypeFilter(type)}
          >
            {type}
          </FilterButton>
        ))}
      </div>

      {/* Trips Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTrips.map((trip) => (
          <Link key={trip.id} href={`/trips/${trip.id}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-lg shadow-xl border overflow-hidden cursor-pointer flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={trip.image + "?auto=format&fit=crop&w=400&h=300"}
                  alt={trip.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 flex flex-col flex-1">
                <h3 className="font-bold text-lg">{trip.name}</h3>
                <p className="text-gray-600">
                  {trip.locationType} | {trip.type}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
