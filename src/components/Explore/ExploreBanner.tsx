"use client";
import { useTranslation } from "react-i18next";

export default function ExploreBanner() {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-xl shadow-lg text-center">
      <h1 className="text-4xl font-bold mb-2">{t("exploreBanner.title")}</h1>
      <p className="text-lg">{t("exploreBanner.subtitle")}</p>
    </div>
  );
}
