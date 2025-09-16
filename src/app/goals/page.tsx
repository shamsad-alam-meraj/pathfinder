"use client";

import { GoalCircle } from "@/components/GoalProgress";
import { Button } from "@/components/ui/button";
import { useGoalStore } from "@/store/useGoalStore";
import { useState } from "react";
import { FiTarget, FiTrendingUp, FiGift } from "react-icons/fi";

export default function GoalsPage() {
  const { goals, addGoal } = useGoalStore();
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState(1);
  const [progress, setProgress] = useState(0);

  const handleAddGoal = () => {
    if (!title) return;
    addGoal(title, target, progress);
    setTitle("");
    setTarget(1);
    setProgress(0);
  };

  const totalGoals = goals.length;
  const totalProgress = goals.reduce((acc, g) => acc + g.progress, 0);
  const totalTarget = goals.reduce((acc, g) => acc + g.target, 0);
  const overallPercent = totalTarget
    ? Math.round((totalProgress / totalTarget) * 100)
    : 0;

  return (
    <div className="space-y-8">
      {/* Top Motivational Banner */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-2">Achieve Your Travel Dreams!</h2>
        <p className="text-lg">
          Stay motivated and track your goals every step of the way.
        </p>
      </div>

      {/* Add New Goal Form */}
      <div className="border shadow-lg rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-4 items-end">
        {/* Title Input */}
        <div className="flex-1 flex flex-col">
          <label htmlFor="goalTitle" className="mb-2 font-medium">
            Goal Title
          </label>
          <input
            id="goalTitle"
            type="text"
            placeholder="Enter your goal..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        {/* Target Input */}
        <div className="flex-1 flex flex-col">
          <label htmlFor="goalTarget" className="mb-2 font-medium">
            Target
          </label>
          <input
            id="goalTarget"
            type="number"
            min={1}
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        {/* Progress Input  */}
        <div className="flex-1 flex flex-col">
          <label htmlFor="goalProgress" className="mb-2 font-medium">
            Progress
          </label>
          <input
            id="goalProgress"
            type="number"
            min={0}
            max={target}
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <Button
          onClick={handleAddGoal}
          className="mt-2 lg:mt-0 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-6 py-5.5 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Add Goal
        </Button>
      </div>

      {/* Mid Section Highlights (flex-row) */}
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex-1 flex items-center gap-3 border shadow-md rounded-lg p-4">
          <FiTarget className="text-green-500 text-3xl" />
          <div>
            <p className="">Total Goals</p>
            <p className="text-xl font-bold">{totalGoals}</p>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-3 border shadow-md rounded-lg p-4">
          <FiTrendingUp className="text-blue-500 text-3xl" />
          <div>
            <p className="">Overall Progress</p>
            <p className="text-xl font-bold">{overallPercent}%</p>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-3 border shadow-md rounded-lg p-4">
          <FiGift className="text-yellow-500 text-3xl" />
          <div>
            <p className="">Total Steps Completed</p>
            <p className="text-xl font-bold">{totalProgress}</p>
          </div>
        </div>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {goals.map((goal) => (
          <GoalCircle
            key={goal.id}
            title={goal.title}
            progress={goal.progress}
            target={goal.target}
          />
        ))}
      </div>

      {/* Bottom Motivation / Tips Section (flex-row) */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-lg mb-2">Tip: Stay Consistent</h3>
          <p>
            Small daily progress adds up. Track your steps and celebrate
            milestones.
          </p>
        </div>
        <div className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-lg mb-2">Challenge: Push Limits</h3>
          <p>
            Try setting a higher target this week to see how far you can go!
          </p>
        </div>
        <div className="flex-1 bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-lg mb-2">
            Motivation: Visualize Success
          </h3>
          <p>
            Imagine yourself achieving your travel dreams. It keeps you focused
            and motivated.
          </p>
        </div>
      </div>
    </div>
  );
}
