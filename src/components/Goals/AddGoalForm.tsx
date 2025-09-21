"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiPlus, FiTarget } from "react-icons/fi";
import { useGoalStore } from "@/store/useGoalStore";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export default function AddGoalForm() {
  const { addGoal } = useGoalStore();
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState(1);
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation();

  const handleAddGoal = () => {
    if (!title) return;
    addGoal(title, target, progress);
    setTitle("");
    setTarget(1);
    setProgress(0);
  };

  return (
    <div className="border shadow-lg rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center relative">
      {/* Left Side Inputs */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">{t("addGoal.titleLabel")}</label>
          <input
            type="text"
            placeholder={t("addGoal.titlePlaceholder")}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-semibold">{t("addGoal.targetLabel")}</label>
          <input
            type="number"
            min={1}
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-semibold">{t("addGoal.progressLabel")}</label>
          <input
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
          className="mt-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition transform flex items-center gap-2 justify-center"
        >
          <FiPlus size={20} /> {t("addGoal.button")}
        </Button>
      </div>

      {/* Right Side Big Icon */}
      <div className="hidden md:flex flex-1 justify-center items-center">
        <FiTarget className="text-green-400 text-[300px] opacity-100" />
      </div>
    </div>
  );
}
