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
import { useTranslation } from "react-i18next";
import TripBanner from "@/components/Trip/TripBanner";

export default function TripList() {
  const { t } = useTranslation();
  const trips = useTripStore((state) => state.trips);

  const initialTrips = trips.slice(0, 12);
  const recentTrips = trips.slice(-6);

  type ChartData = { month: string; count: number };

  const chartData: ChartData[] = trips.reduce<ChartData[]>((acc, trip) => {
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
      <div className="px-5 md:px-10 space-y-10">
        <TripBanner />
        {/* Trips Grid */}
        <div>
          <h1 className="text-3xl font-bold mb-6">{t("recommendedTrips")}</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {initialTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
        {/* Recent Trips */}
        <div>
          <h1 className="text-3xl font-bold mb-6">{t("recentTrips")}</h1>
          <div className="flex gap-4 overflow-x-auto">
            {recentTrips.map((trip) => (
              <SmallTripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>

        {/* Trip Insights */}
        <div className="rounded-lg">
          <h1 className="text-3xl font-bold mb-6">{t("tripInsights")}</h1>
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
