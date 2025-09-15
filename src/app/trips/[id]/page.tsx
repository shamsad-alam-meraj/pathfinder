"use client";

import { useTripStore } from "@/store/useTripStore";
import Image from "next/image";
import React from "react";


export default function TripDetails({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = React.use(paramsPromise);
  const id = params.id;

  const trip = useTripStore((state) =>
    state.trips.find((t) => t.id === Number(id))
  );

  if (!trip) return <p className="p-6">Trip not found!</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative h-80 w-full rounded overflow-hidden shadow-lg">
        <Image
          src={trip.image}
          alt={trip.name}
          fill
          className="object-cover rounded"
        />
      </div>

      <h1 className="mt-4 text-3xl font-bold">{trip.name}</h1>
      <p className="text-gray-600">{trip.date}</p>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Trip Overview</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      <button
        onClick={() => window.history.back()}
        className="mt-6 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
      >
        Back
      </button>
    </div>
  );
}
