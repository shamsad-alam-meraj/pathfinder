"use client";

import { motion } from "framer-motion";
import { useTripStore } from "@/store/useTripStore";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoalProgressChart from "@/components/Dashboard/GoalProgressChart";
import ProtectedRoute from "@/components/Shared/ProtectedRoute";
import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";
import DashboardLoading from "./loading";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "@/store/useAuthStore";
import DashboardBanner from "@/components/Dashboard/DashboardBanner";

export default function Dashboard() {
  const router = useRouter();
  const trips = useTripStore((state) => state.trips);
  const startedTrips = useTripStore((state) => state.startedTrips);
  const wishlist = useTripStore((state) => state.wishlist);
  const completedTrips = useTripStore((state) => state.completedTrips);

  const { t } = useTranslation();
  const user = useAuthStore((state) => state.user);

  // Analytics counts
  const totalTrips = trips.length;
  const totalStarted = startedTrips.length;
  const totalWishlisted = wishlist.length;
  const totalCompleted = completedTrips.length;

  const startedTripsData = trips.filter((t) => startedTrips.includes(t.id));
  const wishlistedTripsData = trips.filter((t) => wishlist.includes(t.id));
  const completedTripsData = trips.filter((t) => completedTrips.includes(t.id));

  const chartData = [
    { name: "Wishlisted", value: totalWishlisted, fill: "#facc15" },
    { name: "Started", value: totalStarted, fill: "#4ade80" },
    { name: "Completed", value: totalCompleted, fill: "#a855f7" },
    {
      name: "Remaining",
      value: totalTrips - (totalStarted + totalCompleted),
      fill: "#3b82f6",
    },
  ];

  return (
    <Suspense fallback={<DashboardLoading />}>
      <ProtectedRoute>
        <div className="px-5 md:px-10 space-y-10">
          {/* Hero / Header */}
          <DashboardBanner/>
          

          {/* Left Column */}
          <div className="flex flex-col lg:flex-row gap-10 w-full">
            <div className="flex-1 space-y-6">
              {/* New Trip */}
              <Button
                className="w-full flex items-center justify-center gap-3 text-lg md:text-xl text-blue-800 
                 bg-blue-200 hover:bg-blue-100 font-semibold py-6 md:py-10 rounded-lg 
                 transition-transform duration-200 hover:scale-101 shadow-md"
                onClick={() => router.push("/trips")}
              >
                <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                  <FiPlus className="text-blue-500 font-bold" size={24} />
                </span>
                {t("startNewTrip")}
              </Button>
              {/* Wishlisted Trips Section */}
              <section className="space-y-4 mt-6">
                <h2 className="text-xl md:text-2xl font-semibold text-[#facc15]">
                  {t("wishlistedTrips")}
                </h2>
                {wishlistedTripsData.length === 0 && (
                  <p className="text-gray-500">{t("noWishlistedTrips")}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wishlistedTripsData.map((trip) => (
                    <div
                      key={trip.id}
                      className="border border-[#facc15] rounded-lg p-4 flex gap-4 shadow-sm cursor-pointer hover:shadow-md bg-yellow-50 dark:bg-transparent"
                      onClick={() => router.push(`/trips/${trip.id}`)}
                    >
                      <Image
                        src={trip.image}
                        alt={trip.name}
                        width={100}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{trip.name}</h3>
                        <p className="text-sm text-gray-500">{trip.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              {/* Started Trips Section */}
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-[#4ade80]">
                  {t("startedTrips")}
                </h2>
                {startedTripsData.length === 0 && (
                  <p className="text-gray-500">{t("noStartedTrips")}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {startedTripsData.map((trip) => (
                    <div
                      key={trip.id}
                      className="border border-[#4ade80] rounded-lg p-4 flex gap-4 shadow-sm cursor-pointer hover:shadow-md bg-green-50 dark:bg-transparent"
                      onClick={() => router.push(`/trips/${trip.id}`)}
                    >
                      <Image
                        src={trip.image}
                        alt={trip.name}
                        width={100}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{trip.name}</h3>
                        <p className="text-sm text-gray-500">{trip.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ✅ Completed Trips Section */}
              <section className="space-y-4 mt-6">
                <h2 className="text-xl md:text-2xl font-semibold text-purple-600">
                  {t("completedTrips")}
                </h2>
                {completedTripsData.length === 0 && (
                  <p className="text-gray-500">{t("noCompletedTrips")}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {completedTripsData.map((trip) => (
                    <div
                      key={trip.id}
                      className="border border-purple-400 rounded-lg p-4 flex gap-4 shadow-sm cursor-pointer hover:shadow-md bg-purple-50 dark:bg-transparent"
                      onClick={() => router.push(`/trips/${trip.id}`)}
                    >
                      <Image
                        src={trip.image}
                        alt={trip.name}
                        width={100}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-purple-700">
                          {trip.name}
                        </h3>
                        <p className="text-sm text-gray-500">{trip.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Goal Progress & Chart */}
            <section className="flex-1 space-y-6">
              <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                {t("goalProgress")}
              </h2>
              <GoalProgressChart data={chartData} />

              {/* Analytics Summary */}
              <div className="mt-6 border rounded-lg p-4 shadow-sm space-y-2">
                <h3 className="font-semibold text-lg">{t("tripsAnalytics")}</h3>
                <div className="flex justify-between">
                  <span>{t("remaining")}</span>
                  <span>{totalTrips - (totalStarted + totalCompleted)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("startedTripsLabel")}</span>
                  <span>{totalStarted}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("wishlistedTripsLabel")}</span>
                  <span>{totalWishlisted}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("completedTripsLabel")}</span>
                  <span>{totalCompleted}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </ProtectedRoute>
    </Suspense>
  );
}
