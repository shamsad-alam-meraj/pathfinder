"use client";

import { Trip } from "@/store/useTripStore";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  const { t } = useTranslation();

  return (
    <Link href={`/trips/${trip.id}`}>
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
            {t(trip.locationType)} | {t(trip.type)}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
