"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export default function MotivationCards() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-8">
      <div className="flex-1 bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-lg mb-2">{t("motivation.tipTitle")}</h3>
        <p>{t("motivation.tipText")}</p>
      </div>
      <div className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-lg mb-2">{t("motivation.challengeTitle")}</h3>
        <p>{t("motivation.challengeText")}</p>
      </div>
      <div className="flex-1 bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-lg mb-2">{t("motivation.motivationTitle")}</h3>
        <p>{t("motivation.motivationText")}</p>
      </div>
    </div>
  );
}
