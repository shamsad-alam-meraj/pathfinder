"use client";

import { GoalCircle } from "@/components/GoalProgress";
import { useGoalStore } from "@/store/useGoalStore";

export default function GoalsGrid() {
  const goals = useGoalStore((state) => state.goals);

  return (
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
  );
}
