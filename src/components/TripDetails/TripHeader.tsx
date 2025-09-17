/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { FiMapPin, FiCalendar } from "react-icons/fi";

export default function TripHeader({ trip }: any) {
  return (
    <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
      <Image src={trip.image} alt={trip.name} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
        <h1 className="text-4xl font-bold text-white">{trip.name}</h1>
        <div className="flex items-center gap-4 mt-2 text-gray-200">
          <FiMapPin /> <span>{trip.location}</span>
          <FiCalendar /> <span>{trip.date}</span>
        </div>
        <p className="mt-2 text-gray-200">
          {trip.type} • {trip.locationType}
        </p>
      </div>
    </div>
  );
}
