"use client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function GoalCircle({ title, progress, target }: { title: string; progress: number; target: number }) {
  const percentage = Math.min((progress / target) * 100, 100);

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-sm rounded-xl">
      <div className="w-24 h-24 mb-3">
        <CircularProgressbar
          value={percentage}
          text={`${progress}/${target}`}
          styles={buildStyles({
            textColor: "#1f2937",
            pathColor: "#3b82f6",
            trailColor: "#e5e7eb",
          })}
        />
      </div>
      <p className="font-medium text-gray-700">{title}</p>
    </div>
  );
}
