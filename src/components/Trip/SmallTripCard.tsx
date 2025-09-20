"use client";

import { Trip } from "@/store/useTripStore";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface TripCardProps {
  trip: Trip;
}

export default function SmallTripCard({ trip }: TripCardProps) {
  const { t } = useTranslation();

  return (
    <div className="w-60 min-w-[15rem] border rounded-lg shadow-md overflow-hidden flex-shrink-0">
      {/* Trip Image */}
      <div className="w-full h-36 relative">
        <Image src={trip.image} alt={trip.name} fill className="object-cover" />
      </div>

      {/* Trip Info */}
      <div className="p-3">
        <h3 className="text-lg font-semibold truncate">{trip.name}</h3>
        <p className="text-sm text-gray-500">
          {t("date")}: {trip.date}
        </p>
        {trip.location && (
          <p className="text-sm text-gray-400 truncate">
            {t("location2")}: {trip.location}
          </p>
        )}
      </div>
    </div>
  );
}
