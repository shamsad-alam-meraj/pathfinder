"use client";

export default function TripHighlights({ activities }: { activities: string[] }) {
  return (
    <section className="border shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Trip Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activities.map((activity, index) => (
          <div key={index} className="border p-4 rounded shadow-sm">
            <h3 className="font-semibold">{activity}</h3>
            <p className="mt-1">Enjoy {activity.toLowerCase()} during this trip.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
