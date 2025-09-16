"use client";

import Image from "next/image";
import Link from "next/link";
import { Trip } from "../../store/useTripStore";

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  return (
    <div className="relative border rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={trip.image}
          alt={trip.name}
          fill
          className="object-cover w-full h-full"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        {/* Date Badge */}
        <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {trip.date}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold  mb-1 truncate">
          {trip.name}
        </h3>
        {trip.location && (
          <p className="text-sm text-gray-500 mb-3 truncate">{trip.location}</p>
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
