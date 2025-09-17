"use client";

import { FiTarget, FiTrendingUp, FiGift } from "react-icons/fi";

interface HighlightsProps {
  totalGoals: number;
  totalProgress: number;
  overallPercent: number;
}

export default function Highlights({ totalGoals, totalProgress, overallPercent }: HighlightsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      <div className="flex-1 flex items-center gap-3 border shadow-md rounded-lg p-4">
        <FiTarget className="text-green-500 text-3xl" />
        <div>
          <p>Total Goals</p>
          <p className="text-xl font-bold">{totalGoals}</p>
        </div>
      </div>
      <div className="flex-1 flex items-center gap-3 border shadow-md rounded-lg p-4">
        <FiTrendingUp className="text-blue-500 text-3xl" />
        <div>
          <p>Overall Progress</p>
          <p className="text-xl font-bold">{overallPercent}%</p>
        </div>
      </div>
      <div className="flex-1 flex items-center gap-3 border shadow-md rounded-lg p-4">
        <FiGift className="text-yellow-500 text-3xl" />
        <div>
          <p>Total Steps Completed</p>
          <p className="text-xl font-bold">{totalProgress}</p>
        </div>
      </div>
    </div>
  );
}
