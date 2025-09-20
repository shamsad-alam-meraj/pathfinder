/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTranslation } from "react-i18next";

export default function TripOverview({ trip }: any) {
  const { t } = useTranslation();

  return (
    <section className="border shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-2xl font-semibold">{t("tripOverview")}</h2>
      <p className="leading-relaxed">{trip.description}</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>{t("duration")}:</strong> {trip.duration}
        </li>
        <li>
          <strong>{t("location2")}:</strong> {trip.location}
        </li>
        <li>
          <strong>{t("activities")}:</strong> {trip.activities.join(", ")}
        </li>
        <li>
          <strong>{t("recommendedGear")}:</strong> {trip.recommendedGear.join(", ")}
        </li>
        <li>
          <strong>{t("bestTravelTime")}:</strong> {trip.bestTravelTime}
        </li>
      </ul>
    </section>
  );
}
