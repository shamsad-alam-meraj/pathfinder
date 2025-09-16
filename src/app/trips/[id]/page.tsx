"use client";

import { useTripStore } from "@/store/useTripStore";
import Image from "next/image";
import React, { useState } from "react";
import { FiMapPin, FiCalendar, FiShare2, FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

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

  const [wishlist, setWishlist] = useState(false);

  if (!trip)
    return <p className="p-6 text-center text-red-500">Trip not found!</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header Image with Overlay */}
      <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
        <Image src={trip.image} alt={trip.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
          <h1 className="text-4xl font-bold text-white">{trip.name}</h1>
          <div className="flex items-center gap-4 mt-2 text-gray-200">
            <FiMapPin /> <span>{trip.location}</span>
            <FiCalendar /> <span>{trip.date}</span>
          </div>
          <p className="mt-2 text-gray-200">{trip.type} • {trip.locationType}</p>
        </div>
      </div>

      {/* Trip Overview Section */}
      <section className="border shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Trip Overview</h2>
        <p className="leading-relaxed">{trip.description}</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Duration:</strong> {trip.duration}</li>
          <li><strong>Location:</strong> {trip.location}</li>
          <li>
            <strong>Activities:</strong> {trip.activities.join(", ")}
          </li>
          <li>
            <strong>Recommended Gear:</strong> {trip.recommendedGear.join(", ")}
          </li>
          <li>
            <strong>Best Travel Time:</strong> {trip.bestTravelTime}
          </li>
        </ul>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-md transition">
          Start Trip
        </button>
        <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded shadow-md transition">
          <FiShare2 /> Share
        </button>
        <button
          onClick={() => setWishlist(!wishlist)}
          className={`flex items-center gap-2 py-2 px-4 rounded shadow-md transition ${
            wishlist
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-red-500 hover:text-white"
          }`}
        >
          {wishlist ? <AiFillHeart /> : <FiHeart />} Wishlist
        </button>
      </div>

      {/* Highlights Section */}
      <section className="border shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Trip Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trip.activities.map((activity, index) => (
            <div key={index} className="border p-4 rounded shadow-sm">
              <h3 className="font-semibold">{activity}</h3>
              <p className="mt-1">Enjoy {activity.toLowerCase()} during this trip.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
