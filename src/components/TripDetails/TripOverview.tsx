/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export default function TripOverview({ trip }: any) {
  return (
    <section className="border shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Trip Overview</h2>
      <p className="leading-relaxed">{trip.description}</p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Duration:</strong> {trip.duration}</li>
        <li><strong>Location:</strong> {trip.location}</li>
        <li><strong>Activities:</strong> {trip.activities.join(", ")}</li>
        <li><strong>Recommended Gear:</strong> {trip.recommendedGear.join(", ")}</li>
        <li><strong>Best Travel Time:</strong> {trip.bestTravelTime}</li>
      </ul>
    </section>
  );
}
