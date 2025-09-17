"use client";

export default function MotivationCards() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-8">
      <div className="flex-1 bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-lg mb-2">Tip: Stay Consistent</h3>
        <p>Small daily progress adds up. Track your steps and celebrate milestones.</p>
      </div>
      <div className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-lg mb-2">Challenge: Push Limits</h3>
        <p>Try setting a higher target this week to see how far you can go!</p>
      </div>
      <div className="flex-1 bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-lg mb-2">Motivation: Visualize Success</h3>
        <p>Imagine yourself achieving your travel dreams. It keeps you focused and motivated.</p>
      </div>
    </div>
  );
}
