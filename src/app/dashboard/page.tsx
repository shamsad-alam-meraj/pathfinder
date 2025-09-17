"use client";

import { motion } from "framer-motion";
import { useTripStore } from "@/store/useTripStore";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoalProgressChart from "@/components/Dashboard/GoalProgressChart";
import ProtectedRoute from "@/components/Shared/ProtectedRoute";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const trips = useTripStore((state) => state.trips);
  const startedTrips = useTripStore((state) => state.startedTrips);
  const wishlist = useTripStore((state) => state.wishlist);

  // Analytics counts
  const totalTrips = trips.length;
  const totalStarted = startedTrips.length;
  const totalWishlisted = wishlist.length;

  const startedTripsData = trips.filter((t) => startedTrips.includes(t.id));
  const wishlistedTripsData = trips.filter((t) => wishlist.includes(t.id));

  const chartData = [
    { name: "Started", value: totalStarted, fill: "#4ade80" },
    { name: "Wishlisted", value: totalWishlisted, fill: "#facc15" },
    { name: "Remaining", value: totalTrips - totalStarted, fill: "#3b82f6" },
  ];

  return (
    <ProtectedRoute>
      <div className="px-5 md:px-10 space-y-10">
        {/* Hero / Header */}
        <motion.h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
          Plan your journeys, track your goals, explore smarter
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl md:text-3xl lg:text-4xl font-bold pt-6 pb-5"
        >
          Welcome back, John
        </motion.h3>

        {/* Left Column: Start Trip + Upcoming Trips */}
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          <div className="flex-1 space-y-6">
            <Button
              className="w-full text-lg md:text-xl text-blue-800 bg-blue-200 hover:bg-blue-100 font-semibold py-6 md:py-10 rounded-lg"
              onClick={() => router.push("/trips")}
            >
              Start Trip
            </Button>

            {/* Started Trips Section */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">Started Trips</h2>
              {startedTripsData.length === 0 && (
                <p className="text-yellow-500">No trips started yet.</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {startedTripsData.map((trip) => (
                  <div
                    key={trip.id}
                    className="border rounded-lg p-4 flex gap-4 shadow-sm cursor-pointer hover:shadow-md"
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

            {/* Wishlisted Trips Section */}
            <section className="space-y-4 mt-6">
              <h2 className="text-xl md:text-2xl font-semibold">Wishlisted Trips</h2>
              {wishlistedTripsData.length === 0 && (
                <p className="text-gray-500">No trips wishlisted yet.</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wishlistedTripsData.map((trip) => (
                  <div
                    key={trip.id}
                    className="border rounded-lg p-4 flex gap-4 shadow-sm cursor-pointer hover:shadow-md"
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
          </div>

          {/* Right Column: Goal Progress & Chart */}
          <section className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">Goal Progress</h2>
            <GoalProgressChart data={chartData} />

            {/* Analytics Summary */}
            <div className="mt-6 border rounded-lg p-4 shadow-sm space-y-2">
              <h3 className="font-semibold text-lg">Trips Analytics</h3>
              <div className="flex justify-between">
                <span>Total Trips:</span>
                <span>{totalTrips}</span>
              </div>
              <div className="flex justify-between">
                <span>Started Trips:</span>
                <span>{totalStarted}</span>
              </div>
              <div className="flex justify-between">
                <span>Wishlisted Trips:</span>
                <span>{totalWishlisted}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ProtectedRoute>
  );
}
