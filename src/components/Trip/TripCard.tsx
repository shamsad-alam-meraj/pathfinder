"use client";

import Image from "next/image";
import Link from "next/link";
import { Trip } from "../../store/useTripStore";
import { FiMapPin, FiClock } from "react-icons/fi";

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  return (
    <div className="relative border rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col ">
      {/* Image Section */}
      <div className="relative w-full h-52 md:h-60">
        <Image
          src={trip.image}
          alt={trip.name}
          fill
          className="object-cover w-full h-full"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Date & Duration Badge */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {trip.date}
          </span>
          {trip.duration && (
            <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
              {trip.duration}
            </span>
          )}
        </div>

        {/* Trip Type Badge */}
        {trip.type && (
          <span className="absolute top-2 right-2 bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {trip.type}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1 space-y-2">
        {/* Trip Name */}
        <h3 className="text-lg font-bold truncate">{trip.name}</h3>

        {/* Location & Location Type */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
          {trip.location && (
            <span className="flex items-center gap-1">
              <FiMapPin /> {trip.location}
            </span>
          )}
          {trip.locationType && (
            <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs">
              {trip.locationType}
            </span>
          )}
        </div>

        {/* Best Travel Time */}
        {trip.bestTravelTime && (
          <p className="flex items-center gap-1 text-gray-500 text-sm">
            <FiClock /> Best Time: {trip.bestTravelTime}
          </p>
        )}

        {/* CTA Button */}
        <Link href={`/trips/${trip.id}`} className="mt-auto">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
