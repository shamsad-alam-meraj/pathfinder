"use client";

import { GoalCircle } from "@/components/GoalProgress";
import { useGoalStore } from "@/store/useGoalStore";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export default function GoalsGrid() {
  const goals = useGoalStore((state) => state.goals);
  const { t } = useTranslation();

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{t("goals2.title")}</h2>
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
