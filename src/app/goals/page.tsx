"use client";

import ProtectedRoute from "@/components/Shared/ProtectedRoute";
import TopBanner from "@/components/Goals/TopBanner";
import AddGoalForm from "@/components/Goals/AddGoalForm";
import Highlights from "@/components/Goals/Highlights";
import GoalsGrid from "@/components/Goals/GoalsGrid";
import ItinerariesSection from "@/components/Goals/ItinerariesSection";
import MotivationCards from "@/components/Goals/MotivationCards";
import { useGoalStore } from "@/store/useGoalStore";

export default function GoalsPage() {
  const goals = useGoalStore((state) => state.goals);
  const totalGoals = goals.length;
  const totalProgress = goals.reduce((acc, g) => acc + g.progress, 0);
  const totalTarget = goals.reduce((acc, g) => acc + g.target, 0);
  const overallPercent = totalTarget ? Math.round((totalProgress / totalTarget) * 100) : 0;

  return (
    <ProtectedRoute>
      <div className="px-5 md:px-10 space-y-10">
        <TopBanner />
        <AddGoalForm />
        <Highlights totalGoals={totalGoals} totalProgress={totalProgress} overallPercent={overallPercent} />
        <GoalsGrid />
        <ItinerariesSection />
        <MotivationCards />
      </div>
    </ProtectedRoute>
  );
}
