"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export default function TripBanner() {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-2"> {t("planNextAdventure")}</h2>
      <p className="text-lg"> {t("exploreUpcomingTrips")}</p>
    </div>
  );
}
