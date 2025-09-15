"use client";

import { GoalCircle } from "@/components/GoalProgress";
import { Button } from "@/components/ui/button";
import { useGoalStore } from "@/store/useGoalStore";
import { useState } from "react";

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

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Your Travel Goals</h2>

      {/* Add New Goal */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="flex flex-col">
          <label htmlFor="goalTitle" className="mb-1 font-medium">
            Title
          </label>
          <input
            id="goalTitle"
            type="text"
            placeholder="Goal title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="goalTarget" className="mb-1 font-medium">
            Target
          </label>
          <input
            id="goalTarget"
            type="number"
            min={1}
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
            className="border rounded-lg px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="goalProgress" className="mb-1 font-medium">
            Progress
          </label>
          <input
            id="goalProgress"
            type="number"
            min={0}
            max={target}
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="border rounded-lg px-3 py-2"
          />
        </div>

        <Button onClick={handleAddGoal} className="h-10 self-start mt-7">
          Add Goal
        </Button>
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
    </div>
  );
}
