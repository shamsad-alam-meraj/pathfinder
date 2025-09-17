"use client";

import ProtectedRoute from "@/components/Shared/ProtectedRoute";
import SmallTripCard from "@/components/Trip/SmallTripCard";
import TripCard from "@/components/Trip/TripCard";
import { useTripStore } from "@/store/useTripStore";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TripList() {
  const trips = useTripStore((state) => state.trips);

  const initialTrips = trips.slice(0, 12);
  const recentTrips = trips.slice(-6);

  type ChartData = { month: string; count: number };

  // Example chart data: trips per month
  const chartData: ChartData[] = trips.reduce<ChartData[]>((acc, trip) => {
    // Extract the month from the string, e.g., "Oct 1–10, 2025" -> "Oct"
    const monthMatch = trip.date.match(/^[A-Za-z]+/);
    if (!monthMatch) return acc;
    const month = monthMatch[0];

    const existing = acc.find((d) => d.month === month);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ month, count: 1 });
    }
    return acc;
  }, []);

  return (
    <ProtectedRoute>
      <div className="space-y-8">
        {/* Top Section */}
        <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-xl shadow-lg overflow-hidden">
          {/* Decorative SVG/Blob */}
          <svg
            className="absolute -top-10 -right-10 w-40 h-40 opacity-20"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M42.9,-74.2C55.1,-67.2,59.7,-51.5,63.1,-37.5C66.4,-23.5,68.5,-11.8,68.1,-0.7C67.6,10.4,64.6,20.8,60.8,31.3C57.1,41.9,52.5,52.6,43.7,61.2C34.9,69.8,21.8,76.3,8.1,73.2C-5.7,70.1,-11.3,57.4,-21.4,49.6C-31.5,41.8,-46.1,38.9,-54.5,30.4C-62.9,21.9,-65,7.8,-62.7,-5.1C-60.5,-18,-53.8,-29.6,-45.6,-39.5C-37.4,-49.5,-27.7,-57.9,-16.1,-64.4C-4.4,-70.9,9.1,-75.5,22.3,-75.4C35.5,-75.3,48.6,-70.3,42.9,-74.2Z"
              transform="translate(100 100)"
            />
          </svg>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Plan Your Next Adventure!
              </h2>
              <p className="text-white/90 text-lg md:text-xl">
                Explore your upcoming trips, track your travel goals, and
                discover new destinations.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition">
                Add New Trip
              </button>
            </div>
          </div>
        </div>

        {/* Trips Grid */}
        <div>
          <h1 className="text-3xl font-bold mb-6">Recommended Trips</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {initialTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>

        {/* Recent Trips */}
        <div>
          <h1 className="text-3xl font-bold mb-6">Recent Trips</h1>
          <div className="flex gap-4 overflow-x-auto">
            {recentTrips.map((trip) => (
              <SmallTripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>

        {/* Trip Insights */}
        <div className=" rounded-lg">
          <h1 className="text-3xl font-bold mb-6">Trip Insights</h1>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#4ade80" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
