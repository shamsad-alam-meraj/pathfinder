/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useDestinationStore } from "@/store/useDestinationStore";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

export default function ExplorePage() {
  const filter = useDestinationStore((state) => state.filter);
  const setFilter = useDestinationStore((state) => state.setFilter);
  const allDestinations = useDestinationStore((state) => state.destinations);

  // useMemo caches the filtered array, recompute only when filter or destinations change
  const destinations = useMemo(() => {
    if (filter === "All") return allDestinations;
    return allDestinations.filter((d) => d.type === filter);
  }, [filter, allDestinations]);

  const filterOptions = ["All", "Beach", "Mountains", "City"];

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">Explore Destinations</h1>

      {/* Filters */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {filterOptions.map((option) => (
          <Button
            key={option}
            onClick={() => setFilter(option as any)}
            className={`${
              filter === option
                ? "bg-blue-700 text-white"
                : " hover:bg-gray-200 bg-white text-blue-700"
            } font-bold`}
          >
            {option}
          </Button>
        ))}
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <motion.div
            key={dest.id}
            whileHover={{ scale: 1.05 }}
            className=" rounded-lg shadow-xl border overflow-hidden cursor-pointer"
          >
            <div className="relative h-48 w-full">
              <Image
                src={dest.image + "?auto=format&fit=crop&w=400&h=300"}
                alt={dest.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="font-bold text-lg">{dest.name}</h3>
              <p className="text-gray-600">{dest.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
